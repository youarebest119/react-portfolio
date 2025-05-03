import About from "./components/About"
import BuyNow from "./components/BuyNow"
import CanvasContainer from "./components/CanvasContainer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

    return (
        <>
            <div className="h-screen w-full fixed top-0">
                <CanvasContainer />
            </div>
            <Header/>
            <Hero/>
            <About/>
            <BuyNow/>
        </>
    )
}

export default App
