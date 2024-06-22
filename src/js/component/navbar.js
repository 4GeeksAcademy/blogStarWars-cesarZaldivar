import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-light bg-light bg-dark d-flex background-navbar">
			<Link to="/">
				<img className="w-25 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"></img>
			</Link>
			<div className="mx-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-primary">Favorites  {store.favorites.length}</button>
					<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((item, index) => {
							return (
								<li key={item.name}><a className="dropdown-item" href="#">{item.name} <small>({item.type})</small><button className="btn btn-danger ms-5" onClick={() => { actions.deleteFavorites(item.id); }}><i className="fas fa-trash"></i></button></a></li>
							)
						})}
						<div></div>
					</ul>
				</div>
			</div>
		</nav>
	);
};
