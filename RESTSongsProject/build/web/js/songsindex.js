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

            tbl.innerHTML = new DisplaySongs().headers;

            for (var i = 0; i < data.length; i++) {
                var id = document.createElement('td');
                id.innerHTML = data[i].id;

                var name = document.createElement('td');
                name.innerHTML = data[i].name;

                var album = document.createElement('td');
                album.innerHTML = data[i].album;

                var releasedYear = document.createElement('td');
                releasedYear.innerHTML = data[i].releasedYear;

                var author = document.createElement('td');
                author.innerHTML = data[i].author;

                var durationTime = document.createElement('td');
                durationTime.innerHTML = data[i].durationTime;
                
                var tr = document.createElement('tr');
                
                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(album);
                tr.appendChild(releasedYear);
                tr.appendChild(author);
                tr.appendChild(durationTime);
                
                tbl.appendChild(tr);
                
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
            
            tbl.innerHTML = new DisplaySongs().headers;

            var id = document.createElement('td');
            id.innerHTML = data.id;

            var name = document.createElement('td');
            name.innerHTML = data.name;

            var album = document.createElement('td');
            album.innerHTML = data.album;

            var releasedYear = document.createElement('td');
            releasedYear.innerHTML = data.year;

            var author = document.createElement('td');
            author.innerHTML = data.author;

            var durationTime = document.createElement('td');
            durationTime.innerHTML = data.time;

            var tr = document.createElement('tr');
                
                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(album);
                tr.appendChild(releasedYear);
                tr.appendChild(author);
                tr.appendChild(durationTime);
                
                tbl.appendChild(tr);

            // tbl.innerHTML += '<tr><td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.album + '</td><td>' + data.releasedYear + '</td><td>' + data.author + '</td><td>' + data.durationTime + '</td>';

        }).catch(exception => console.error(exception.stack));
    }

    displayAllSongs() {
        let url = '/RESTSongsProject/webresources/song/allsongs';

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {

            var tbl = document.getElementById('tbl-songs');
            
            tbl.innerHTML = new DisplaySongs().headers;

            for (var i = 0; i < data.length; i++) {
                var id = document.createElement('td');
                id.innerHTML = data[i].id;

                var name = document.createElement('td');
                name.innerHTML = data[i].name;

                var album = document.createElement('td');
                album.innerHTML = data[i].album;

                var releasedYear = document.createElement('td');
                releasedYear.innerHTML = data[i].releasedYear;

                var author = document.createElement('td');
                author.innerHTML = data[i].author;

                var durationTime = document.createElement('td');
                durationTime.innerHTML = data[i].durationTime;
                
                var tr = document.createElement('tr');
                
                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(album);
                tr.appendChild(releasedYear);
                tr.appendChild(author);
                tr.appendChild(durationTime);
                
                tbl.appendChild(tr);
            }

        }).catch(function () {
            console.log("Booo");
        });
    }

}

class AddNewSong {
    constructor() {
        
        document.getElementById('form-song').onsubmit = function (evt) {
            evt.preventDefault();
            new AddNewSong().addSong();
        };
        
    }
    
    addSong() {
        
        let name = document.getElementById('sngName').value;
        let album = document.getElementById('sngAlbum').value;
        let year = document.getElementById('sngYear').value;
        let author = document.getElementById('sngAuthor').value;
        let duration = document.getElementById('sngDuration').value;
        
        let sng = new Object();
        
        sng.name = name;
        sng.album = album;
        sng.releasedYear = year;
        sng.author = author;
        sng.durationTime = duration;

        fetch('/RESTSongsProject/webresources/song/addsong', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sng)
        }).then(() => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
        
    }
    
}

window.onload = () => {
    let ds = new DisplaySongs();
    ds.displayAllSongs();
    
    let ns = new AddNewSong();
};
