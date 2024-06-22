import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const VehiclesDetails = () => {
    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        if (params.id && store.vehicles.length > 0) {
            const currentVehicle = store.vehicles.find(item => item.url.split("/")[5] == params.id)
            console.log(currentVehicle);
            setVehicle(currentVehicle)
        }
    }, [params.id, store.vehicles]);
    return (
        <div className="d-flex justify-content-center background-div">
            <div className="card bg-dark text-light background-card" style={{width: "50rem" }}>

                <h5 className="card-title">{vehicle?.name}</h5>

                <div className="card-body d-flex">
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.url && vehicle.url.split("/")[5]) + ".jpg"} width="300px" alt={vehicle?.name} />
                    <div className="card-text">
                        <p><b>Model: </b>{vehicle?.model} cm</p>
                        <p><b>Cargo capacity: </b>{vehicle?.cargo_capacity} kg</p>
                        <p><b>Consumables: </b>{vehicle?.consumables}</p>
                        <p><b>Cost in credits: </b>{vehicle?.cost_in_credits}</p>
                        <p><b>Crew: </b>{vehicle?.crew}</p>
                        <p><b>Manufacturer: </b>{vehicle?.manufacturer}</p>
                        <p><b>Max speed: </b>{vehicle?.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};