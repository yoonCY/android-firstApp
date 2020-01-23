import {observable} from 'mobx';
class Counter {
  @observable counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
    this.change();
  }

}
export default new Counter();
