import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (<footer className="bg-[#FDF8F3] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out pt-6 pb-8">
<div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">


    <div>
      <h3 className="font-bold text-lg mb-4 dark:text-white">Company</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-gray-900  dark:text-[#d4d4d4] dark:hover:text-white">About Us</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">How to work?</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Popular Course</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Service</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-4 dark:text-white">Courses</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Categories</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Offline Course</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Video Course</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-4 dark:text-white">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">FAQ</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Help Center</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Career</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#d4d4d4] dark:hover:text-white">Privacy</a></li>
      </ul>
    </div>

    <div id='Contact us'>
      <h3 className="font-bold text-lg mb-4 dark:text-white">Contact Info</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-600 dark:text-[#d4d4d4]" />
          <span className="text-gray-600 dark:text-[#d4d4d4]">+91 798-143-6472</span>
        </li>
        <li className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-600 dark:text-[#d4d4d4]" />
          <span className="text-gray-600 dark:text-[#d4d4d4]">sarachatbot21@gmail.com</span>
        </li>
        <li className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 mt-1 text-gray-600 dark:text-[#d4d4d4]" />
          <p className="text-gray-600 dark:text-white ">Mohan Babu University</p>
        </li>
        <span className="text-gray-600 dark:text-[#d4d4d4]">Sree Sainath Nagar, Tirupati, <br />Andhra Pradesh 517102</span>

      </ul>
    </div>
  </div>

  <div className="border-t border-gray-200 pt-8 text-center bg-white dark:bg-[#1f1f1f] transition-colors duration-300">
    <p className="text-black dark:text-white mt-4">© Sara_AI All Right Reserved, 2023-2025</p>
  </div>
</div>
</footer>
    );
}
export default Footer;