import React from "react";
import "./wtd.css"; // Importing CSS file for styling
import { FaLightbulb, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa"; // Importing icons from react-icons library

const Wtd = () => {
  return (
    <div className="contar">
      <h1 className="heading">What can you do here?</h1>
      <div class="anything">
        <div className="container">
          <div className="box">
            <FaLightbulb className="icon" />
            <h2 className="box-heading">IDENTIFY</h2>
            <p className="description">
              We identify opportunities to address societal challenges while
              generating positive returns, fostering sustainable development,
              and promoting inclusive growth.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <FaMapMarkerAlt className="icon" />
            <h2 className="box-heading">BENEFIT</h2>
            <p className="description">
              It allows us to benefit from positive social and environmental
              outcomes, while also potentially generating financial returns.
              These projects can create tangible benefits such as improved
              livelihoods, environmental conservation, and community
              development.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <FaQuoteLeft className="icon" />
            <h2 className="box-heading">LEARN</h2>
            <p className="description">
              It provides opportunities to learn about various aspects of
              societal challenges, innovative solutions, and their impact on
              communities. Through participation, individuals gain insights into
              effective strategies for addressing complex issues, fostering
              empathy, and promoting meaningful change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wtd;
