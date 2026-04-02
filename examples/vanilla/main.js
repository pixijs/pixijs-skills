import { Application, Sprite, Graphics, Text, Assets, Container } from "https://cdn.jsdelivr.net/npm/pixi.js@8/dist/pixi.min.mjs";

const app = new Application();
await app.init({ width: 800, height: 600, background: "#1099bb" });
document.body.appendChild(app.canvas);

// 1. Graphics — shape-then-fill pattern (v8 API)
const graphics = new Graphics();
graphics.roundRect(50, 50, 100, 100, 12).fill("#0fa");
graphics.circle(250, 100, 50).fill({ color: "#f06", alpha: 0.8 });
app.stage.addChild(graphics);

// 2. Text
const text = new Text({ text: "PixiJS v8", style: { fontSize: 36, fill: "#ffffff" } });
text.position.set(400, 50);
app.stage.addChild(text);

// 3. Container hierarchy + ticker animation
const container = new Container();
container.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.addChild(container);

const box = new Graphics();
box.rect(-40, -40, 80, 80).fill("#9cf");
container.addChild(box);

app.ticker.add((ticker) => {
  container.rotation += 0.02 * ticker.deltaTime;
});
