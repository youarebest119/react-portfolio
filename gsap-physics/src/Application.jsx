import gsap from 'gsap'
import PhysicsPropsPlugin from 'gsap-trial/PhysicsPropsPlugin'
import Physics2DPlugin from 'gsap-trial/Physics2DPlugin'
import React from 'react'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(Physics2DPlugin)
gsap.registerPlugin(PhysicsPropsPlugin)

const Application = () => {
    useGSAP(() => {
    })
    return (
        <>
            <div className="box">
                <div className="ball"></div>
                <div className="plane"></div>
            </div>
        </>
    )
}

export default Application
