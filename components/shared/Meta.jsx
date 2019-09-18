import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Meta = ({ ogUrl, description, image, title }) => {
  // console.log(uid, description, image, title)
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

Meta.propTypes = {
  ogUrl: PropTypes.string, 
  description: PropTypes.string, 
  image: PropTypes.string, 
  title: PropTypes.string
}

export default Meta