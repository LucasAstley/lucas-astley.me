let keylog = [];
const targetWord = "rick";
const targetWord2 = "liam";
const stopWord = "stop";
const profileThumb = document.querySelector('.profile-thumb');
const luluHover = document.querySelector('.lulu-hover');
const song = document.getElementById("rick-song")
const song2 = document.getElementById("liam-song")

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
        if (recentKeys === targetWord2) {
            profileThumb.style.background = 'url(liam/liam.jpeg)';
            luluHover.textContent = 'comment aménager un appartement de 0,1 mètre carré en une maison fonctionnelle, Liam a soudé un cadre en acier galvanisé carré et à emprunter des vices d\'expansion à sa tante pour le fixer au mur';
            song2.play()
        }
        if (recentKeys === stopWord) {
            profileThumb.style.background = 'url(images/logo.gif)';
            luluHover.textContent = 'Alias Lucas Astley';
            song.pause();
            song.currentTime = 0;
            song2.pause();
            song2.currentTime = 0;
        }
};