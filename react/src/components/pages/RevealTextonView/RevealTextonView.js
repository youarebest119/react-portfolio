import React from 'react'
import RevealTextonViewText from './RevealTextonViewText/RevealTextonViewText'
import { Container } from 'react-bootstrap'

const RevealTextonView = () => {

    return (
        <>
            <Container>
                {
                    [1, 2, 3, 4].map(item => (
                        <React.Fragment key={item}>
                            <RevealTextonViewText key={item} />
                        </React.Fragment>
                    ))
                }
            </Container>
        </>
    )
}

export default RevealTextonView
