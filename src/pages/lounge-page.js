const loungePage = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const loungeCard = document.createElement("div");
    loungeCard.classList.add("body-card");
    loungeCard.setAttribute("id", "lounge-card");
    contentDiv.appendChild(loungeCard);
    
    const loungeCardH3 = document.createElement("h3");
    loungeCardH3.textContent = "Welcome to the Lounge";
    loungeCard.appendChild(loungeCardH3);

    const loungeCardTwo = document.createElement("div");
    loungeCardTwo.classList.add("body-card");
    loungeCardTwo.setAttribute("id", "lounge-card-two");
    contentDiv.appendChild(loungeCardTwo);
    
    const loungeCardH4 = document.createElement("h4");
    loungeCardH4.textContent = "View our live night dates";
    loungeCardTwo.appendChild(loungeCardH4);

    const loungeCardP1 = document.createElement("p");
    loungeCardP1.classList.add("dj-one");
    loungeCardP1.textContent = "David Guetta - 01/12/2023";
    loungeCardTwo.appendChild(loungeCardP1);

    const loungeCardP2 = document.createElement("p");
    loungeCardP2.classList.add("dj-two");
    loungeCardP2.textContent = "Avicii - 04/12/2023";
    loungeCardTwo.appendChild(loungeCardP2);

    const loungeCardP3 = document.createElement("p");
    loungeCardP3.classList.add("dj-three");
    loungeCardP3.textContent = "Tiesto - 05/12/2023";
    loungeCardTwo.appendChild(loungeCardP3);

    const loungeCardP4 = document.createElement("p");
    loungeCardP4.classList.add("dj-four");
    loungeCardP4.textContent = "Calvin Harris - 09/12/2023";
    loungeCardTwo.appendChild(loungeCardP4);
    
    const loungeCardP5 = document.createElement("p");
    loungeCardP5.classList.add("dj-five");
    loungeCardP5.textContent = "Martin Garrix - 11/12/2023";
    loungeCardTwo.appendChild(loungeCardP5);

    const loungeCardP6 = document.createElement("p");
    loungeCardP6.classList.add("dj-six");
    loungeCardP6.textContent = "Steve Aoki - 14/12/2023";
    loungeCardTwo.appendChild(loungeCardP6);
};

export default loungePage;