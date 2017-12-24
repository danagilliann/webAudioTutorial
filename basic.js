const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

let oscillator = audioContext.createOscillator();
let gain = audioContext.createGain();

oscillator.connect(gain);

// sets gain to destination
gain.connect(audioContext.destination);

// gives gain volume
gain.gain.value = 0.5;

oscillator.start();

