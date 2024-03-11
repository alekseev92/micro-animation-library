// Importing dependencies from popular animation libraries
import { gsap } from 'gsap';
import anime from 'animejs';
import AOS from 'aos';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

// GSAP plugins registration
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, Draggable);

// This library's API exposes a few simple animations
export const animations = {
  fadeIn: (selector, duration = 1) => {
    gsap.to(selector, { duration, opacity: 1, ease: 'power2.inOut' });
  },
  slideInLeft: (selector, duration = 1) => {
    gsap.from(selector, { duration, x: -100, opacity: 0, ease: 'power3.out' });
  },
  zoomIn: (selector, duration = 1) => {
    anime({
      targets: selector,
      duration,
      scale: [0.5, 1],
      easing: 'easeInOutQuad',
      opacity: [0, 1],
    });
  },
  rotate: (selector, duration = 1000) => {
    anime({
      targets: selector,
      duration,
      rotate: '1turn',
      easing: 'easeInOutSine',
    });
  },
  onScrollFadeIn: (selector) => {
    AOS.init({
      target: document.querySelector(selector),
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  },
  draggable: (selector) => {
    Draggable.create(selector);
  },
};
