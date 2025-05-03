import { Toaster } from 'react-hot-toast'
import Application from './Application'
import { useGSAP } from '@gsap/react'
// import { useEffect } from 'react'
// import Lenis from 'lenis'
// import "lenis/dist/lenis.css"
function App() {
    // useEffect(() => {
    //     new Lenis({
    //         smoothWheel: true,
    //         syncTouch: true,
    //         lerp: 0.1,
    //         autoRaf: true,
    //         autoResize: true,
    //     })
    // // })
    return (
        <>
            <Toaster />
            <Application />
        </>
    )
}

export default App
