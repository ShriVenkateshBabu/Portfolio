import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from '../lib/utlis'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";


const ContactSection = () => {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.loading("Sending message...", { id: "send" });

        emailjs
            .sendForm(
                "service_is0lwdi",
                "template_zz99psn",
                formRef.current,
                "tRAZhXt96kijlxw0s"
            )
            .then(() => {
                toast.success("Message sent successfully!", { id: "send" });
                formRef.current.reset();
            })
            .catch((error) => {
                toast.error("Failed to send message!", { id: "send" });
                console.log(error);
            });
    };

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30' >
            <div className='container mx-auto m-w-5xl'>
                <h2 className='text-3xl md:text-4xl mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center text-mutedforegorund mb-12 max-w-2xl mx-auto'>
                    Have a project in mind? Let's collaborate and bring your ideas to life!
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><Mail className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors duration-300'
                                        href="mailto:shrivenkatesh@gmail.com">shrivenkatesh@gmail.com</a>
                                </div>
                            </div>
                            {/* phone Number */}
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><Phone className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors duration-300'
                                        href="tel:+91 8056516506">+91 8056516506</a>
                                </div>
                            </div>
                            {/* location */}
                            <div className="flex items-start space-x-4">
                                <div className='p-3 rounded-full bg-primary/10'><MapPin className='h-6 w-6 text-primary' /></div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors duration-300'
                                        href='https://maps.app.goo.gl/hKy6FfSqSLZ2BSpSA'
                                    >Madurai, TamilNadu</a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a target='_blank' href='https://www.linkedin.com/in/shri-venkatesh-babu-bharaneedharan-592324274/'>
                                    <Linkedin
                                    />
                                </a>
                                <a target='_blank' href='https://www.instagram.com/v_e_n_k_y_2_9_1_9?igsh=MXFjY291ZW04dnQ1Yw=='>
                                    <Instagram />
                                </a>
                                <a target='_blank' href='https://www.facebook.com/shrivenku/directory_contact_info'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lf shadow-xs '>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                        <form ref={formRef}
                            onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden fous:ring-2 focus:ring-primary'
                                    placeholder='Enter Your Name'
                                />
                            </div>
                            {/* email */}
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                                <input type="email" id='Email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden fous:ring-2 focus:ring-primary'
                                    placeholder='john@gmail.com'
                                />
                            </div>
                            {/*  message*/}
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                                <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden fous:ring-2 focus:ring-primary resize-none'
                                    placeholder='Hello there, I would like to...'
                                />
                            </div>
                            <button type='submit' className={cn('cosmic-button w-full flex items-center justify-center gap-2')} >Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactSection
