/*- Obtiene datos simulados de usuarios desde la API JSONPlaceholder 
`https://jsonplaceholder.typicode.com/users`.*/       //Ok
//- Agrega una edad aleatoria a cada usuario.     Ok
/* - Cada usuario tendrá una imagen asociada por `ID` 
(están en la carpeta assets/img) son extensión `.jpeg`*/     //Ok
/* - Muestra detalles específicos de cada usuario en la lista en el DOM: name, 
age, username, img, phone, email, company, address*/     //Ok

const nuevaLista = document.getElementById("listaUsuarios");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const usuariosconedadydireccion = data.map (usuario => {
        const edadaleatoria = Math.floor(Math.random() * (60-18+1)) +18;
        const {city, street, suite} = usuario.address;
        const nuevoaddress ={
            city,
            street,
            suite
        }
        const imagen = `./assets/img/${usuario.id}.jpeg`
        return {
            ...usuario,
            age: edadaleatoria,
            address: nuevoaddress,
            img: imagen,
        };
        
    })
    console.log(usuariosconedadydireccion)

    usuariosconedadydireccion.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `<img src= ${usuario.img}>
        <h2>${usuario.name}</h2>
        <p>${usuario.age}</p>
        <p>${usuario.username}</p>
        <p>${usuario.phone}</p>
        <p>${usuario.phone}</p>
        <p>Compañia:${usuario.company}</p>
        <p>Dirección:${usuario.address.city}, ${usuario.address.street}, ${usuario.address.suite}</p>
        `;
        nuevaLista.appendChild(li);

    });
    
    
  })
  .catch(error => {
    console.error('Error:', error);
  });


