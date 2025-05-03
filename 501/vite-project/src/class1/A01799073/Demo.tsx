import * as React from 'react';
import BackToMenu from '../../class3/A01799073/components/BackMenu';
import video from './assets/Squirtle_sax.mp4'

const Demo: React.FC = () => {
    return (
      <div className="video-page">
        <h1>🎉 ¡Felicidades y chao!!</h1>
        <BackToMenu/>
        <video className="bg-video" autoPlay loop controls>
          <source src={video} type="video/mp4" />
          Tu navegador no esta soportando 😢
        </video>
      </div>
    );
  };
  
  export default Demo;
