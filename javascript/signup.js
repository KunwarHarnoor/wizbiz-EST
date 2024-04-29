document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you can add your login logic
    // For demonstration, let's just alert the entered username and password
    alert('Username: ' + username + '\nPassword: ' + password);
  });
  