import { r as registerInstance, h, c as getAssetPath } from './core-8f475953.js';

const Starter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * A text prop
         */
        this.text = 'Hello World';
        /**
         * A image prop
         */
        this.image = 'starter.png';
    }
    render() {
        return (h("div", { class: "c-starter" }, h("img", { class: "c-starter__image", alt: "starter image", src: getAssetPath(`./assets/images/${this.image}`) }), h("p", { class: "c-starter__text" }, this.text)));
    }
    static get style() { return "/* Variable that can be manipulated by theme go into global scope */\n/* https://stenciljs.com/docs/config#globalstyle */\n:root {\n  --theme-color: #adadad;\n  --theme-padding: 0;\n}\n\n.c-starter {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 20px;\n  min-height: 200px;\n}\n.c-starter__image {\n  width: 100px;\n}\n.c-starter__text {\n  font-size: 16px;\n  color: var(--theme-color);\n}"; }
};

export { Starter as wc_starter };
