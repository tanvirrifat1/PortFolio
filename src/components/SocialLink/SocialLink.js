import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/md-rifat-miah-48555b257/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/tanvirrifat1",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:rifatkhan5567790@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            style: "rounded-br-md",
            href: `https://drive.google.com/file/d/1-97WuL9wvoez11K8sUoQ5t3V6bZfbvL7/view`,
            download: true,
        },
    ];
    return (
        <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">

            <ul>
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            link.style
                        }
                    >
                        <a
                            href={link.href ? link.href : "/"}
                            className="flex justify-between items-center w-full text-white"
                            download={link.download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
// https://drive.google.com/file/d/1-97WuL9wvoez11K8sUoQ5t3V6bZfbvL7/view?usp=sharing
export default SocialLinks;
