import styles from "./SocialMedia.module.scss";
import { AnimatePresence, animate, m, stagger, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CommentIcon, FacebookIconColored, InstagramIconColored, SaveIcon, ShareIcon, WhatsappIcn } from "../../../../assets/icons/icons";
import LikeButton from "./LikeBtn/LikeBtn";
import { socialMediaImage } from "../../../../assets/images/images";
import { SOCIAL_MEDIA } from "../../../../utils/constants";
import ConnectModal from "./ConnectModal/ConnectModal";


const SocialMediaCard = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const spring = {
        stiffness: 500,
        restDelta: 0.001,
        damping: 100,
    }
    const springYProgress = useSpring(scrollYProgress, spring);

    const scale = useTransform(springYProgress, [0, 0.8], [6, 1]);

    useMotionValueEvent(scale, "change", latestValue => {
        if (latestValue === 1) {
            setImg(socialMediaImage);
        } else {
            setImg("");
        }
    });

    useEffect(() => {
        if (show) {
            animate(
                "#share_list li",
                {
                    y: [100, 0]
                },
                {
                    delay: stagger(0.1),
                }
            );
        }
    }, [show])
    return (
        <>
            <section
                ref={ref}
                id="social-media"
                className={styles.social_media}
            >
                <div className={styles.in}>
                    <m.div style={{ scale }} className={styles.frame}>
                        <AnimatePresence mode="popLayout">
                            <m.img
                                className={styles.frame_img}
                                src={img}
                                key={img}
                                alt=""
                                initial={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                                animate={{
                                    filter: "brightness(1) blur(0px)",
                                }}
                                exit={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                            />
                        </AnimatePresence>
                        <div className={styles.frame_footer}>
                            <div>
                                <LikeButton />
                            </div>
                            <div>
                                <m.button
                                    onClick={() => setShowModal(true)}
                                    layoutId="contact-us"
                                >
                                    <CommentIcon />
                                </m.button>
                            </div>
                            <div className="position-relative">
                                {
                                    show &&
                                    <div className={styles.overlay} onClick={() => setShow(false)} />
                                }
                                <AnimatePresence>
                                    {
                                        show &&
                                        <m.ul
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            id="share_list"
                                            className={styles.share_list}>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to={SOCIAL_MEDIA.WHATSAPP}><WhatsappIcn /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to={SOCIAL_MEDIA.INSTAGRAM}><InstagramIconColored /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to={SOCIAL_MEDIA.FACEBOOK}><FacebookIconColored /></Link>
                                            </li>
                                        </m.ul>
                                    }
                                </AnimatePresence>
                                <button
                                    onClick={() => setShow(!show)}
                                    className={styles.share_btn}
                                >
                                    <ShareIcon />
                                </button>
                            </div>
                            <div className="ms-auto">
                                <button onClick={() => toast.success("post saved")}>
                                    <SaveIcon />
                                </button>
                            </div>
                        </div>
                    </m.div>
                    <h2 className={styles.title}>Public Profile</h2>
                </div>
            </section>
            <AnimatePresence>
                {
                    showModal &&
                    <ConnectModal
                        handleClose={() => setShowModal(false)}
                    />
                }
            </AnimatePresence>
        </>
    )
}

export default SocialMediaCard
