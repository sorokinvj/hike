import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPlayer from 'react-player'


const Hero = styled.div`

    margin: 0 auto;
    width: 100%;
    height: 100vh;

`

const VideoHero = props => {
  return (
    <Hero>
      <ReactPlayer 
        url='http://www.youtube.com/watch?v=pgm-LWY7BLU' 
        // playing           
        width='100%'
        height='100%'
        muted
      />
    </Hero>
  )
}

VideoHero.propTypes = {

}

export default VideoHero

