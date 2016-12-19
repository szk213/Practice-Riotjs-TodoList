"use strict"
import uuid from 'uuid/v4'

export default class Todo {
   constructor() {
       this._id = uuid();
       this._check = false;
       this._name = "";
   }

   get id() {
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

   get name() {
       return this._name;
   }

   set name(name) {
       this._name = name;
   }
}
// // Class syntax is a good test for the preprocessor because it is not supported
// // by PhantomJS 1.9.
// export default class Hello {
//     constructor(name) {
//         this.name = name;
//     }
//
//     say() {
//         return `Hello, ${this.name}!`;
//     }
// }