var music = [
    { name: "1", src: "/src/one.ogg" },
    { name: "2", src: "/src/two.ogg" },
    { name: "3", src: "/src/three.ogg" },
    { name: "4", src: "/src/four.ogg" },
    { name: "5", src: "/src/five.ogg" }]

var outMusic = document.querySelector('#Out')

function load() {
    music.forEach((song) => {
        outMusic.innerHTML += `
        <div class="song">
            <h3>${song.name}</h3>
            <audio src="${song.src}" controls preload="auto"></audio>
        </div>`
    })
}

load()
