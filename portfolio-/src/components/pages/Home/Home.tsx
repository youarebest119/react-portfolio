import AboutMe from "./AboutMe/AboutMe"
import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import Portfolio from "./Portfolio/Portfolio"
import Skills from "./Skills/Skills"
import SocialMediaCard from "./SocialMedia/SocialMedia"
import Testimonials from "./Testimonials/Testimonials"

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <SocialMediaCard />
            <Portfolio />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
