document.getElementById('submit').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const messageElement = document.getElementById('message');
    if (!url) {
        messageElement.textContent = 'Please enter an URL';
    } else if (!url.endsWith('.png') && !url.endsWith('.png/')) {
        messageElement.textContent = 'Use a PNG image!';
    } else {
        browser.storage.local.set({avatarUrl: url}).then(function() {
            messageElement.textContent = 'Image saved!';
        });
    }

    messageElement.style.opacity = '0';
    messageElement.style.maxHeight = '0';
    setTimeout(function() {
        messageElement.style.opacity = '1';
        messageElement.style.maxHeight = '100px';
    }, 400);

    setTimeout(function() {
        messageElement.style.opacity = '0';
        messageElement.style.maxHeight = '0';
    }, 4200);
});

browser.runtime.onMessage.addListener((message) => {
    if (message.backgroundImage) {
        document.body.style.backgroundImage = 'url(' + message.backgroundImage + ')';
        document.body.style.backgroundSize = 'cover';
    }
});
