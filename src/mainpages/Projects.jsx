import React, { useState, useCallback } from "react";
import "./Projects.css";
import Modal from "react-modal";
import ImageViewer from "react-simple-image-viewer";

// Project images
import qadaa from "../assets/projects-images/Qadaa.png";
import aboutFruits from "../assets/projects-images/About fruits.png";
import gameDashboard from "../assets/projects-images/Game dashboard.png";
import neumorphicDesign from "../assets/projects-images/Neumorphism.png";
import foodRecipes from "../assets/projects-images/Food recipes.png";

//Modal images
import ModalCloseIcon from "../assets/ModalCloseIcon.svg";
import GooglePlay from "../assets/projects-images/project-modal-images/GooglePlay.svg";
import ViewOnFigma from "../assets/projects-images/project-modal-images/ViewOnFigma.svg";

// Qadaa
import language from "../assets/projects-images/project-modal-images/qadaa/language.png";
import chooseCalculateMode from "../assets/projects-images/project-modal-images/qadaa/chooseCalculateMode.png";
import fillFormMale from "../assets/projects-images/project-modal-images/qadaa/fillFormMale.png";
import calculateByDateFemale from "../assets/projects-images/project-modal-images/qadaa/calculateByDateFemale.png";
import home from "../assets/projects-images/project-modal-images/qadaa/home.png";
import settings from "../assets/projects-images/project-modal-images/qadaa/settings.png";
import chooseLanguage from "../assets/projects-images/project-modal-images/qadaa/chooseLanguage.png";
import aboutUs from "../assets/projects-images/project-modal-images/qadaa/aboutUs.png";

// About fruits
import apple from "../assets/projects-images/project-modal-images/about-fruits/Apple-min.png";
import strawberry from "../assets/projects-images/project-modal-images/about-fruits/Strawberry-min.png";
import pear from "../assets/projects-images/project-modal-images/about-fruits/Pear-min.png";
import grape from "../assets/projects-images/project-modal-images/about-fruits/Grapes-min.png";

// Game Dashboard
import gameHome from "../assets/projects-images/project-modal-images/game-dashboard/game-home.png";
import gameFriends from "../assets/projects-images/project-modal-images/game-dashboard/game-friends.png";
import gameGame from "../assets/projects-images/project-modal-images/game-dashboard/game-game.png";

// Neumorphic Design
import neuClock from "../assets/projects-images/project-modal-images/neumorphic-design/Clock.png";
import neuPhone from "../assets/projects-images/project-modal-images/neumorphic-design/Phone.png";
import neuMusic from "../assets/projects-images/project-modal-images/neumorphic-design/Music.png";
import neuCalculator from "../assets/projects-images/project-modal-images/neumorphic-design/Calculator.png";

// Food recipes
import foodRecipesMainPage from "../assets/projects-images/project-modal-images/food-recipes/Main page.png";
import foodRecipesModal from "../assets/projects-images/project-modal-images/food-recipes/Recipe modal.png";

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
              calculateByDateFemale,
              home,
              settings,
              chooseLanguage,
              aboutUs,
            ],
            playStoreLink:
              "https://play.google.com/store/apps/details?id=com.qadaacalculatornative&ah=VW8AWXNKXo_FpWnAxkLo2-FtXsg",
            figmaLink:
              "https://www.figma.com/file/nErQiD4fgUF41NWff0o1VA/Qadaa-Calculator?node-id=557%3A1132",
          }}
        />
        <ProjectBoxes
          image={aboutFruits}
          modalProps={{
            title: "About Fruits",
            images: [apple, strawberry, pear, grape],
            googlePlay: { display: "none" },
            figmaLink:
              "https://www.figma.com/file/zh3QeuWOqKRBlxpF6wceEv/About-Fruits?node-id=0%3A1",
          }}
        />
        <ProjectBoxes
          image={gameDashboard}
          modalProps={{
            title: "Game Dashboard",
            images: [gameHome, gameFriends, gameGame],
            googlePlay: { display: "none" },
            figmaLink:
              "https://www.figma.com/file/GPXUB1aKyqlOL19pLjrxZb/Game-Dashboard",
          }}
        />
        <ProjectBoxes
          image={neumorphicDesign}
          modalProps={{
            title: "Neumorphic Design",
            applyPhoneStyle: true,
            images: [neuClock, neuPhone, neuMusic, neuCalculator],
            googlePlay: { display: "none" },
            figmaLink:
              "https://www.figma.com/file/bpng5WGSHYgu82IpRHY48S/Neumorphic-Design?node-id=0%3A1",
          }}
        />
        <ProjectBoxes
          image={foodRecipes}
          modalProps={{
            title: "Food recipes",
            images: [foodRecipesMainPage, foodRecipesModal],
            googlePlay: { display: "none" },
            figmaLink:
              "https://www.figma.com/file/oGY99e2JTfXP0CQ3YySrzj/Food-recipes?node-id=0%3A1",
          }}
        />
      </div>
    </div>
  );
}

export default Projects;

function ProjectBoxes({ image, color, modalProps }) {
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
