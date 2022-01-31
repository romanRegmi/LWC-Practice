import { LightningElement, track, api } from 'lwc';

export default class Child extends LightningElement {

    @api
    location; // Fetching the location from parent
    // Value will be shown when parent component is depolyed

    @track
    user = {
        firstName: 'Roman',
        lastName: 'Regmi'
    }

    @api
    updateUser() {
        // this.user = {
        //     firstName: 'John',
        //     lastName: 'Doe'
        // };

        this.user.firstName = 'John'; // Will not work without @track 
        this.user.lastName = 'Doe';
    }

    actionButtonLabel = 'Show User'
    showDetails = false;

    toogleDetails() {
        this.showDetails = !this.showDetails;
        if(this.showDetails == true) {
            this.actionButtonLabel = 'Hide User'
        } else {
            this.actionButtonLabel = 'Show User'
        }
    }

}

