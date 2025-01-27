import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className=" flex justify-center items-center p-6 overflow-hidden">
      <form >
        <h2 className="text-2xl font-semibold text-gray-700 ">Add Job</h2>

        {/* Job Title */}
        <div className="space-y-1">
          <label className="text-gray-600 font-medium">Job Title</label>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Job Description */}
        <div className="space-y-1 mb-4">
          <label className="text-gray-600 font-medium">Job Description</label>
          <div
            ref={editorRef}
            className="w-full border rounded-md min-h-[150px] p-2"
          ></div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Job Category */}
          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Job Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Job Location</label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Job Level */}
          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Job Level</label>
            <select
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="Beginner Level">Beginner Level</option>
              <option value="Intermediate Level">Intermediate Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>
        </div>

        {/* Job Salary */}
        <div className="space-y-1 mb-4">
          <label className="text-gray-600 font-medium">Salary</label>
          <input
            onChange={(e) => setSalary(e.target.value)}
            type="number"
            placeholder="0"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className='mt-4 flex justify-start'>
        <button className='bg-black text-white py-2 px-10 rounded'>Add</button>
      </div>
      </form>
    </div>
  );
};

export default AddJob;
