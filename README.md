# drum-machine
- Users can play sounds when they click on the pads or on the associated keyboard Letter (Q will play the pad with txt "Q"). This app is mainly looping through a list of objects with the `map()` method, each Object represent a pad with different keys (id, keyCode,keyTrigger and The sound itself). Each pad has an onClick propreity to fire a function `playAudio`. That function grap the audio using the DOM manipulation `document.getElementById()` and play it.
- This app also use The EventListener inside the `useEffect` hook to play audio on keyDown.
- This app uses SASS to style elements.
#### Improvements I'd like to add 
- Add other instruments (other list of obejcts) such as piano, and allow user to switch between them.
- Grap audios with the `useRef` hook instead of DOM manipulation.
## Installation
- First use `npm install` to install all the dependencies.
- then start the devolopement server  `npm start`.
- for more information  please reffer to [react-app](/react-app.md)
## Try it !!
https://redapy.github.io/drum-machine/
