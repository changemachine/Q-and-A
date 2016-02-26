import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    postQuestion() {
      var params = {
        asker:     this.get('asker'),
        question:  this.get('question'),
        timestamp: Date.now(),
        answers:   []
      };
      console.log(params);
      var route = this;
      var newQ  = this.store.createRecord('question', params);

      newQ.save().then(function(maybeID) {
        console.log(maybeID);
        route.transitionTo('index');
      });

    }
  }
});
