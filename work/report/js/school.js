(function () {
    'use strict';

    let url;

    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081";
    url = "data/1281.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    url = "https://rem.dbwebb.se/api/users";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    console.log('Console is ready!');
})();