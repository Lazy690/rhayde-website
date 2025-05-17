import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner3 from '../components/banner3'
import Gallery1 from '../components/gallery1'
import './home.css'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Well Worn Fantastic Rook</title>
        <meta property="og:title" content="Well Worn Fantastic Rook" />
      </Helmet>
      <Banner3
        heading1={
          <Fragment>
            <span className="home-text1">Teu Banner</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text2">Slogan</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text3">My Ass</span>
          </Fragment>
        }
      ></Banner3>
      <Gallery1
        content1={
          <Fragment>
            <span className="home-text4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text5">
              Discrição geral do negocio aqui
            </span>
          </Fragment>
        }
      ></Gallery1>
    </div>
  )
}

export default Home
