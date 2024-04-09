import React, { useState, useRef, useEffect } from 'react';
import styles from './carousel.module.css';

const images = [
  "./carousel_imgs/img_banner.jpg",
  "./carousel_imgs/img_banner1.jpg",
  "./carousel_imgs/img_banner2.jpg",
  "./carousel_imgs/img_banner3.jpg",
  "./carousel_imgs/img_banner4.jpg",
  "./carousel_imgs/img_banner5.jpg",
  "./carousel_imgs/img_banner6.jpg",
  "./carousel_imgs/img_banner7.jpg",
  "./carousel_imgs/img_banner8.jpg",
];

export default function Carousel() {
  const [direction, setDirection] = useState(-1);
  const sliderRef = useRef(null);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  function handlePrevClick() {
    if (direction === -1) {
      sliderRef.current.appendChild(sliderRef.current.firstElementChild);
      setDirection(1);
    }
    carouselRef.current.style.justifyContent = 'flex-end';
    if (width < 1500) {
      sliderRef.current.style.transform = `translate(${width}px)`;
    } else {
      sliderRef.current.style.transform = 'translate(1500px)';
    }
  };

  function handleNextClick() {
    if (direction === 1) {
      sliderRef.current.prepend(sliderRef.current.lastElementChild);
      setDirection(-1);
    }
    carouselRef.current.style.justifyContent = 'flex-start';
    if (width < 1500) {
      sliderRef.current.style.transform = `translate(${-width}px)`;
    } else {
      sliderRef.current.style.transform = 'translate(-1500px)';
    }
  };

  function handleTransitionEnd() {
    if (direction === -1) {
      sliderRef.current.appendChild(sliderRef.current.firstElementChild);
    } else if (direction === 1) {
      sliderRef.current.prepend(sliderRef.current.lastElementChild);
    }

    sliderRef.current.style.transition = 'none';
    sliderRef.current.style.transform = 'translate(0)';
    setTimeout(() => {
      sliderRef.current.style.transition = 'all 250ms ease-out 0s';
    });
  };

  function handleResize() {
    sliderRef.current.style.transition = 'none';
  
    setWidth(window.innerWidth);
  
    if (direction === -1) {
      sliderRef.current.style.transform = 'translate(0)';
    } else {
      sliderRef.current.prepend(sliderRef.current.lastElementChild);
      setDirection(-1);
      sliderRef.current.style.transform = 'translate(0)';
    }
  
    setTimeout(() => {
      sliderRef.current.style.transition = 'all 250ms ease-out 0s';
    }, 10);
  };
  
  useEffect(() => {
    setWidth(window.innerWidth);
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting) {
        handleNextClick();
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, [handleNextClick]);

  return (
      <div className={styles.banner}>
        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles["carousel-left-btn"]}>
            <button onClick={() => { handlePrevClick(); setIsUserInteracting(true); }}>
              <i></i>
            </button>
          </div>
          <ol ref={sliderRef} className={styles.slider} onTransitionEnd={handleTransitionEnd}>
            {images.map((image, index) => (
              <li key={index} style={{width: width < 1500 ? `${width}px` : `1500px`}}>
                <img width={width} height="600" src={image} alt={`Image ${index}`} style={{width: width < 1500 ? `${width}px` : `1500px`}}/>
              </li>
            ))}
          </ol>
          <div className={styles["carousel-right-btn"]}>
            <button onClick={() => { handleNextClick(); setIsUserInteracting(true); }}>
              <i></i>
            </button>
          </div>
        </div>
      </div>
  );
};