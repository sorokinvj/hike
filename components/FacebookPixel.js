import ReactPixel from 'react-facebook-pixel'

const advancedMatching = {}
const options = {
  autoConfig: true, 	// set pixel's autoConfig
  debug: false, 		// enable logs
}

export const pixelInit = () => {
  ReactPixel.init('356032818618945', advancedMatching, options)
}

export const pageView = () => {
  ReactPixel.pageView() 
}