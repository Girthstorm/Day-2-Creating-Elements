let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let injectHere = document.getElementById("injectHere");

item1.addEventListener('click', function(){
    let h1 = document.createElement("h1");
    injectHere.appendChild(h1);
    h1.textContent = "Holy moley"

});

item2.addEventListener('click', function(e){
    makeCard("Made from Item 2");
})

item3.addEventListener('click', function(e){
    injectHere.innerHTML = "";
})


//gotta build from inside out.

function makeCard(cardTitle) {
    // injectHere.innerHTML = "";

    //Build Inner portion of the card
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = cardTitle;

    //build the p tag
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    //build the a tag
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.textContent = "Go Somewhere";
    a.addEventListener('click', function(e) {
        alert(" I was clicked");
    });

    //Build the inner div
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body"

    //build the inner portion
    bodyDiv.appendChild(h5)
    bodyDiv.appendChild(p)
    bodyDiv.appendChild(a)

    //build the image tag
    let img = document.createElement("img");
    img.className = "card-img-top"
    img.src = "./assets/mo-aBu1LU8PN50-unsplash.jpg";
    img.alt = "...";

    //Build the outer div
    let outerDiv = document.createElement("div");
    outerDiv.className = "card";
    outerDiv.style = "width: 18rem;";

    outerDiv.appendChild(img);
    outerDiv.appendChild(bodyDiv);

    injectHere.appendChild(outerDiv);
}


// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> 



