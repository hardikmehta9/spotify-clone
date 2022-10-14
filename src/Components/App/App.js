import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      SearchResults: [{name: 'name1',artist: 'artist1',album: 'album1',id: 1},
      {name: 'name2',artist: 'artist2',album: 'album2',id: 2},
      {name: 'name3',artist: 'artist3',album: 'album3',id: 3}
    ],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'PlaylistName1',artist: 'PlaylistArtist1',album: 'PlaylistAlbum1',id: 4},
      {name: 'PlaylistName2',artist: 'PlaylistArtist2',album: 'PlaylistAlbum2',id: 5},
      {name: 'PlaylistName3',artist: 'PlaylistArtist3',album: 'PlaylistAlbum3',id: 6},
    ]
    };
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
  }

  addTrack(track){
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id===track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track){
    let tracks=this.state.playlistTracks;
    tracks=tracks.filter(currTrack => currTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackUris= this.state.playlistTracks.map(track => track.uri);
  }

  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults SearchResults={this.state.SearchResults} 
            onAdd={this.addTrack}></SearchResults>
          <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            ></Playlist>
        </div>
      </div>
    </div>
    );
  }
}

export default App;