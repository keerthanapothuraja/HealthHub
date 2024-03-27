document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `username=${username}&password=${password}`,
        });
  
        if (response.ok) {
          alert('Login successful!');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    });
  });
  