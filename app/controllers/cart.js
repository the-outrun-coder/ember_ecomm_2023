// https://api.emberjs.com/ember/release/classes/Ember.Controller
import Controller from '@ember/controller';

export default class CartController extends Controller {
  // A.)
  // subtital = 0;
  // tax = 0;
  // total = 0;

  // B.)
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
