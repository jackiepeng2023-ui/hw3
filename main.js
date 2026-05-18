document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻擋預設送出行為
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;

    // 驗證使用者名稱
    if (!usernameInput.value.trim()) {
        usernameError.style.display = 'block';
        usernameInput.style.borderColor = '#d32f2f';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
        usernameInput.style.borderColor = 'transparent';
    }

    // 驗證密碼
    if (!passwordInput.value.trim()) {
        passwordError.style.display = 'block';
        passwordInput.style.borderColor = '#d32f2f';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.style.borderColor = 'transparent';
    }

    if (isValid) {
        alert('前端驗證成功！模擬登入中...');
        // 這裡可續接後續行為
    }
});