import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold">FaceForm</div>
                <div className="flex items-center ml-4">
                    <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
