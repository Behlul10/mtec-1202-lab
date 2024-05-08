

import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor(){
        super({key : 'start-menu'})
    }

    create()
    {
        const  mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight = this.cameras.main.height;

        const halfHeight = mainCameraHeight / 2;
        const halfWidth = mainCameraWidth / 2;

        const backgroundImage = this.add.image(halfWidth, halfHeight, 'start-menu-bg');
        const startButton = this.add.image(halfWidth, halfHeight, 'start-button');

        //add background music
        //decrease volume
        //loop it

        backgroundImage.setOrigin(.5, .5);
        backgroundImage.setScale(1.5, 1.5);

        startButton.setOrigin(.5, .5);
        startButton.setScale(.5, .5);
        startButton.setInteractive();

        startButton.on('pointerover', function(){startButton.setTint(0xf0ff00);})
        startButton.on('pointerout', function(){startButton.setTint(0xffffff);})

        startButton.on('pointerdown', function(){
            //navigate to the main game
        })
    }

    update()
    {

    }
}