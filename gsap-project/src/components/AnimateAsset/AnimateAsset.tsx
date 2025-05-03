import { ReactNode } from "react";
import "./AnimateAsset.scss";

type animateProps = {
    children?: ReactNode,
    video?: string,
    img?: string,
    alt?: string
}

const AnimateAsset = (props: animateProps) => {
    return (
        <>
            <div className="animate_asset">
                {
                    props.video ?
                        <video muted data-speed="clamp(0.8)" autoPlay loop>
                            <source src={props.video} />
                        </video>
                        :
                        props.img ?
                            <img src={props.img} alt={props.alt} />
                            :
                            null
                }
            </div>
        </>
    )
}

export default AnimateAsset
