"use strict";

function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.getElementById("lyrics-form");
form.addEventListener("submit", doSubmit)

function doSubmit(event){
    event.preventDefault();
   
    const lyricsEl = document.getElementById("lyrics");
    const artist = document.getElementById("artist").value;
    const song = document.getElementById("song").value;

    lyricsEl.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    findLyrics(artist, song).then(response => response.json()).then(
        data => {
            if(data.lyrics){
                lyricsEl.innerText = data.lyrics;
            }else{
                lyricsEl.innerHTML = data.error;
            }
        }
    ).catch(error => {
        lyricsEl.innerHTML = `Oops ! ${error}`;
    });
}