import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetsDetails = () =>{
    const [planet, setPlanet] = useState({});
    const params = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        if (params.id && store.planets.length > 0) {
            const currentPlanet = store.planets.find(item => item.url.split("/")[5] == params.id)
            console.log(currentPlanet);
            setPlanet(currentPlanet)
        }
    }, [params.id, store.people]);
    return(
        <div className="d-flex justify-content-center background-div">
            <div className="card bg-dark text-light background-card" style={{width: "50rem" }}>

                <h5 className="card-title">{planet?.name}</h5>

                <div className="card-body d-flex">
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (planet.url && planet.url.split("/")[5]) + ".jpg"} width="300px" alt={planet?.name} />
                    <div className="card-text">
                        <p><b>Climate: </b>{planet?.climate} cm</p>
                        <p><b>Diameter: </b>{planet?.diameter} kg</p>
                        <p><b>Population: </b>{planet?.population}</p>
                        <p><b>Gravity: </b>{planet?.gravity}</p>
                        <p><b>Terrain: </b>{planet?.terrain}</p>
                        <p><b>Orbital period: </b>{planet?.orbital_period}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};