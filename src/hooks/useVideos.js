import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);

    const search = async term => {
        const KEY = 'AIzaSyB5H-XLVqk2AbWsqqfsyQW6WLw4u8zCIWI'

        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });
        setVideos(response.data.items)
        
    };

    return  [videos, search] 
    // react convention to return an object
    // JS convention to return an array
};

export default useVideos