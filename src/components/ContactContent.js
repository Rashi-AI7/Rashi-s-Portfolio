import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageCircle, Twitter } from 'lucide-react';
import './ContentStyle.css';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_wkj0b4i',
            'template_rg5pfnm',
            {
                name: formState.name,
                email: formState.email,
                message: formState.message,
                title: 'Portfolio Contact',
                time: new Date().toLocaleString(),
            },
            'eEjHxOyy3v0_Rj0zp'
        ).then(() => {
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setSnackbarOpen(true); // ✅ show snackbar 
            setTimeout(() => { 
            setSubmitted(false); 
            setSnackbarOpen(false); // ✅ auto-hide after 3s 
            }, 3000);
        }).catch((err) => {
            console.error('EmailJS error:', err);
        });
    };


    const socialLinks = [
        { name: 'GitHub', icon: <Github />, url: 'https://github.com/Rashi-AI7', color: 'hover:text-white' },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://linkedin.com/in/rashiai', color: 'hover:text-blue-400' },
        { name: 'Twitter', icon: <Twitter />, url: 'https://x.com/rashicodes', color: 'hover:text-blue-300' },
        { name: 'Gmail', icon: <Mail />, url: 'mailto:sachanrashi07@gmail.com', color: 'hover:text-red-400' },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="grid">
                    <div className="contact-info">
                        <h2 className="contact-heading">
                            Let's build <br />
                            <span className="gradient-text">together.</span>
                        </h2>
                        <p className="contact-subtitle">
                            Whether you have a question or just want to say hi, my inbox is always open.
                        </p>

                        <div className="social-blocks">
                            <div className="social-item">
                                <Mail size={24} />
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:sachanrashi07@gmail.com">sachanrashi07@gmail.com</a>
                                </div>
                            </div>

                            <div className="social-item">
                                <MessageCircle size={24} />
                                <div>
                                    <h4>Social Channels</h4>
                                    <div className="social-links">
                                        {socialLinks.map((link) => (
                                            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                required
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                required
                            ></textarea>
                            <button type="submit">
                                {submitted ? 'Message Sent!' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                        {snackbarOpen && (
                            <div className="snackbar">
                                Message sent successfully!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
