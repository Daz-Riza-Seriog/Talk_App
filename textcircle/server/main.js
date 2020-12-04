import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import { ShareJS } from 'meteor/edemaine:sharejs';

this.Documents = new Mongo.Collection('documnts');

Meteor.startup(() => {
  if (!Documents.findOne()) { //falsey statement--if isn't there
    Documents.insert({title:'my nw documnt'})
  }
  // code to run on server at startup
});
