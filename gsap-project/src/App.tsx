import { Toaster } from 'react-hot-toast'
import Application from './Application'
import gsap from 'gsap'
import { Flip } from 'gsap-trial/all'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(Flip, ScrollSmoother, ScrollTrigger);
gsap.config({
  // @ts-ignore
  trialWarn: false,
})

function App() {
  const smoother = useRef<ScrollSmoother>();
  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smoothTouch: 0.3,
      autoResize: true,
    })
  })
  return (
    <>
      <Toaster />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Application />
        </div>
      </div>
    </>
  )
}

export default App
