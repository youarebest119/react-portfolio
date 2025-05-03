import { motion, MotionValue } from "framer-motion"

const Title = ({ y }: { y?: MotionValue }) => {
    return (
        <>
            <motion.h2
                style={{
                    y,
                }}
            >delabs</motion.h2>
        </>
    )
}

export default Title;