// instantiate audioContext
const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

// create low frequency sawtooth wave
let oscillator1 = audioContext.createOscillator();
let gain1 = audioContext.createGain();
gain1.gain.value = 0.5
oscillator1.connect(gain1);
gain1.connect(audioContext.destination);
oscillator1.type = 'sawtooth';
oscillator1.frequency.value = 100;

// create high frequency square wave
let oscillator2 = audioContext.createOscillator();
let gain2 = audioContext.createGain();
gain2.gain.value = 0.5
oscillator2.connect(gain2);
gain2.connect(audioContext.destination);
oscillator2.type = 'square';
oscillator2.frequency.value = 1056;

// play
let now = audioContext.currentTime;
gain1.gain.setValueAtTime(0.5, audioContext.currentTime);
gain2.gain.setValueAtTime(0.5, audioContext.currentTime);
gain1.gain.exponentialRampToValueAtTime(0.001, now + 20);
gain2.gain.exponentialRampToValueAtTime(0.001, now + 20);

oscillator1.start();
oscillator2.start();

oscillator1.stop(now + 21);
oscillator2.stop(now + 21);
