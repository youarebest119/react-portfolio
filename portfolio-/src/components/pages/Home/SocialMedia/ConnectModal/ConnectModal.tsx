import { m } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import styles from "./ConnectModal.module.scss";
import { CommentIcon } from "../../../../../assets/icons/icons";


interface propTypes {
    show?: boolean,
    handleClose?: () => void,
}
const ConnectModal = (props: propTypes) => {
    return (
        <>
            <m.div
                className={styles.modal}
                initial={{
                    opacity: 0,
                }}
                exit={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            >
                <m.div
                    className={styles.modal_content}
                >
                    <button onClick={props.handleClose} className={styles.close_btn}>Close</button>
                    <form onSubmit={e => { e.preventDefault(); toast.success("Form Submitted"); props.handleClose && props.handleClose() }}>
                        <Row>
                            <Col md={12}>
                                <div className={styles.input}>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" placeholder="Enter you name" />
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.input}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" placeholder="Message" />
                                </div>
                            </Col>
                        </Row>
                    </form>
                </m.div>
                <div className={styles.modal_overlay} onClick={props.handleClose} />
            </m.div>
        </>
    )
}

export default ConnectModal
