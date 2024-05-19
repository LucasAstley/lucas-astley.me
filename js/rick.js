let keylog = [];
const targetWord = "rick";
const stopWord = "stop";
const profileThumb = document.querySelector('.profile-thumb');
const luluHover = document.querySelector('.lulu-hover');
const song = document.getElementById("rick-song")

// Event listener (keypress)
document.onkeydown = function (e) {
    let keypressed = e.key.toLowerCase(); // Pour gérer le maj-lock
    keylog.push(keypressed);

    //On check si les dernières touches pressés correspondent au mot clé
    const recentKeys = keylog.slice(-targetWord.length).join('');
        if (recentKeys === targetWord) {
            profileThumb.style.background = 'url(rick/rick.gif)';
            luluHover.textContent = 'You just got Rick Rolled';
            song.play()
        }
        if (recentKeys === stopWord) {
            profileThumb.style.background = 'url(images/logo.gif)';
            luluHover.textContent = 'Alias Lucas Astley';
            song.pause();
            song.currentTime = 0;
        }
};