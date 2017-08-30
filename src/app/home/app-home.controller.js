export class AppHomeController {
    constructor() {
      this.name = 'appHome';
      this.greeting = 'hello!';
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  