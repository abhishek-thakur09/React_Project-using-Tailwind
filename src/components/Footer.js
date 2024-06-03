import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-12 md:flex-row justify-between">
        <ul className="flex gap-4 font-playfair text-gray-400">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>

        <div className="flex gap-3">
          <img src="./assets/Help-Avatar.svg" alt="help" />
          <div>
            <p className="font-playfair">Have any questions?</p>
            <a href="#" className="font-lato font-medium">
              Talk to a specialist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
