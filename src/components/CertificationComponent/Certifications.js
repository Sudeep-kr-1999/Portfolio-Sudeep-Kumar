import React from "react";
import "./certification.css";
import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import CarouselElements from "../CarouselElements/CarouselElements";
import Zoom from "react-reveal/Zoom";
function Certifications() {
  const carouselref = useRef();
  const carouselItemsDetails = [
    {
      heading: "Amcat Certification",
      organisation: "Aspiring Minds",
      duration: "April 2020",
      image: "Amcat",
      imageAlternateText: "Amcat Certificate",
    },
    {
      heading:
        "Summer Training In Backend Development Using MongDB, NodeJS and Express",
      organisation: "BoardInfinity",
      duration: "May 2021 - July 2021",
      image: "BoardInfinity",
      imageAlternateText: "Summer Trainining Board Infinity",
    },
    {
      heading: "Python Certificate From Coding Ninjas",
      organisation: "Coding Ninjas",
      duration: "March 2020 - June 2020",
      image: "BasicPython",
      imageAlternateText: "Basic Python Certificate",
    },
    {
      heading: "Global Environment Management Course",
      organisation: "Courseera",
      duration: "June 2020",
      image: "Courseera",
      imageAlternateText: "Environment Management Certificate Courseera",
    },
    {
      heading: "Data Structure and Algorithms Certificate",
      organisation: "Coding Ninjas",
      duration: "March 2020 - June 2020",
      image: "DsAlgorithms",
      imageAlternateText: "Ds Algorithm Certificate Coding Ninjas",
    },
    {
      heading: "Hackerrank Python Basic Certification",
      organisation: "HackerRank",
      duration: "August 2021",
      image: "HackerrankPythonBasic",
      imageAlternateText: "Hackerrank Python Basic Certification",
    },
    {
      heading: " AI and ML Workshop Megalith , IIT- Kharagpur ",
      organisation: "Megalith IIT-Kharagpur",
      duration: "July 2020",
      image: "IITkgp",
      imageAlternateText: "AI ML Workshop IIT-KGP",
    },
    {
      heading: "Certificate Of Participation at Snapture",
      organisation: "Aurora , LPU ",
      duration: "August 2021",
      image: "Snapture",
      imageAlternateText: "Snapture Photgraphy Event Certificate",
    },
  ];
  const lengthOfList = carouselItemsDetails.length;
  const [currentCarouselIndex, setcurrentCarouselIndex] = useState();
  const onChangeCarouselIndex = (comingObject, comingpageIndex) => {
    setcurrentCarouselIndex(comingpageIndex);
  };
  if (currentCarouselIndex === lengthOfList - 1) {
    setTimeout(() => {
      carouselref.current.goTo(0);
    }, 5000);
  }

  return (
    <div className="certification-container">
      <Zoom duration={2000}>
        <div className="certification-container-heading">CERTIFICATIONS</div>
        <div className="carousel-container">
          <Carousel
            ref={carouselref}
            onChange={onChangeCarouselIndex}
            enableAutoPlay={true}
            autoPlaySpeed={5000}
            enableMouseSwipe={true}
            enableSwipe={true}
            enableTilt={true}
            transitionMs={1000}
            initialActiveIndex={0}
          >
            {carouselItemsDetails.map((item, i) => (
              <CarouselElements 
                key={i}
                heading={item.heading}
                organisation={item.organisation}
                duration={item.duration}
                image={item.image}
                alternateText={item.imageAlternateText}
                style={
                  currentCarouselIndex === i
                    ? {
                        transform: "scale(1.01)",
                        transistion: "all 0.5s ease-in-out",
                      }
                    : null
                }
              />
            ))}
          </Carousel>
        </div>
      </Zoom>
    </div>
  );
}

export default Certifications;
