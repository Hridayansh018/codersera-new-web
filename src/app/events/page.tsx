'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'hackathon' | 'webinar' | 'workshop' | 'meetup';
  description: string;
  image: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    date: 'June 15, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual',
    type: 'workshop',
    description: 'A comprehensive bootcamp covering modern web development technologies including React, Next.js, and more.',
    image: '/workshop.jpg'
  },
  {
    id: 2,
    title: 'CodersEra Annual Hackathon',
    date: 'July 8-10, 2024',
    time: 'All day',
    location: 'Tech Hub Center',
    type: 'hackathon',
    description: 'Join us for 48 hours of coding, collaboration, and innovation. Solve real-world problems and win amazing prizes!',
    image: '/hackathon.jpg'
  },
  {
    id: 3,
    title: 'AI in Modern Applications',
    date: 'June 25, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual',
    type: 'webinar',
    description: 'Learn how to integrate AI capabilities into your applications with practical examples and best practices.',
    image: '/webinar.jpg'
  },
  {
    id: 4,
    title: 'Networking Mixer',
    date: 'June 30, 2024',
    time: '7:00 PM - 9:00 PM',
    location: 'Downtown Cafe',
    type: 'meetup',
    description: 'Connect with fellow developers in a casual setting. Share experiences, exchange ideas, and build your network.',
    image: '/meetup.jpg'
  },
  {
    id: 5,
    title: 'Mobile App Development Workshop',
    date: 'July 20, 2024',
    time: '11:00 AM - 3:00 PM',
    location: 'Tech Innovation Center',
    type: 'workshop',
    description: 'Hands-on workshop on building cross-platform mobile applications using React Native and Flutter.',
    image: '/workshop.jpg'
  },
  {
    id: 6,
    title: 'Cloud Computing Fundamentals',
    date: 'August 5, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    type: 'webinar',
    description: 'Introduction to cloud computing concepts, services, and deployment models with practical demonstrations.',
    image: '/webinar.jpg'
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for exciting hackathons, webinars, workshops, and networking events to enhance your skills and expand your network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm`}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter('hackathon')} 
              className={`px-6 py-2 rounded-full ${filter === 'hackathon' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm`}
            >
              Hackathons
            </button>
            <button 
              onClick={() => setFilter('webinar')} 
              className={`px-6 py-2 rounded-full ${filter === 'webinar' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm`}
            >
              Webinars
            </button>
            <button 
              onClick={() => setFilter('workshop')} 
              className={`px-6 py-2 rounded-full ${filter === 'workshop' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm`}
            >
              Workshops
            </button>
            <button 
              onClick={() => setFilter('meetup')} 
              className={`px-6 py-2 rounded-full ${filter === 'meetup' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'} hover:bg-blue-500 hover:text-white transition-colors backdrop-blur-sm`}
            >
              Meetups
            </button>
          </motion.div>
          


          {/* CURRENTLY THE EVENTS ARE ON HOLDE, WILL BE ADDED LATER, INSTEAD WERE GONNA DISPLAY A BIG 'COMONG SOON' */}
          <h1 className='text-7xl font-semibold text-center mt-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent py-5'>coming soon</h1>
          {/* Events Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4 text-white">
                  <div className="text-center">
                    <span className="text-sm uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">{event.type}</span>
                    <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4 text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 transform">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div> */}
          
          {filteredEvents.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-400">No events found for this category. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Want to Host an Event?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have an idea for a workshop, webinar, or meetup? Partner with us to reach our community of passionate developers.
            </p>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}