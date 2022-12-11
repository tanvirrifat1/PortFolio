import arrayDestruct from "../../assets/New folder/car1.webp";
import installNode from "../../assets/New folder/NewaArg.webp";
import navbar from "../../assets/New folder/Food.webp";
import reactParallax from "../../assets/New folder/Doctors.webp";
import reactSmooth from "../../assets/New folder/4.jpg";
import reactWeather from "../../assets/New folder/Coding.webp";
import './PortFolio.css'
import { FaGithub, FaLink } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import Modal from "../Modal/Modal";



const Portfolio = () => {



    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            link: "https://final-project-3130f.web.app/",
            code: "https://github.com/tanvirrifat1/Car-portal-Client",
            details: " It is a dentist's website, Anyone can book an appointment for all dentist's services No one can book more than one appointment for one service with one email Admin can add and remove a doctor for the services that are available Technology Used Reactjs ReactRouter Firebase Tailwind NodeJS Express JS MongoDB "
        },
        {
            id: 2,
            src: reactParallax,
            name: 'Doctor-Portal',
            link: "https://doctors-portal-d24d1.web.app/",
            code: "https://github.com/tanvirrifat1/doctors-portal-client",

        },
        {
            id: 3,
            src: navbar,
            name: "Fast-Food",
            link: "https://assignment-project-33308.web.app/?fbclid=IwAR0hDcv7V8ELNEva2wk0YG8V6uFfnrZHGs-7hNQRGLMHB0S7gM9ZWc61fyY",
            code: "https://github.com/tanvirrifat1/assignment-11-client",

        },
        {
            id: 4,
            src: reactSmooth,
            name: 'Genius Car',
            link: "https://genius-car-79e39.web.app/?fbclid=IwAR1yRMGWllRv15lNESlGS9WjtXg4p4qkYGGWN_kTcyzhQSjn6TrTQO84ugs",
            code: "https://github.com/tanvirrifat1/genius-car-client",

        },
        {
            id: 5,
            src: installNode,
            name: 'World News',
            link: "https://world-news-d408b.web.app/?fbclid=IwAR3OesTv5a2J9gcQoJgU83F41A4yAMUCJvgqAS8xs2TNHdh3iwP93V-Kkf8",
            code: "https://github.com/tanvirrifat1/world-news-client",

        },
        {
            id: 6,
            src: reactWeather,
            name: 'React Learning',
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
                    <p className="text-4xl font-bold inline  border-gray-500">
                        Portfolio
                    </p>
                    <br />
                    <span className='text-blue-400 text-bold text-2xl mt-6'>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Check out some of my project right here',]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>

                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, code, link, details, name }) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
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

                                <button>
                                    <label htmlFor="my-modal-6" className="btn">Details</label>
                                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <p className="text-black bg-white p-4">{details}</p>
                                            <img src={src} alt="" />
                                            <p className="text-black bg-white p-4 text-2xl font-bold">{name}</p>
                                            <div className="modal-action">
                                                <label htmlFor="my-modal-6" className="btn">X</label>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Portfolio;