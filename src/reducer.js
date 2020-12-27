export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    track_id: '0PKEQjnGn0LmPjozJ3t4MF',
    // token: 'BQCS4PdDrIeEv69c4_S3TD8svpyCkTSrrwDlG6fuSdj7pEWct-2fack7f-HfPBboYQLWLFrvNqplq80HjVQpr8tl_AyoFb62wElMqWKazqjP9qGcNl0YKN7DKahNACXVvgs7ipWehEZreclzgJeEgRIYwTuznWwaGhGE7XuoVxoDZfVa'
};

const reducer = (state, action) => {
    // console.log('printing action');
    // console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
            ...state, 
            user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }  
        case 'SET_DISCOVER_WEEKLY':
            return  {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_FETCHED_TRACKS':
            return {
                ...state,
                fetched_tracks: action.fetched_tracks
            }  
        case 'SET_SELECTED_SONG':
            return {
                ...state,
                track_id: action.track_id
            }     
        default:
            return state;
    }
}

export default reducer;