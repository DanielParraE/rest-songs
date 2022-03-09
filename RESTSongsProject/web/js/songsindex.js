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


                var formDelete = document.createElement('form');
                formDelete.setAttribute('action', '#');
                formDelete.setAttribute('method', 'DELETE');
                formDelete.setAttribute('id', 'song' + data[i].id);

                formDelete.innerHTML = '<input form="song' + data[i].id + '" type="hidden" value="' + data[i].id + '" name="idsong' + data[i].id + '" />';

                var btnDelete = document.createElement('button');
                btnDelete.setAttribute('type', 'submit');
                btnDelete.setAttribute('form', 'song' + data[i].id);
                btnDelete.innerHTML = 'Delete';

                formDelete.appendChild(btnDelete);

                formDelete.onsubmit = function (evt) {
                    evt.preventDefault();
                    new DeleteSong(this);
                };

                var aEdit = document.createElement('a');
                aEdit.setAttribute('href', data[i].id);
                aEdit.innerHTML = "<button>Edit</button>";

                aEdit.onclick = function (evt) {
                    evt.preventDefault();
                    sessionStorage.setItem("idsong", this.getAttribute("href"));
                    window.location.replace('./editsong.html');
                };

                var btns = document.createElement('td');
                btns.appendChild(formDelete);
                btns.appendChild(aEdit);

                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(album);
                tr.appendChild(releasedYear);
                tr.appendChild(author);
                tr.appendChild(durationTime);
                tr.appendChild(btns);

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

            var formDelete = document.createElement('form');
            formDelete.setAttribute('action', '#');
            formDelete.setAttribute('method', 'DELETE');
            formDelete.setAttribute('id', 'song' + data.id);

            formDelete.innerHTML = '<input form="song' + data.id + '" type="hidden" value="' + data.id + '" name="idsong' + data.id + '" />';

            var btnDelete = document.createElement('button');
            btnDelete.setAttribute('type', 'submit');
            btnDelete.setAttribute('form', 'song' + data.id);
            btnDelete.innerHTML = 'Delete';

            formDelete.appendChild(btnDelete);

            formDelete.onsubmit = function (evt) {
                evt.preventDefault();
                new DeleteSong(this);
            };

            var aEdit = document.createElement('a');
            aEdit.setAttribute('href', data.id);
            aEdit.innerHTML = "<button>Edit</button>";

            aEdit.onclick = function (evt) {
                evt.preventDefault();
                sessionStorage.setItem("idsong", this.getAttribute("href"));
                window.location.replace('./editsong.html');
            };

            var btns = document.createElement('td');
            btns.appendChild(formDelete);
            btns.appendChild(aEdit);

            tr.appendChild(id);
            tr.appendChild(name);
            tr.appendChild(album);
            tr.appendChild(releasedYear);
            tr.appendChild(author);
            tr.appendChild(durationTime);
            tr.appendChild(btns);

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

                var formDelete = document.createElement('form');
                formDelete.setAttribute('action', '#');
                formDelete.setAttribute('method', 'DELETE');
                formDelete.setAttribute('id', 'song' + data[i].id);

                formDelete.innerHTML = '<input form="song' + data[i].id + '" type="hidden" value="' + data[i].id + '" name="idsong' + data[i].id + '" />';

                var btnDelete = document.createElement('button');
                btnDelete.setAttribute('type', 'submit');
                btnDelete.setAttribute('form', 'song' + data[i].id);
                btnDelete.innerHTML = 'Delete';

                formDelete.appendChild(btnDelete);

                formDelete.onsubmit = function (evt) {
                    evt.preventDefault();
                    new DeleteSong(this);
                };

                var aEdit = document.createElement('a');
                aEdit.setAttribute('href', data[i].id);
                aEdit.innerHTML = "<button>Edit</button>";

                aEdit.onclick = function (evt) {
                    evt.preventDefault();
                    sessionStorage.setItem("idsong", this.getAttribute("href"));
                    window.location.replace('./editsong.html');
                };

                var btns = document.createElement('td');
                btns.appendChild(formDelete);
                btns.appendChild(aEdit);

                var tr = document.createElement('tr');

                tr.appendChild(id);
                tr.appendChild(name);
                tr.appendChild(album);
                tr.appendChild(releasedYear);
                tr.appendChild(author);
                tr.appendChild(durationTime);
                tr.appendChild(btns);

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

class DeleteSong {
    constructor(formDelete) {

        if (!(window.confirm("Do you really want delete this song?"))) {
            return;
        }

        let id = formDelete.children[0].value;

        console.log(id);

        fetch('/RESTSongsProject/webresources/song/deletesong/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        }).then(() => {
            window.alert("Song deleted succesfully.");
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
