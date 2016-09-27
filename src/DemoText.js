

class DemoText extends Phaser.Text {

    constructor(game) {

        const opts = {
            font: "50px Helvetica",
            fill: "#EE5500",
            align: "left"
        };

        const x = Math.random() * 200;
        const y = Math.random() * 200;

        super(game, x, y, "Hello world!", opts);

        this.hspeed = 3 * (Math.round(Math.random()) * 2 - 1);
        this.vspeed = 0.8 * (Math.round(Math.random()) * 2 - 1);

        const myLoop = this.game.time.events.loop(10, this.step, this);
        myLoop.timer.start();
    }

    step() {
        this.x += this.hspeed;
        this.y += this.vspeed;

        if (10 > this.x || this.x > this.game.world.width - 280) this.hspeed *= -1;
        if (10 > this.y || this.y > this.game.world.height - 60) this.vspeed *= -1;
    }

}

export default DemoText;
