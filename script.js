document.addEventListener('DOMContentLoaded', function() {
    const loginForm=document.getElementById('loginForm');
    const messageElement=document.getElementById('message');
    loginForm.addEventListener('submit',function(e){
        e.preventDefault();
        const username=document.getElementById('username').value.trim();
        const password=document.getElementById('password').value;
        messageElement.textContent='';
        messageElement.className='message';
        if(!username){
            showError('Please enter a username.');
            return;
        }
        if(password.length < 6){
            showError('Password must be at least 6 characters long.');
            return;
        }
        showSuccess('Login successful! Redirecting...');
        setTimeout(function(){
            window.location.href='todolist.html';
        },2700);
    });
    function showError(message){
        messageElement.textContent =message;
        messageElement.className = 'message error';
    }
    function showSuccess(message) {
        messageElement.textContent = message;
        messageElement.className = 'message success';
    }
});