const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			apiUrl: "https://swapi.dev/api/",
			apiUrl2: "https://www.swapi.tech/api/"

		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + "people");
					const data = await response.json();
					setStore({
						people: data.results
					});
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + "vehicles");
					const data = await response.json();
					setStore({
						vehicles: data.results
					});
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + "planets");
					const data = await response.json();
					setStore({
						planets: data.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			addFavorites(nombreItem, type) {
				const store = getStore();
				const fav = store.favorites;
				const newFav = [...fav, { name: nombreItem, id: fav.length, type }]
				setStore({ favorites: newFav })
			},
			deleteFavorites(id) {
				const store = getStore();
				const fav = store.favorites;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({ favorites: favActualizado })
			},
		}
	};
};

export default getState;
