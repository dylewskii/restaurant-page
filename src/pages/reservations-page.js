// JS Script
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
// Basic styles
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
// Additional styles
import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';


const reservationsPage = function () {
    const contentDiv = document.querySelector(".content");

    // ---- Main Structure ----
    const bodyCardOne = document.createElement("div");
    bodyCardOne.classList.add("body-card", "card__one");
    contentDiv.appendChild(bodyCardOne);
    
    const cardOneH3 = document.createElement("h3");
    cardOneH3.textContent = "Place a Reservation:";
    bodyCardOne.appendChild(cardOneH3);


    const calendarDiv = document.createElement("div");
    calendarDiv.setAttribute("id", "calendar");
    contentDiv.appendChild(calendarDiv);

    const confirmationMessage = (function() {
        let done = false;
        return function () {
            if (!done) {
                done = true;
                const bookingConfH2 = document.createElement("h2");
                bookingConfH2.classList.add("confirmation-message");
                bookingConfH2.textContent = `Thank you for choosing Wakandine. You will receive an email shortly!`;
                bookingConfCard.appendChild(bookingConfH2);
            }
        }
    })();

    const options = {
        actions: {
          clickDay(event, dates) {
            // dateSelected = dates[0]; >> this can be used to handle the date selected
            confirmationMessage();
          },
        },
    };
    const calendar = new VanillaCalendar('#calendar', options);
    calendar.init();

    const bookingConfCard = document.createElement("div");
    bookingConfCard.classList.add("body-card", "card__booking-conf");
    contentDiv.appendChild(bookingConfCard);
};

export default reservationsPage;