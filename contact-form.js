/**
 * Contact form — supports Formspree, Web3Forms, or Formsubmit (fallback).
 * Configure in site-config.js.
 */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var cfg = window.ZK_SITE || {};
    var email = cfg.contactEmail || cfg.formsubmitEmail || "zaidmajkhan@gmail.com";
    var linkedin = cfg.linkedinUrl || "https://linkedin.com/in/zaidmajkhan";
    var phone = cfg.phone || "";

    var mailtoSubject = encodeURIComponent("Internship inquiry — Zaid Khan");
    var mailtoBody = encodeURIComponent(
      "Hi Zaid,\n\nI'm reaching out about:\n\n[Role / team / timeline]\n\nBest,\n[Your name]"
    );
    var mailtoHref = "mailto:" + email + "?subject=" + mailtoSubject + "&body=" + mailtoBody;

    var mailtoLink = document.getElementById("contactMailto");
    if (mailtoLink) mailtoLink.href = mailtoHref;

    var linkedinCard = document.getElementById("contactLinkedinCard");
    if (linkedinCard) linkedinCard.href = linkedin;

    var successLinkedin = document.querySelector("#contactSuccess a[href*='linkedin']");
    if (successLinkedin) successLinkedin.href = linkedin;

    var phoneChip = document.getElementById("contactPhoneChip");
    if (phoneChip && phone) {
      phoneChip.href = "tel:" + phone.replace(/\D/g, "");
      phoneChip.textContent = phone;
      phoneChip.hidden = false;
    }

    var copyBtn = document.getElementById("copyEmailBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var label = copyBtn.querySelector(".copy-label");
        function done() {
          if (label) label.textContent = "Copied!";
          copyBtn.classList.add("copied");
          setTimeout(function () {
            if (label) label.textContent = "Copy email";
            copyBtn.classList.remove("copied");
          }, 2000);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(done).catch(fallback);
        } else {
          fallback();
        }
        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = email;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand("copy");
            done();
          } catch (e) {}
          document.body.removeChild(ta);
        }
        if (window.plausible) plausible("Copy Email");
      });
    }

    var form = document.getElementById("contactForm");
    var formWrap = document.getElementById("contactFormWrap");
    var successEl = document.getElementById("contactSuccess");
    if (!form) return;

    var topicInput = document.getElementById("contactType");
    document.querySelectorAll(".topic-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        document.querySelectorAll(".topic-pill").forEach(function (p) {
          p.classList.remove("active");
          p.setAttribute("aria-pressed", "false");
        });
        pill.classList.add("active");
        pill.setAttribute("aria-pressed", "true");
        if (topicInput) topicInput.value = pill.getAttribute("data-value");
      });
    });

    var messageField = document.getElementById("contactMessage");
    var charCount = document.getElementById("messageCharCount");
    if (messageField && charCount) {
      function updateCount() {
        var len = messageField.value.length;
        charCount.textContent = len + " / 1000";
        charCount.classList.toggle("near-limit", len > 900);
      }
      messageField.addEventListener("input", updateCount);
      updateCount();
    }

    function showSuccess() {
      if (formWrap) formWrap.hidden = true;
      if (successEl) successEl.hidden = false;
      if (window.plausible) plausible("Contact Form Success");
    }

    function getBackend() {
      if (cfg.formspreeEndpoint) return "formspree";
      if (cfg.web3formsAccessKey) return "web3forms";
      if (cfg.formsubmitEmail) return "formsubmit";
      return null;
    }

    var backend = getBackend();
    if (!backend) {
      var status = document.getElementById("formStatus");
      if (status) {
        status.textContent = "Use LinkedIn or email above — form backend not configured yet.";
      }
      form.querySelector(".form-submit").disabled = true;
      return;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = form.querySelector(".form-submit");
      var btnLabel = btn.querySelector(".btn-label");
      var btnSpinner = btn.querySelector(".btn-spinner");

      btn.disabled = true;
      btn.classList.add("loading");
      if (btnLabel) btnLabel.textContent = "Sending…";
      if (btnSpinner) btnSpinner.hidden = false;
      if (status) {
        status.textContent = "";
        status.className = "form-note muted small";
      }

      var data = Object.fromEntries(new FormData(form));
      var promise;

      if (backend === "formspree") {
        promise = fetch(cfg.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            inquiry_type: data.inquiry_type,
            message: data.message,
            _subject: "Portfolio: " + (data.inquiry_type || "inquiry") + " from " + data.name,
          }),
        });
      } else if (backend === "web3forms") {
        promise = fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: cfg.web3formsAccessKey,
            name: data.name,
            email: data.email,
            subject: "Portfolio: " + (data.inquiry_type || "inquiry") + " from " + data.name,
            message: data.message,
            inquiry_type: data.inquiry_type,
            from_name: "zaidmajkhan.github.io",
          }),
        });
      } else {
        promise = fetch(
          "https://formsubmit.co/ajax/" + encodeURIComponent(cfg.formsubmitEmail),
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              inquiry_type: data.inquiry_type,
              message: data.message,
              _subject: "New inquiry from zaidmajkhan.github.io",
              _captcha: "false",
            }),
          }
        );
      }

      promise
        .then(function (r) {
          if (!r.ok) throw new Error("fail");
          return r.json().catch(function () {
            return {};
          });
        })
        .then(function (res) {
          if (backend === "web3forms" && res.success === false) throw new Error("fail");
          showSuccess();
        })
        .catch(function () {
          if (status) {
            status.textContent =
              "Couldn't send — try LinkedIn or email " + email + " directly.";
            status.className = "form-note form-note--error small";
          }
        })
        .finally(function () {
          btn.disabled = false;
          btn.classList.remove("loading");
          if (btnLabel) btnLabel.textContent = "Send message";
          if (btnSpinner) btnSpinner.hidden = true;
        });
    });
  });
})();
