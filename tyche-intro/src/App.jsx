import { Toaster } from 'react-hot-toast'
import Application from './Application'
import gsap from 'gsap'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import Flip from 'gsap-trial/Flip'
import SplitText from 'gsap-trial/SplitText'
import MorphSVGPlugin from 'gsap-trial/MorphSVGPlugin'
import MotionPathPlugin from 'gsap-trial/MotionPathPlugin'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Svg from './Svg'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip, SplitText, MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin);
function App() {
  return (
    <>
      <Toaster />
      <Application />
    </>
  )
}

export default App
