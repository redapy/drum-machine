
const PadsList = ({pads, playAudio}) => {
    
    
    

    return ( 
                
        <div className="drum-pads">
              {pads.map((pad) => (
            <button 
                key={pad.id}
                className="drum-pad"
                id={pad.id}
                onClick={() => {playAudio(pad.keyTrigger, pad.id)}}
            >{pad.keyTrigger}<audio id={pad.keyTrigger} src={pad.url} className="clip"></audio>
            </button>

        ))}
        </div>

     );
}
 
export default PadsList;