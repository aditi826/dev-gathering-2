document.getElementById('chatbot').innerHTML = `
<div id="chat-window">
    <div id="chat-content"></div>
    <input id="user-query" placeholder="Ask a question..."/>
</div>`;

document.getElementById('user-query').addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        respond(this.value);
        this.value = '';
    }
});

function respond(query){
    const responses = {
        "signup": "Click Signup and fill your details to get started!",
        "login": "Enter your credentials in the login form to access your dashboard.",
        "connect": "Visit the dashboard and start connecting with startups or researchers!"
    };

    const answer = responses[query.toLowerCase()] || "I'm here to help! Try asking something else.";
    document.getElementById('chat-content').innerHTML += `<p><b>You:</b> ${query}</p><p><b>Bot:</b> ${answer}</p>`;
}
