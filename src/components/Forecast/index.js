import React from 'react';

import Slider from "react-slick";
import Card from '../Card';

import './style.css';

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
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 550,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 385,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <section className="forecastSection">
            {props.city.cityName 
                ? <h2 className="cityNameHeader">{props.city.cityName}, {props.city.countryCode}<span>{props.city.countryFullName}</span></h2>
                : null
            }
            <div className="forecasts">
                <Slider {...sliderSettings}>
                    {cards}
                </Slider>
            </div>
        </section>
    )
}

export default Forecast;