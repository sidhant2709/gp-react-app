import { Button } from "@mui/material";
import MainMenu from "./MainMenu";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import "./LeadsData.css";

const LeadsData = () => {
  return (
    <div className="leads-data-1">
      <MainMenu />
      <div className="desktop-4-wrapper">
        <div className="desktop-4">
          <Button
            className="desktop-4-child"
            startIcon={
              <img
                width="24px"
                height="24px"
                src="/heroiconsarrowup16solid.png"
                alt=""
              />
            }
            disableElevation={true}
            variant="h2"
            sx={{
              textTransform: "none",
              color: "#005f6b",
              fontSize: "24px",
              background: "#fff",
              border: "#005f6b solid 1px",
              borderRadius: "0px 20px 0px 20px",
              "&:hover": { background: "#fff" },
              height: 86,
              fontWeight: 600,
              fontFamily: "Montserrat",
            }}
          >
            Leads Data
          </Button>
          <div className="desktop-4-inner">
            <div className="frame-parent">
              <div className="frame-group">
                <div className="riteam-line-wrapper">
                  <img
                    className="riteam-line-icon"
                    loading="lazy"
                    alt=""
                    src="/riteamline.svg"
                  />
                </div>
                <div className="nurses">Nurses</div>
              </div>
              <div className="frame-container">
                <div className="riteam-line-container">
                  <img
                    className="riteam-line-icon1"
                    alt=""
                    src="/riteamline.svg"
                  />
                </div>
                <div className="school-teachers">School Teachers</div>
              </div>
              <div className="frame-div">
                <div className="riteam-line-frame">
                  <img
                    className="riteam-line-icon2"
                    loading="lazy"
                    alt=""
                    src="/riteamline.svg"
                  />
                </div>
                <div className="lecturers">Lecturers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="leads-data-1-inner">
        <div className="frame-parent1">
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default LeadsData;
