import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import Intro from './Intro/Intro';
import Faq from './Faq/Faq';

const Application = () => {
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const context = gsap.context(() => {
      let tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
        },
      });
      setTimeline(tl);
    })
    return () => context.revert();
  }, [])
  return (
    <>
      {
        isLoading ?
          <Intro timeline={timeline} />
          :
          <>
            <Faq />
          </>
      }
    </>
  )
}

export default Application;