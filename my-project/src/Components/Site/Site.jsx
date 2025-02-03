import React from 'react'
import Home from './Home'
import Cards from './Cards'
import Navbar from './Navbar'
import Service from './Service'
import JobConsultancy from './JobConsultancy'
import VisitingVisa from './VisitingVisa'
import Studyabroad from '../Studyabroad'
import Consultant from './Consaltant'
import HappyClients from './HappyClients'
import Footer from './Footer'
import Why from '../Why'
import LatestNews from '../LatestNews'
import Subscribe from '../Payment&refrel/Subscribe'
import Referrals from '../Payment&refrel/Refrals'
import Floating from './Floating'

const Site = () => {
  return (
    <div className='overflow-x-hidden'>

       
        <Floating/>
          <Home/>
          <Cards/>
          <LatestNews/>
          <Service/>
          <JobConsultancy/>
          <VisitingVisa/>
          <Studyabroad/>
          <Subscribe/>
          <Why/>
          <Consultant/>
          <HappyClients/>
          {/* <Referrals/> */}
        
       
        </div>
  )
}

export default Site