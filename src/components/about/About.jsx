import React from "react";
import "./about.css";
import "animate.css";

import Description from "./Description";
import Content from "./Content";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>A Little Bit About Me</h2>
			<div className="container about__container">
				<Description />
				<Content />
			</div>
		</section>
	);
};

export default About;
