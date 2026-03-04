const songs = [
    {
        name: "Chaita Ki Chaitwali",
        file: "songs/chaita.mp3",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        name: "Bedu Pako",
        file: "songs/bedu.mp3",
        image: "https://images.unsplash.com/photo-1609942072337-59a60b2c37e2"
    },
    {
        name: "Ghughuti Na Basa",
        file: "songs/ghughuti.mp3",
        image: "https://images.unsplash.com/photo-1549887534-3ec93abae5c3"
    }
];

const songList = document.getElementById("songList");
const searchInput = document.getElementById("searchInput");
const notFound = document.getElementById("notFound");

let currentAudio = null;

function displaySongs(songArray){
    songList.innerHTML = "";

    if(songArray.length === 0){
        notFound.style.display = "block";
        return;
    }

    notFound.style.display = "none";

    songArray.forEach(song => {

        const card = document.createElement("div");
        card.classList.add("song-card");

        card.innerHTML = `
            <img src="${song.image}">
            <div class="song-info">
                <h4>${song.name}</h4>
                <button class="play-btn">Play</button>
            </div>
        `;

        const playBtn = card.querySelector(".play-btn");

        playBtn.addEventListener("click", () => {

            if(currentAudio){
                currentAudio.pause();
            }

            currentAudio = new Audio(song.file);
            currentAudio.play();
        });

        songList.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = songs.filter(song =>
        song.name.toLowerCase().includes(searchText)
    );
    displaySongs(filtered);
});

displaySongs(songs);
