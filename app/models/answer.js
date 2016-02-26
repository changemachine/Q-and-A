import DS from 'ember-data';

export default DS.Model.extend({
  answer:    DS.attr(),
  answerer:  DS.attr(),
  rating:    DS.attr(),
  qid:       DS.belongsTo('question', {async: true}),
  timestamp: DS.attr()
});
