import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import heroImage from '../../assets/1646585611024-01.jpeg'
import './Home.css'
import resume from '../../assets/resume.pdf'
import image from '../../assets/nextjs.png'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

    // const onButtonClick = () => {
    //     // using Java Script method to get PDF file
    //     fetch(`${resume}`).then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = `${resume}`;
    //             alink.click();
    //         })
    //     })
    // }

    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black
        to-gray-800 '
        >
            <div className='max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h4 className='text-4xl text-white py-4 '>I,m Tanvir Ahmed Rifat</h4>
                    <span className='text-accent text-bold text-5xl mt-2'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Mern-Stack Developer', 'Front-End Developer', 'Full-Stack Developer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>


                    <div>
                        <a href={resume} download className='btn group btn-primary mt-3'>
                            DownLoad Resume
                            <span className='ml-4 group-hover:rotate-90 duration-300 '>
                                <FaArrowCircleRight size={25}></FaArrowCircleRight>
                            </span>
                        </a>

                    </div>
                </div>
                <div>
                    <img src={heroImage} className='hero ml-5 rounded-2xl mx-auto w-2/3 md:w-full' alt="my profile" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" />
                </div>
            </div>
        </div>
    );
};

export default Home;

