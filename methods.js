/* Методы Обьекта и this при обращении к свойствам в методах
- changeName
- addTrack
- updateRating
- getTrackCount
*/

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    // trackCount: 3,
    // getName: function () {
    //    console.log('Ага это getName :)');
    // },
    // getName() {
    //    console.log('Ага это getName :)');
    // },
    changeName(newName) {
        console.log('this внутри changeName: ', this);

        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
        // this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    }, 
    getTrackCount() {
        return  this.tracks.length;
    },
};

// playlist.getName();
playlist.changeName('Новое имя');
playlist.addTrack('Новый трек 1');
playlist.addTrack('Новый трек 2');
playlist.updateRating(6);

console.log(playlist);