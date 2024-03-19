import React from 'react';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="src/assets/img/home.jpg" // Replace with the actual path to your image
        alt="Descriptive image alt text"
        className="w-full h-full object-cover "
      />
    </div>
  );
}

export default Home;
