let data = [
  {
    name: "Veggie Delight",
    imageSrc:
      "https://images.unsplash.com/photo-1617470702892-e01504297e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw5fHxWZWdnaWUlMjBEZWxpZ2h0fGVufDB8fHx8MTczODY4NzUzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc:
      "https://images.unsplash.com/photo-1592011432621-f7f576f44484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxHcmlsbGVkJTIwQ2hpY2tlbiUyMHxlbnwwfHx8fDE3Mzg2ODc3MzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw1fHxDaGVlc2UlMjBQaXp6YXxlbnwwfHx8fDE3Mzg2ODc3NTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxMHx8U3RlYWt8ZW58MHx8fHwxNzM4Njg3Nzk2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxHcmlsbGVkJTIwU2FsbW9ufGVufDB8fHx8MTczODY4NzgyMXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc:
      "https://images.unsplash.com/photo-1528751086790-81a64658fc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxUb21hdG8lMjBQYXN0YXxlbnwwfHx8fDE3Mzg2ODc4NjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwyfHxWZWdhbiUyMFNhbGFkfGVufDB8fHx8MTczODY4NzkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxGcmllZCUyMENoaWNrZW58ZW58MHx8fHwxNzM4Njg3OTQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxGcmllZCUyMENoaWNrZW58ZW58MHx8fHwxNzM4Njg3OTQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwzfHxCdXJnZXJ8ZW58MHx8fHwxNzM4Njg3OTcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwzfHxQYW5lZXIlMjBUaWtrYXxlbnwwfHx8fDE3Mzg2ODgwMDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc:
      "https://images.unsplash.com/photo-1593030668930-8130abedd2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwyfHxCQlElMjBSaWJzfGVufDB8fHx8MTczODY4ODAyMXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw3fHxDYWVzYXIlMjBTYWxhZHxlbnwwfHx8fDE3Mzg2NzQ3MTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxGaXNoJTIwVGFjb3N8ZW58MHx8fHwxNzM4Njg4MDU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBDYWtlfGVufDB8fHx8MTczODY4ODA3OHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

/*<div class="card">
    <img
        src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw2fHxwYW5lZXJ8ZW58MHx8fHwxNzM4NjU2MDY3fDA&ixlib=rb-4.0.3&q=80&w=1080">
    <div class="card-text">
        <p>veg</p>
        <div class="sb">
            <p>Russian Salad</p>
            <p class="sb">
                <img src="./assets/images/Star.svg" alt="">
                4.3
            </p>
        </div>
        <div class="sb">
            <h3 class="time">40 min</h3>
            <span class="sb">
                <img src="./assets/images/like.svg" alt="" />
                <img src="./assets/images/comments.svg" alt="">
            </span>
        </div>
    </div>
</div>*/
const cardContainer = document.getElementById("card-container");
const btnContainer = document.querySelectorAll(".btn-container button");
const search = document.getElementById("search");

btnContainer[0].addEventListener("click", () => {
  cardContainer.innerHTML = "";
  displayCards(data);
});

btnContainer[1].addEventListener("click", () => {
  let filteredData = data.filter((dish) => dish.type === "veg");
  cardContainer.innerHTML = "";
  displayCards(filteredData);
});

btnContainer[2].addEventListener("click", () => {
  let filteredData = data.filter((dish) => dish.type === "non-veg");
  cardContainer.innerHTML = "";
  displayCards(filteredData);
});

search.addEventListener("input", (e) => {
  let searchTerm = e.target.value.toLowerCase();
  console.log(searchTerm);

  // add or condidion using :-   || item.time.toLowerCase().includes(searchTerm); to find using time also
  let newData = data.filter((item) => item.name.toLowerCase().includes(searchTerm));

  cardContainer.innerHTML = "";
  displayCards(newData);
});

function displayCards(filteredData) {
  filteredData.map((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img
        height="200"
        src="${item.imageSrc}">
      <div class="card-text">
        <p>${item.type}</p>
        <div class="sb">
            <h3>${item.name}</h3>
            <p class="sb">
                <img src="./assets/images/Star.svg" alt="">
                ${item.rating}
            </p>
        </div>
        <div class="sb">
            <h3 class="time" style="color:#DC582A;">${item.time}</h3>
            <span class="sb">
                <img src="./assets/images/like.svg" alt="" />
                <img src="./assets/images/comments.svg" alt="">
            </span>
        </div>
      </div>`;

    cardContainer.append(card);
  });
}

window.onload = displayCards(data);
