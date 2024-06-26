// 1. create a class that is similar to 'MainGameScene'
// 2. Create a preload method within the class
// 3. Cut anything that refereneces preload

import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene 
{
    constructor () {
        super({ key: 'preloader' })
    }

    preload() {
        //create the progress bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(800, 500, 320, 50); //transparent grey one

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text(
            { 
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: 
            {
                font: '20px monospace',
                //fill: '#ffffff'
            } 
            });
            loadingText.setOrigin(0.5, 0.5);
                    //update the progress  event listener
                    this.load.on('progress', function (value) {
                console.log(value);
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(810, 510, 300 * value, 30); //white moving bar
            });
            this.load.on('fileprogress', function (file) 
            {
            console.log(file.src);
            });
            this.load.on('complete', function () 
            {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();

            console.log('complete');
            });

            // Load images and sound
            this.load.image('enemy', '/enemy.png');
            this.load.image('character', '/character.png');
            this.load.image('background', '/Background.jpg');

            this.load.image('Mainbackground', '/mainBackground.jpg');
            
            this.load.image('EndingBackground', '/EndingBackground.jpg');

            this.load.image('StartButton', '/StartButton.jpg');

            this.load.image('UFO', '/UFO.png');
            this.load.image('Gear', '/PixelGear.jpg');

            this.load.audio('BackgroundMusic', '/backgroundMusic.mp3')
            
            const thisScene = this.scene;
            this.load.on('complete', function()
            {
            thisScene.start('start-menu')
            })
    }
}

