"use strict"

fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/skolenhet')
    .then((response) => {
    return response.json();
})
.then((myJson) => {
    console.log(myJson);
})