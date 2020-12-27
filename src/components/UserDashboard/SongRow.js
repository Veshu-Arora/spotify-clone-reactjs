import React from 'react';
import '../../css/UserDashboard/SongRow.css';

function SongRow({ track = "test" , onSongSelect}) {

    function convertDurationIntoMinutesAndSeconds(duration) {
        var ms = duration,
        min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);

        // const song_duration = (`${min}:${sec}`);
        const song_duration_1 = (min + ':' + '0' + sec)
        const song_duration_2 = (min + ':' + sec)
        
        if( sec < 10){
            return song_duration_1;
        } else{
            return song_duration_2;
        }
    }

    return (
        <div className = 'songRow' onClick = {() => onSongSelect(track.id)} >

            <div className = {'songPicture_andName'}>
                <img className = 'songRow__album'
                    src = {track.album.images[0].url}   
                    alt = ""
                />
                <div className = 'songRow__info'>  
                    <h1>{track.name}</h1> 
                    <p>
                        {track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div> 
            </div>

            <div className = 'songAlbum'>
                {track.album.name}
            </div>

            <div className = 'songDuration'>
                {convertDurationIntoMinutesAndSeconds(track.duration_ms)}
            </div>

        </div>
    )
}

export default SongRow;