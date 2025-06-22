'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-transparent">
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
              About CodersEra
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A community built by developers, for developers. Learn about our mission, values, and the team behind CodersEra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At CodersEra, we believe in the power of community and collaboration. Our mission is to create a vibrant ecosystem where developers can connect, learn, and grow together.
              </p>
              <p className="text-lg text-gray-300">
                We strive to break down barriers in the tech industry by providing accessible resources, networking opportunities, and a supportive environment for developers at all stages of their journey.
              </p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-sm p-8"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)"}}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <div className="w-full h-full flex items-center justify-center text-white text-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Empowering Developers</h3>
                      <p>Through knowledge sharing, mentorship, and collaborative projects</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at CodersEra.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Inclusivity',
                description: 'We believe in creating a welcoming space for everyone, regardless of background or experience level.',
                icon: '🤝'
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and embrace new technologies and approaches.',
                icon: '💡'
              },
              {
                title: 'Collaboration',
                description: 'We believe that the best solutions come from working together and sharing knowledge.',
                icon: '🔄'
              },
              {
                title: 'Growth',
                description: 'We are committed to continuous learning and personal development.',
                icon: '📈'
              },
              {
                title: 'Quality',
                description: 'We strive for excellence in everything we do, from code to community interactions.',
                icon: '✨'
              },
              {
                title: 'Accessibility',
                description: 'We make knowledge and resources available to everyone who wants to learn.',
                icon: '🔓'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From a small group of passionate developers to a thriving community.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                year: '2020',
                title: 'The Beginning',
                description: 'CodersEra started as a small meetup group of passionate developers looking to share knowledge and collaborate on projects.'
              },
              {
                year: '2021',
                title: 'Growing Community',
                description: 'We expanded our reach through virtual events, welcoming members from around the world and diversifying our community.'
              },
              {
                year: '2022',
                title: 'First Hackathon',
                description: 'We organized our first major hackathon, bringing together hundreds of developers to solve real-world problems.'
              },
              {
                year: '2023',
                title: 'Expanding Horizons',
                description: 'We launched mentorship programs, workshops, and partnered with tech companies to provide more opportunities for our members.'
              },
              {
                year: 'Today',
                title: 'A Thriving Ecosystem',
                description: 'CodersEra has evolved into a comprehensive platform for developers to learn, connect, and grow in their careers.'
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full md:w-1/4 text-center md:text-right">
                  <div className="text-2xl font-bold text-blue-400">{milestone.year}</div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold mb-3 text-white">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}