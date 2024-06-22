import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const People = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleLearnMore = (personId) => {
        navigate(`/details-people/${personId}`);
    };

    return (
        <>
            {store.people.map((person, index) => {
                return (
                    <div className="container mt-5" key={person + index}>
                        <div className="card" style={{ minWidth: "15rem" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (person.url.split("/")[5]) + ".jpg"} className="card-img-top" alt="..." />
                            <div className="card-body text-warning bg-black">
                                <h5 className="card-title">{person.name}</h5>
                                <button href="#" className="btn btn-primary" onClick={() => handleLearnMore(person.url.split("/")[5])}>Learn more</button>
                                <button href="#" className="btn btn-danger" onClick={() => { actions.addFavorites(person.name, "C")}}><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
};