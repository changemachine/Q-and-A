import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    postQuestion() {
      var params = {
        asker:     this.get('component.asker'),
        question:  this.get('component.question'),
        timestamp: Date.now()
      };
      console.log(params);
      var route = this;
      var newQ  = this.store.createRecord('question', params);

      newQ.save().then(function(maybeID) {
        console.log("SAVE RETURNS: "+ maybeID);
        route.transitionTo('index');
      });

    }
  }
});
