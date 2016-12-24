"use strict"
import uuid from 'uuid/v4'

export default class Todo {
   constructor() {
       this._id = uuid();
       this._check = false;
       this._text = "";
   }

   getId() {
       return this._id;
   }

   isChecked() {
       return this._check;
   }

   check() {
       this._check = true;
   }

   unCheck() {
       this._check = false;
   }

   getText() {
       return this._text;
   }

   setText(text) {
       this._text = text;
   }
}