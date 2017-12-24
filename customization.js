const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

let oscillator = audioContext.createOscillator();
let gain = audioContext.createGain();

oscillator.frequency.value = 1002;
oscillator.frequency.value = 120;
oscillator.frequency.value = 528;

oscillator.type = 'sine';
oscillator.type = 'sawtooth';
oscillator.type = 'triangle';
oscillator.type = 'square';

let now = audioContext.currentTime;

gain.gain.exponentialRampToValueAtTime(0.001, now + 20);
oscillator.stop(now + 21);
