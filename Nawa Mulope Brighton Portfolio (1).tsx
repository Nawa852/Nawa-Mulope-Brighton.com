// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCube } from 'swiper/modules';
import * as echarts from 'echarts';
// Import additional Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({
name: '',
email: '',
subject: '',
message: ''
});
const [donationAmount, setDonationAmount] = useState('');
const [showDonationModal, setShowDonationModal] = useState(false);
const [blogPosts, setBlogPosts] = useState([
{
id: 1,
title: 'Latest Trends in Web Development 2025',
excerpt: 'Exploring the cutting-edge technologies shaping the future of web development, including AI-driven design, WebAssembly, and progressive web apps.',
date: '2025-03-09',
likes: 45,
comments: 12,
image: 'https://public.readdy.ai/ai/img_res/1be4bcfa226994f8326fa9faed333fec.jpg'
},
{
id: 2,
title: 'Essential Computer Maintenance Tips',
excerpt: 'Keep your computer running smoothly with these professional maintenance guidelines...',
date: '2025-03-08',
likes: 38,
comments: 8,
image: 'https://public.readdy.ai/ai/img_res/02427cdd6e8e8071477532f26d979c70.jpg'
},
{
id: 3,
title: 'The Impact of AI in Modern Web Design',
excerpt: 'How artificial intelligence is revolutionizing website design and development...',
date: '2025-03-07',
likes: 52,
comments: 15,
image: 'https://public.readdy.ai/ai/img_res/a029775af107880b63306e513bfabafc.jpg'
}
]);
const handleDonation = () => {
if (!donationAmount || isNaN(donationAmount)) {
alert('Please enter a valid donation amount');
return;
}
window.location.href = `tel:*123*1*1*${donationAmount}*260765296792%23`;
setShowDonationModal(false);
setDonationAmount('');
};
const handleLike = (postId) => {
setBlogPosts(posts =>
posts.map(post =>
post.id === postId ? {...post, likes: post.likes + 1} : post
)
);
};
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Handle form submission
setFormData({ name: '', email: '', subject: '', message: '' });
};
return (
<div className="min-h-screen bg-white">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
<nav className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-2xl font-bold text-blue-600">Nawa Mulope Brighton</div>
<div className="hidden md:flex items-center space-x-8">
<a href="#home" className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</a>
<a href="#services" className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</a>
<a href="#about" className="text-gray-700 hover:text-blue-600 cursor-pointer">About</a>
<a href="#contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact</a>
</div>
<div className="hidden md:flex items-center space-x-4">
<div className="flex items-center text-gray-600">
<i className="fas fa-phone mr-2"></i>
<span>+260 765296792</span>
</div>
<div className="flex items-center text-gray-600">
<i className="fas fa-envelope mr-2"></i>
<span>mulopenawa43@gmail.com</span>
</div>
</div>
<button
className="md:hidden text-gray-600 cursor-pointer"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
</button>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden mt-4 pb-4">
<a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">Home</a>
<a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">Services</a>
<a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">About</a>
<a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">Contact</a>
</div>
)}
</nav>
</header>
{/* Hero Section */}
<section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-blue-100">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-8 md:mb-0">
<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
Professional Website Builder & Computer Specialist
</h1>
<p className="text-xl text-gray-600 mb-8">
Transforming ideas into powerful digital solutions in Kalabo, Western Province, Zambia
</p>
<a
href="#contact"
className="!rounded-button bg-blue-600 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap"
>
Get In Touch
</a>
</div>
<div className="md:w-1/2">
<img
src="https://public.readdy.ai/ai/img_res/6a44b16c38d904382ccdd4d2448dd57b.jpg"
alt="Nawa Mulope Brighton"
className="rounded-lg shadow-xl w-full"
/>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Custom Web Design',
          icon: 'fa-palette',
          description: 'Tailored, unique designs that align with your brand identity and stand out from competitors. Each website is crafted to reflect your unique vision and goals.',
          features: ['Brand-aligned design', 'Professional UI/UX', 'Unique visual elements']
        },
        {
          title: 'E-commerce Solutions',
          icon: 'fa-shopping-cart',
          description: 'Full-featured e-commerce platforms with secure payment integration, product management, and optimized checkout experiences.',
          features: ['Custom checkout process', 'Payment integration', 'Inventory management']
        },
        {
          title: 'Responsive Design',
          icon: 'fa-mobile-alt',
          description: 'Fully optimized websites for all devices - mobile, tablet, and desktop, ensuring a seamless user experience across platforms.',
          features: ['Mobile-first approach', 'Cross-device testing', 'Adaptive layouts']
        },
        {
          title: 'Content Management',
          icon: 'fa-tasks',
          description: 'Custom CMS solutions or optimized WordPress implementations for easy content updates and management.',
          features: ['User-friendly interface', 'Custom workflows', 'Content scheduling']
        },
        {
          title: 'SEO Optimization',
          icon: 'fa-search',
          description: 'Comprehensive SEO implementation including keyword optimization, structured data, and performance enhancements.',
          features: ['Keyword optimization', 'Performance tuning', 'Analytics integration']
        },
        {
          title: 'Custom Development',
          icon: 'fa-code',
          description: 'Specialized features and functionalities tailored to your specific needs, from member portals to interactive elements.',
          features: ['Custom functionality', 'API integration', 'Secure authentication']
        }
      ].map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:translate-y-[-10px] transition duration-300">
          <div className="p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className={`fas ${service.icon} text-blue-600 text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="!rounded-button mt-6 bg-blue-600 text-white px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Blog Section */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest Blog Posts</h2>
<Swiper
modules={[EffectCube, Pagination, Autoplay]}
effect="cube"
grabCursor={true}
cubeEffect={{
shadow: true,
slideShadows: true,
shadowOffset: 20,
shadowScale: 0.94,
}}
pagination={{ clickable: true }}
autoplay={{
delay: 3000,
disableOnInteraction: false,
}}
className="w-full md:w-3/4 mx-auto mb-12"
>
{blogPosts.map((post) => (
<SwiperSlide key={post.id}>
<div className="bg-white rounded-lg shadow-2xl overflow-hidden">
<div className="h-64 overflow-hidden">
<img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">{post.title}</h3>
<p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
<div className="flex justify-between items-center">
<span className="text-gray-500">{post.date}</span>
<div className="flex items-center space-x-6">
<button
onClick={() => handleLike(post.id)}
className="group flex items-center space-x-2 text-gray-600 hover:text-red-500 transition duration-300"
>
<i className="fas fa-heart transform group-hover:scale-125 transition duration-300"></i>
<span className="text-lg">{post.likes}</span>
</button>
<div className="flex items-center space-x-2 text-gray-600">
<i className="fas fa-comment"></i>
<span className="text-lg">{post.comments}</span>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
{blogPosts.map((post) => (
<div
key={post.id}
className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:rotate-2 transition duration-500 cursor-pointer"
style={{
perspective: '1000px',
transformStyle: 'preserve-3d',
}}
>
<div className="h-48 overflow-hidden">
<img
src={post.image}
alt={post.title}
className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
/>
</div>
<div className="p-6 bg-gradient-to-b from-white to-gray-50">
<h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">{post.title}</h3>
<p className="text-gray-600 mb-4">{post.excerpt}</p>
<div className="flex justify-between items-center text-sm text-gray-500">
<span>{post.date}</span>
<div className="flex items-center space-x-4">
<button
onClick={() => handleLike(post.id)}
className="group flex items-center space-x-1 text-gray-600 hover:text-red-500 transition duration-300"
>
<i className="fas fa-heart transform group-hover:scale-125 transition duration-300"></i>
<span>{post.likes}</span>
</button>
<div className="flex items-center space-x-1 text-gray-600">
<i className="fas fa-comment"></i>
<span>{post.comments}</span>
</div>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>
{/* Donation Modal */}
{showDonationModal && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
<div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
<h3 className="text-2xl font-bold mb-4">Support My Projects</h3>
<p className="text-gray-600 mb-4">Your donation helps me continue creating valuable content and services.</p>
<input
type="number"
value={donationAmount}
onChange={(e) => setDonationAmount(e.target.value)}
placeholder="Enter amount in ZMW"
className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
/>
<div className="flex space-x-4">
<button
onClick={handleDonation}
className="!rounded-button bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition duration-300 whitespace-nowrap flex-1"
>
Donate Now
</button>
<button
onClick={() => setShowDonationModal(false)}
className="!rounded-button bg-gray-200 text-gray-800 px-6 py-2 font-semibold hover:bg-gray-300 transition duration-300 whitespace-nowrap flex-1"
>
Cancel
</button>
</div>
</div>
</div>
)}
<section id="services" className="py-16 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{
title: 'Website Building',
icon: 'fa-laptop-code',
description: 'Custom website development tailored to your needs. From personal blogs to e-commerce platforms.',
image: 'https://public.readdy.ai/ai/img_res/4d3e4f7f04e80211e5835e1175e094ab.jpg'
},
{
title: 'Computer Repair',
icon: 'fa-tools',
description: 'Professional computer repair services including hardware troubleshooting and software solutions.',
image: 'https://public.readdy.ai/ai/img_res/fd8304fda464b47aba7fc16e493d1054.jpg'
},
{
title: 'Hardware Upgrades',
icon: 'fa-microchip',
description: 'Boost your computer\'s performance with professional hardware upgrade services.',
image: 'https://public.readdy.ai/ai/img_res/8d1d24165526237156f4ab778f4359b3.jpg'
}
].map((service, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
<div className="h-48 overflow-hidden">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover"
/>
</div>
<div className="p-6">
<div className="text-blue-600 text-3xl mb-4">
<i className={`fas ${service.icon}`}></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
<p className="text-gray-600 mb-4">{service.description}</p>
<button className="!rounded-button bg-blue-600 text-white px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
Learn More
</button>
</div>
</div>
))}
</div>
</div>
</section>
{/* About Section */}
<section id="about" className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-8 md:mb-0">
<img
src="https://public.readdy.ai/ai/img_res/bcc6f46a139aadf7d6f667fece3424cc.jpg"
alt="About Nawa"
className="rounded-lg shadow-xl"
/>
</div>
<div className="md:w-1/2 md:pl-12">
<h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
<p className="text-gray-600 mb-6">
With over 5 years of experience in website development and computer services, I've helped numerous clients in Kalabo and beyond achieve their digital goals. My expertise spans across modern web technologies and computer hardware solutions.
</p>
<div className="mb-6">
<h3 className="text-xl font-bold text-gray-800 mb-3">Mission Statement</h3>
<p className="text-gray-600">
To provide exceptional technical solutions that empower businesses and individuals in Western Province with reliable, innovative, and accessible technology services.
</p>
</div>
<div className="mb-6">
<h3 className="text-xl font-bold text-gray-800 mb-3">Professional Values</h3>
<ul className="text-gray-600">
<li className="mb-2 flex items-center">
<i className="fas fa-check text-blue-600 mr-2"></i>
Excellence in service delivery
</li>
<li className="mb-2 flex items-center">
<i className="fas fa-check text-blue-600 mr-2"></i>
Continuous learning and improvement
</li>
<li className="mb-2 flex items-center">
<i className="fas fa-check text-blue-600 mr-2"></i>
Client satisfaction priority
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-16 bg-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<form onSubmit={handleSubmit} className="space-y-6">
<div>
<label className="block text-gray-700 mb-2">Name</label>
<input
type="text"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
value={formData.name}
onChange={(e) => setFormData({...formData, name: e.target.value})}
required
/>
</div>
<div>
<label className="block text-gray-700 mb-2">Email</label>
<input
type="email"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
value={formData.email}
onChange={(e) => setFormData({...formData, email: e.target.value})}
required
/>
</div>
<div>
<label className="block text-gray-700 mb-2">Subject</label>
<input
type="text"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
value={formData.subject}
onChange={(e) => setFormData({...formData, subject: e.target.value})}
required
/>
</div>
<div>
<label className="block text-gray-700 mb-2">Message</label>
<textarea
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
value={formData.message}
onChange={(e) => setFormData({...formData, message: e.target.value})}
required
></textarea>
</div>
<button
type="submit"
className="!rounded-button bg-blue-600 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap"
>
Send Message
</button>
</form>
</div>
<div>
<div className="bg-gray-50 p-8 rounded-lg">
<h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-center">
<i className="fas fa-phone text-blue-600 text-xl w-8"></i>
<span className="text-gray-600">+260 765296792</span>
</div>
<div className="flex items-center">
<i className="fas fa-envelope text-blue-600 text-xl w-8"></i>
<span className="text-gray-600">mulopenawa43@gmail.com</span>
</div>
<div className="flex items-center">
<i className="fas fa-map-marker-alt text-blue-600 text-xl w-8"></i>
<span className="text-gray-600">Kalabo, Western Province, Zambia</span>
</div>
<div className="flex items-center">
<i className="fas fa-clock text-blue-600 text-xl w-8"></i>
<div className="text-gray-600">
<p>Monday - Friday: 8:00 AM - 6:00 PM</p>
<p>Saturday: 9:00 AM - 2:00 PM</p>
<p>Sunday: Closed</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<div className="bg-blue-600 py-8 text-center">
<div className="container mx-auto px-6">
<h2 className="text-2xl font-bold text-white mb-4">Support My Work</h2>
<p className="text-white mb-6">Your contribution helps me create better content and services for the community</p>
<button
onClick={() => setShowDonationModal(true)}
className="!rounded-button bg-white text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition duration-300 whitespace-nowrap"
>
<i className="fas fa-heart mr-2"></i>
Make a Donation
</button>
</div>
</div>
<footer className="bg-gray-800 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xl font-bold mb-4">Nawa Mulope Brighton</h4>
<p className="text-gray-400">
Professional website builder and computer specialist serving the Western Province region.
</p>
</div>
<div>
<h4 className="text-xl font-bold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#home" className="text-gray-400 hover:text-white cursor-pointer">Home</a></li>
<li><a href="#services" className="text-gray-400 hover:text-white cursor-pointer">Services</a></li>
<li><a href="#about" className="text-gray-400 hover:text-white cursor-pointer">About</a></li>
<li><a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold mb-4">Service Area</h4>
<ul className="text-gray-400 space-y-2">
<li>Kalabo District</li>
<li>Western Province</li>
<li>Surrounding Areas</li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold mb-4">Connect</h4>
<div className="flex space-x-4">
<a href="#" className="text-2xl text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-facebook"></i>
</a>
<a href="#" className="text-2xl text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-2xl text-gray-400 hover:text-white cursor-pointer">
<i className="fab fa-linkedin"></i>
</a>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
<p>&copy; {new Date().getFullYear()} Nawa Mulope Brighton. All rights reserved.</p>
</div>
</div>
</footer>
</div>
);
}
export default App
