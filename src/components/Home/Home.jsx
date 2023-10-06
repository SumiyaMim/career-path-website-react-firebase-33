/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Banner/Banner'
import CategoryList from '../CategoryList/CategoryList'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'
import { Helmet } from 'react-helmet-async'

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Career Path | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className='px-8 md:px-10 lg:px-20'>
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  )
}

export default Home
