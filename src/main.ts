import Phaser from 'phaser';
import PreLoader from './preloader'
import StartMenu from './start-menu'
//import MainGameScene from './main-game-scene'
import Scene from './main-game-scene'
import Ending from './ending'


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
  //  container2: any

    create() 
    { 
        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);
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
    physics : {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: [PreLoader, StartMenu, MainGameScene, Scene, Ending],
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }

};

export const game = new Phaser.Game(config)