import React from "react";
import AboutFaqs from "../../Components/AboutFaqs";

export default function About(props) {
  const { customStyle1, customStyle2 } = props;

  return (
    <div className="container my-5">
      <h2 className="pb-4 t-text-3xl">
        <strong>About Us</strong>
      </h2>
      <p className="t-leading-6 pb-3">
        Welcome to Tech Innovate, your go-to platform for the latest in
        technology and innovation. Our mission is to keep you informed and
        entertained with a unique blend of insightful articles, cutting-edge
        news, and lighthearted humor centered around tech.
      </p>
      <h3 className="pb-3">
        <b>Our Vision</b>
      </h3>
      <p className="t-leading-6 pb-3">
        At Tech Innovate, we believe that technology is the cornerstone of
        modern progress. Our vision is to create a space where enthusiasts,
        professionals, and curious minds can come together to explore the
        ever-evolving world of technology and innovation.
      </p>
      <h3 className="pb-3">
        <b>What We Offer</b>
      </h3>
      <ul className="pb-3">
        <li>
          <strong>In-Depth Articles: </strong>
          Explore comprehensive articles on the latest trends, groundbreaking
          technologies, and innovative solutions shaping the future.
        </li>
        <li>
          <strong>Daily Jokes: </strong> Enjoy a daily dose of humor with our
          tech-themed jokes, spanning categories like Programming, AI,
          Innovation, Science, and Engineering. It's the perfect blend of fun
          and learning.
        </li>
      </ul>
      <h3 className="pb-3">
        <b>Our Team</b>
      </h3>
      <p className="t-leading-6 pb-3">
        Our team is composed of passionate tech enthusiasts, writers, and
        developers who are dedicated to delivering high-quality content that
        informs, entertains, and inspires. We are committed to staying at the
        forefront of technology trends and providing our audience with fresh
        perspectives and valuable information.
      </p>
      <h3 className="pb-3">
        <b>Get In Touch</b>
      </h3>
      <p className="t-leading-6 pb-3">
        We love hearing from our users! Whether you have a question, feedback,
        or just want to say hello, feel free to reach out to us through our{" "}
        <a href="#">Contact Page</a>. We're always here to help and engage with
        our community.
      </p>
      <h3 className="pb-3">
        <b>Join Us on Our Journey</b>
      </h3>
      <p className="t-leading-6 pb-3">
        Stay connected with us on our journey to explore and celebrate the world
        of technology and innovation. Follow us on social media, subscribe to
        our newsletter, and never miss an update! Thank you for being a part of
        Tech Innovate. Together, let's push the boundaries of what's possible.
      </p>

      <hr className="my-4" />

      <h3 className="pb-3 t-text-2xl">
        <strong>FAQS</strong>
      </h3>
      <p className="pb-2">
        <i>You can check it out our most frequently asked questions!</i>
      </p>
      <AboutFaqs customStyle1={customStyle1} customStyle2={customStyle2} />
    </div>
  );
}
