const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],

		},
		actions: {
			cargarContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/ainhoa")
					.then((response) => {
						if (response.ok) {
							return response.json();
						} else {
							if (response.status === 404) {
								getActions().crearUsuario(); // Llamar a la función crearUsuario
							}
						}
					})
					.then((result) => setStore({ contactos: result }))
					.catch((error) => console.error(error));
			},

			crearUsuario: () => {
				const requestOptions = {
					method: "POST",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({}) // Agregar datos al body si es necesario
				};

				fetch("https://playground.4geeks.com/contact/agendas/ainhoa", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
			},

			crearContacto: (contacto) => {
				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: contacto,
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/ainhoa/contacts", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
					cargarContactos();
			},

			editarContacto: (id, contactoEditado) => {
				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: contactoEditado,
					redirect: "follow"
				  };
				  
				  fetch(`https://playground.4geeks.com/contact/agendas/ainhoa/contacts/${id}`, requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
					cargarContactos();
			},

			eliminarContacto: (id) => {
				const requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				  };
				  
				  fetch(`https://playground.4geeks.com/contact/agendas/ainhoa/contacts/${id}`, requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
					cargarContactos();
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				// Implementar carga de datos desde una API usando fetch y actualizar el store
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},

			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) {
						elm.background = color;
					}
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
