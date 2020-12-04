import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Mongo} from 'meteor/mongo';
import { ShareJS } from 'meteor/edemaine:sharejs';

this.Documents = new Mongo.Collection('documnts');

import './main.html';


Template.editor.helpers({
  docid:function(){
    var doc = Documents.findOne();
    if (doc) {
      return doc._id;
    }
    else {
      return undefined;
    }
  }
});

Template.editor.events({

});
