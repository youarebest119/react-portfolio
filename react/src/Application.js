import { AnimatePresence } from "framer-motion";
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';
import AddRemoveElementAnimation from './components/pages/AddRemoveElementAnimation/AddRemoveElementAnimation';
import AnimatedButtons from './components/pages/AnimatedButtons/AnimatedButtons';
import AnimatedTable from './components/pages/AnimatedTable/AnimatedTable';
import AnimatedTabs from './components/pages/AnimatedTabs/AnimatedTabs';
import BannerTextAnimation from './components/pages/BannerTextAnimation/BannerTextAnimation';
import CounterAnimation from './components/pages/CounterAnimation/CounterAnimation';
import FramerModal from './components/pages/FramerModal/FramerModal';
import FramerMotionLearn from './components/pages/FramerMotionLearn/FramerMotionLearn';
import Home from './components/pages/Home/Home';
import ImageReveal from './components/pages/ImageReveal/ImageReveal';
import Magnetic from './components/pages/Magnetic/Magnetic';
import MakeProgressWhenInView from './components/pages/MakeProgressWhenInView/MakeProgressWhenInView';
import MaskCursor from './components/pages/MaskCursor/MaskCursor';
import OnScrollZoom from './components/pages/OnScrollZoom/OnScrollZoom';
import OpenListAnimation from './components/pages/OpenListAnimation/OpenListAnimation';
import ReactSelect from "./components/pages/ReactSelect/ReactSelect";
import RevealTextonView from './components/pages/RevealTextonView/RevealTextonView';
import Roadmap from './components/pages/Roadmap/Roadmap';
import Scroll from "./components/pages/Scroll/Scroll";
import ScrollProgress from './components/pages/ScrollProgress/ScrollProgress';
import ScrollTextWithScrolling from './components/pages/ScrollTextWithScrolling/ScrollTextWithScrolling';
import SplitVigletta from './components/pages/SplitVigletta/SplitVigletta';
import TeamSectionSlider from './components/pages/TeamSectionSlider/TeamSectionSlider';
import TextAnimations from './components/pages/TextAnimations/TextAnimations';
import WelcomePage from './components/pages/WelcomePage/WelcomePage';
import { ROUTES } from './utils/constants';
import Sidebar from "./components/pages/Sidebar/Sidebar";
import Parallax from "./components/pages/Parallax/Parallax";
import Cards from "./components/pages/Cards/Cards";
import Svg from "./components/pages/Svg/Svg";

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: ROUTES.REVEAL_IMAGES,
                    element: <ImageReveal />,
                },
                {
                    path: ROUTES.FRAMER_MODAL,
                    element: <FramerModal />,
                },
                {
                    path: ROUTES.SCROLL_PROGRESS,
                    element: <ScrollProgress />,
                },
                {
                    path: ROUTES.MAKE_PROGRESS_WHEN_IN_VIEW,
                    element: <MakeProgressWhenInView />,
                },
                {
                    path: ROUTES.REVEAL_TEXT_ON_VIEW,
                    element: <RevealTextonView />,
                },
                {
                    path: ROUTES.ANIMATED_BUTTONS,
                    element: <AnimatedButtons />,
                },
                {
                    path: ROUTES.SPLIT_VIGLETTA,
                    element: <SplitVigletta />,
                },
                {
                    path: ROUTES.MASK_CURSOR,
                    element: <MaskCursor />,
                },
                {
                    path: ROUTES.SCROLL_TEXT_WITH_SCROLLING,
                    element: <ScrollTextWithScrolling />,
                },
                {
                    path: ROUTES.WELCOME_PAGE,
                    element: <WelcomePage />,
                },
                {
                    path: ROUTES.ONSCROLL_ZOOM,
                    element: <OnScrollZoom />,
                },
                {
                    path: ROUTES.OPEN_LIST_ANIMATION,
                    element: <OpenListAnimation />,
                },
                {
                    path: ROUTES.FRAMER_MOTION,
                    element: <FramerMotionLearn />,
                },
                {
                    path: ROUTES.ADD_REMOVE_ELEMENT,
                    element: <AddRemoveElementAnimation />,
                },
                {
                    path: ROUTES.ANIMATED_TABLE,
                    element: <AnimatedTable />,
                },
                {
                    path: ROUTES.ANIMATED_ROADMAP,
                    element: <Roadmap />,
                },
                {
                    path: ROUTES.MAGNETIC,
                    element: <Magnetic />,
                },
                {
                    path: ROUTES.TEXTANIMATION,
                    element: <TextAnimations />,
                },
                {
                    path: ROUTES.TEAM_SECTION_SLIDER,
                    element: <TeamSectionSlider />,
                },
                {
                    path: ROUTES.BANNER_TEXT_ANIMATION,
                    element: <BannerTextAnimation />
                },
                {
                    path: ROUTES.ANIMATED_TABS,
                    element: <AnimatedTabs />
                },
                {
                    path: ROUTES.SPLIT_VIGLETTA,
                    element: <SplitVigletta />,
                },
                {
                    path: ROUTES.MASK_CURSOR,
                    element: <MaskCursor />,
                },
                {
                    path: ROUTES.SCROLL_TEXT_WITH_SCROLLING,
                    element: <ScrollTextWithScrolling />,
                },
                {
                    path: ROUTES.WELCOME_PAGE,
                    element: <WelcomePage />,
                },
                {
                    path: ROUTES.ONSCROLL_ZOOM,
                    element: <OnScrollZoom />,
                },
                {
                    path: ROUTES.OPEN_LIST_ANIMATION,
                    element: <OpenListAnimation />,
                },
                {
                    path: ROUTES.FRAMER_MOTION,
                    element: <FramerMotionLearn />,
                },
                {
                    path: ROUTES.ADD_REMOVE_ELEMENT,
                    element: <AddRemoveElementAnimation />,
                },
                {
                    path: ROUTES.ANIMATED_TABLE,
                    element: <AnimatedTable />,
                },
                {
                    path: ROUTES.ANIMATED_ROADMAP,
                    element: <Roadmap />,
                },
                {
                    path: ROUTES.MAGNETIC,
                    element: <Magnetic />,
                },
                {
                    path: ROUTES.TEXTANIMATION,
                    element: <TextAnimations />,
                },
                {
                    path: ROUTES.TEAM_SECTION_SLIDER,
                    element: <TeamSectionSlider />,
                },
                {
                    path: ROUTES.COUNTER_ANIMATION,
                    element: <CounterAnimation />,
                },
                {
                    path: ROUTES.REACT_SELECT,
                    element: <ReactSelect />,
                },
                {
                    path: ROUTES.SCROLL,
                    element: <Scroll />,
                },
                {
                    path: ROUTES.SIDEBAR,
                    element: <Sidebar />,
                },
                {
                    path: ROUTES.PARALLAX,
                    element: <Parallax />,
                },
                {
                    path: ROUTES.CARDS,
                    element: <Cards />,
                },
                {
                    path: ROUTES.SVG,
                    element: <Svg />,
                },
            ],
        },
    ]);

    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                <RouterProvider router={router} />
            </AnimatePresence>
        </>
    )
}

export default Application
