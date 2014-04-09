'use strict';

angular.module('taskApp', ['ngResource', 'AngularStomp'])
    .config(function () {
        Stomp.WebSocketClass = SockJS;
    });



