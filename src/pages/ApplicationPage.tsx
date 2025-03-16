import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ApplicationForm from '../components/ApplicationForm';
// import Footer from '../components/Footer';

const ApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Slanted background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-[30vh] bg-white"></div>
        <div 
          className="bg-primary-red h-[40vh] transform -skew-y-3 origin-top-left -mt-16"
          style={{ width: '150%' }}
        ></div>
        <div className="bg-primary-red h-full -mt-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow py-16 px-4">
          <div className="max-w-4xl md:ml-24 mx-auto md:mr-auto">
            <Hero />
            <div className="bg-white p-8 rounded-b-lg shadow-xl">
              <h1 className="text-2xl font-bold text-primary-red mb-6">Fire Camp Application</h1>
              <ApplicationForm />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default ApplicationPage; 