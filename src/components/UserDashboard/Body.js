import React from 'react';
import '../../css/UserDashboard/Body.css';
import { useDataLayerValue } from '../../DataLayer';
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import ScheduleSharpIcon from '@material-ui/icons/ScheduleSharp';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    const [{ fetched_tracks }] = useDataLayerValue();

    function onSongSelect(track_id) {
        dispatch({
            type: "SET_SELECTED_SONG",
            track_id: track_id
      });
    }

    return (
        <div className = 'body'>

            <Header spotify = {spotify} />
            
            { fetched_tracks? (   
                <div className = 'titleBar_and_songRow_container'>
                    <div className = 'titleBar_above_songRow'>
                        <div className = 'titleBar_title'>
                            <h5>TITLE</h5>
                        </div>
                        <div className = 'titleBar_album'>
                            <h5>ALBUM</h5>
                        </div>
                        <div className = 'titleBar_duration'>
                            <h5 className = 'songDuration_icon'><ScheduleSharpIcon /></h5>
                        </div>
                    </div>
                    
                    <hr/>
                    <br/>

                    {fetched_tracks.tracks.items.map((item) => ( 
                        <SongRow track = {item} onSongSelect = {onSongSelect}/>
                    ))}
                </div>
                
            ) : (   <div>
                        <div className = 'body__info'>
                            <img 
                                src = {discover_weekly?.images[0].url}
                                alt = 'Discover Weekly'
                            />
                            <div className = 'body__infoText' >
                                <strong>PLAYLIST</strong>
                                <h2>Discover Weekly</h2>
                                <p>{ discover_weekly?.description }</p>
                            </div>  
                        </div>

                        <div className = 'body__songs'>
                            <div className = 'body__icons'>
                                <PlayCircleFilledIcon className = 'body__shuffle' />
                                <FavoriteIcon fontSize = 'large' />
                                <MoreHorizIcon />
                            </div>

                            <div className = 'discover_weekly_titleBar_and_songRow_container'>

                                <div className = 'titleBar_above_songRow'>
                                    <div className = 'titleBar_title'>
                                        <h4>TITLE</h4>
                                    </div>
                                    <div className = 'titleBar_album'>
                                        <h4>ALBUM</h4>
                                    </div>
                                    <div className = 'titleBar_duration'>
                                        <h4><ScheduleSharpIcon /></h4>
                                    </div>
                                </div>

                                <hr/>
                                <br/>
                        
                                {discover_weekly?.tracks.items.map((item) => (
                                    <SongRow track = {item.track} onSongSelect = {onSongSelect} />
                                ))}
                            </div>    
                        </div>    
                        
                    </div>   
                            
                )
            }

        </div>
    )
}



export default Body;