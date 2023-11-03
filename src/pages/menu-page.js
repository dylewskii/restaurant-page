const menuPage = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const menuCard = document.createElement("div");
    menuCard.classList.add("body-card");
    menuCard.setAttribute("id", "menu-card");
    contentDiv.appendChild(menuCard);
    
    const menuCardH3 = document.createElement("h3");
    menuCardH3.setAttribute("id", "menu-header");
    menuCardH3.textContent = "À la carte";
    menuCard.appendChild(menuCardH3);

    const menuCardTwo = document.createElement("div");
    menuCardTwo.classList.add("body-card");
    menuCardTwo.setAttribute("id", "menu-card-two");
    contentDiv.appendChild(menuCardTwo);

    const menuCardP1 = document.createElement("h6");
    menuCardP1.classList.add("menu-item-header");
    menuCardP1.textContent = "Beef Wellington";
    menuCardTwo.appendChild(menuCardP1);
    const menuCardP1Desc = document.createElement("p");
    menuCardP1Desc.classList.add("menu-item-desc", "desc-one");
    menuCardP1Desc.textContent = "Indulge in our traditional Beef Wellington. Tender filet of beef encased in flaky puff pastry, enriched with mushroom duxelles, foie gras, and a delectable sauce, creating an unforgettable dining experience.";
    menuCardTwo.appendChild(menuCardP1Desc);

    const menuCardP2 = document.createElement("h6");
    menuCardP2.classList.add("menu-item-header");
    menuCardP2.textContent = "Coq au Vin";
    menuCardTwo.appendChild(menuCardP2);
    const menuCardP2Desc = document.createElement("p");
    menuCardP2Desc.classList.add("menu-item-desc", "desc-two");
    menuCardP2Desc.textContent = "Savor the classic flavors of Coq au Vin, a Michelin-starred French delight. Slow-cooked chicken in red wine with mushrooms, onions, and bacon, yielding a rich, aromatic dish that's both timeless and elegant.";
    menuCardTwo.appendChild(menuCardP2Desc);

    const menuCardP3 = document.createElement("h6");
    menuCardP3.classList.add("menu-item-header");
    menuCardP3.textContent = "Salmon en Papillote";
    menuCardTwo.appendChild(menuCardP3);
    const menuCardP3Desc = document.createElement("p");
    menuCardP3Desc.classList.add("menu-item-desc", "desc-three");
    menuCardP3Desc.textContent = "Experience the elegance of Salmon en Papillote. Fresh salmon, delicately prepared in parchment paper with herbs and vegetables, creating a tender and flavorful masterpiece.";
    menuCardTwo.appendChild(menuCardP3Desc);

    const menuCardP4 = document.createElement("h6");
    menuCardP4.classList.add("menu-item-header");
    menuCardP4.textContent = "Tuna Tataki";
    menuCardTwo.appendChild(menuCardP4);
    const menuCardP4Desc = document.createElement("p");
    menuCardP4Desc.classList.add("menu-item-desc", "desc-four");
    menuCardP4Desc.textContent = "Journey into Japanese culinary excellence with Tuna Tataki. Seared rare tuna, artfully presented with a sesame crust and accompanied by a savory dipping sauce.";
    menuCardTwo.appendChild(menuCardP4Desc);
    
    const menuCardP5 = document.createElement("h6");
    menuCardP5.classList.add("menu-item-header");
    menuCardP5.textContent = "Foie Gras";
    menuCardTwo.appendChild(menuCardP5);
    const menuCardP5Desc = document.createElement("p");
    menuCardP5Desc.classList.add("menu-item-desc", "desc-five");
    menuCardP5Desc.textContent = "Delight in the luxurious Foie Gras. Savor the richness of pan-seared or torchon-style duck or goose liver, harmonized with a fig compote, offering an exquisite balance of flavors.";
    menuCardTwo.appendChild(menuCardP5Desc);

    const menuCardP6 = document.createElement("h6");
    menuCardP6.classList.add("menu-item-header");
    menuCardP6.textContent = "Lobster Thermidor";
    menuCardTwo.appendChild(menuCardP6);
    const menuCardP6Desc = document.createElement("p");
    menuCardP6Desc.classList.add("menu-item-desc", "desc-six");
    menuCardP6Desc.textContent = "Elevate your dining experience with Lobster Thermidor. Succulent lobster meat bathed in creamy cheese and mustard sauce, gratinated to perfection, providing an opulent and unforgettable taste sensation.";
    menuCardTwo.appendChild(menuCardP6Desc);
};

export default menuPage;