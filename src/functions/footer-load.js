const footerLoad = function () {
    const contentDiv = document.querySelector(".content");

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    contentDiv.appendChild(footerDiv);

    // -- Footer --
    // contact
    const footerContact = document.createElement("div");
    footerContact.classList.add("footer__contact");
    footerDiv.appendChild(footerContact);

    const footerContactH3 = document.createElement("H3");
    footerContactH3.textContent = "CONTACT";
    footerContact.appendChild(footerContactH3);

    const footerContactP1 = document.createElement("p");
    footerContactP1.textContent = "+44 791 234 567";
    footerContact.appendChild(footerContactP1);

    const footerContactP2 = document.createElement("p");
    footerContactP2.textContent = "ORDER@WAKANDAFOOD.COM";
    footerContact.appendChild(footerContactP2);

    const footerContactP3 = document.createElement("p");
    footerContactP3.textContent = "123A WAKANDA STREET, LONDON, W1 KND";
    footerContact.appendChild(footerContactP3);

    // dress code
    const footerDresscode = document.createElement("div");
    footerDresscode.classList.add("footer__dresscode");
    footerDiv.appendChild(footerDresscode);

    const footerDresscodeH3 = document.createElement("H3");
    footerDresscodeH3.textContent = "DRESS CODE";
    footerDresscode.appendChild(footerDresscodeH3);

    const footerDresscodeP1 = document.createElement("p");
    footerDresscodeP1.textContent = "The dress code is smart and elegant.";
    footerDresscode.appendChild(footerDresscodeP1);

    // subscribe
    const footerSubscribe = document.createElement("div");
    footerSubscribe.classList.add("footer__subscribe");
    footerDiv.appendChild(footerSubscribe);

    const footerSubscribeH3 = document.createElement("H3");
    footerSubscribeH3.textContent = "SUBSCRIBE";
    footerSubscribe.appendChild(footerSubscribeH3);

    const footerSubscribeP1 = document.createElement("p");
    footerSubscribeP1.textContent = "Sign up with your email address to receive news and updates.";
    footerSubscribe.appendChild(footerSubscribeP1);
    
    const footerInputDiv = document.createElement("div");
    footerInputDiv.classList.add("footer__input-div");
    footerSubscribe.appendChild(footerInputDiv);

    const footerSubscribeInput = document.createElement("input");
    footerSubscribeInput.setAttribute("placeholder", "Email Address");
    footerSubscribe.appendChild(footerSubscribeInput);
    footerInputDiv.appendChild(footerSubscribeInput);

    const footerSubscribeButton = document.createElement("button");
    footerSubscribeButton.textContent = "SIGN UP";
    footerSubscribe.appendChild(footerSubscribeButton); 
    footerInputDiv.appendChild(footerSubscribeButton);

    // copyright
    const footerCopyright = document.createElement("div");
    footerCopyright.classList.add("footer__copyright");
    footerDiv.appendChild(footerCopyright);

    const footerCopyrightP = document.createElement("p");
    footerCopyrightP.textContent = "© 2023 |  All Rights Reserved  | Site by Dylewskii";
    footerCopyright.appendChild(footerCopyrightP);
};

export default footerLoad;