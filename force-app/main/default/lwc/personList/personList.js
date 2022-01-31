import { LightningElement } from 'lwc';

export default class PersonList extends LightningElement {

    people = [
        {   
            id : 1,
            name: 'John'
        },
        {
            id : 2,
            name: 'Jane'
        },
        {
            id : 3,
            name: 'Jack'
        },
        {
            id : 4,
            name: 'Jill'
        }
        
    ];



}