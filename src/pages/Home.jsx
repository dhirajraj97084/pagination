import React from 'react'
import Layout from '../component/Layout'
import AutoCompleteSearchBar from './AutoCompleteSearchBar'

function Home() {
  return (
    <Layout>
     <div className="div bg-gray-100">
       <AutoCompleteSearchBar/>
     </div>
   
    </Layout>
  )
}

export default Home
