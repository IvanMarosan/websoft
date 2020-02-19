(function () {
    'use strict';
        var myList = document.querySelector('ul');

        fetch('data/1281.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("HTTP error, status = " + response.status);
                }
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                for(var i = 0; i < json.Skolenheter.length; i++) {
                    var listItem = document.createElement('li');
                    listItem.innerHTML = '<strong> ' + "Skolenhetskod: " + json.Skolenheter[i].Skolenhetskod + ' </strong>';
                    listItem.innerHTML +='<strong> ' + "Namn: " + json.Skolenheter[i].Skolenhetsnamn + ' </strong>';
                    listItem.innerHTML +='<strong> ' + "Kommunkod: " + json.Skolenheter[i].Kommunkod + ' </strong>';
                    listItem.innerHTML +='<strong> ' + "PeOrgNr: " + json.Skolenheter[i].PeOrgNr + ' </strong>';
                    myList.appendChild(listItem);
                }
            })
            .catch(function(error) {
                var p = document.createElement('p');
                p.appendChild(
                    document.createTextNode('Error: ' + error.message)
                );
                document.body.insertBefore(p, myList);
            });
    })();