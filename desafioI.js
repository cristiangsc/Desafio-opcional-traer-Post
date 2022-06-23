const getPosts = async() => {
    try {
        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        );
        const datos = await respuesta.json();
        console.log(datos[0]['title']);
        const apiId = document.getElementById("post-data");
        let ul = document.createElement("ul");
        apiId.appendChild(ul);
        const post = document.querySelector("#post-data >ul")
        datos.forEach(element => {
            let li = document.createElement("li");
            let p = document.createElement("p");
            post.appendChild(li).innerHTML = element.title;
            post.appendChild(p).innerHTML = element.body;

        });
    } catch (error) {
        console.log(error);
    }
};