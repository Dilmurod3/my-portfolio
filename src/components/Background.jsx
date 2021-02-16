import React, { useEffect, useState } from "react";
import "./Background.css";
import "./Animations.css";
import GoRight from "./GoRight";
import About from "../mainpages/About";
import Projects from "../mainpages/Projects";
import Contact from "../mainpages/Contact";
import GoLeft from "../components/GoLeft";

function Background() {
  const [prevPage, setPrevPage] = useState();
  const [location, setLocation] = useState("/");
  const [nextLocation, setNextLocation] = useState();
  const [prevLocation, setPrevLocation] = useState();
  const [goRightClicked, setGoRightClicked] = useState(false);
  const [goLeftClicked, setGoLeftClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    <SharedComponent pathname={window.location.pathname} />
  );
  const changeBackgroundColor = () => {
    if (location === "/") {
      return "HomePageColor AnimatePageColor";
    }
    if (location === "/projects") {
      return "ProjectsPageColor AnimatePageColor";
    }
    if (location === "/contact") {
      return "ContactPageColor AnimatePageColor";
    }
  };
  const getCircle1Animation = () => {
    if (location === "/projects") {
      return "Circle1__Right__To__Left";
    } else if (location === "/") {
      return "Circle1__Left__To__Right";
    } else if (location === "/contact") {
      return "Circle1__Left__To__Right";
    }
  };
  const getCircle2Animation = () => {
    if (location === "/projects") {
      return "Circle2__Left__To__Right";
    } else if (location === "/") {
      return "Circle2__Right__To__Left";
    } else if (location === "/contact") {
      return "Circle2__Right__To__Left";
    }
  };

  const addLocation = () => {
    setLocation(window.location.pathname);
  };

  const removePrev = (animateLocation, controlledLocation) => {
    setTimeout(() => {
      setCurrentPage(
        <SharedComponent
          pathname={controlledLocation}
          pageStatus={"current"}
          buttonClicked={animateLocation}
        />
      );
    }, 100);
    setTimeout(() => {
      setGoRightClicked(false);
      setGoLeftClicked(false);
    }, 2000);
  };

  useEffect(() => {
    addLocation();
    ChangeNextLocation();
  });

  const handleGoRightClicked = () => {
    setGoRightClicked(true);
    setPrevPage(
      <SharedComponent
        pathname={location}
        pageStatus={"prev"}
        buttonClicked={"right"}
      />
    );
    setCurrentPage();
    removePrev("right", nextLocation);
  };
  const ChangeNextLocation = () => {
    if (location === "/") {
      setNextLocation("/projects");
      return;
    }
    if (location === "/projects") {
      setNextLocation("/contact");
      setPrevLocation("/");
      return;
    }
    if (location === "/contact") {
      setPrevLocation("/projects");
      return;
    }
  };

  const handleGoLeftClicked = () => {
    setGoLeftClicked(true);
    setPrevPage(
      <SharedComponent
        pathname={location}
        pageStatus={"prev"}
        buttonClicked={"left"}
      />
    );
    setCurrentPage();
    removePrev("left", prevLocation);
  };

  return (
    <div className={"Background " + changeBackgroundColor()}>
      <div className={"Circle1 " + getCircle1Animation()}></div>
      <div className={"Circle2 " + getCircle2Animation()}></div>
      <div className="Main">
        {location != "/" && (
          <GoLeft
            pathname={prevLocation}
            handleGoLeftClicked={handleGoLeftClicked}
          />
        )}
        {goRightClicked && prevPage}
        {currentPage}
        {goLeftClicked && prevPage}
        {location != "/contact" && (
          <GoRight
            pathname={nextLocation}
            handleGoRightClicked={handleGoRightClicked}
          />
        )}
      </div>
    </div>
  );
}

export default Background;

const SharedComponent = ({ pathname, pageStatus, buttonClicked }) => {
  const getCurrentPage = () => {
    if (pathname === "/") {
      return <About />;
    }
    if (pathname === "/projects") {
      return <Projects />;
    }
    if (pathname === "/contact") {
      return <Contact />;
    }
  };

  const GetCardAnimations = () => {
    if (pageStatus === "current") {
      if (buttonClicked === "right") {
        return "AnimateCurrentCard__Right__To__Left";
      }
      if (buttonClicked === "left") {
        return "AnimateCurrentCard__Left__To__Right";
      }
    }
    if (pageStatus === "prev") {
      if (buttonClicked === "right") {
        return "AnimatePrevCard__Right__To__Left";
      }
      if (buttonClicked === "left") {
        return "AnimatePrevCard__Left__To__Right";
      }
    }
  };
  return (
    <div className={"SharedComponent " + GetCardAnimations()}>
      {getCurrentPage()}
    </div>
  );
};
