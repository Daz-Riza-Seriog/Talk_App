import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Mongo} from 'meteor/mongo';
import { ShareJS } from 'meteor/edemaine:sharejs';
import {Session} from 'meteor/session'

import './main.html';

//this.Documents = new Mongo.Collection('documnts');
Messages = new Mongo.Collection("messages");

//var myvar= 10;
//update the session current_date
//variable every 1000 miliseconds
//Meteor.setInterval(function(){
  //Session.set('current_date', new Date());
//},1000);

//Template.date_display.helpers({
  //current_date:function(){
    //return Session.get('current_date');
  //},
  //myvar:function () {
    //return myvar;
  //}
//});

//Template.editor.helpers({
  //docid:function(){
    //var doc = Documents.findOne();
    //if (doc) {
      //return doc._id;
    //}
    //else {
      //return undefined;
    //}
  //},
  //config:function(){
    //return function (editor) {
      //editor.on('change',function(cm_editor,info){
        //console.log(cm_editor.getValue());
        //$('#viewer_iframe').contents().find('html').html(cm_editor.getValue());
      //});
    //}
  //}
//});

//Template.editor.events({

//});

//We over-write this code beacuse afailures in instal Mongo
Template.nicknameForm.events({
    'click .js-set-nickname':function(){
        var nickname = $('#nickname-input').val();
        Session.set('nickname',nickname);
        // HERE is where you come in -
        // can you save the nickname onto the session?
        // ... put something in here!
    }
});

Template.messageForm.events({
    // this event listener is triggered when they click on
    // the post! button on the message form template

    'click .js-save-message':function(event){
        var messageText = $('#message-text-input').val();
        var messageNickname = Session.get('nickname');
        var message = {messageText:messageText,
                        nickname:messageNickname,
                        createdOn:new Date()};
        Messages.insert(message);

    }
});

Template.header.helpers({
    // HERE is another one for you - can you
    // complete the template helper for the 'header' template
    // called 'nickname' that
    // returns the nickname from the Session variable?, if they have set it
    nickname:function(){
      return Session.get('nickname');
        // put something in here...
    },
});


Template.messageList.helpers({
    // this helper provides the list of messages for the
    // messgaeList template
    messages:function(){
        return Messages.find({});
    }
});
