import FlashLib from 'flashlib';

export default class CheckBox extends FlashLib.MovieClip {
    constructor(data) {
        super(data);

        this._checked = false;

        this.init();
        this.addListeners();

        //this.checked = true;
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
    }

    get checked() {
        return this._checked;
    }

    set checked(value) {
        this._checked = value;
        //this.goToFrame(this.checked ? 2 : 1);
        this.goToFrame(this.checked ? 2 : 1);

        console.log(this.checked ? 'checked' : 'unchecked');
    }
}
FlashLib.registerClass('CheckBox', CheckBox);