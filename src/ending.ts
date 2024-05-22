import Phaser from 'phaser'

export default class Ending extends Phaser.Scene {
    constructor(){
        super({key : 'ending'})
    }
    container3 : Phaser.GameObjects.Container;

    create()
    {
        const  mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight = this.cameras.main.height;

        const halfHeight = mainCameraHeight / 2;
        const halfWidth = mainCameraWidth / 2;

        const EndingbackgroundImage = this.add.image(halfWidth, halfHeight, 'EndingBackground');
        EndingbackgroundImage.setScale(1.9,1.45);
        
        let Credits = this.add.text(1550, 1000, '', { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize: '32px'});
            Credits.setText('Credits: Behlul Vardal')
        
        
        // ufo
        const UFOImage = this.physics.add.image(0.1, 0.1, 'UFO');
        UFOImage.setScale(2);
        console.log(UFOImage.displayWidth, UFOImage.displayHeight);
        
        this.container3 = this.add.container(0.1, 0.1) as Phaser.GameObjects.Container;
        this.container3.add([UFOImage]);
        this.container3.setSize(UFOImage.displayWidth, UFOImage.displayHeight);
        this.container3.setInteractive({ draggable: true });
        
        // Immediately set the container to the desired position
        this.container3.x = halfWidth;
        this.container3.y = halfHeight;
        
        this.container3.on('drag', (pointer, dragX, dragY) => {
            console.log('UFO');
            this.container3.x = dragX;
            this.container3.y = dragY;
        });

        this.container3.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click');
        });

        
    }
}