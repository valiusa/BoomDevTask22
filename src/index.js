import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    const app = new Application();
    const p = document.createElement("p");
    const div = document.getElementById("emojis");

    // Used to access the app instance by the automated tests
    app.setEmojis(["🐒", "🦍", "🦧"]);
    let newEmojis = app.addBananas();

    p.innerHTML += newEmojis.map((emoji) => {
        return emoji;
    });

    div.appendChild(p);
    window.__JS_APP = app;
});
