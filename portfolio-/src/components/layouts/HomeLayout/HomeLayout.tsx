import { Outlet } from "react-router-dom"
import Header from "../../common/Header/Header"
import Footer from "../../common/Footer/Footer"
import styles from "./HomeLayout.module.scss";
import SocialMediaLinks from "../../common/SocialMediaLinks/SocialMediaLinks";

const HomeLayout = () => {
    return (
        <>
            <main className={styles.layout}>
                <Header />
                <SocialMediaLinks />
                <Outlet />
                <Footer />
            </main>
        </>
    )
}

export default HomeLayout
