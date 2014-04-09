/*
 * Copyright: 2012, V. Glenn Tarcea
 * MIT License Applies
 */

angular.module('AngularStomp', []).
    factory('ngstomp', function($rootScope) {
        var stompClient = {};

        function NGStomp(url) {
            this.stompClient = Stomp.client(url, ['websocket']);
        }

        NGStomp.prototype.subscribe = function(queue, callback) {
            this.stompClient.subscribe(queue, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback(args[0]);
                })
            })
        }

        NGStomp.prototype.send = function(queue, headers, data) {
            this.stompClient.send(queue, headers, data);
        }

        NGStomp.prototype.connect = function(user, password, on_connect, on_error, vhost) {
            this.stompClient.connect(user, password,
                function(frame) {
                    $rootScope.$apply(function() {
                        on_connect.apply(stompClient, frame);
                    })
                },
                function(frame) {
                    $rootScope.$apply(function() {
                        on_error.apply(stompClient, frame);
                    })
                }, vhost);
        }

        NGStomp.prototype.connectHeaders = function(headers, on_connect, on_error) {
            this.stompClient.connect(headers,
                function(frame) {
                    $rootScope.$apply(function() {
                        on_connect.apply(stompClient, frame);
                    })
                },
                function(frame) {
                    $rootScope.$apply(function() {
                        on_error.apply(stompClient, frame);
                    })
                });
        }

        NGStomp.prototype.disconnect = function(callback) {
            this.stompClient.disconnect(function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply(args);
                })
            })
        }

        return function(url) {
            return new NGStomp(url);
        }
    });