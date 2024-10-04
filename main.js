async function getUsers() {
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data = await response.json();

    const result = data.recipes.map(function(ele) {
        return `<div class="user">
                    <h2>${ele.title}</h2>
                    <img src="${ele.image_url}" alt="${ele.title}">
                </div>`;
    }).join(''); 

    document.querySelector(".users").innerHTML = result;
}

getUsers();
