// Task 1 - Base Structure Created
//Completed in HTML

// Task 2 - Adding Support Tickets Dynamically

function addTicketCard(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer");

    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class","ticket-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;

    const issueElement = document.createElement("p");
    issueElement.textContent = issue;

    const priorityElement = document.createElement("span");
    priorityElement.textContent = priority;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Resolve";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        ticketContainer.removeChild(ticketCard);
    });

    // Adding Elements to Employee Card

    ticketCard.appendChild(nameElement);
    ticketCard.appendChild(issueElement);
    ticketCard.appendChild(removeButton);
    ticketCard.appendChild(priorityElement);

    //Add Card to Container
    
    ticketContainer.appendChild(ticketCard);

}
// Test Cases
addTicketCard("Colby Mullins", "Perfect ticket.", "High");
addTicketCard("Alice Clark", "Too expensive.", "Low");
addTicketCard("Bryce Marsh", "Queue is sooo long.", "High");


// Task 3 - Converting NodeLists to Arrays for Bulk Updates

let ticketCards = Array.from(document.querySelectorAll(".ticket-card"));

ticketCards.forEach((card) => {
    if (card.textContent.includes(`High`)){
    card.style.backgroundColor = "gold";
    card.style.color = "red";
    }
});

// Task 4 - Support Ticket Resolution with Event Bubbling
//Added resolve event listner in task 2

const ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener("click", function () {
    console.log("Card Clicked");
});


//Task 5 - Inline Editing for Support Tickets

ticketCards.forEach(card => {
    card.addEventListener("dblclick", function () {
        const nameElement = card.querySelector("h2");
        const issueElement = card.querySelector("p");
        const priorityElement = card.querySelector("span");

        const nameInput = document.createElement("input");
        nameInput.value = nameElement.textContent;

        const issueInput = document.createElement("input");
        issueInput.value = issueElement.textContent;

        const priorityInput = document.createElement("input");
        priorityInput.value = priorityElement.textContent;

        card.replaceChild(nameInput, nameElement);
        card.replaceChild(issueInput, issueElement);
        card.replaceChild(priorityInput, priorityElement);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        card.appendChild(saveButton);

        saveButton.addEventListener("click", function () {
            nameElement.textContent = nameInput.value;
            issueElement.textContent = issueInput.value;
            priorityElement.textContent = priorityInput.value

            card.replaceChild(nameElement, nameInput);
            card.replaceChild(issueElement, issueInput);
            card.replaceChild(priorityElement, priorityInput);
            card.removeChild(this);
        })
    });
});