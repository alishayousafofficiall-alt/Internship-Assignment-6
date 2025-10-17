import React from "react";
import "./style.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="about-heading fade-in-up">About Us</h2>

      <div className="about-content">
        {/* Left Image */}
        <img
          src="/images/about1.jpg"
          alt="Donuts"
          className="fade-in-left"
        />

        {/* Text */}
            <p className="about-text fade-in">
          Welcome to our sweet little corner of happiness! 
          We are passionate about making delightful cakes, fluffy cupcakes, soft donuts, 
          aromatic coffees, and refreshing juices that brighten your day.  

          Every product is made with love, fresh ingredients, and a dedication to quality.  
          Whether you’re celebrating a birthday, grabbing a snack with friends, or just 
          enjoying a cup of coffee, our treats are designed to put a smile on your face.  

          Our mission is simple: to create moments of joy and sweetness for everyone who visits us.  
          From the first bite to the last sip, we promise you’ll taste the difference!
        </p>

        {/* Right Image */}
        <img
          src="/images/about2.jpg"
          alt="Cupcakes"
          className="fade-in-right"
        />
      </div>
    </div>
  );
}

export default AboutPage;
