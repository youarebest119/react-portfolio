import React from 'react'

const Application = () => {
    return (
        <>
            <div className="banner">
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <div className="rows" style={{ top: `${index * 10}%` }} key={index}>
                                {
                                    Array.from({ length: 10 }).map((_, index) => {
                                        return (
                                            <div className="cols" key={index}></div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <div className="container">
                    <h2>Vision X Pro</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim, eos fugiat voluptas alias eveniet molestiae id hic itaque maxime?</p>
                </div>
            </div>
        </>
    )
}

export default Application
