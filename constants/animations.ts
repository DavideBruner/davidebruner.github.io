import { Transition } from "framer-motion";

type AnimationOptions = {
  transition: Transition,
  from?: any,
  to?: any,
  
};

export const fadeInFromBottom = ({ transition }: AnimationOptions): any => ({
  variants: {
    init: {
      opacity: 0,
      y: 50,
    },
    visible: { opacity: 1, y: 0 },
  },
  initial: "init",
  transition,
  viewport: { once: false },
  whileInView: "visible",
});

export const fadeInFromLeft = ({ transition }: AnimationOptions): any => ({
  variants: {
    init: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  initial: "init",
  transition,
  whileInView: "visible",
  viewport: { once: false },
});

export const fadeInFromRight = ({ transition }: AnimationOptions): any => ({
  variants: {
    init: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  initial: "init",
  transition,
  whileInView: "visible",
  viewport: { once: false },
});


export const fadeIn = ({ transition }: AnimationOptions): any => ({
  whileInView: {
    opacity: [0, 1], 
    transition,
  }
});

export const strechY = ({ transition }: AnimationOptions): any => ({
  variants: {
    init: {
      height: 0,
    },
    visible: { height: "100%" },
  },
  initial: "init",
  transition,
  viewport: { once: false },
  whileInView: "visible",
});

export const customStrechX = ({ transition, from, to }: AnimationOptions): any => ({
  variants: {
    init: {
      width: from ? from : "0",
    },
    visible: { width: to ? to : "100%" },
  },
  initial: "init",
  transition,
  viewport: { once: false },
  whileInView: "visible",
});