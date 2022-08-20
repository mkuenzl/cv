import React from "react";
import { useState } from "react";
import "./about.css";

// Import Icons for passion texts
import { GiPlantRoots } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";
import { GiMountainClimbing } from "react-icons/gi";
import { BiCodeCurly } from "react-icons/bi";

const Content = () => {
	return (
		<div className="about__content">
			<div className="about__card-row">
				<div className="about__card-right">
					<div className="about__card">
						<GiPlantRoots className="about__icon-set" />
					</div>
					<div className="about__card-text">
						<h2>Enjoy plants.</h2>
						<p>
							Before, I could hardly have plants because of the cats, and my
							first cactus dried up within a few months. After I moved, I was
							able to start greening the entire apartment and watch the plants
							grow. Caring for and studying plant characteristics relaxes me.
							I've also always found it fascinating that you can create
							ecosystems in a jar. That is why I have built several of my own,
							the oldest of which has remained untouched for 2 years.
						</p>
					</div>
				</div>

				<div className="about__card-left">
					<div className="about__card-text">
						<h2>Passion for cooking.</h2>
						<p>
							From an early age, we always had home-cooked meals at home.
							However, it was only a few years ago that I discovered the fun of
							cooking together with a good friend. Now we get together regularly
							to try out new dishes or revive old favorites. Regular cooking,
							either in a group or alone, helps me to relax quickly after work.
						</p>
					</div>
					<div className="about__card">
						<GiCampCookingPot className="about__icon-set" />
					</div>
				</div>

				<div className="about__card-right">
					<div className="about__card">
						<GiMountainClimbing className="about__icon-set" />
					</div>
					<div className="about__card-text">
						<h2>Enthusiasm for bouldering.</h2>
						<p>
							Well, to get rid of all the calories from the food and the Corona
							time, you also have to do sports. Bouldering has been my favorite
							sport for the past 3 years, because it combines problem-solving
							with a full-body workout. The community is incredibly supportive.
							I can only recommend everyone to try it out for themselves.
						</p>
					</div>
				</div>

				<div className="about__card-left">
					<div className="about__card-text">
						<h2>Interest in coding.</h2>
						<p>
							I've been fascinated by computers since I was a kid. Altough I
							studied business informatic systems, it wasn't until I was doing
							my master's that it really clicked. While working on a module
							called "Compiler Construction", I had to develop a larger project
							for the first time, which was incredibly tricky and complicated,
							but also a lot of fun. During my master's thesis, I worked on a
							Java tool that uses an R server to cluster threads according to
							their runtime behavior. In the meantime, I developed another tool
							in my student job that creates different Word tables from Excel
							tables using Java, Powerquery and Html templates.
						</p>
					</div>
					<div className="about__card">
						<BiCodeCurly className="about__icon-set" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
