class Sound {

  constructor(audioContext) {
    this.audioContext = audioContext;
  }

  init(waveType) {
    this.oscillator = this.audioContext.createOscillator();
    this.gain = this.audioContext.createGain();

    this.oscillator.connect(this.gain);
    this.gain.connect(this.audioContext.destination);
    this.oscillator.type = waveType;
  }

  play(freqValue, waveType, volume, startTime, endTime) {
      this.init(waveType);

      this.oscillator.frequency.value = freqValue;
      this.gain.gain.setValueAtTime(volume, this.audioContext.currentTime);

      this.oscillator.start(startTime);

      if (endTime !== undefined) {
        this.stop(endTime);
      }
  }

  stop(time) {
    this.gain.gain.exponentialRampToValueAtTime(0.001, time);
    this.oscillator.stop(time + 1);
  }
}

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let note = new Sound(audioContext);
let now = audioContext.currentTime;

note.play(100, 'sawtooth', 0.5, now, now + 20);
note.play(1056, 'square', 0.5, now, now + 20);
