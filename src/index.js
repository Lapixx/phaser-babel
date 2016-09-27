import DemoState from "./DemoState";

class MyGame extends Phaser.Game {

    constructor() {
        super(640, 320, Phaser.AUTO, "main", null);
        this.state.add("DemoState", DemoState, false);
        this.state.start("DemoState");
    }

}

window.addEventListener("load", () => {
    new MyGame();
});
