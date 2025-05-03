import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import To from './components/pages/To/To';
import Timeline from './components/pages/Timeline/Timeline';
import SmoothScroll from './components/pages/SmoothScroll/SmoothScroll';
import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import TriggerOnScroll from './components/pages/TriggerOnScroll/TriggerOnScroll';
import Snapping from './components/pages/Snapping/Snapping';
import Flipping from './components/pages/Flipping/Flipping';
import Flip from 'gsap/Flip';
import FlipExample from './components/pages/FlipExample/FlipExample';
import TextAnimation1 from './components/pages/TextAnimation1/TextAnimation1';
import FlipExample2 from './components/pages/FlipExample2/FlipExample2';
import FlipExample3 from './components/pages/FlipExample3/FlipExample3';
import ToggleAction from './components/pages/ToggleAction/ToggleAction';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip)
gsap.config({ trialWarn: false })


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/to",
				element: <To />,
			},
			{
				path: "/timeline",
				element: <Timeline />,
			},
		],
	},
	{
		path: "/smooth-scroll",
		element: <SmoothScroll />,
	},
	{
		path: "/scroll-trigger",
		element: <TriggerOnScroll />,
	},
	{
		path: "/snapping",
		element: <Snapping />,
	},
	{
		path: "/flip",
		element: <Flipping />,
	},
	{
		path: "/flip-example",
		element: <FlipExample />,
	},
	{
		path: "/flip-example-2",
		element: <FlipExample2 />
	},
	{
		path: "/flip-example-3",
		element: <FlipExample3 />
	},
	{
		path: "/text-animation-one",
		element: <TextAnimation1 />,
	},
	{
		path: "/toggle-actions",
		element: <ToggleAction />,
	},
]);
const Application = () => {
	return (
		<>
			<RouterProvider
				router={router}
			/>
		</>
	)
}

export default Application
