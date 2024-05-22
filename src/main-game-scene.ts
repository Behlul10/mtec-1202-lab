import Phaser from 'phaser'

export default class Scene extends Phaser.Scene {
    constructor(){
        super({key : 'main-game-scene'})
    }
    container2 : Phaser.GameObjects.Container;
    container3 : Phaser.GameObjects.Container;

    create()
    {
        const  mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight = this.cameras.main.height;

        const halfHeight = mainCameraHeight / 2;
        const halfWidth = mainCameraWidth / 2;

        const backgroundImage = this.add.image(halfWidth, halfHeight, 'Mainbackground');

//UFO
        const UFOImage = this.physics.add.image(0.1, 0.1, 'UFO');
        UFOImage.setScale(2)
        console.log(UFOImage.displayWidth, UFOImage.displayHeight);
        this.container3 = this.add.container() as Phaser.GameObjects.Container
        this.container3.add([ UFOImage ]);
        this.container3.setSize(UFOImage.displayWidth, UFOImage.displayHeight);
        this.container3.setInteractive({ draggable: true });

        // Immediately set the container to the desired position
        this.container3.x = halfWidth;
        this.container3.y = halfHeight;
        
        this.container3.on('drag', (pointer, dragX, dragY) => {
            console.log('UFO')
            this.container3.x = dragX;
            this.container3.y = dragY;
        });

        this.container3.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });
//GEAR 
        const GearImage = this.physics.add.image(0, 0, 'Gear');
        GearImage.setScale(0.2)
        console.log(GearImage.displayWidth, GearImage.displayHeight);
        this.container2 = this.add.container() as Phaser.GameObjects.Container
        this.container2.add([ GearImage ]);
        this.container2.setSize(GearImage.displayWidth, GearImage.displayHeight);
        this.container2.setInteractive({ draggable: true });

        // Immediately set the container to the desired position
        this.container2.x = halfWidth - 800;
        this.container2.y = halfHeight - 10;
        
        this.container2.on('drag', (pointer, dragX, dragY) => {
            console.log('Gear')
            this.container2.x = dragX;
            this.container2.y = dragY;

            
             // Check if the gear is within the bounds of the UFO container
             if (Phaser.Geom.Intersects.RectangleToRectangle(
                this.container2.getBounds(), 
                this.container3.getBounds()
            )) {
                console.log('Gear is inside UFO');
                this.container3.add(this.container2);
            }
           
        });

        this.container2.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });
    
//TEXT
    let DragText = this.add.text(0, 375, '', { 
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
        fontSize: '32px'});
        DragText.setText('Drag the gear to the UFO')


       //next scene
       let nextButton = this.add.text(1800, 1000, '', { 
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
        fontSize: '45px'});
        
        nextButton.setText('finished')

        nextButton.setOrigin(.5, .5);
        nextButton.setScale(1, 1);
        nextButton.setInteractive();

        nextButton.on('pointerover', function(){nextButton.setTint(0xf0ff00);})
        nextButton.on('pointerout', function(){nextButton.setTint(0xffffff);})
        nextButton.on('pointerdown', () => {
            // Navigate to the main game
            const thisScene = this.scene;

                thisScene.start('ending');

        });


    }
}