export class <%= upModuleName %>Controller {
    constructor() {
      this.name = '<%= moduleName %>';
      this.greeting = 'hello!';
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  