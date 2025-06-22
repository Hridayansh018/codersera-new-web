'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CommunityPage() {
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
              Our Community
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join a thriving network of developers, designers, and tech enthusiasts who share knowledge, collaborate on projects, and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Community Features</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow as a developer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Discussion Forums',
                description: 'Engage in meaningful conversations about programming languages, frameworks, career advice, and more.',
                icon: (
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                )
              },
              {
                title: 'Project Collaboration',
                description: 'Find teammates for your projects or join existing ones to build your portfolio and gain real-world experience.',
                icon: (
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Mentorship Program',
                description: 'Connect with experienced developers who can guide you through technical challenges and career decisions.',
                icon: (
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Resource Library',
                description: 'Access a curated collection of tutorials, articles, videos, and tools to enhance your skills.',
                icon: (
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                )
              },
              {
                title: 'Job Board',
                description: 'Discover job opportunities shared by community members and partner companies.',
                icon: (
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                )
              },
              {
                title: 'Virtual Meetups',
                description: 'Join regular online gatherings to network, share knowledge, and stay connected with the community.',
                icon: (
                  <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Community Voices</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Hear from our members about their experiences in the CodersEra community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Being part of CodersEra has accelerated my growth as a developer. The mentorship and resources available are invaluable.",
                name: "Jamie Smith",
                role: "Frontend Developer"
              },
              {
                quote: "I found my current job through a connection I made at a CodersEra hackathon. This community has changed my career trajectory.",
                name: "Raj Patel",
                role: "Full Stack Engineer"
              },
              {
                quote: "The supportive environment at CodersEra makes it easy to ask questions and learn from others. It's like having hundreds of colleagues ready to help.",
                name: "Maria Rodriguez",
                role: "Junior Developer"
              },
              {
                quote: "I've collaborated on three open-source projects through CodersEra. The connections and experience I've gained are priceless.",
                name: "Chris Johnson",
                role: "Software Engineer"
              },
              {
                quote: "As someone transitioning into tech, CodersEra provided the guidance and resources I needed to make a successful career change.",
                name: "Taylor Kim",
                role: "Career Switcher"
              },
              {
                quote: "The workshops and webinars have kept me up-to-date with the latest technologies. CodersEra is my go-to resource for continuous learning.",
                name: "Olivia Chen",
                role: "DevOps Engineer"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 text-4xl text-gray-700">❝</div>
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Community CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">Become a part of CodersEra today and connect with like-minded developers who are passionate about technology and growth.</p>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}