import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Vehicles = () => {
    const navigate = useNavigate();

    const handleLearnMore = (vehicleId) => {
        navigate(`/details-vehicles/${vehicleId}`);
    };

    const { store, actions } = useContext(Context);
    return (
        <>
            {store.vehicles.map((vehicle, index) => {
                return (
                    <div className="container" key={vehicle+index}>
                        <div className="card" style={{minWidth: "15rem"}}>
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.url.split("/")[5]) + ".jpg"} className="card-img-top" alt="..." />
                            <div className="card-body text-warning bg-black">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <button href="#" className="btn btn-primary" onClick={() => handleLearnMore(vehicle.url.split("/")[5])}>Learn more</button>
                                <button href="#" className="btn btn-danger" onClick={() => { actions.addFavorites(vehicle.name, "V") }}><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
};