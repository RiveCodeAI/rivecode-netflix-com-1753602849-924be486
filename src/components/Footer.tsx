import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-netflix-gray py-16">
      <div className="container mx-auto px-4">
        <p className="mb-8">Questions? Contact us.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Cancel Membership</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Netflix Shop</a></li>
              <li><a href="#" className="hover:underline">Redeem Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Buy Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Impressum</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
              <li><a href="#" className="hover:underline">Legal Guarantee</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
              <li><a href="#" className="hover:underline">Only on Netflix</a></li>
              <li><a href="#" className="hover:underline">Ad Choices</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <select className="bg-transparent text-white border px-4 py-2 rounded">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        <p className="mt-6">Netflix Germany</p>
        
        <p className="mt-4 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;