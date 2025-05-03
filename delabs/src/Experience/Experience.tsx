import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import intro from '../assets/intro.png';
import "./Experience.scss";
import Title from './Title';

const Experience = () => {
    const ref = useRef<HTMLDivElement>(null);
    const banner = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end 0.7"]
    });
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -400]);
    const width = useTransform(scrollYProgress, [0, 0.3, 1], ["200px", "200px", "600px"])
    const rotate = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 360]);
    const x = useTransform(scrollYProgress, [0, 0.3, 1], ["-50%", "-50%", "-100%"])
    const top = useTransform(scrollYProgress, [0, 0.3, 1], [0, (window.innerHeight / 2) - 200, (window.innerHeight / 2) - 200]);
    return (
        <>
            <motion.div ref={ref} className="experience">
                <motion.div
                    style={{
                        x,
                        y: top,
                        rotate,
                        width,
                    }}
                    className="intro_img"
                >
                    <motion.img
                        id="intro"
                        src={intro}
                        alt=""
                    />
                </motion.div>
                <div className="banner_outer">
                    <div
                        ref={banner}
                        className='banner'
                    >
                        <div className="banner_content">
                            <Title
                                y={y}
                            />
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="content">
                        <h2>Just a Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam repellendus quam ullam delectus? Accusamus ipsum iure amet quas delectus ab repellat? Tempora, nemo culpa? Iusto possimus enim ratione, debitis est dolorem adipisci fuga neque consequatur fugiat eius amet, alias, quas similique officia veniam perspiciatis vitae iure voluptates architecto. Earum placeat corporis inventore unde consequatur asperiores tempore. Soluta facere perspiciatis, laborum atque eligendi quae magni. Fugit ullam neque totam repudiandae, temporibus aperiam fuga, itaque consectetur quam repellendus provident nesciunt, aspernatur illum autem nostrum magni non earum recusandae cum culpa nemo quas. Tempora, aut vero iure tenetur beatae fugit non ab ratione iste officia maxime? Veritatis tenetur facere aperiam dolorem? Soluta, nihil voluptate? Reiciendis odit ea fugit perferendis nesciunt minima incidunt officia laborum, exercitationem inventore quibusdam saepe facere enim delectus? Repellat dolore modi illum ipsum enim pariatur dolorem. Rerum, temporibus soluta, voluptate necessitatibus eos error vel velit eum voluptates nobis libero totam! Voluptatum accusantium iusto vel officia aliquam corrupti ipsam iure tenetur quod natus nobis blanditiis, expedita voluptatibus explicabo, accusamus dignissimos minima tempore eos corporis dolore, exercitationem cumque! Eaque ex, quaerat distinctio in id iusto tempore. Dicta, cupiditate corrupti assumenda adipisci autem totam ex, possimus quia ducimus illum non eos dignissimos?</p>
                    </div>
                </div>
            </motion.div>
            <div
                style={{ height: '1000px', }}
            />
        </>
    )
}

export default Experience
