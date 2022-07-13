import './App.css';
import VideoRecorder from 'react-video-recorder';
import * as React from 'react';
function App() {
  let video = [];
    for (let i = 0; i<4; i++){
      video.push(
        <div className = 'video'>       
        <VideoRecorder
          chunkSize={250}
          constraints={{
            audio: true,
            video: true
          }}
          timeLimit={120000}
          countdownTime={3000}
          dataAvailableTimeout={500}
          replayVideoAutoplayAndLoopOff
          showReplayControls
        />
        <p>¿Cual fue tu video juego favorito durante la infancia?</p>
      </div>
      )
    }

  return (
    <div className='App'>
      {video.map((video,index) => <div key={index}>{video}</div>)}     
    </div>
  );
}

export default App;
