import { Container } from "react-bootstrap";
import { LIST_CONTENT } from "../../../../utils/constants";
import styles from "./Skills.module.scss";
import Text from "./Text/Text";

const Skills = () => {
    return (
        <>
            <section id="skills" className={styles.skills}>
                <Container>
                    <div className={styles.row}>
                        <div className={styles.col_left}>
                            <h2>Skills</h2>
                        </div>
                        <div className={styles.col_right}>
                            <ul>
                                {
                                    LIST_CONTENT.SKILLS.map(item => (
                                        <Text key={item.title} item={item} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Skills
