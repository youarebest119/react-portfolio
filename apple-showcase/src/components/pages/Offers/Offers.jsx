import React from 'react';
import { Container } from 'react-bootstrap';
import { FireIcon, LanguageLogo, ScaleLogo } from '../../../assets/icons/icons';
import OfferBox from './OfferBox/OfferBox';
import "./Offers.scss";

const Offers = () => {
    return (
        <section className='offers_design'>
            <Container>
                <div className="design_in">
                    <ul>
                        <li>
                            <OfferBox
                                title={<><b>Offers</b> : Brands don't offer anything</>}
                                icon={<LanguageLogo />}
                            />
                        </li>
                        {/* <li>
                            <OfferBox
                                title={<><b>Fire</b> : The best in the world</>}
                                icon={<FireIcon />}
                            />
                        </li>
                        <li>
                            <OfferBox
                                title={<><b>Scalable</b> : Scalable to any size </>}
                                icon={<ScaleLogo />}
                            />
                        </li> */}
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Offers
