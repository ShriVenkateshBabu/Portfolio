import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'
import Resume from '../../public/projects/Resume.pdf'
const AboutSection = () => {
  return (
    <section id='about' className='py-4 px-4 relative'>
      <div className='container max-w-5xl mx-auto '>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold'>Passionate Techie</h3>
            <p className='text-muted-foreground'>
              Enthusiastic React & Laravel developer passionate about creating reliable and easy-to-use web applications. Always exploring new tools and technologies.
            </p>

            <p className='text-muted-foreground'>
              Building smart, scalable, and stylish web solutions with React and Laravel. Driven by curiosity and creativity.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Code Your Dreams</a>
              <a href={Resume}className='px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className='text-muted-foreground'>I specialize in building responsive and user-friendly web applications using React and Laravel.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">User Experience</h4>
                  <p className='text-muted-foreground'>
                    I focus on creating intuitive and engaging user interfaces that provide smooth and enjoyable experiences across all devices.
                  </p>
                </div>

              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p className='text-muted-foreground'>
                    Worked as a Frontend Developer at Regami Solutions and currently serving as a Software Developer at SR University, building reliable and scalable applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection
