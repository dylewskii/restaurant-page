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
    loungeCardH4.textContent = "UPCOMING DATES";
    loungeCardTwo.appendChild(loungeCardH4);

    const djBoxOne = document.createElement("div");
    const djNameOne = document.createElement("p");
    const djDateOne = document.createElement("p");
    djNameOne.textContent = "David Guetta";
    djDateOne.textContent =  "01/12/2023";
    djBoxOne.classList.add("dj-one", "dj-div");
    djNameOne.classList.add("dj-one-name", "dj-name");
    djDateOne.classList.add("dj-one-date", "dj-date");
    djBoxOne.appendChild(djNameOne);
    djBoxOne.appendChild(djDateOne);
    loungeCardTwo.appendChild(djBoxOne);

    const djBoxTwo = document.createElement("div");
    const djNameTwo = document.createElement("p");
    const djDateTwo = document.createElement("p");
    djNameTwo.textContent = "Calvin Harris";
    djDateTwo.textContent =  "04/12/2023";
    djBoxTwo.classList.add("dj-two", "dj-div");
    djNameTwo.classList.add("dj-two-name", "dj-name");
    djDateTwo.classList.add("dj-two-date", "dj-date");
    djBoxTwo.appendChild(djNameTwo);
    djBoxTwo.appendChild(djDateTwo);
    loungeCardTwo.appendChild(djBoxTwo);

    const djBoxThree = document.createElement("div");
    const djNameThree = document.createElement("p");
    const djDateThree = document.createElement("p");
    djNameThree.textContent = "Tiesto";
    djDateThree.textContent =  "05/12/2023";
    djBoxThree.classList.add("dj-three", "dj-div");
    djNameThree.classList.add("dj-three-name", "dj-name");
    djDateThree.classList.add("dj-three-date", "dj-date");
    djBoxThree.appendChild(djNameThree);
    djBoxThree.appendChild(djDateThree);
    loungeCardTwo.appendChild(djBoxThree);

    const djBoxFour = document.createElement("div");
    const djNameFour = document.createElement("p");
    const djDateFour = document.createElement("p");
    djNameFour.textContent = "Avici";
    djDateFour.textContent =  "09/12/202";
    djBoxFour.classList.add("dj-four", "dj-div");
    djNameFour.classList.add("dj-four-name", "dj-name");
    djDateFour.classList.add("dj-four-date", "dj-date");
    djBoxFour.appendChild(djNameFour);
    djBoxFour.appendChild(djDateFour);
    loungeCardTwo.appendChild(djBoxFour);

    const djBoxFive = document.createElement("div");
    const djNameFive = document.createElement("p");
    const djDateFive = document.createElement("p");
    djNameFive.textContent = "Martin Garrix";
    djDateFive.textContent =  "11/12/2023";
    djBoxFive.classList.add("dj-five", "dj-div");
    djNameFive.classList.add("dj-five-name", "dj-name");
    djDateFive.classList.add("dj-five-date", "dj-date");
    djBoxFive.appendChild(djNameFive);
    djBoxFive.appendChild(djDateFive);
    loungeCardTwo.appendChild(djBoxFive);

    const djBoxSix = document.createElement("div");
    const djNameSix = document.createElement("p");
    const djDateSix = document.createElement("p");
    djNameSix.textContent = "Steve Aoki";
    djDateSix.textContent =  "14/12/2023";
    djBoxSix.classList.add("dj-six", "dj-div");
    djNameSix.classList.add("dj-six-name", "dj-name");
    djDateSix.classList.add("dj-six-date", "dj-date");
    djBoxSix.appendChild(djNameSix);
    djBoxSix.appendChild(djDateSix);
    loungeCardTwo.appendChild(djBoxSix);
};

export default loungePage;