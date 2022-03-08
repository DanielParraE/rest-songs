/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class DisplaySongs {

    constructor() {
        this.headers = '<tr><th>ID</th><th>Name</th><th>Album</th><th>Year</th><th>Author</th><th>Duration</th></tr>';
        document.getElementById('form-song-name').onsubmit = function (evt) {
            evt.preventDefault();
            new DisplaySongs().searchSongs();
        };
        document.getElementById('form-song-id').onsubmit = function (evt) {
            evt.preventDefault();
            new DisplaySongs().searchSongID();
        };
    }

    searchSongs() {

        let txt = document.getElementById('txtBusqueda').value;
        let url = '/RESTSongsProject/webresources/song/songnamerequest/' + txt;

        console.log(url);

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            var tbl = document.getElementById('tbl-songs');

            tbl.innerHTML = '';

            for (var i = 0; i < data.length; i++) {
                tbl.innerHTML += '<tr><td>' + data[i].id + '</td><td>' + data[i].name + '</td><td>' + data[i].album + '</td><td>' + data[i].releasedYear + '</td><td>' + data[i].author + '</td><td>' + data[i].durationTime + '</td>';
            }

        }).catch(exception => console.error(exception.stack));

    }

    searchSongID() {

        let id = document.getElementById('idBusqueda').value;

        if (isNaN(id)) {
            return;
        }

        let url = '/RESTSongsProject/webresources/song/songidrequest/' + id;

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            var tbl = document.getElementById('tbl-songs');
            console.log(data);
            tbl.innerHTML = '';
            
            tbl.innerHTML += '<tr><td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.album + '</td><td>' + data.releasedYear + '</td><td>' + data.author + '</td><td>' + data.durationTime + '</td>';

        }).catch(exception => console.error(exception.stack));
    }

    displayAllSongs() {
        let url = '/RESTSongsProject/webresources/song/allsongs';

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            var tbl = document.getElementById('tbl-songs');

            tbl.innerHTML = '';

            for (var i = 0; i < data.length; i++) {
                tbl.innerHTML += '<tr><td>' + data[i].id + '</td><td>' + data[i].name + '</td><td>' + data[i].album + '</td><td>' + data[i].releasedYear + '</td><td>' + data[i].author + '</td><td>' + data[i].durationTime + '</td>';
            }

        }).catch(function () {
            console.log("Booo");
        });
    }

}

window.onload = () => {
    let ds = new DisplaySongs();
    ds.displayAllSongs();
};
