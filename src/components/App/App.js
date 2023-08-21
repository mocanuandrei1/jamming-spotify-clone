import logo from '../../logo.svg';
import './App.css';

import Tracklist from '../Tracklist/Tracklist';

function App() {
  const hardCodedTracks = [
    { id: 1, name: 'Track 1', artist: 'Artist 53', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    // Add more tracks...
  ];

  return (
    <div className="App">
      <h1>Jamming</h1>
      <Tracklist tracks={hardCodedTracks} />
    </div>
  );
}

export default App;
