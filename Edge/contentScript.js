const replaceAvatarImages = () => {
    chrome.storage.local.get('avatarUrl', function(result) {
        const avatarUrl = result.avatarUrl || 'https://static.wikia.nocookie.net/cuttherope/images/7/72/Om-nom.png/revision/latest/scale-to-width-down/200?cb=20141010110353';
        const avatarElements = document.querySelectorAll('.avatar');
        avatarElements.forEach((avatar) => {
            avatar.style.backgroundImage = 'url(' + avatarUrl + ')';
        });
    });
};

window.onload = replaceAvatarImages;
new MutationObserver(replaceAvatarImages).observe(document, { childList: true, subtree: true });
