const homePage = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const bodyCardOne = document.createElement("div");
    bodyCardOne.classList.add("body-card", "card__one");
    contentDiv.appendChild(bodyCardOne);

    const bodyCardTwo = document.createElement("div");
    bodyCardTwo.classList.add("body-card", "card__two");
    contentDiv.appendChild(bodyCardTwo);

    const bodyCardThree = document.createElement("div");
    bodyCardThree.classList.add("body-card", "card__three");
    contentDiv.appendChild(bodyCardThree);

    const bodyCardFour = document.createElement("div");
    bodyCardFour.classList.add("body-card", "card__four");
    contentDiv.appendChild(bodyCardFour);

    // ---- Element Content & Properties ----

    // -- Body -- 
    // 1
    const cardOneH3 = document.createElement("h3");
    cardOneH3.textContent = "Reservations";
    bodyCardOne.appendChild(cardOneH3);

    const cardOneP = document.createElement("p");
    cardOneP.textContent = "Click below to make a restaurant reservation.";
    bodyCardOne.appendChild(cardOneP);

    const cardOneBtn = document.createElement("button");
    cardOneBtn.classList.add("cardBtn", "reserveBtn");
    cardOneBtn.textContent = "Reserve";
    bodyCardOne.appendChild(cardOneBtn);
    
    // 2
    const cardTwoH3 = document.createElement("h3");
    cardTwoH3.textContent = "Lounge";
    bodyCardTwo.appendChild(cardTwoH3);

    const cardTwoP = document.createElement("p");
    cardTwoP.textContent = "A visit to the Lounge Bar is a must for those seeking a memorable experience; wide-ranging cocktail menu, top-tier DJs and more. ";
    bodyCardTwo.appendChild(cardTwoP);

    const cardTwoBtn = document.createElement("button");
    cardTwoBtn.classList.add("cardBtn", "loungeBtn");
    cardTwoBtn.textContent = "Lounge";
    bodyCardTwo.appendChild(cardTwoBtn);

    // 3
    const cardThreeH3 = document.createElement("h3");
    cardThreeH3.textContent = "À la carte";
    bodyCardThree.appendChild(cardThreeH3);

    const cardThreeBtn = document.createElement("button");
    cardThreeBtn.classList.add("cardBtn", "menuBtn");
    cardThreeBtn.textContent = "View à la carte";
    bodyCardThree.appendChild(cardThreeBtn);

    // 4
    // top
    const cardFourTop = document.createElement("div");
    cardFourTop.classList.add("card__four__top");
    bodyCardFour.appendChild(cardFourTop);

    const cardFourH3 = document.createElement("h3");
    cardFourH3.textContent = "Follow us";
    cardFourTop.appendChild(cardFourH3);

    const cardFourP = document.createElement("p");
    cardFourP.textContent = "@WakandaFood";
    cardFourTop.appendChild(cardFourP);
    
    // bottom
    const cardFourBottom = document.createElement("div");
    cardFourBottom.classList.add("card__four__bottom");
    bodyCardFour.appendChild(cardFourBottom);

    for (let i = 0; i < 6; i++){
        const imgDiv = document.createElement("div");
        imgDiv.classList.add(`img-div`, `img-div${i+1}`);
        imgDiv.textContent = "image";
        cardFourBottom.appendChild(imgDiv);
    }
};

export default homePage;