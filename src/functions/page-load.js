const pageLoad = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    contentDiv.appendChild(headerDiv);

    const bodyCardOne = document.createElement("div");
    bodyCardOne.classList.add("body-card", "card__one");
    contentDiv.appendChild(bodyCardOne)

    const bodyCardTwo = document.createElement("div");
    bodyCardTwo.classList.add("body-card", "card__two");
    contentDiv.appendChild(bodyCardTwo)

    const bodyCardThree = document.createElement("div");
    bodyCardThree.classList.add("body-card", "card__three");
    contentDiv.appendChild(bodyCardThree)

    const bodyCardFour = document.createElement("div");
    bodyCardFour.classList.add("body-card", "card__four");
    contentDiv.appendChild(bodyCardFour)

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    contentDiv.appendChild(footerDiv);

    // ---- Element Content & Properties ----

    // -- Header -- 
    // top
    const headerTop = document.createElement("div");
    headerTop.classList.add("header__top");
    headerDiv.appendChild(headerTop);

    const headerTopH1 = document.createElement("h1");
    headerTopH1.innerText = "Wakandine";
    headerTopH1.classList.add("logo");
    headerTop.appendChild(headerTopH1);

    const headerTopToggle = document.createElement("div");
    headerTopToggle.classList.add("toggle");
    headerTop.appendChild(headerTopToggle);

    // bottom
    const headerBottom = document.createElement("div");
    headerBottom.classList.add("header__bottom");
    headerDiv.appendChild(headerBottom);

    const headerBottomP = document.createElement("p");
    headerBottomP.textContent = "A superlative culinary offering in the heart of Wakanda. "
    headerBottom.appendChild(headerBottomP);

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

    // -- Footer --
    // top
    const footerTop = document.createElement("div");
    footerTop.classList.add("footer__top");
    footerDiv.appendChild(footerTop);

    const footerTopH3 = document.createElement("H3");
    footerTopH3.textContent = "Contact";
    footerTop.appendChild(footerTopH3);

    const footerTopP1 = document.createElement("p");
    footerTopP1.textContent = "+44 791 234 567";
    footerTop.appendChild(footerTopP1);

    const footerTopP2 = document.createElement("p");
    footerTopP2.textContent = "ORDER@WAKANDAFOOD.COM";
    footerTop.appendChild(footerTopP2);

    const footerTopP3 = document.createElement("p");
    footerTopP3.textContent = "123A WAKANDA STREET, LONDON, W1 KND";
    footerTop.appendChild(footerTopP3);

    // bottom
    const footerBottom = document.createElement("div");
    footerBottom.classList.add("footer__bottom");
    footerDiv.appendChild(footerBottom);

    const footerBottomH3 = document.createElement("H3");
    footerBottomH3.textContent = "Dress Code";
    footerBottom.appendChild(footerBottomH3);

    const footerBottomP1 = document.createElement("p");
    footerBottomP1.textContent = "The dress code is smart and elegant.";
    footerBottom.appendChild(footerBottomP1);

    // copyright
    const footerCopyright = document.createElement("div");
    footerCopyright.classList.add("footer__copyright");
    footerDiv.appendChild(footerCopyright);

    const footerCopyrightP = document.createElement("p");
    footerCopyrightP.textContent = "© 2023 |  All Rights Reserved  | Site by Dylewskii";
    footerCopyright.appendChild(footerCopyrightP);
};

export default pageLoad;