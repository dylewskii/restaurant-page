const footerLoad = function () {
    const contentDiv = document.querySelector(".content");

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    contentDiv.appendChild(footerDiv);

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

export default footerLoad;