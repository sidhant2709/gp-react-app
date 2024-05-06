import { useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const onProjectTitleContainerClick = useCallback(() => {
    // Please sync "Leads data - 2" to the project
  }, []);

  return (
    <div className="projects-parent">
      <div className="projects">Projects</div>
      <div className="project-card-parent">
        <div className="project-card">
          <div className="project-title" onClick={onProjectTitleContainerClick}>
            <div className="project-1">
              <div className="project-11">Project 1</div>
            </div>
            <div className="child-project" />
          </div>
        </div>
        <div className="project-2-wrapper">
          <div className="project-2">Project 2</div>
        </div>
        <div className="line-parent">
          <div className="frame-child5" />
          <div className="project-3-wrapper">
            <div className="project-3">Project 3</div>
          </div>
        </div>
        <div className="frame-child6" />
        <div className="parent-project-parent">
          <div className="parent-project">
            <div className="project-4-wrapper">
              <div className="project-4">Project 4</div>
            </div>
            <div className="line-group">
              <div className="frame-child7" />
              <input
                className="admin-label"
                placeholder="Project 5"
                type="text"
              />
            </div>
            <div className="search-input" />
          </div>
          <div className="add-button">
            <div className="projects-container">
              <div className="project-6">Project 6</div>
            </div>
            <div className="project-card-header">
              <div className="project-card-header-child" />
              <div className="project-7-wrapper">
                <div className="project-7">Project 7</div>
              </div>
            </div>
            <div className="add-button-child" />
            <div className="projects-container1">
              <div className="project-8">Project 8</div>
            </div>
            <div className="add-button-inner">
              <div className="frame-child8" />
            </div>
            <div className="parent-project-container">
              <div className="projects-cards-parent">
                <div className="projects-cards">
                  <img
                    className="iconamoonarrow-up-2-bold"
                    loading="lazy"
                    alt=""
                    src="/iconamoonarrowup2bold@2x.png"
                  />
                </div>
                <div className="projects-cards1">
                  <div className="div">1</div>
                </div>
                <div className="projects-cards2">
                  <div className="div1">2</div>
                </div>
                <div className="projects-cards3">
                  <img
                    className="iconamoonarrow-up-2-bold1"
                    loading="lazy"
                    alt=""
                    src="/iconamoonarrowup2bold-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
