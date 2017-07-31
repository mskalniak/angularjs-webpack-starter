export default class HomeController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.name = 'my name';
        console.log(this.name);
    }
}