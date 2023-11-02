// JS Script
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
// Basic styles
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
// Additional styles
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';


const reservationsPage = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const bodyCardOne = document.createElement("div");
    bodyCardOne.classList.add("body-card", "card__one");
    contentDiv.appendChild(bodyCardOne);
    
    const cardOneH3 = document.createElement("h3");
    cardOneH3.textContent = "Place a Reservation";
    bodyCardOne.appendChild(cardOneH3);

    const calendarWrapper = document.createElement("div");
    bodyCardOne.classList.add("calendar-wrapper");
    contentDiv.appendChild(calendarWrapper);

    const calendarDiv = document.createElement("div");
    calendarDiv.setAttribute("id", "calendar");
    calendarWrapper.appendChild(calendarDiv);


    const calendar = new VanillaCalendar('#calendar');
    calendar.init();


};

export default reservationsPage;