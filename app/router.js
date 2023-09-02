import EmberRouter from '@ember/routing/router';
import config from 'ember-ecomm-2023/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('clothes', function () {
  //   this.route('shirts');
  // });
  this.route('item', { path: '/item/:item_id' });
  this.route('not-found', { path: '/*path' });
  this.route('cart');
});
