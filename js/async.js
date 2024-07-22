"use strict";

function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.getElementById("lyrics-form");
form.addEventListener("submit", doSubmit)

async function doSubmit(event){
    event.preventDefault();
   
    const lyricsEl = document.getElementById("lyrics");
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;

    lyricsEl.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';

   
        const lyricsResponse = await findLyrics(artist, song);
        const data = await lyricsResponse.json();
        lyricsEl.innerHTML = data.lyrics;
}