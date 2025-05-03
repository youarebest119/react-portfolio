import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Div from './Div'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Box = () => {
    const container = useRef();
    const ref = useRef();
    const { contextSafe } = useGSAP({ scope: container })

    const handleClick = contextSafe(() => {
        gsap.to(ref.current, {
            y: 100,
            x: 100,
        });
    })

    return (
        <div ref={container}>
            <Container>
                <Div
                    onClick={handleClick}
                    ref={ref}
                    cursor="pointer"
                    width="100px"
                    height="100px"
                    borderRadius="10px"
                    border="2px solid grey"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    children={"Click Me"}
                />
            </Container>
        </div>
    )
}

export default Box
