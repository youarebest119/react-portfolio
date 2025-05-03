import { Container } from "react-bootstrap";
import "./Awards.scss";
import TitleText from "../TitleText/TitleText";

const Awards = () => {
    return (
        <section className="awards_sec">
            <Container>
                <h2>
                    <TitleText>Awards</TitleText>
                </h2>
            </Container>
        </section>
    )
}

export default Awards
