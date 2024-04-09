import Link from "next/link";
import styles from "./slider.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Slider({ title, images }) {
  const sliderBoxRef = useRef(null);
  const sliderRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [scrollbarPosition, setScrollbarPosition] = useState(0);

  function handleLeftBtn() {
    const box = sliderRef.current;
    const width = box.clientWidth / 1.073;

    box.scrollLeft -= width; 
  }

  function handleRightBtn() {
    const box = sliderRef.current;
    const width = box.clientWidth / 1.072;

    box.scrollLeft += width; 
  }

  function updateScrollbar() {
    const box = sliderRef.current;
    const ratio = box.clientWidth / box.scrollWidth;
    const newWidth = ratio * box.clientWidth;
    const newPosition = (box.scrollLeft / box.scrollWidth) * box.clientWidth;

    setScrollbarWidth(newWidth);
    setScrollbarPosition(newPosition);
  };

  useEffect(() => {
    const box = sliderRef.current;

    window.addEventListener('resize', updateScrollbar);
    
    updateScrollbar();

    const handleScroll = () => {
      setScrollPosition(box.scrollLeft);
      updateScrollbar();
    };

    box.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateScrollbar);
      box.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className={styles["slider-container"]}>
      <div>
        <div className={styles["slider-header"]}>
          <h2>{title}</h2> 
        </div>
        <div className={styles["slider"]} ref={sliderBoxRef}>
          <ul className={styles["slider-list"]} ref={sliderRef}>
            {images.map((image, index) => (
              <li key={index}>
                <span>
                  <Link href="#">
                    <img src={image} alt={`Image ${index}`}/>
                  </Link>
                </span>
              </li>
            ))}
          </ul>
          <button ref={leftButtonRef} onClick={() => {handleLeftBtn()}} className={`${styles["slider-arrow-left"]} ${scrollPosition === 0 ? styles.disabled : ''}`} disabled={scrollPosition === 0}>
            <span></span>
          </button>
          <button ref={rightButtonRef} onClick={() => { handleRightBtn(); }} className={`${styles["slider-arrow-right"]} ${scrollPosition === sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth ? styles.disabled : ''}`} disabled={scrollPosition === sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth}>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  )
}