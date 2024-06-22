import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Planets = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleLearnMore = (planetId) => {
        navigate(`/details-planets/${planetId}`);
    };

    return (
        <>
            {store.planets.map((planet, index) => {
                return (
                    <div className="container" key={planet+index}>
                        <div className="card" style={{minWidth: "15rem"}}>
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (planet.url.split("/")[5]) + ".jpg"} onError={(e) =>e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body text-warning bg-black">
                                <h5 className="card-title">{planet.name}</h5>
                                <button href="#" className="btn btn-primary" onClick={() => handleLearnMore(planet.url.split("/")[5])}>Learn more</button>
                                <button href="#" className="btn btn-danger" onClick={() => { actions.addFavorites(planet.name, "P") }}><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
};