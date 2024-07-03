import React from 'react'
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub, FaReact, FaAngular } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
          <a className="bannerIcon" href="https://wa.me/+385955749860">
            <FaWhatsapp />
          </a>
          <a className="bannerIcon" href="https://www.facebook.com/ante.tokicc/">
            <FaFacebookF />
          </a>
          <a className="bannerIcon" href="https://www.linkedin.com/in/ante-tokic/">
            <FaLinkedinIn />
          </a>
          <a className="bannerIcon" href="https://github.com/atokic">
            <FaGithub />
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-3">
            <a className="bannerIcon" href="https://react.dev/">
              <FaReact />
            </a>
            <a className="bannerIcon" href="https://angular.io/">
              <FaAngular />
            </a>
            <a className="bannerIcon" href="https://www.adobe.com/products/photoshop.html">
              <SiAdobephotoshop />
            </a>
            <a className="bannerIcon" href="https://www.adobe.com/products/illustrator.html">
              <SiAdobeillustrator />
            </a>
            <a className="bannerIcon" href="https://helpx.adobe.com/support/xd.html">
              <SiAdobexd />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media