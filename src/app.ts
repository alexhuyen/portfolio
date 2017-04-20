export class App {
  message = 'Hello World!';

  constructor() {
  }

  attached() {
    setInterval(() => {
      this.message = String(new Date())
    }, 100)
  }
}
