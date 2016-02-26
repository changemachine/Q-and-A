import Ember from 'ember';

export default Ember.Route.extend({
  model: {

  },
  actions: {
    postAnswer(q){
      var newA = this.store.createRecord('answer', {
        answer: this.get('answer'),
        answerer: this.get('answerer'),
        qid: q.id,
        timestamp: new Date().getTime()
      });
      newA.save();
    }
  }
});
