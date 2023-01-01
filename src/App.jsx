import React, { useState } from 'react'
import './App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataKurtlarVadisi } from './data'

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <div>
        <Slider {...settings}>
          <button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block">Previous</button>
          {
            dataKurtlarVadisi.map((item, index) => (
              // <div>
              <div key={index} className="card slick-list">
                <div className="card-top">
                  <img src={item.image} />
                  <h1>{item.title}</h1>
                </div>
                <div className="card-bottom">
                  <h3>{item.Description}</h3>
                </div>
              </div>
              // </div>
            ))
          }
          <button type="button" data-role="none" class="slick-arrow slick-next slick-disabled" style="display: block;">
            Next
          </button>
          <ul class="slick-dots" style="display: block;">
            <li class="">
              <button>1</button>
            </li>
            <li class="slick-active">
              <button>2</button>
            </li>
            <li class="">
              <button>3</button>
            </li>
          </ul>
        </Slider>
      </div>
    </div>
  )
}

export default App
