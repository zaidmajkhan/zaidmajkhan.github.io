/** Site-wide URLs and third-party IDs — update when connecting services. */
const siteConfig = {
  url: "https://zaidmajkhan.github.io",
  plausibleDomain: "zaidmajkhan.github.io",
  resumeUrl: "/assets/zaid-khan-resume.pdf",
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
  /** Cal.com / Calendly intro call — leave blank to hide Book CTAs */
  calBookingUrl: "https://cal.com/zaid-khan/intro",
  githubUrl: "https://github.com/zaidmajkhan",
  twitterUrl: "https://x.com/zaidmajkhan",
  newsletterUrl: "https://buttondown.com/zaidkhan",
  linkedinUrl: "https://linkedin.com/in/zaidmajkhan",
  phone: "(469) 919-8378",
  blogUrl: "/blog/",
  /** Set when the todo app is deployed (Render, Railway, etc.) — never embed API keys in this static site */
  todoAppUrl: "",
  todoAppRepoUrl: "",
};

export default siteConfig;
