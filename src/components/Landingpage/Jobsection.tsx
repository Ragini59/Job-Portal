import React from 'react'
import Jobcard from './Jobcard'

const Jobsection = () => {
  const cardinfo = [
    {
      imagelink: "https://images.unsplash.com/photo-1573495612077-a689b084faab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
      jobtime:"full time",
      jobtitle: "Software Developer",
      jobdes: "Design, develop, and maintain software solutions to meet client needs."
    },
    {
      imagelink: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5c3R8ZW58MHx8MHx8fDA%3D",
      jobtime:"full time",
      jobtitle: "Data Analyst",
      jobdes: "Analyze data to derive actionable insights and support business decisions."
    },
    {
      imagelink: "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3QlMjBtYW5hZ2VyfGVufDB8fDB8fHww",
      jobtime:"full time",
      jobtitle: "Project Manager",
      jobdes: "Coordinate and manage projects, ensuring timely delivery and resource optimization."
    },
    {
      imagelink: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D",
      jobtime:"part time",
      jobtitle: "UX Designer",
      jobdes: "Create intuitive user experiences by designing engaging and user-friendly interfaces."
    }
  ];
  
  return (
    <section className="bg-[#2E2835] w-full h-auto px-2 py-5 sm:p-10">
    <h1 className='text-xl sm:text-3xl uppercase font-semibold text-center text-white p-10'>Recent Job</h1>
    <div className="job-container flex flex-wrap justify-center gap-5">
      {cardinfo.map((data)=> <div key={data.jobtitle}><Jobcard data={data}/></div>)}

    </div>
    </section>
  )
}

export default Jobsection