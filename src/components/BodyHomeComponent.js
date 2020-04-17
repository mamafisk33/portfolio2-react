import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    id: 1,
    src: "/assets/images/im_10.jpg",
    altText: "Rowing in Class",
    caption: "Rowing machines can be fun when you row together.",
  },
  {
    id: 2,
    src: "/assets/images/img_3722.jpg",
    altText: "We can do hard things",
    caption: "Doing hard things makes us stronger.",
  },
  {
    id: 3,
    src: "/assets/images/img_3726.jpg",
    altText: "Workout Gear",
    caption:
      "A wide variety of Iron And Mortar shirts, jackets, and nutritional supplements are available",
  },
  {
    id: 4,
    src: "/assets/images/screencapture-mapquest.png",
    altText: "Mpp showing gym",
    caption:
      " We are easy to find, near 24th Avenue and Nob Hill Boulevard in Yakima, Washington. Stop in, say Hello!",
  },
  {
    id: 5,
    src: "/assets/images/ironmortar_0918-1142.jpg",
    altText: "Basic Barbells",
    caption:
      "Weights like barbells, and repetition are essential parts of a workout. But, we like to mix up the drills to keep it fun.",
  },
  {
    id: 6,
    src: "/assets/images/ironmortar_0918-1272.jpg",
    altText: "The gym is not stuff",
    caption:
      "The gym is open and airy, not dark and smelly. We have a bank of windows looking out so you never feel penned in by your workout, or overcrowded during a class. The sun streams in and it is a pleasant place to hang out.",
  },
  {
    id: 7,
    src: "/assets/images/ironmortargolden-0185.jfif",
    altText: "Serious Weightlifter",
    caption:
      "If you are a serious weightlifter, you are welcome here. We can help you train, and keep you safe. Competitions are fun, too!",
  },
  {
    id: 8,
    src: "/assets/images/mortarjan-1881.jpg",
    altText: "Challenge Yourself",
    caption:
      "Challenge yourself with something that looks easy and fun, but is surprisingly difficult, but still fun.",
  },
];

const GymCarousel = (props) => {
  /* thanks to for reactrap carousel example:  
    https://reactstrap.github.io/components/carousel/  */

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

function Home(props) {
  return (
    <div id="bodyHome" className="container-fluid">
      <div className="container">
        <div className="row row-content">
          <div className="col-md-8 mx-auto">
            <GymCarousel />
            {/*}              <a
                className="carousel-control-prev"
                href="#homeCarousel"
                role="button"
                data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#homeCarousel"
                role="button"
                data-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
              </a>
              <button className="btn btn-danger btn-sm" id="carouselButton">
                <i className="fa fa-pause"></i>
              </button>
  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
