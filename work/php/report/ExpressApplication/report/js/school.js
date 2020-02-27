const table = document.getElementById('table');

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
                const listItem = document.createElement('tr');
                listItem.innerHTML = '<th> Skolenhetskod</th> <th> Skolenhetsnamn </th> <th>KommunKod</th> <th>PeOrgNr</th> </tr>';
                table.append(listItem);
                for(var i = 0; i < json.Skolenheter.length; i++) {
                    const listItem = document.createElement('tr');
                    listItem.innerHTML = '<td> '  + json.Skolenheter[i].Skolenhetskod + ' </td>';
                    listItem.innerHTML +='<td> ' +  json.Skolenheter[i].Skolenhetsnamn + ' </td>';
                    listItem.innerHTML +='<td> ' +  json.Skolenheter[i].Kommunkod + ' </td>';
                    listItem.innerHTML +='<tr> ' +  json.Skolenheter[i].PeOrgNr + ' </tr>';
                    table.appendChild(listItem);
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