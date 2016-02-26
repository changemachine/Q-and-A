import Ember from 'ember';

export default Ember.Component.extend({
  model(params){
    // console.log("q-tile model params: "+ params);
    return this.store.findRecord('answer', params.qid);
  }
});
