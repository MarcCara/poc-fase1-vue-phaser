  import Phaser from 'phaser';

  export class MainScene extends Phaser.Scene {
    constructor() { super('MainScene'); }

    canviarColor(hexColor) {
      const color = parseInt(hexColor.replace('#', ''), 16);
      this.avatar?.setFillStyle(color);
    }

    create() { 
      this.avatar = this.add.circle(320, 200, 24, 0x10b981);
      this.etiqueta = this.add.text(320, 148, 'MarcCara', {
        fontSize: '18px', fontFamily: 'sans-serif', color: '#ffffff'
      }).setOrigin(0.5);

      this.textEstat = this.add.text(320, 168, 'Disponible', {
        fontSize: '14px', fontFamily: 'sans-serif', color: '#ffffff'
      }).setOrigin(0.5);
    }

    update(time) {
      this.avatar.y = 200 + Math.sin(time * 0.004) * 8;
      this.etiqueta.setPosition(this.avatar.x, this.avatar.y - 52);
      this.textEstat.setPosition(this.avatar.x, this.avatar.y - 32);
    }

    actualitzarNom(nouNom) {
      this.etiqueta?.setText(nouNom || 'Anònim');
    }

    actualitzarEstat(nouEstat) {
      this.textEstat?.setText(nouEstat);
    }
  }