"use client"
import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const isStringChildren = typeof children === 'string';
  const splitText = useMemo(() => {
    const text = isStringChildren ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isStringChildren]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(el, { transformOrigin: '0% 50%', rotate: baseRotation, opacity: baseOpacity }, {
      ease: 'none',
      rotate: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom',
        end: rotationEnd,
        scrub: true
      }
    });

    const wordElements = el.querySelectorAll('.word');
    const hasWords = wordElements.length > 0;

    if (hasWords) {
      gsap.fromTo(wordElements, { opacity: baseOpacity, willChange: 'opacity' }, {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      });

      if (enableBlur) {
        gsap.fromTo(wordElements, { filter: `blur(${blurStrength}px)` }, {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        });
      }
    } else if (enableBlur) {
      gsap.fromTo(el, { filter: `blur(${blurStrength}px)` }, {
        ease: 'none',
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      {isStringChildren ? (
        <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-normal font-semibold ${textClassName}`}>
          {splitText}
        </p>
      ) : (
        children
      )}
    </div>
  );
};

export default ScrollReveal;
