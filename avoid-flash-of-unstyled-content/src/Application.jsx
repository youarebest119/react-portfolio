import React from 'react'
import Clamp from './Clamp/Clamp'
import Interpolate from './Interpolate/Interpolate'
import MapRange from './MapRange/MapRange'
import Normalize from './Normalize/Normalize'
import Random from './Random/Random'
import Selector from './Selector/Selector'
import Shuffle from './Shuffle/Shuffle'
import ToArray from './ToArray/ToArray'

const Application = () => {
    return (
        <>
            <Clamp />
            <Interpolate />
            <MapRange />
            <Normalize />
            <Random />
            <Selector />
            <Shuffle />
            <ToArray />
        </>
    )
}

export default Application
