import "../Main/Main.scss"
import ReactFullpage from '@fullpage/react-fullpage';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import ImageSlider from '../../components/Slider/Slider'

const Main = () => {
  

  return (

          <div id="fullpage-wrapper">
            <div className="section">
              <div className='slider-section'>
                <div className='slider-grid'>
                  <div className='slider-main'>
                    {/* <ImageSlider></ImageSlider> */}
                    <h1>섹션2</h1>
                  </div>
                  <div className='slider-right'>
                    <div>
                      
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Main;