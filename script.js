// JavaScript to handle the chatbot functionality

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }

    addChatLog("You", userInput);

    // Basic chatbot responses for demonstration purposes
    let botResponse = getChatbotResponse(userInput);

    setTimeout(function() {
        addChatLog("Chatbot", botResponse);
    }, 500);

    document.getElementById("user-input").value = ""; // Clear input after sending
});

function addChatLog(sender, message) {
    let chatLog = document.getElementById("chat-log");
    let chatEntry = document.createElement("p");
    chatEntry.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(chatEntry);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom of the chat log
}

function getChatbotResponse(userInput) {
    let response = "";

    if (userInput.toLowerCase().includes("name")) {
        response = "My name is Praveen.";
    } else if (userInput.toLowerCase().includes("education")) {
        response = "I am studying BE CSE at ANNA UNIVERSITY (MIT Campus).";
    } else if (userInput.toLowerCase().includes("skills")) {
        response = "I have skills in Communication (Tamil, English, Hindi), Teamwork, Leadership, and Problem-solving.";
    } else if (userInput.toLowerCase().includes("technical skills")) {
        response = "My technical skills include C, C++, Java, Python, and Udemy courses like Generative AI by Google.";
    } else if (userInput.toLowerCase().includes("goals")) {
        response = "My short-term goal is to learn new technologies like Node.js and React. My long-term goal is to start a business in the Food Industry.";
    } else {
        response = "I'm sorry, I don't have information on that. Try asking about my skills, education, or goals!";
    }

    return response;
}
