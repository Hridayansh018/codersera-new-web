'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamMember = {
    img: string;
    name: string;
    position: string;
    linkedin?: string;
    instagram?: string;
};

const leaders: TeamMember[] = [
    {
        img: '/photos/me.jpg',
        name: 'ADITYA RAJ SRIVASTAVA',
        position: 'PRESIDENT & FOUNDER',
        linkedin: 'https://www.linkedin.com/in/aditya-raj-srivastava-401b75328',
        instagram: 'https://www.instagram.com/its.me._.adi/'
    },
    {
        img: '/photos/aman.jpg',
        name: 'AMAN SINGH',
        position: 'VICE PRESIDENT',
        linkedin: '#',
        instagram: 'https://www.instagram.com/aman17.05singh/'
    },
    {
        img: '/photos/v.jpg',
        name: 'KHUSHI GUPTA',
        position: 'VICE PRESIDENT',
        linkedin: '#',
        instagram: 'https://www.instagram.com/khuzhi_.04/'
    },
    {
        img: '/photos/ayushi.jpg',
        name: 'AYUSHI RAI',
        position: 'SOCIAL MEDIA HEAD',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/aranjay.jpg',
        name: 'ARANJAY GUPTA',
        position: 'DISCIPLINARY HEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/aranjay.14/'
    },
    {
        img: '/photos/yasharth.png',
        name: 'YASHARTH SHRINET',
        position: 'HEAD COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/yasharth__shrinet/'
    },
    {
        img: '/photos/khushi.jpg',
        name: 'KHUSHI SINGH',
        position: 'HEAD COORDINATOR',
        linkedin: 'https://www.linkedin.com/in/khushi-singh-9ab111235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'https://www.instagram.com/khushisngh15_/r'
    }
];

const coreMembers: TeamMember[] = [
    {
        img: '/photos/arush.jpg',
        name: 'ARUSH MISHRA',
        position: 'AI-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/not.arush/'
    },
    {
        img: '/photos/pratyaksh.jpg',
        name: 'PRTYAKSH',
        position: 'AI-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/pratyaksh_1627/'
    },
    {
        img: '/photos/madhur.jpg',
        name: 'MADHUR RASTOGI',
        position: 'AIML-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/its.madhur_.19/'
    },
    {
        img: '/photos/ashish.jpg',
        name: 'ASHISH',
        position: 'AIML-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/the_atulniyeashish/'
    },
    {
        img: '/photos/ansh.jpg',
        name: 'ANSH SINGH',
        position: 'DS-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/rqwler/'
    },
    {
        img: '/photos/KARTIKEY.webp',
        name: 'KARTIKEY',
        position: 'DS LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/_kartiike_/'
    },
    {
        img: '/photos/KISHAN.jpg',
        name: 'KISHAN',
        position: 'IT LEAD',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/AMIT.jpg',
        name: 'AMIT',
        position: 'IT LEAD',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/hardy.png',
        name: 'HRIDYANSH',
        position: 'TECH-LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/__hridayansh/'
    },
    {
        img: '/photos/AYUSH.jpg',
        name: 'AYUSH',
        position: 'CYS LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/aayush_p.s/'
    },
    {
        img: '/photos/VEER.jpg',
        name: 'VIJENDRA',
        position: 'CSE LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/mrveer_official/'
    },  
    {
        img: '/photos/van.jpg',
        name: 'VANSHIKA TYAGI ',
        position: 'IOT LEAD',
        linkedin: '#',
        instagram: 'https://www.instagram.com/vanshika_736/'
    },
     {
        img: '/photos/van.jpg',
        name: 'SIMMI SINGH ',
        position: 'IOT LEAD',
        linkedin: 'https://www.linkedin.com/in/simmisingh1?trk=contact-info',
        instagram: 'https://www.instagram.com/simmiiii_singh?igsh=MndlaG85Zno2Nngy'
    },
    {
        img: '/photos/kajal.jpg',
        name: 'KAJAL MISHRA',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },          
    {
        img: '/photos/divyanshi.jpg',
        name: 'DIVYANSHI',
        position: 'COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/divyanshi_goyl/'
    },
    {
        img: '/photos/suhani.jpg',
        name: 'SUHANI',
        position: 'COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/suhanibansal67/'
    },
    {
        img: '/photos/sakshi.jpg',
        name: 'SAKSHI',
        position: 'COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/sakshi_dubey_0004/'
    },
    {
        img: '/photos/SRISHTI.jpg',
        name: 'SRISHTI',
        position: 'COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/srishtiii_kumari/'
    },
    {
        img: '/photos/aditya.png',
        name: 'ADITYA PATEL',
        position: 'COORDINATOR & EDITOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/adityapatel_0812/'
    },
    {
        img: '/photos/aaditya.jpg',
        name: 'AADITYA SRIVASTAVA',
        position: 'COORDINATOR & EDITOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/iownxeno/'
    },

    {
        img: '/photos/varnika.jpg',
        name: 'VARNIKA OJHA',
        position: 'COORDINATOR',
        linkedin: '#',
        instagram: 'https://www.instagram.com/varnika_ojha/'
    },
    {
        img: '/photos/kaustubhi.jpg',
        name: 'KAUSTUBHI DUTTA',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/vanshika.jpg',
        name: 'VANSHIKA SINGH',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/anshika.jpg',
        name: 'ANSHIKA MISHRA ',
        position: 'MEDIA TEAM ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/kavya.jpg',
        name: 'KAVYA PANT',
        position: 'MEDIA TEAM ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/keshav.jpg',
        name: 'KESHAV',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/lakshya.jpg',
        name: 'LAKSHYA',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/rishu.jpg',
        name: 'RISHU JHA',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/aakrity.jpg',
        name: 'AAKRITY SINGH',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/divyanshu.jpg',
        name: 'DIVYANSHSU ANAND',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    },
    {
        img: '/photos/krati.jpg',
        name: 'KRATI CHAUHAN',
        position: 'COORDINATOR ',
        linkedin: '#',
        instagram: '#'
    }
].map(member => {
    if (member.img && !member.img.startsWith('/photos/')) {
        member.img = `/photos/${member.img}`;
    }
    return member;
});


const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => (
    <motion.div 
        className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="relative h-[450px] w-full">
            <Image 
                src={member.img} 
                alt={member.name} 
                fill
                className="object-cover" 
                onError={(e) => { e.currentTarget.src = '/photos/logo.jpg'; }} // Fallback image
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
            <p className="text-blue-400 mb-4">{member.position}</p>
            <div className="flex space-x-4">
                {member.linkedin && member.linkedin !== '#' && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                )}
                {member.instagram && member.instagram !== '#' && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full">
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
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind CodersEra who are dedicated to building and nurturing our tech community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Core Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Passionate about technology and community building? We&lsquo;re always looking for enthusiastic individuals to join our team.
            </p>
            <a 
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
