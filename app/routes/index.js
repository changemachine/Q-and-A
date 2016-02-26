import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      question: this.store.findAll('question', {reload: true})
        .then(function(questions) {
          return questions.sortBy('timestamp').reverse();
        })
    });
  },
  // sortProperties: ['timestamp'],
  // sortAscending: false,
  actions: {

  }

});
