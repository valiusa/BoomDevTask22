import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.emojis = [];
        this.banana = "🍌";
        this.emit(Application.events.READY);
    }

    setEmojis(emojis) {
        this.emojis = emojis;

        const p = document.createElement("p");
        const div = document.getElementById("emojis");

        p.innerHTML += this.emojis.map((emoji) => {
            return emoji;
        });

        div.appendChild(p);
    }

    addBananas() {
        return this.emojis.map((emoji) => {
            return emoji + this.banana;
        });
    }
}
