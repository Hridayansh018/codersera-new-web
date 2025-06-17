import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black/60 backdrop-blur-xs'>
      <section className=" text-[#b3b8c5] py-12 px-4 md:px-16 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a084f7] text-center mb-10">Contact Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-[#23293a] to-[#23293a]/80 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="mb-4 flex items-start gap-3">
              <span className="text-[#8b7cf6] text-2xl">📍</span>
              <div>
                <div className="font-semibold text-white">Our Location</div>
                <div>Noida Institute of Engineering and Technology<br />Greater Noida, Uttar Pradesh 201310</div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[#8b7cf6] text-2xl">✉️</span>
              <div>
                <div className="font-semibold text-white">Email Us</div>
                <div>coders.eraa@gmail.com</div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[#8b7cf6] text-2xl">📞</span>
              <div>
                <div className="font-semibold text-white">Call Us</div>
                <div>+91 917806003<br />(President)</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-semibold text-white mb-2">Follow Us</div>
              <div className="flex gap-4">
                <a href="#" className="text-[#4f8cff] hover:text-[#6a5af9] text-2xl" aria-label="LinkedIn">🔗</a>
                <a href="#" className="text-[#4f8cff] hover:text-[#6a5af9] text-2xl" aria-label="Instagram">📸</a>
                <a href="#" className="text-[#4f8cff] hover:text-[#6a5af9] text-2xl" aria-label="WhatsApp">💬</a>
              </div>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="flex justify-center items-center">
            <iframe className='rounded-2xl py-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28060.32888310369!2d77.47016222292659!3d28.463246480579468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1750190449103!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <footer className=" text-white pt-12 pb-4 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b7cf6] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Events</Link></li>
              <li><Link href="/about" className="hover:text-white transition">Our Team</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b7cf6] mb-4">Contact Info</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#8b7cf6]">✉️</span>
              <span>coders.eraa@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#8b7cf6]">📞</span>
              <span>+91 9170806003 (President)</span>
            </div>
          </div>
          {/* Join Our Community */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b7cf6] mb-4">Join Our Community</h3>
            <p className="mb-4">Be part of our growing tech community!</p>
            <button className="bg-gradient-to-r from-[#4f8cff] to-[#6a5af9] text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-[#6a5af9] hover:to-[#4f8cff] transition">Join Now</button>
          </div>
          {/* Our Team Card */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b7cf6] mb-4">Our Team</h3>
            <div className="bg-[#23293a] rounded-xl p-6 flex flex-col items-center shadow-md">
              {/* <img src="https://via.placeholder.com/100x100.png?text=Team" alt="Team" className="w-24 h-24 rounded-full mb-4" /> */}
              <h4 className="text-lg font-bold text-white mb-2">Meet Our Team</h4>
              <p className="mb-4 text-center text-[#b3b8c5]">Learn more about the brilliant minds behind Coders ERA.</p>
              <a href='https://coder-era-team.vercel.app/' className="bg-gradient-to-r from-[#4f8cff] to-[#6a5af9] text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-[#6a5af9] hover:to-[#4f8cff] transition">View Team</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#23293a] mt-10 pt-6 text-center text-[#b3b8c5] text-sm">
          © 2024 Coders ERA. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer