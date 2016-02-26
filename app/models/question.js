import DS from 'ember-data';

export default DS.Model.extend({
  qid:       DS.attr(),
  question:  DS.attr(),
  asker:     DS.attr(),
  timestamp: DS.attr(),
  answers:   DS.hasMany('answer', {async: true})
});
