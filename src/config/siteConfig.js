/** Site-wide URLs and third-party IDs — update when connecting services. */
const siteConfig = {
  url: "https://zaidmajkhan.github.io",
  plausibleDomain: "zaidmajkhan.github.io",
  /** Place the PDF at public/assets/ with this exact filename before deploy. */
  resumeUrl: "/assets/Zaid Khan - Main Resume.pdf",
  resumeDownloadName: "Zaid Khan - Main Resume.pdf",
  contactEmail: "zaidmajkhan@gmail.com",
  /**
   * Contact form backend (pick one — first match wins):
   * 1. Formspree (recommended): sign up at formspree.io → New Form → paste endpoint below
   * 2. Web3Forms: web3forms.com → create access key → paste below
   * 3. Formsubmit (fallback): works now but requires email confirmation on first submit
   */
  formspreeEndpoint: "",
  web3formsAccessKey: "",
  formsubmitEmail: "zaidmajkhan@gmail.com",
  githubUrl: "https://github.com/zaidmajkhan",
  twitterUrl: "https://x.com/zaidmajkhan",
  newsletterUrl: "https://buttondown.com/zaidkhan",
  linkedinUrl: "https://linkedin.com/in/zaidmajkhan",
  phone: "(469) 919-8378",
};

export default siteConfig;
