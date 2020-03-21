import React from 'react';

import Slider from "react-slick";
import Card from '../Card';

import './style.css';


const SampleNextArrow = () => {
    return (
        <span className="nextArr arrow slick-arrow"></span>
    )
}


const SamplePrevArrow = props => {
    return (
        <span className="prevArr arrow slick-arrow"></span>
    )
}

const Forecast = props => {
    let cards = props.dailyData.map((el, index) => {
        let data = {
            date: el.Date,
            temp: el.Temperature,
            dayIcon: el.Day.Icon,
            nightIcon: el.Night.Icon,
        }
        return (
            <Card 
                key={data.date} 
                data={data} 
                index={index} 
                sidebarOpen={props.sidebarOpen}
            />
        )
    })

    let sliderSettings = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <section className="forecastSection">
            {props.city.cityName 
                ? <h2 className="cityNameHeader">{props.city.cityName}, {props.city.country}</h2> 
                : null}   
            <div className="forecasts">
                <Slider {...sliderSettings}>
                    {cards}
                </Slider>
            </div>
        </section>
    )
}

export default Forecast;