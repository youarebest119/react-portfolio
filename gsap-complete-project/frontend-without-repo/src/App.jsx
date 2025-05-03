import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Application from './Application';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        new Lenis({
            autoRaf: true,
            smoothWheel: true,
            syncTouch: true,
            duration: 2,
            autoResize: true,
            lerp: 0.5,
        });
    }, [])
    return (
        <>
            <Toaster />
            <Application />
        </>
    )
}

export default App
