import gsap from 'gsap'
import Flip from 'gsap-trial/Flip'
import MorphSVGPlugin from 'gsap-trial/MorphSVGPlugin'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import SplitText from 'gsap-trial/SplitText'
import { Toaster } from 'react-hot-toast'
import Application from './Application'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip, SplitText, MorphSVGPlugin)
gsap.config({
  trialWarn: false,
})
function App() {
  return (
    <>
      <Toaster />
      <Application />
    </>
  )
}

export default App
