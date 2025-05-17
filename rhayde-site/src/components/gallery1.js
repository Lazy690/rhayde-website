import React, { Fragment } from 'react'

import './gallery1.css'

import img1 from './img/IMG_1720-1696583562 (1).png'
import img2 from './img/original_001-1339300999.png'
import lifestyleBike from './img/batch_lifestyle_bike_-4102501587.png'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery1-text4">
                  Descriçao geral do negocio aqui.
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery1-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery1-text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container1">
            <img src={lifestyleBike} className="thq-img-ratio-4-3" />
          </div>
          <div className="gallery1-container2">
            <img src={img1} className="thq-img-ratio-4-3" />
          </div>
          <div className="gallery1-container3">
            <img src={img2} className="thq-img-ratio-4-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery1
