import Lenis from 'lenis'
import { Toaster } from 'react-hot-toast'
import Application from './Application'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import MotionPathHelper from 'gsap-trial/MotionPathHelper';
// import { MotionPathHelper } from 'gsap/MotionPathHelper';

// new Lenis({
//     autoRaf: true,
// });
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MotionPathHelper);

function App() {
    return (
        <>
            <Toaster />
            <Application />
        </>
    )
}

export default App
