import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactModel from '../components/Models/ContactModel'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef((null));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = async (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)

    try{
        await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        setFormData({
            name: '',
            email: '',
            message: ''
        })
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 4000)
    }catch(error){
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    }finally{
        setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full section-padding pb-20 md:pb-40">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="card-border rounded-xl px-6 py-4 bg-black-200 flex items-center gap-3 shadow-2xl">
            <div className="size-8 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">Message sent successfully!</p>
              <p className="text-white-50 text-sm">I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader 
          title="Let's Connect"
          sub="📬 Get in touch — I'd love to hear from you"
        />
        
        <div className="mt-16 grid-12-cols">
          {/* Left Side - Contact Form */}
          <div className="xl:col-span-5 card-border rounded-xl p-8">
            <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white text-lg font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-[#cd7c2e]/15 border border-[#cd7c2e]/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#cd7c2e] transition-colors placeholder:text-white/70"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-[#cd7c2e]/15 border border-[#cd7c2e]/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#cd7c2e] transition-colors placeholder:text-white/70"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white text-lg font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message or just say hi..."
                  rows="6"
                  className="bg-[#cd7c2e]/15 border border-[#cd7c2e]/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#cd7c2e] transition-colors resize-none placeholder:text-white/70"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="cta-button group mt-4"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                <div className="bg-circle" />
                <span className="text relative z-10">
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </span>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </button>
            </form>
          </div>

          {/* Right Side - 3D Model */}
          <div className="xl:col-span-7 flex items-center justify-center bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactModel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
