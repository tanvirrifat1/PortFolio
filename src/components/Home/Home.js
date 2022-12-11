import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import heroImage from '../../assets/1646585611024-01.jpeg'
import './Home.css'
import resume from '../../assets/Rifat-Front-End-resume.pdf'

const Home = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(`${resume}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${resume}`;
                alink.click();
            })
        })
    }

    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black
        to-gray-800 '
        >
            <div className='max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur laborum neque officiis, mollitia quisquam at quaerat hic a. Porro facilis dignissimos corrupti. Quos culpa tenetur deserunt cumque delectus vel optio.</p>

                    <div>
                        <button onClick={onButtonClick} className='btn group btn-primary'>
                            DownLoad Resume
                            <span className='ml-4 group-hover:rotate-90 duration-300 '>
                                <FaArrowCircleRight size={25}></FaArrowCircleRight>
                            </span>
                        </button>

                    </div>
                </div>
                <div>
                    <img src={heroImage} className='hero rounded-2xl mx-auto w-2/3 md:w-full' alt="my profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;

