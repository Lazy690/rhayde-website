import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div className="banner3-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text3">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text4">Prop Content</span>
              </Fragment>
            )}
          </h3>
        </div>
        
        
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Alt: 'image',
}

Banner3.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Banner3
