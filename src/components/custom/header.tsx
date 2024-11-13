import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-xl font-bold">Leonardo Martins</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/lmartns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-2xl hover:text-gray-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardomartinsdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-2xl hover:text-gray-300"
            />
          </a>
          <a
            href="https://dev.to/lmartns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDev}
              className="text-white text-2xl hover:text-gray-300"
            />
          </a>
          <img
            src="https://github.com/lmartns.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
