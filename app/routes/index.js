import Ember from 'ember';

//PROBABLY Don't need hash
export default Ember.Route.extend({
  model() {
    return this.store.findAll('question')
        .then(function(questions) {
          return questions.sortBy('timestamp').reverse();
        });
  },
  actions: {

  }

});
