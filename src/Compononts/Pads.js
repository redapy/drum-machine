import React, { compenents, useState, useEffect} from "react"
import Display from "./Display"
import african from "../pad/african.wav"
import bassbell from "../pad/bassbell.wav"
import bling from "../pad/bling.wav"
import clap from "../pad/clap.WAV"
import dramatic from "../pad/dramatic.wav"
import kick from "../pad/kick.wav"
import curiouscym1 from "../pad/curiouscym1.wav"
import snare from "../pad/snare.wav"
import timbale from "../pad/timbale.WAV"
import PadsList from "./PadsList.js"


const Pads = () => {

  const [display, setDisplay] = useState('Play a Sound !')
    
    const playAudio= (id, display) => {
        
        const audio=document.getElementById(id)
        audio.play()
        setDisplay(display)
    }

    const handleKeydown = (e) => {
      bankOne.map(pad => {
        if(e.keyCode===pad.keyCode) {
          playAudio(pad.keyTrigger, pad.id)
        }
    })
    };

    useEffect(() => {
      window.addEventListener('keydown', handleKeydown)
      return () => {
      window.removeEventListener('keydown', handleKeydown)
      }
  });
    

    return ( 
        <div id="drum-machine">
          <PadsList  pads={bankOne} playAudio={playAudio} /> 
          <Display display={display} />    
        </div>   
     );
}


const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'african',
      url: african
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'bassbell',
      url: bassbell
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'bling',
      url: bling
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'clap',
      url: clap
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'curiouscym1',
      url: curiouscym1
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'dramtic',
      url: dramatic
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick",
      url: kick
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'snare',
      url: snare
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'timbale',
      url: timbale
    }
  ];
  
export default Pads;

