/**
 * Created by cuitao-pc on 16/5/26.
 */

import DialogDispatcher from '../dispatcher/DialogDispatcher';
import {DialogCmd, DialogEvent} from '../constants/DialogConstants';
import assign from 'object-assign';
import EventEmitter from 'events';

var _dialogQueue = [];

var DialogStore = assign({}, EventEmitter.prototype, {
  emitChange: function (eventType) {
    this.emit(eventType);
  },
  addChangeListener: function (eventType, callback) {
    this.on(eventType, callback);
  },
  removeChangeListener: function (eventType, callback) {
    this.removeListener(eventType, callback);
  },
  getDialogQueueRef: function () {
    return _dialogQueue;
  },
  getCurrentDialog: function () {
    return _dialogQueue[0];
  }
});

DialogStore.dispatchToken = DialogDispatcher.register(function (action) {
  var {eventType, ...msg} = action;
  var emitChange = DialogStore.emitChange.bind(DialogStore);

  switch (eventType) {
    case DialogCmd.SHOW:
      _dialogQueue.push(msg);
      emitChange(DialogEvent.SHOW_NEXT);
      break;
    case DialogCmd.CLOSE:
      _dialogQueue.shift();
      emitChange(DialogEvent.SHOW_NEXT);
      break;
  }
});
export default DialogStore