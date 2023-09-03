// https://api.emberjs.com/ember/release/classes/Route
import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 15 }];
    return items;
  }

  // A.)
  // setupController(controller, model) {
  //   super.setupController(controller, model);
  //   const subtotal = model.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);
  //   controller.set('subtotal', subtotal);
  // }

  // B.) handle setting logic on controller with getters
}
