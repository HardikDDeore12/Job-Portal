import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment';
import Footer from '../components/Footer';

const Applications = () => {

  const[isEdit, setIsEdit] = useState(false);

  const[resume, setResume] = useState(null);  
  return (
    <>
      <Navbar/>
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10 '>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {isEdit ?
          <>
            <label htmlFor='resumeUpload' className='flex items-center'>
              <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
              <img
                src={assets.profile_upload_icon}
                alt="Upload Icon"
              />
              <input
                id="resumeUpload"
                onChange={(e) => setResume(e.target.files[0])}
                accept="application/pdf"
                type="file"
                className="hidden" // Hide the file input but keep it functional
              />
            </label>
            <button onClick={()=> setIsEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>save</button>
          </>:
          <div className='flex gap-2'>
            <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg ' href="">
              Resume
            </a>
            <button onClick={()=> setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>
              Edit
            </button>
          </div>}
        </div>

        <h2 className="text-2xl font-bold mb-6">Jobs Applied</h2>

<div className="overflow-x-auto shadow-lg rounded-lg">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead>
      <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Company</th>
        <th className="py-3 px-6 text-left">Job Title</th>
        <th className="py-3 px-6 text-left">Location</th>
        <th className="py-3 px-6 text-left">Date</th>
        <th className="py-3 px-6 text-left">Status</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
      {jobsApplied.map((job, index) => (
        <tr
          key={index}
          className="border-b border-gray-200 hover:bg-gray-50"
        >
          <td className="py-3 px-6 flex items-center">
            <img
              className="w-10 h-10 rounded-full border border-gray-300 mr-4"
              src={job.logo}
              alt={`${job.company} logo`}
            />
            <span>{job.company}</span>
          </td>
          <td className="py-3 px-6">{job.title}</td>
          <td className="py-3 px-6">{job.location}</td>
          <td className="py-3 px-6">{moment(job.date).format("ll")}</td>
          <td className="py-3 px-6">
            <span
              className={`py-1 px-3 rounded-full text-xs ${
                job.status === "Accepted"
                  ? "bg-green-100 text-green-600"
                  : job.status === "Pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {job.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
      <Footer/>
    </>
  )
}

export default Applications
