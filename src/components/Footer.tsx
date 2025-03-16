import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-red text-white py-10 border-t border-yellow-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white pb-2">Newsletter</h3>
          <p className="mb-4">Get the latest news, Bible Studies, Campaign reports and special offers directly to your mailbox.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full">
            Sign up for our Newsletter
          </button>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white pb-2">Follow us on</h3>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-white rounded-full p-2 inline-block">
              <div className="w-8 h-8 flex items-center justify-center text-primary-red">f</div>
            </a>
            <a href="#" className="bg-white rounded-full p-2 inline-block">
              <div className="w-8 h-8 flex items-center justify-center text-primary-red">
                <span>YT</span>
              </div>
            </a>
            <a href="#" className="bg-white rounded-full p-2 inline-block">
              <div className="w-8 h-8 flex items-center justify-center text-primary-red">
                <span>IG</span>
              </div>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-white pb-2">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Imprint</a></li>
            <li><a href="#" className="hover:underline">Data-Protection Declaration</a></li>
            <li><a href="#" className="hover:underline">Glossary</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 