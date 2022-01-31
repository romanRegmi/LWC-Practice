import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    // Call the updateUser method from child component
    updateUser() {
        this.template.querySelector('c-child').updateUser();

    }



}