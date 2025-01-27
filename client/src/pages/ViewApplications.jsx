import React from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

const ViewApplications = () => {
  return (
    <div className="p-6 min-h-screen overflow-hidden">
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-4">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 font-semibold text-gray-600">#</th>
              <th className="p-4 font-semibold text-gray-600">User Name</th>
              <th className="p-4 font-semibold text-gray-600">Job Title</th>
              <th className="p-4 font-semibold text-gray-600">Location</th>
              <th className="p-4 font-semibold text-gray-600">Resume</th>
              <th className="p-4 font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className="even:bg-gray-50 hover:bg-gray-100 transition duration-200"
              >
                <td className="p-4 text-gray-700">{index + 1}</td>
                <td className="p-4 flex items-center space-x-3">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-800">{applicant.name}</span>
                </td>
                <td className="p-4 text-gray-700">{applicant.jobTitle}</td>
                <td className="p-4 text-gray-700">{applicant.location}</td>
                <td className="p-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex items-center space-x-2 hover:underline"
                  >
                    <span>Resume</span>
                    <img
                      src={assets.resume_download_icon}
                      alt="Download"
                      className="w-4 h-4"
                    />
                  </a>
                </td>
                <td className="p-4 relative">
                  <div className="relative inline-block text-left group">
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v.01M12 12v.01M12 18v.01"
                        ></path>
                      </svg>
                    </button>
                    <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border hidden group-hover:block z-10">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 rounded-t-lg">
                        Accept
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-b-lg">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
