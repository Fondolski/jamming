import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'name1', artist:'artist1', album:'album1', id: 1}, 
      {name: 'name2', artist:'artist2', album:'album2', id: 2}, 
      {name: 'name3', artist:'artist3', album:'album3', id: 3}],
      playListName: 'myPlayList',
      playListTracks: [{name: 'playListName1', artist:'playListArtist1', album:'playListAlbum1', id: 4}, 
      {name: 'playListName2', artist:'playListArtist2', album:'playListAlbum2', id: 5}, 
      {name: 'playListName3', artist:'playListArtist3', album:'playListAlbum3', id: 6}]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search =this.search.bind(this)
}

addTrack(track) {
  let tracks = this.state.playListTracks
  if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  tracks.push(track)
  this.setState({playListTracks: tracks})
}

removeTrack(track) {
  let tracks = this.state.playListTracks
  tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
  this.setState({playListTracks: tracks})
}

updatePlaylistName(name) {
  this.setState({playListName: name})
}

savePlaylist() {
  let trackURIs = this.state.playListTracks.map(track => track.uri);
}

search(term) {
  console.log(term)
}

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={ this.state.searchResults } onAdd={this.addTrack} />
            <Playlist playListName={ this.state.playListName } 
            playListTracks={ this.state.playListTracks } 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName} 
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
