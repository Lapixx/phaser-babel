import DemoText from "./demoText";

class DemoState extends Phaser.State {

    create() {

        const myText = new DemoText(this.game);
        this.game.stage.addChild(myText);
    }
}

export default DemoState;
