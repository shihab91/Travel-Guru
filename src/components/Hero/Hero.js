import { Button } from '@mui/material';
import React from 'react';
import './Hero.css'
import { MdOutlineArrowForward } from "react-icons/md";
import Slider from 'react-slick';
import { useHistory } from 'react-router';
import useDestinations from '../../hooks/useDestinations';

const Hero = () => {
    const { destinations } = useDestinations();
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "170px",
        slidesToShow: 1,
        speed: 500,
        arrows: false,
    };
    const history = useHistory();
    const handleHistory = (name) => {
        history.push(`/${name}`)
    }
    return (
        <div className="hero-container" >
            <div className="text-info">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <Button variant="contained" className="log-in booking">Booking<MdOutlineArrowForward /></Button>
            </div>
            <div className="wrapper">
                <Slider {...settings} className="cards">
                    {destinations?.map(destination =>
                        <div className="single-card" onClick={() => handleHistory(destination.name)}>
                            <img src={destination.image} alt="" />
                            <h2>{destination.name}</h2>
                        </div>
                    )}

                </Slider>
            </div>
        </div>
    );
};

export default Hero;