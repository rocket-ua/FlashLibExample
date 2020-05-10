import FlashLib from 'flashlib';

export default class Button extends FlashLib.MovieClip {
    constructor(data, displayItemData) {
        super(data, displayItemData);

        this.actions = {};

        this.init();
        this.addListeners();
    }

    init() {
        this.interactive = true;
        this.buttonMode = true;
    }

    addListeners() {
        this.on('mouseover', this.onEvent, this);
        this.on('mouseout', this.onEvent, this);
        this.on('mousedown', this.onEvent, this);
        this.on('mouseup', this.onEvent, this);
        this.on('click', this.onEvent, this);
    }

    onEvent($data) {
        switch ($data.type) {
            case 'mouseover':
                this.onOver();
                break;
            case 'mouseout':
                this.onOut();
                break;
            case 'mousedown':
                this.onDown();
                break;
            case 'mouseup':
                this.onUp();
                break;
            case 'click':
                this.onClick();
                break;
        }

        let actionData = this.actions[$data.type];
        if(actionData) {
            actionData.callback.call(actionData.context);
        }
    }

    onOver() {
        this.goToFrame(2);
    }

    onOut() {
        this.goToFrame(1);
    }

    onDown() {
        this.goToFrame(3);
    }

    onUp() {
        this.goToFrame(2);
    }

    onClick() {
        console.log('click');
        alert('click');
    }
}
