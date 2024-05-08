import Phaser from 'phaser';
import PreLoader from './preloader'
import StartMenu from './start-menu'


class MainGameScene extends Phaser.Scene 
{
    constructor(){
        super({ key: 'main-game'})
    }

    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;

    container: any
    container2: any

    create() 
    { 
        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        const enemyImage = this.add.image(0, 0, 'enemy');
        enemyImage.setScale(0.3)
        const characterImage = this.add.image(0, 0, 'character');

        this.container = this.add.container(400, 300)
        this.container.add([ enemyImage ]);

        this.container.setSize(400, 300);
        this.container.setInteractive({ draggable: true });

        //this.loadBackground('background', '/Background.jpg')
        //this.mouseCursor('cursor', '/Cursor.png')

        this.container.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container.x = dragX;
            this.container.y = dragY;

        });

        this.container.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });

        this.container2 = this.add.container(400, 300)


        this.container2.add([ characterImage ]);


        this.container2.setSize(400, 300);
        this.container2.setInteractive({ draggable: true });

        this.container2.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container2.x = dragX;
            this.container2.y = dragY;

        });

        this.container2.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });



        //this.preloadAndLoadImages(2, 'character', '/character.png', 0.5, 1000)
        //this.preloadAndLoadImages(2, 'enemy', '/enemy.png', 0.2, 1000)
        
        
        let startButton = this.add.text(900, 900, '', { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize: '32px'});

        startButton.setText('Start')
        
    }

    update() 
    {
       //Keyboard Movment
       if(this.aKey?.isDown) {
        this.container.x = this.container.x -= 10;
    }
    if(this.dKey?.isDown) {
        this.container.x = this.container.x += 10;
    }
    if(this.wKey?.isDown) {
        this.container.y = this.container.y -= 10;
    }
    
    if(this.sKey?.isDown) {
        this.container.y = this.container.y += 10;
    }
    }

}

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [PreLoader, StartMenu, MainGameScene],
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }

};

export const game = new Phaser.Game(config)