import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ApplicationForm from '../components/ApplicationForm';
// import Footer from '../components/Footer';

const ApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-red">
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
  );
};

export default ApplicationPage; 