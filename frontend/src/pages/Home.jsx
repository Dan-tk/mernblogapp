import React from 'react'
import HomePosts from '../components/HomePosts'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='px-8 md:px-[200px]'>
         <HomePosts/>
         <HomePosts/>
         <HomePosts/>
       </div>
    </div>
       
    
  )
}

export default Home