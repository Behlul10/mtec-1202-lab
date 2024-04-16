import Phaser from 'phaser';


class Game extends Phaser.Scene 
{
    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;

    container: any
    container2: any
    container3: any

    preload() 
    {
        this.mouseCursor('cursor', '/Cursor.png')
        this.loadBackground('background', '/Background.jpg')
/*         this.preloadAndLoadImages(2, 'character', '/character.png', 0.1, 100)
        this.preloadAndLoadImages(2, 'enemy', '/enemy.png', 0.1, 100)
 */
    }
    loadBackground(uniqueID: string, location: string)
    {
        const cameraWidth = this.cameras.main.width
        const cameraHeight = this.cameras.main.height

        const bg = this.add.image(0, 0, uniqueID)
            .setOrigin(0)

        bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height))

        this.load.image(uniqueID, location)

    }
/*     preloadAndLoadImages(numOfIterations: number, uniqueID: string, location: string, scale: number, size: number)
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
    } */

/*     initilizingKeys()
    {
        //initilizing keys
        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
    moving()
    {
        //check if keys are being pressed
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
    } */

    mouseCursor(uniqueID: string, location: string)
    {
        // for preload
        this.load.image(uniqueID, location)  
        
        // for create
            let image = this.add.image(0, 0, uniqueID).setScale(0.03);  // add image
            this.container = this.add.container(0,0); // add container
            this.container.add([image]);    // add image to container
            this.container.setSize(image.displayWidth,image.displayHeight); //set container size to image size
            
/*             this.container.on('drag', (pointer, dragX, dragY) => {
                this.container.x = dragX;
                this.container.y = dragY;
            }); */
            game.canvas.onmousemove = e => {
                const rect = game.canvas.getBoundingClientRect();
                const scaleX = game.scale.width / rect.width;
                const scaleY = game.scale.height / rect.height;
            
                // Translate mouse coordinates to game world coordinates
                const mouseX = (e.clientX - rect.left) * scaleX;
                const mouseY = (e.clientY - rect.top) * scaleY;
            
                this.container.x = mouseX;
                this.container.y = mouseY;
                        
/*                 const mouseX = e.clientX - game.canvas.offsetLeft;
                const mouseY = e.clientY - game.canvas.offsetTop;
                this.container.x = mouseX;
                this.container.y = mouseY;
 */            }
     
    }
    create() 
    { 


        this.loadBackground('background', '/Background.jpg')
        this.mouseCursor('cursor', '/Cursor.png')

/*         this.preloadAndLoadImages(2, 'character', '/character.png', 0.5, 1000)
        this.preloadAndLoadImages(2, 'enemy', '/enemy.png', 0.2, 1000)
        this.initilizingKeys()
 */        
        
        let startButton = this.add.text(900, 900, '', { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', 
            fontSize: '32px'});

        startButton.setText('Start')
        
    }

    update() 
    {
       //this.moving()
       
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