import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vw7flis',
            'template_gfudgzk',
            form.current,
            'ftumh3iw7skXi5eFi')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent')
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Message Sent successfully', { autoClose: 1000 })
        e.target.reset()
    };

    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >

            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-gray-500">
                        Contact
                    </p>
                    <br />
                    <span className='text-blue-400 text-bold text-2xl mt-10'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Submit the form below to get in touch with me',]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="user_email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;