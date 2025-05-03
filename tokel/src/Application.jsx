import React, { useEffect, useRef, useState } from 'react'
import Layout from './components/layouts/Layout/Layout'
import Hero from './components/page/Hero/Hero'
import InitialLoader from './components/common/InitialLoader/InitialLoader'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import AssetToken from './components/page/AssetToken/AssetToken'

const Application = () => {
  const [timeline, setTimeline] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    if (!isLoading)
      ScrollSmoother.create({
        content: "#smooth-content",
        wrapper: "#smooth-wrapper",
        smooth: 1.5,
        speed: 1,
        autoResize: true,
        smoothTouch: true,
        effects: true
      })
  }, { dependencies: [isLoading] })

  useEffect(() => {
    const context = gsap.context(() => {
      let tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
        },
        onUpdate: () => setProgress(tl.progress()),
      });
      setTimeline(tl);
    })
    return () => context.revert();
  }, [])
  return (
    <>
      {
        isLoading ?
          <InitialLoader progress={progress} timeline={timeline} />
          :
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <Layout>
                <Hero />
                <AssetToken />
              </Layout>
            </div>
          </div>
      }
    </>
  )
}

export default Application
