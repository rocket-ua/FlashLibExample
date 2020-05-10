import * as PIXI from 'pixi.js'
import FlashLib from 'flashlib';
import './Import';

export default class Index {
    constructor() {
        this.app = null;
        this.compiled = false;

        this.start();
    }

    start() {
        this.applicationOptions = {
            antialias: true,
            backgroundColor: 0xCCCCCC,
            legacy: true,
            width: 1024,
            height: 768
        };
        this.app = new PIXI.Application(this.applicationOptions);
        document.body.appendChild(this.app.view);

        this.loadAssets();
    }

    /**
     * Загрузка ресурсов
     */
    loadAssets() {
        PIXI.Loader.shared.baseUrl = './';
        //PIXI.Loader.shared.baseUrl = './test/';
        PIXI.Loader.shared.add('FlashLibAssets', this.compiled ? 'FlashLibAssetsCompiled.json' : 'FlashLibAssets.json', 'json');
        PIXI.Loader.shared.once('complete', this.onLoadingComplete, this);
        PIXI.Loader.shared.load();
    }

    /**
     * Построение мувиклипа
     */
    onLoadingComplete() {
        let loginWindow = FlashLib.createItemFromLibrary('loginWindow', 'FlashLib');
        loginWindow.x = 200;
        loginWindow.y = 80;
        this.app.stage.addChild(loginWindow);
    }
}

new Index();