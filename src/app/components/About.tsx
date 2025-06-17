import React from 'react'

const features = [
  {
    title: 'Learn Together',
    icon: '★',
    color: '',
    text: 'Join our vibrant community of passionate developers where knowledge flows freely. We believe in the power of collaborative learning and hands-on experience.',
    bullets: [
      'Weekly coding challenges',
      'Structured peer mentorship programs for skill development',
      'Interactive workshops led by industry experts',
      'Study groups for latest technologies and frameworks',
      'Regular code reviews and feedback sessions',
    ],
  },
  {
    title: 'Share Knowledge',
    icon: '',
    color: '',
    text: 'Contribute to our collective growth by sharing your expertise. Every member has unique insights that can benefit the community.',
    bullets: [
      'Technical blog writing with professional guidance',
      'Lightning talks and tech presentations',
      'Comprehensive code review sessions',
      'Documentation workshops and best practices',
      'Community-driven learning resources',
    ],
  },
  {
    title: 'Build Projects',
    icon: '',
    color: '',
    text: 'Turn ideas into reality through collaborative projects. Develop practical skills while building impressive portfolio pieces.',
    bullets: [
      'Open source project contributions and maintenance',
      'Team-based hackathon projects with mentoring',
      'Portfolio development workshops',
      'Industry-standard development practices',
      'Project management and collaboration skills',
    ],
  },
];

const missionVision = [
  {
    title: 'Our Mission',
    color: '',
    text: 'To foster a collaborative environment where developers can learn, grow, and innovate together while building meaningful projects that make a difference.',
  },
  {
    title: 'Our Vision',
    color: '',
    text: 'To become a leading tech community that empowers developers to reach their full potential and create innovative solutions for real-world challenges.',
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 px-2 md:px-8 flex flex-col items-center justify-center bg-white/10">
      <h1 className='text-5xl text-white text-center mb-10 font-bold bg-black/60 px-20 hover:text-cyan-100 hover:shadow-white/20 shadow-xl transition-all ease-in-out backdrop-blur-xs rounded-xl p-5'>About Us</h1>
      {/* Features */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`relative rounded-2xl p-8 bg-black/30 backdrop-blur-xl shadow-xl border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden`}
            style={{ minHeight: '420px' }}
          >
            {/* Glass overlay for modern effect */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-2xl z-0 group-hover:bg-black/40 transition" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {feature.icon && <span className="text-xl text-blue-200 animate-pulse">{feature.icon}</span>}
                <h3 className="text-2xl font-bold text-blue-200 drop-shadow-md">{feature.title}</h3>
              </div>
              <p className="text-[#c7d0e6] mb-4 text-base md:text-lg font-medium">{feature.text}</p>
              <ul className="list-disc pl-5 space-y-1 text-[#e0e6f7] text-sm md:text-base">
                {feature.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Mission & Vision */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {missionVision.map((mv) => (
          <div
            key={mv.title}
            className={`relative rounded-2xl p-8 bg-black/30 backdrop-blur-xl shadow-xl border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl z-0 group-hover:bg-black/40 transition" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center drop-shadow-md">{mv.title}</h3>
              <p className="text-[#e0e6f7] text-center text-lg md:text-xl font-medium">{mv.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About