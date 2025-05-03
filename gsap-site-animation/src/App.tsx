import gsap from 'gsap'
import Flip from 'gsap-trial/Flip'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import SplitText from 'gsap-trial/SplitText'
import { Toaster } from 'react-hot-toast'
import Application from './Application'
import { useGSAP } from '@gsap/react'
import MorphSVGPlugin from 'gsap-trial/MorphSVGPlugin'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, Flip, SplitText, MorphSVGPlugin);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 1.5,
      effects: true
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
