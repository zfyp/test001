document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username.trim() === '') {
        errorMessage.textContent = '请输入用户名';
        return;
    }

    if (password.trim() === '') {
        errorMessage.textContent = '请输入密码';
        return;
    }

    // 在这里执行实际的登录逻辑,例如发送Ajax请求到服务器进行验证
    // 如果登录成功,则重定向到其他页面;如果登录失败,则显示相应的错误消息
    // 这里为了演示,我们只是显示一个简单的成功消息
    errorMessage.textContent = '登录成功!';
    errorMessage.style.color = 'green';
});