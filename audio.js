import { OpenSLES } from 'opensl-es';

class Audio {
  constructor() {
    this.openSLES = new OpenSLES();
  }

  playAudio(audio) {
    try {
      this.openSLES.play(audio.buffer);
    } catch (error) {
      console.error('Audio Error:', error);
    }
  }

  renderAudio(audio) {
    this.openSLES.render(audio);
  }
}

export default Audio;
