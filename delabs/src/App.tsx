import Lenis from "lenis"
import { useEffect } from "react"
import Experience from "./Experience/Experience"

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <Experience />
    </>
  )
}

export default App
