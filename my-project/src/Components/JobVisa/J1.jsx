import React from 'react';

const jobData = [
  {
    country: 'USA',
    requirements: ['Bachelor’s Degree', '5+ years experience', 'Work Visa'],
  },
  {
    country: 'Canada',
    requirements: ['English/French proficiency', 'Relevant degree', '2+ years experience'],
  },
  {
    country: 'Germany',
    requirements: ['Fluent in German', 'Work Permit', '3+ years experience'],
  },
  {
    country: 'Australia',
    requirements: ['Skill Assessment', 'Work Visa', '4+ years experience'],
  },
  {
    country: 'UAE',
    requirements: ['Skill Assessment', 'Work Visa', '4+ years experience'],
  },
  {
    country: 'Quatar',
    requirements: ['Skill Assessment', 'Work Visa', '4+ years experience'],
  },
];

const J1 = () => {
  return (
    <div className="p-6  border mt-5">
      <h1 className="text-2xl font-bold text-center mb-6">Job Requirements by Country</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="bg-white p-4 transition-shadow duration-300 border hover:border-red-600"
          >
            <h2 className="text-xl font-semibold mb-2 text-red-600">{job.country}</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="mb-1">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default J1;
