import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent3">
      <div className="frame-parent4">
        <div className="nurses-wrapper">
          <h3 className="nurses1">Nurses</h3>
        </div>
        <div className="frame-parent5">
          <div className="tablersearch-wrapper">
            <img
              className="tablersearch-icon"
              loading="lazy"
              alt=""
              src="/tablersearch.svg"
            />
          </div>
          <div className="mdiplus-circle-outline-wrapper">
            <img
              className="mdiplus-circle-outline-icon"
              loading="lazy"
              alt=""
              src="/mdipluscircleoutline.svg"
            />
          </div>
          <div className="material-symbolsnotifications-wrapper">
            <img
              className="material-symbolsnotifications-icon"
              loading="lazy"
              alt=""
              src="/materialsymbolsnotificationsunreadoutlinesharp.svg"
            />
          </div>
          <div className="admin-wrapper">
            <div className="admin">Admin</div>
          </div>
          <img
            className="ellipse-icon"
            loading="lazy"
            alt=""
            src="/ellipse-18@2x.png"
          />
        </div>
      </div>
      <div className="frame-child4" />
    </div>
  );
};

export default FrameComponent1;
