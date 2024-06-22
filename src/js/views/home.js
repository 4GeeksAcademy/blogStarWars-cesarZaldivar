import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";


export const Home = () => (

	<div className="home-container">
		<div className="text-center mt-5 d-flex overflow-auto">
			<People />
		</div>
		<div className="text-center mt-5 d-flex overflow-auto">
			<Planets />
		</div>
		<div className="text-center mt-5 d-flex overflow-auto">
			<Vehicles />
		</div>
	</div>
);
