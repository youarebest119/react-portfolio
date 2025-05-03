import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';
import Application from './Application';
import Cursor from './components/common/Cursor/Cursor';
import { motion } from "framer-motion";
function App() {
	const [active, setActive] = useState(false);
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf);
	}, [])
	return (
		<>
			<div onClick={() => setActive(!active)} data-active={active} className={"show_cursor_btn"}>
				<motion.span layout transition={{ type: "spring", stiffness: 200, duration: 0.2, }}></motion.span>
			</div>
			{active && <Cursor />}
			<Application />
		</>
	);
}

export default App;
