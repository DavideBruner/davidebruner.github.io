// import React, { useState, useEffect, useRef } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

import { customStrechX, fadeIn, fadeInFromBottom, strechY } from '../../constants/animations';

export default function Intersection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const animation = fadeIn({ transition: { duration: 0.5, repeat: 10 } });

//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//     triggerOnce: false
//   });

//   console.log(entry);

  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

//   useEffect(() => {
//     console.log(coso.current.offsetTop);
//     if (
//       coso.current.offsetTop > scrollY &&
//       coso.current.offsetTop < window.innerHeight
//     ) {
//       setIsInViewport(true);
//     } else {
//       setIsInViewport(false);
//     }
//   }, [coso]);
//   useEffect(() => {
//     scrollY.onChange(v => console.log(v));
//   }, [scrollY]);

//   const variants = {
//     visible: { opacity: 1, scale: 1, y: 0 },
//     hidden: {
//       opacity: 0,
//       scale: 0.65,
//       y: 50
//     }
//   };

  return (
    <>
      {/* <motion.div className="box" style={{ y: y1, x: -50 }} />
      <motion.div
        className="box"
        style={{ y: y2, x: 50, background: 'salmon' }}
      />
      <div style={{ height: 500 }} />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {' '}
        {'is in view? ' + inView}
      </div> */}
      <motion.div
        // animate={inView ? 'visible' : 'hidden'}
        {...animation}
        style={{ backgroundColor: 'red' }} 
      />
        

    </>
  );
}
