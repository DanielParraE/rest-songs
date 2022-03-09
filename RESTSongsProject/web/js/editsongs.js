/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class EditSong {
    constructor() {
        document.getElementById('form-song').onsubmit = function (evt) {
            evt.preventDefault();
            EditSong.editSelectedSong();
        };
    }

    static editSelectedSong() {
        
        if (!sessionStorage.getItem('idsong')) {
            return;
        }
        
        console.log('si entra jaja');
        
        let name = document.getElementById('sngName').value;
        let album = document.getElementById('sngAlbum').value;
        let year = document.getElementById('sngYear').value;
        let author = document.getElementById('sngAuthor').value;
        let duration = document.getElementById('sngDuration').value;

        let sng = new Object();

        sng.id = sessionStorage.getItem('idsong');
        sng.name = name;
        sng.album = album;
        sng.releasedYear = year;
        sng.author = author;
        sng.durationTime = duration;

        fetch('/RESTSongsProject/webresources/song/editsong', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sng)
        }).then(() => {
            sessionStorage.removeItem('idsong');
            window.location.replace('./index.html');
        }).catch((err) => {
            console.log(err);
        });
    }

    displaySelectedSong() {
        
        if (!sessionStorage.getItem('idsong')) {
            return;
        }
        
        let id = sessionStorage.getItem('idsong');
        
        let url = '/RESTSongsProject/webresources/song/songidrequest/' + id;

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            document.getElementById("sngName").setAttribute("value", data.name);
            document.getElementById("sngAlbum").setAttribute("value", data.album);
            document.getElementById("sngYear").setAttribute("value", data.year);
            document.getElementById("sngAuthor").setAttribute("value", data.author);
            document.getElementById("sngDuration").setAttribute("value", data.time);
        }).catch(exception => console.error(exception.stack));
    }

}

window.onload = () => {
    let es = new EditSong();
    es.displaySelectedSong();
};
