import React from "react";

const About = () => {

    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="">
                    <p className="text-4xl font-bold  border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-20">
                    I'm a Mern-Stack Web Developer I am interested in working with any company
                    that thinks my skills will be helpful to them. If you are looking for someone like me, please let me know.

                    TOP SKILL
                    Expertise:
                    Html5, CSS3, Bootstrap5, Tailwind CSS,
                    React-Bootstrap, JavaScript, ES6, Rest API,
                    React.JS, React-Router, Firebase -Authentication,
                    Node.JS, Express.JS, MongoDB

                    Tools:
                    VS Code Editor, GitHub, Netlify, Firebase, Figma.


                    Others Expertise:
                    Figma & React
                    <br />
                    Email: rifatkhan5567790@gmail.com
                    WhatsApp: 01633912193
                </p>

            </div>
        </div>
    );
};

export default About;