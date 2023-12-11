const Url = "https://api.pexels.com/v1/search?query=image";
const apiKey = {Authorization: "iNxnDIoZ0Ny5Bw6oab3UxFDebZxN2FriiCj5motQdwnuAxzD1zxOc9Y4"};

function getImg(){
    fetch(Url, {
        method: 'GET',
        headers: apiKey
    })
    .then(response =>{
        if(!response.ok){
            throw new Error("Errore  HTTP!");
        }
        return response.json();
    })

    .then(data=>{
        showCard(data)
        console.log(data)
    })
    .catch(error=>{
        console.log(error);
    })
}

function showCard(data){

    data.photos.forEach(element => {

        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card mb-4 shadow-sm">
        <img
          src = ${element.src.small}
        />
        <div class="card-body">
          <h5 class="card-title">${element.alt}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>` 

      let cardContainer = document.getElementById("cardContainer").appendChild(card)

    });

    
}