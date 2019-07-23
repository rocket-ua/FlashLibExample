import FlashLib from 'flashlib';

export default class CheckBox extends FlashLib.MovieClip {
    constructor(data) {
        super(data);

        this.checked = false;

        this.init();
        this.addListeners();
    }

    init() {
        this.interactive = true;
        this.buttonMode = true;
    }

    addListeners() {
        this.on('click', this.onEvent, this);
    }

    onEvent($data) {
        switch ($data.type) {
            case 'click':
                this.onClick();
                break;
        }
    }

    onClick() {
        this.checked = !this.checked;
        this.goToFrame(this.checked ? 2 : 1);
    }
}
window.CheckBox = CheckBox;