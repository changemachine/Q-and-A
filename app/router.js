import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ask');
  this.route('answer');
  this.route('q', {path: '/q/:qid'});
});

export default Router;
