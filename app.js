
console.log("Moni's Zehntausend Multiplayer gestartet");

const state = {
    round: 1,
    maxRounds: 10
};

function updateRoundCounter() {
    const counter = document.getElementById("roundCounter");
    if(counter){
        counter.innerText = `${state.round} / ${state.maxRounds}`;
    }
}

function addChatMessage(user, message){
    const container = document.getElementById("chatMessages");
    if(!container) return;

    const bubble = document.createElement("div");
    bubble.className = "chatBubble";
    bubble.innerHTML = `<strong>${user}:</strong> ${message}`;

    container.appendChild(bubble);
}

function setupChat(){
    const btn = document.getElementById("sendChatBtn");
    const input = document.getElementById("chatInput");

    if(!btn || !input) return;

    btn.addEventListener("click", () => {

        if(input.value.trim() === "") return;

        addChatMessage("Du", input.value);

        input.value = "";
    });
}

window.addEventListener("DOMContentLoaded", () => {

    updateRoundCounter();
    setupChat();

    addChatMessage("System", "Multiplayer bereit.");
});
