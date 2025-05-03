
import styles from "./LikeBtn.module.scss";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { likeAnimation } from "../../../../../assets/animations/animations";
import { HeartIcon } from "../../../../../assets/icons/icons";

const LikeButton = () => {
    const [start, setStart] = useState(false);
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    }
    useEffect(() => {
        if (liked) {
            setStart(true);
            setTimeout(() => {
                setStart(false);
            }, 1000);
        }
    }, [liked])
    return (
        <>
            <button onClick={handleClick} disabled={start} className={styles.like_btn}>
                {
                    start &&
                    <Lottie className={styles.animation} animationData={likeAnimation} loop={true} />
                }
                <HeartIcon active={liked} />
            </button>
        </>
    )
}

export default LikeButton

