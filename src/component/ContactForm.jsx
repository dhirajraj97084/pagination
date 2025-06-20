import React, { useState } from 'react'
import Layout from './Layout'
import Profile from '../pages/profile'
import Interest from '../pages/interest'
import Setting from '../pages/setting'


function ContactForm() {
  const [currentTab, setCurrentTab] = useState(0);
  const Tabs=[
    {
      name:"profile",
      component:Profile
    },
      {
      name:"interest",
      component:Interest
    },
      {
      name:"setting",
      component:Setting
    },

  ]
  
  const ChangeTab=Tabs[currentTab].component
  return (
    <Layout>
      <div className="div bg-gray-50 px-4 py-10">
        <h1 className='text-2xl font-bold flex justify-center py-6'>Contact - Form</h1>
        <div className="tabs flex gap-5  container mx-auto ">
          {Tabs.map((t,i)=>(
            <button onClick={()=>setCurrentTab(i)} key={i} className={`div px-4 py-2 border-2  rounded-md font-semibold cursor-pointer ${currentTab===i?"bg-blue-400 text-white":"bg-white"}`}>
               {t.name}
            </button>
          ))}
        </div>
        <div className="div m-5 container mx-auto px-4 py-5 border-2 border-black rounded-xl border-dotted  h-[29em]">
            <ChangeTab/>
          </div>
      </div>
    </Layout>
  )
}

export default ContactForm
