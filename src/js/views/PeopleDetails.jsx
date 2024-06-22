import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
    const [person, setPerson] = useState({});
    const params = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        if (params.id && store.people.length > 0) {
            const currentPerson = store.people.find(item => item.url.split("/")[5] == params.id)
            console.log(currentPerson);
            setPerson(currentPerson)
        }
    }, [params.id, store.people]);
    return (
        <div className="d-flex justify-content-center background-div">
            <div className="card bg-dark text-light background-card" style={{width: "50rem" }}>

                <h5 className="card-title">{person?.name}</h5>

                <div className="card-body d-flex">
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (person.url && person.url.split("/")[5]) + ".jpg"} width="300px" alt={person?.name} />
                    <div className="card-text">
                        <p><b>Height: </b>{person?.height} cm</p>
                        <p><b>Weight: </b>{person?.mass} kg</p>
                        <p><b>Hair color: </b>{person?.hair_color}</p>
                        <p><b>Skin color: </b>{person?.skin_color}</p>
                        <p><b>Eye color: </b>{person?.eye_color}</p>
                        <p><b>Year of birth: </b>{person?.birth_year}</p>
                        <p><b>Gender: </b>{person?.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
