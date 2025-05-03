import { useEffect } from "react"
import Application from "./Application.tsx"
import Lenis from "@studio-freight/lenis"
import { Toaster } from "react-hot-toast";
import { LazyMotion } from "framer-motion"

export const lenis = new Lenis();

const loadFeatures = () => import("./utils/features").then(res => res.default)


function App() {
	useEffect(() => {
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return (
		<>
			<Toaster />
			<LazyMotion strict features={loadFeatures}>
				<Application />
			</LazyMotion>
		</>
	)
}

export default App
