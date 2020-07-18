import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('huskies')
    
    useEffect(() => {
        setSelectedVideo(videos[0])
        console.log(videos)
    }, [videos])
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={video => setSelectedVideo(video)} 
                            videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

// making custom hooks for reusable code and instead of shared duplicate code in two locations
// its the best way to create reusable code in a React project 
// not really focused on the jsx part if we wanted to make the jsx reusable we would use another component.
// so look at the App component and essentially everything at the top is what we we make reusable inside the custom hook
// custom hooks always make use of at least one primitive hook
// we are not talking about building a hook from scratch, we're talking about taking some code that makes use of those primitive hooks and put them into a reusable function
// process includes identifying inputs and outputs. extract all code to a seperate function. recieve inputs as arguments and return outputs