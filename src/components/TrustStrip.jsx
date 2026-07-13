export default function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Affiliations and credentials">
      <div className="container trust-strip-inner">
        <span className="trust-label">Affiliations</span>
        <span className="trust-divider" aria-hidden="true"></span>
        <div className="trust-logos">
          <span className="trust-logo">Texas A&amp;M University</span>
          <span className="trust-logo">Engineering Academies</span>
          <span className="trust-logo">CVS Health</span>
          <span className="trust-logo">PTCB · CPhT</span>
          <span className="trust-logo">Wharton Global</span>
          <span className="trust-logo">Anthropic AI</span>
        </div>
      </div>
    </div>
  );
}
