import React from 'react';
import '../../css/UserDashboard/Footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from '../../DataLayer';

function Footer() {

    const [{ track_id }] = useDataLayerValue();

    const trackSrc = `https://open.spotify.com/embed/track/${track_id}`

    return (
        <div className = 'footer'>

            {/* THE COMMENTED CODE CAN BE USD TO CREATE A CUSTOMIZED SPOTIFY LIKE FOOTER */}

            {/* <div className = 'footer__left'>
                <img className = 'footer__albumLogo'
                    src = 'https://images.genius.com/52508cd10d83158bff37621b9236e512.600x600x1.jpg' 
                    alt = 'Song' />
                <div className = 'footer__songInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>  
                </div> 
            </div>

            <div className = 'footer__center'>
                <ShuffleIcon className = 'footer__green' />
                <SkipPreviousIcon className = 'footer__icon' />
                <PlayCircleOutlineOutlinedIcon className = 'footer__icon' fontSize = 'large' />
                <SkipNextIcon className = 'footer__icon' />
                <RepeatIcon className = 'footer__green' />

            </div>

            <div className = 'footer__right'>
                <Grid container spacing = {2}>
                    
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>

                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div> */}

            {/* COMMENTED CODE ENDS HERE */}

            <iframe 
                // src="https://open.spotify.com/embed/playlist/5vgwnsqLVlCLfqZuWOcMH4"  // to pass entire playlist to iframe
                // src="https://open.spotify.com/embed/album/6mOfUlKhx0AROUKdxA7v6Z"     // to pass an album to iframe
                src= {trackSrc} 
                width="100%" 
                height="100" 
                frameborder="20" 
                allowtransparency="true" 
                allow="encrypted-media">
            </iframe>

        </div>      
    )
}

export default Footer;