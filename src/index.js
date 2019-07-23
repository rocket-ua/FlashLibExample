import * as PIXI from 'pixi.js'
import FlashLib from 'flashlib';
import './Button';
import './CheckBox';

export default class Index {
    constructor() {
        this.app = null;

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
        PIXI.Loader.shared.add('FlashLibAssets', 'FlashLibAssets.json', 'json');
        PIXI.Loader.shared.once('complete', this.onLoadingComplete, this);
        PIXI.Loader.shared.load();
    }

    /**
     * Построение мувиклипа
     */
    onLoadingComplete() {
        //Устаревшее. Библиотеки добавляются сразу при загрузке
        /*let libraryData = PIXI.Loader.shared.resources['FlashLib'].data;
        FlashLib.addNewLibrary(libraryData);*/

        let loginWindow = FlashLib.createItemFromLibrary('loginWindow', 'FlashLib');
        loginWindow.x = 200;
        loginWindow.y = 80;
        this.app.stage.addChild(loginWindow);

        //loginWindow.goToFrame('First')

        //Создание элемента из библиотеки
        /*let startBtn = FlashLib.createItemFromLibrary('start_btn', 'FlashLib');
        this.app.stage.addChild(startBtn);*/
    }
}

new Index();