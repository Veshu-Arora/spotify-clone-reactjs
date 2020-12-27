import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import '../../css/UserDashboard/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../../DataLayer';

function Header({ spotify }) {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('')

    useEffect(() => { 

        spotify.searchTracks(`${query}`).then((response) => {
            dispatch({
              type: "SET_FETCHED_TRACKS",
              fetched_tracks: response
            })
        })   

    }, [query]);

    function updateSearch(event) {
        setSearch(event.target.value);
    }

    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);
    }

    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className = 'header'>

            <div className = 'header__left'>
                    <SearchIcon onClick = {getSearch} className = 'searchIcon' titleAccess = 'Click to Search'/>
                    <input
                        placeholder = 'Search for Artists, Songs, or Podcasts'
                        type = 'text'
                        value = {search} 
                        onChange = {updateSearch}
                    /> 
            </div>

            <div className = 'header__right'>
                <Avatar src = {user?.images[0]?.url} alt = {user?.display_name} />
                <h4>{user?.display_name}</h4>  
            </div>

        </div>
    )
}



export default Header;