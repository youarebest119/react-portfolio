import { Container } from "react-bootstrap"
import "./Header.scss";

const Header = () => {
    const navlinks = [
        { name: "Agency", },
        { name: "Services", },
        { name: "Projects", },
        { name: "Team", },
        { name: "Contact", },
    ];
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header_in">
                        <a href="/" className="header_logo">

                        </a>
                        <div className="header_nav">
                            <ul>
                                {
                                    navlinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a
                                                    href="/"
                                                    data-title={item.name}
                                                    className={item.name === "Agency" ? "active" : ""}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header
