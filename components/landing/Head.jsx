import React from 'react'
import Head from 'next/head'

const Meta = ({ uid, description, image, title }) => {
//   console.log(uid, description, image, title)
  return (
    <Head>
      <title>Hike trips</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={"http://hiketrips.com/tour/" + uid} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export default Meta