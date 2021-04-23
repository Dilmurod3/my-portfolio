import React, { useState, useCallback } from "react";
import "./Projects.css";
import Modal from "react-modal";
import ImageViewer from "react-simple-image-viewer";

// Project images
import qadaa from "../assets/projects-images/Qadaa.png";
import foodie from "../assets/projects-images/Foodie.png";
import gameDashboard from "../assets/projects-images/Game dashboard.png";
import covid from "../assets/projects-images/Covid.png";

//Modal images
import ModalCloseIcon from "../assets/ModalCloseIcon.svg";
import GooglePlay from "../assets/projects-images/project-modal-images/GooglePlay.svg";
import ViewOnFigma from "../assets/projects-images/project-modal-images/ViewOnFigma.svg";

// Qadaa
import language from "../assets/projects-images/project-modal-images/qadaa/language.png";
import chooseCalculateMode from "../assets/projects-images/project-modal-images/qadaa/chooseCalculateMode.png";
import fillFormMale from "../assets/projects-images/project-modal-images/qadaa/fillFormMale.png";
import home from "../assets/projects-images/project-modal-images/qadaa/home.png";
import settings from "../assets/projects-images/project-modal-images/qadaa/settings.png";

// Game Dashboard
import gameHome from "../assets/projects-images/project-modal-images/game-dashboard/game-home.png";
import gameFriends from "../assets/projects-images/project-modal-images/game-dashboard/game-friends.png";
import gameGame from "../assets/projects-images/project-modal-images/game-dashboard/game-game.png";

function Projects() {
  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="Projects">
        <ProjectBoxes
          image={qadaa}
          modalProps={{
            title: "Qadaa Calculator",
            applyPhoneStyle: true,
            images: [
              language,
              chooseCalculateMode,
              fillFormMale,
              home,
              settings,
            ],
            playStoreLink:
              "https://www.figma.com/file/nErQiD4fgUF41NWff0o1VA/Qadaa-Calculator?node-id=405%3A336",
            figmaLink:
              "https://www.figma.com/file/nErQiD4fgUF41NWff0o1VA/Qadaa-Calculator?node-id=405%3A336",
          }}
        />
        <ProjectBoxes
          image={gameDashboard}
          modalProps={{
            title: "Game Dashboard",
            images: [gameHome, gameFriends, gameGame],
            googlePlay: { display: "none" },
            figmaLink:
              "https://www.figma.com/proto/c0EXQakOUPvqECQZUgFTk5/Foods?node-id=102%3A3&viewport=77%2C126%2C0.1441030353307724&scaling=min-zoom",
          }}
        />
        {/* <ProjectBoxes
          link="https://www.figma.com/proto/c0EXQakOUPvqECQZUgFTk5/Foods?node-id=102%3A3&viewport=77%2C126%2C0.1441030353307724&scaling=min-zoom"
          image={foodie}
        />
     
        <ProjectBoxes
          link="https://dilmurod3.github.io/Corona-Virus-Stats/"
          image={covid}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#F2C94C" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#219653" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#2F80ED" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#BB6BD9" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#6FCF97" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#EB5757" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#777777" }}
        />
        <ProjectBoxes
          title={"Coming soon"}
          color={{ backgroundColor: "#56CCF2" }}
          modalProps={{
            title: "asdda",
            applyPhoneStyle: true,
            images: [covid, gameDashboard, foodie],
          }}
        /> */}
      </div>
    </div>
  );
}

export default Projects;

function ProjectBoxes({ title, image, color, modalProps }) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  return (
    <>
      <div
        className="Box"
        style={color}
        onClick={() => setShowModal(!showModal)}
      >
        <img src={image} width={"100%"} />
        <p>{title}</p>
      </div>
      <Modal
        className="modalBackground"
        isOpen={showModal}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modalBox">
          <img
            onClick={() => setShowModal(!showModal)}
            src={ModalCloseIcon}
            className="modalCloseIcon"
          />
          <div className="titleAndLinks">
            <p className="modalTitle">{modalProps.title}</p>
            <div className="links">
              <a
                style={modalProps.googlePlay}
                href={modalProps.playStoreLink}
                target="_blank"
              >
                <img className="googlePlayLink" src={GooglePlay} />
              </a>
              <a href={modalProps.figmaLink} target="_blank">
                <img className="figmaLink" src={ViewOnFigma} />
              </a>
            </div>
          </div>
          <div className="modalImageContainer">
            {modalProps.images.map((image, index) => (
              <img
                className={
                  modalProps.applyPhoneStyle
                    ? "modalPhoneImage"
                    : "modalDesktopImage"
                }
                src={image}
                key={index}
                onClick={() => openImageViewer(index)}
              />
            ))}
            {isViewerOpen && (
              <ImageViewer
                src={modalProps.images}
                currentIndex={currentImage}
                onClose={() => setIsViewerOpen(!isViewerOpen)}
              />
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
