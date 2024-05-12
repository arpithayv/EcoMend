import React, { useState, useEffect } from "react";
import "./styles.css";
import Carousel from "./carousel.jsx"; // Assuming you have a CSS file for styling
import Wtd from "./wtd.jsx";

const CenterImage = () => {
  return (
    <div className="center-image">
      <img src="/images/Rectangle 44.jpg" alt="Center Image" />
      <p style={{ fontSize: "larger" }}>
        "Linking social impact projects with investors to drive sustainability.
        Join us in fostering positive change and creating a better future."
      </p>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq ${isActive ? "active" : ""}`}>
      <div className="question" onClick={toggleActive}>
        {question}
      </div>
      {isActive && <div className="answer">{answer}</div>}
    </div>
  );
};

const NewApp = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.9) {
        element.classList.add("active");
      }
    });
  };

  // Effect hook to add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <CenterImage />
      <Carousel />
      <Wtd />
      <div className="faq-container fade-in">
        <h2 className="faq-heading">FAQs</h2>
        <FAQ
          question="+ Why should I consider joining?"
          answer="Joining this social-impact project offers an opportunity to contribute meaningfully to a cause larger than yourself. By becoming a part of our team, you'll be actively involved in making a positive difference in the world. Through collaboration and collective effort, we aim to address pressing issues and create lasting change. Your involvement will not only enrich your own life but also leave a lasting impact on communities in need. Join us to be a catalyst for positive social transformation."
        />
        <FAQ
          question="+ Am I eligible to apply?"
          answer="Certainly! We encourage anyone interested to apply, regardless of age. For applicants below 18 years old, we kindly request that their applications be submitted by a parent or guardian. This ensures that all participants can engage safely and responsibly in our social-impact project. We value the enthusiasm and involvement of individuals of all ages in our mission."
        />
        <FAQ
          question="+ How is the program executed? Is it all online?"
          answer="Our program is designed to be flexible and inclusive. While certain aspects may take place online, such as virtual meetings and collaboration tools, we also incorporate offline components when necessary. This hybrid approach ensures accessibility for all participants and maximizes our impact. Whether online or offline, our focus remains on effective execution, meaningful engagement, and achieving our social-impact goals together. "
        />
        <FAQ
          question="+ What kind of projects will students work on? "
          answer="Students will work on a variety of projects focused on addressing social issues and creating positive change. These projects may include community outreach programs, environmental initiatives, educational campaigns, or advocacy efforts. Students will have the opportunity to explore their interests, develop leadership skills, and collaborate with peers to make a meaningful impact in areas that matter to them. The projects will be designed to empower students to contribute to a better world while gaining valuable experience and skills."
        />
        <FAQ
          question="+ What does a live project imply?"
          answer="A live project entails actively participating in real-world initiatives with tangible outcomes. It involves hands-on engagement, decision-making, and witnessing the direct impact of your efforts in real time. In the context of a social-impact project, this could mean working directly with communities, implementing interventions, or driving initiatives aimed at creating positive change."
        />
        <FAQ
          question="+ Do I get a certificate? Are there any specific requirements for graduation?"
          answer="Yes, upon successful completion of the program, participants typically receive a certificate acknowledging their participation and contributions. Specific requirements for graduation may vary depending on the program, but typically include active participation in project activities, completion of assigned tasks or milestones, and adherence to program guidelines and deadlines. Additionally, demonstrating key skills, such as teamwork, leadership, and problem-solving, may also be important criteria for graduation."
        />
      </div>
    </div>
  );
};

export default NewApp;
