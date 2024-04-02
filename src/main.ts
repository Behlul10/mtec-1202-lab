import Phaser from 'phaser';


class Game extends Phaser.Scene 
{
    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;

    container: any
    container2: any

    preload() 
    {
        this.preloadAndLoadImages(2, 'character', '/character.png', 0.1, 100)
        this.preloadAndLoadImages(2, 'enemy', '/enemy.png', 0.1, 100)

    }
    preloadAndLoadImages(numOfIterations: number, uniqueID: string, location: string, scale: number, size: number)
    {
        // for the preload
        for(let i = 1; i<= numOfIterations; i++)
        {
            this.load.image(uniqueID + '-' + i, location)  
        }
        
        let infoText = this.add.text(1700, 20, '', { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize: '32px'
        });

        // for creating
        for (let i = 1; i<=numOfIterations; i++)
        {
            let image = this.add.image(0, 0, uniqueID + '-' + i).setScale(scale);
            this.container = this.add.container(size * Math.random(),size * Math.random());
            this.container.add([image]);
            this.container.setSize(image.displayWidth,image.displayHeight);
            this.container.setInteractive({draggable: true});
            
            this.container.on('drag', (pointer, dragX, dragY) => {
                console.log('enemy')
                this.container.x = dragX;
                this.container.y = dragY;
            });
    
           
            this.container.on('pointerdown', (pointer, dragX, dragY) => {
                console.log('click')
                infoText.setText(uniqueID + ' ' +i);

            });
        

            this.container.on('pointerup', function (pointer, dragX, dragY) {
                console.log('click')
                infoText.setText('')

            });

        }


    }
    create() 
    {
        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.preloadAndLoadImages(2, 'character', '/character.png', 0.5, 1000)
        this.preloadAndLoadImages(2, 'enemy', '/enemy.png', 0.2, 1000)
    }

    update() 
    {
        if(this.aKey?.isDown) 
        {
            this.container.x  = this.container.x  -= 10;
        }
        if(this.wKey?.isDown)
        {
            this.container.y = this.container.y -=10;
        }
        if(this.sKey?.isDown)
        {
            this.container.y = this.container.y +=10;
        }
        if(this.dKey?.isDown)
        {
            this.container.x = this.container.x +=10;
        }
    }

}

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: Game,
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }

};

export const game = new Phaser.Game(config)