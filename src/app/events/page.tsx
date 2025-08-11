'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import codesphere from '../../../public/codesphere.jpg';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'hackathon' | 'webinar' | 'workshop' | 'meetup';
  description: string;
  image: StaticImageData;
  link: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Codesphere',
    date: 'August 22, 2025',
    time: '10:00 AM',
    location: 'NIET, Greater noida',
    type: 'workshop',
    description: 'CodeSphere 2025 – a 6-hour speaker session that brings together top minds from the tech world!',
    image: codesphere,
    link:'https://devnovate.co/event/codesphere-2025'
  },
];

const filterButtons = [
  { key: 'all', label: 'All Events' },
  { key: 'hackathon', label: 'Hackathons' },
  { key: 'webinar', label: 'Webinars' },
  { key: 'workshop', label: 'Workshops' },
  { key: 'meetup', label: 'Meetups' },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  return (
    <div className="min-h-screen">
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
            {filterButtons.map((button) => (
              <button 
                key={button.key}
                onClick={() => setFilter(button.key)} 
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${
                  filter === button.key 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-300 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {button.label}
              </button>
            ))}
          </motion.div>

          {/* Coming Soon Message */}
          {/* <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent py-5 leading-tight'>
              Coming Soon
            </h1>
            <p className="text-gray-400 text-lg mt-4">Stay tuned for exciting events and workshops!</p>
          </motion.div> */}

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Header */}
                <div className="relative h-96 w-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Event Type Badge */}
                  {/* <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${
                      event.type === 'workshop' ? 'bg-green-500/80' :
                      event.type === 'hackathon' ? 'bg-red-500/80' :
                      event.type === 'webinar' ? 'bg-blue-500/80' :
                      'bg-purple-500/80'
                    }`}>
                      {event.type}
                    </span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-4">{event.title}</h2>
                  
                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  {event.description && (
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  )}
                  
                  {/* Register Button */}
                  <motion.a
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={event.link}
                    target="_blank" // optional: opens in new tab
                    rel="noopener noreferrer" // optional: security best practice
                  >
                    Register Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20 max-w-md mx-auto">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xl text-gray-400 mb-2">No events found</p>
                <p className="text-gray-500">Check back soon for new events in this category!</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10"
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
