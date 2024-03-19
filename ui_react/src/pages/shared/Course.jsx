import React from 'react';

const CoursePage = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen px-8 py-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8">English Certification Exam Course</h1>
      <p className="text-xl text-white text-center mb-12">
        Prepare for your English certification exam with our comprehensive online course.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">What you'll learn</h3>
          <ul className="list-disc space-y-2 text-gray-700">
            <li>Master all four language skills: reading, writing, speaking, and listening.</li>
            <li>Learn strategies for test-taking success.</li>
            <li>Gain access to practice tests and mock exams.</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-2">Who this course is for</h3>
          <ul className="list-disc space-y-2 text-gray-700">
            <li>Students aiming for English certifications (TOEFL, IELTS, etc.).</li>
            <li>Professionals seeking to improve their English language skills.</li>
            <li>Anyone wanting to build confidence in English communication.</li>
          </ul>
        </div>
      </div>
      <button className="py-2 px-4 bg-teal-500 text-white font-bold rounded-md mt-8 hover:bg-teal-700 focus:outline-none">
        Enroll Now!
      </button>
    </div>
  );
};

export default CoursePage;
