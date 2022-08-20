import React from "react";
import "./about.css";

// import icons for stats
import { BsCalendar2Date } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsPersonSquare } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";

const Description = () => {
	return (
		<div className="about__text">
			<div className="about__description">
				<div className="about__stat">
					<div className="about__stat-type">
						<BsPersonSquare className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>Moritz Künzl</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<FaHome className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>Trier, Rheinland Pfalz</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<BsCalendar2Date className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>27.06.1994</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<FaGraduationCap className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>M. Sc. Business Information Systems</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<RiFilePaper2Line className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>Formative studies on runtime-based clustering of threads</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<MdOutlineWorkOutline className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>IT Auditor</p>
					</div>
				</div>
				<div className="about__stat">
					<div className="about__stat-type">
						<FaRegDotCircle className="about__stat-icon" />
					</div>
					<div className="about__stat-info">
						<p>Looking for new challenges</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
