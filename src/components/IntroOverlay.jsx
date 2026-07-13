export default function IntroOverlay({ countRef, barRef }) {
  return (
    <div className="intro-overlay" id="introOverlay" aria-hidden="true">
      <span className="intro-mark">ZK</span>
      <div className="intro-foot">
        <span className="intro-label">Zaid Khan — Portfolio</span>
        <span className="intro-count">
          <span id="introCount" ref={countRef}>
            0
          </span>
          <i>%</i>
        </span>
      </div>
      <div className="intro-bar">
        <span id="introBar" ref={barRef}></span>
      </div>
    </div>
  );
}
