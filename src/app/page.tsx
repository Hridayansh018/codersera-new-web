'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BackgroundAnimation } from '@/components/common/BackgroundAnimation';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BackgroundAnimation />
      {/* Hero Section with Glowing Computer Screen */}
      <motion.section 
        className="relative py-20 md:py-28 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated glowing elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Welcome to CodersEra
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                A vibrant tech community empowering developers through networking, learning, and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Join Our Community
                </Link>
                <Link 
                  href="/events"
                  className="px-6 py-3 bg-white/10 text-blue-400 font-medium rounded-lg border border-blue-200/50 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Explore Events
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glowing computer screen effect */}
                <div className="absolute inset-0 -m-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
                <motion.div 
                  className="relative bg-white/5 rounded-xl shadow-2xl overflow-hidden border border-gray-200/20"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)"}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-1 bg-gray-900/50 flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="p-4 bg-gray-900/80 text-gray-100 font-mono text-sm">
                    <p className="typing-animation"><span className="text-green-400">$</span> Welcome to CodersEra</p>
                    <p className="typing-animation-delay-1"><span className="text-blue-400">&gt;</span> Connect with developers</p>
                    <p className="typing-animation-delay-2"><span className="text-purple-400">&gt;</span> Learn new technologies</p>
                    <p className="typing-animation-delay-3"><span className="text-yellow-400">&gt;</span> Build amazing projects</p>
                    <p className="typing-animation-delay-4 flex items-center"><span className="text-pink-400">&gt;</span> Join our community<span className="ml-1 animate-blink">_</span></p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Offer</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Join our community and unlock a world of opportunities for growth and collaboration.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Networking',
                description: 'Connect with like-minded developers and industry professionals to expand your network.',
                icon: (
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Learning Opportunities',
                description: 'Access workshops, webinars, and resources to enhance your skills and stay updated with the latest technologies.',
                icon: (
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                )
              },
              {
                title: 'Hackathons & Events',
                description: 'Participate in exciting hackathons and events to challenge yourself and showcase your skills.',
                icon: (
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Become a part of CodersEra and unlock endless opportunities for growth, learning, and collaboration.</p>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform inline-block"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
