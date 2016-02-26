import Ember from 'ember';

//PROBABLY Don't need hash
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question', {reload: true})
        .then(function(questions) {
          return questions.sortBy('timestamp').reverse();
        })
    });
  },
  actions: {

  }

});
