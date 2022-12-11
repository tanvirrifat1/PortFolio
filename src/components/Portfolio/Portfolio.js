import React from "react";
import arrayDestruct from "../../assets/New folder/car1.webp";
import installNode from "../../assets/New folder/NewaArg.webp";
import navbar from "../../assets/New folder/Food.webp";
import reactParallax from "../../assets/New folder/Doctors.webp";
import reactSmooth from "../../assets/New folder/4.jpg";
import reactWeather from "../../assets/New folder/Coding.webp";
import './PortFolio.css'
import { FaGithub, FaLink } from "react-icons/fa";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            link: "https://final-project-3130f.web.app/",
            code: "https://github.com/tanvirrifat1/Car-portal-Client",
        },
        {
            id: 2,
            src: reactParallax,
            link: "https://doctors-portal-d24d1.web.app/",
            code: "https://github.com/tanvirrifat1/doctors-portal-client"
        },
        {
            id: 3,
            src: navbar,
            link: "https://assignment-project-33308.web.app/?fbclid=IwAR0hDcv7V8ELNEva2wk0YG8V6uFfnrZHGs-7hNQRGLMHB0S7gM9ZWc61fyY",
            code: "https://github.com/tanvirrifat1/assignment-11-client"
        },
        {
            id: 4,
            src: reactSmooth,
            link: "https://genius-car-79e39.web.app/?fbclid=IwAR1yRMGWllRv15lNESlGS9WjtXg4p4qkYGGWN_kTcyzhQSjn6TrTQO84ugs",
            code: "https://github.com/tanvirrifat1/genius-car-client"
        },
        {
            id: 5,
            src: installNode,
            link: "https://world-news-d408b.web.app/?fbclid=IwAR3OesTv5a2J9gcQoJgU83F41A4yAMUCJvgqAS8xs2TNHdh3iwP93V-Kkf8",
            code: "https://github.com/tanvirrifat1/world-news-client"
        },
        {
            id: 6,
            src: reactWeather,
            link: "https://vermillion-granita-d89a19.netlify.app/?fbclid=IwAR1uB0qhG-uKbIiO40xaM6fzgydC28NfddULL5NeXfoMPID7pQXtnPsumqE",
            code: "https://github.com/tanvirrifat1/assignment-10-client",
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, code, link }) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105 pic"
                            />
                            <div className="flex mt-8 justify-between">
                                <div className="flex justify-between">
                                    <a href={link}><FaLink className="ml-3" size={30}>{link}</FaLink></a>
                                    <a href={code}><FaGithub className="ml-4" size={30}>{code}</FaGithub></a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;