import { Toaster } from 'react-hot-toast'
import Application from './Application'
import gsap from 'gsap'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import { Flip } from 'gsap-trial/all'
import SplitText from 'gsap-trial/SplitText';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, Flip);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 1.5,
      speed: 1,
      effects: true,
    })
  })
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Toaster />
          <Application />
        </div>
      </div>
    </>
  )
}

export default App
