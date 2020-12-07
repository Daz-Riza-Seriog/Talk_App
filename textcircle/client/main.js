import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Mongo} from 'meteor/mongo';
import { ShareJS } from 'meteor/edemaine:sharejs';
import {Session} from 'meteor/session'

this.Documents = new Mongo.Collection('documnts');

import './main.html';

var myvar= 10;
//update the session current_date
//variable every 1000 miliseconds
Meteor.setInterval(function(){
  Session.set('current_date', new Date());
},1000);

Template.date_display.helpers({
  current_date:function(){
    return Session.get('current_date');
  },
  myvar:function () {
    return myvar;
  }
});

Template.editor.helpers({
  docid:function(){
    var doc = Documents.findOne();
    if (doc) {
      return doc._id;
    }
    else {
      return undefined;
    }
  },
  config:function(){
    return function (editor) {
      editor.on('change',function(cm_editor,info){
        console.log(cm_editor.getValue());
        $('#viewer_iframe').contents().find('html').html(cm_editor.getValue());
      });
    }
  }
});

Template.editor.events({

});
