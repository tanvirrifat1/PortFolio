import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import firebase from '../../assets/portfolio/firebase.png'
import nodeJS from '../../assets/portfolio/node-js-new.png'
import bootstrap from '../../assets/portfolio/Bootstrap.png'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },

        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },

        {
            id: 6,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 7,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-100",
        },
        {
            id: 8,
            src: nodeJS,
            title: "NodeJS",
            style: "shadow-blue-500/100",
        },
        {
            id: 9,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-indigo-500/100",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold  border-gray-500 p-2 inline mb-8">
                        Skills
                    </p>
                    <br />
                    <span className='text-blue-400 text-bold text-2xl mt-10'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['These are the technologies I ve worked with',]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0" data-aos="zoom-out" data-aos-duration="2000">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;