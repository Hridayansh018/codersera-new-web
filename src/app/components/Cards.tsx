import React from 'react'

const events = [
  {
    title: 'AI Workshop',
    image: '/AI.jpeg',
    desc: 'Learn the basics of Artificial Intelligence and Machine Learning',
  },
  {
    title: 'Hackathon 2024',
    image: '/Hackathon.jpeg',
    desc: '24 to 48-hour coding challenge with amazing prizes',
  },
  {
    title: 'Cloud Bootcamp',
    image: '/cloud.jpeg',
    desc: 'Intensive training on modern cloud technologies',
  },
];

const Cards = () => {
  return (
    <section className="w-full min-h-[60vh] py-16 px-2 md:px-8 flex flex-col items-center justify-center bg-white/10">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 bg-black/80 hover:shadow-white/30 shadow-lg transition-all ease-in-out p-5 px-20 rounded-xl">Upcoming Events</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div
            key={event.title}
            className="relative rounded-2xl p-6 bg-black/30 backdrop-blur-xl shadow-xl border border-white/10 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
          >
            {/* Glass overlay for modern effect */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-2xl z-0 group-hover:bg-black/20 transition" />
            <div className="relative z-10 flex flex-col h-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-6 shadow-md border border-white/10"
                style={{ background: '#111' }}
              />
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{event.title}</h3>
              <p className="text-[#c7d0e6] mb-6 text-base md:text-lg font-medium">{event.desc}</p>
              <div className="mt-auto flex justify-end">
                <span className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold shadow hover:from-purple-700 hover:to-blue-700 transition-all">Coming Soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards