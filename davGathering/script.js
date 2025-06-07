// Signup
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        type: document.getElementById('user-type').value
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup Successful! Please Login.');
    window.location = 'login.html';
});

// Login
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser && email === storedUser.email) {
        sessionStorage.setItem('loggedUser', JSON.stringify(storedUser));
        window.location = 'dashboard.html';
    } else {
        alert('User not found! Signup first.');
    }
});

// Dashboard
window.onload = function() {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    if(loggedUser){
        document.getElementById('user-name').innerText = loggedUser.name;
        document.getElementById('user-type').innerText = loggedUser.type;
    }
};

function logout(){
    sessionStorage.removeItem('loggedUser');
    window.location = 'login.html';
}
