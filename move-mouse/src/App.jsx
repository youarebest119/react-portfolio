import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import React from 'react';
// import Homepage from './pages/Homepage/Homepage';
import MouseMove from './pages/MouseMove/MouseMove';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <MouseMove />
    </>
  );
}

export default App;
