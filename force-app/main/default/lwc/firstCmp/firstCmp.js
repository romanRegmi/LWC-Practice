import { LightningElement } from 'lwc';

export default class FirstCmp extends LightningElement {

    name = 'Roman';

    updateName(event) {
        this.name = event.target.value;
    }


}