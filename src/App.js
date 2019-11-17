import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtubeApi from './apis/youtube';

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  onSearchFormSubmit = async (searchTerm) => {
    console.log(searchTerm);
    const response = await youtubeApi.get('/search', {
      params: {
        q: searchTerm
      }
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  }

  onVideoSelect = video => {
    console.log('From the App: ', video);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className='ui container'>
        <h2 className='ui center aligned header huge' style={{marginTop: '10px'}}>Youtube React Clone</h2>
        <SearchBar onSearchFormSubmit={this.onSearchFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;