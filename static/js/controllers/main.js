'use strict';

angular.module('taskApp')
    .controller('MainCtrl', function ($scope, taskService, ngstomp) {
        $scope.helloworld = 'scope werkt!!';

        $scope.tasks = taskService.fetch();
        $scope.infomessage = 'Geen bericht';

        $scope.add = function(title)
        {
            taskService.add({name : title});
            $scope.tasks = taskService.fetch();
        };


        $scope.client = ngstomp('/stomp');
        $scope.client.connectHeaders({} , {
             apply : function(stompClient, frame) {
                 console.log('subscribing start');
                 $scope.client.subscribe("/topic/onAddTask", function (message) {
                     $scope.tasks.unshift({name: JSON.parse(message.body)});
                 });
                 $scope.client.subscribe("/topic/info", function (message) {
                     console.log("infomessage binnen");
                     $scope.infomessage = JSON.parse(message.body);
                 });
             }
        }, { apply : function(stompClient, frame){
            console.log('error!!!');
        }});
//        var stompClient = null;
//
//        $scope.connect = function() {
//            var socket = new SockJS('/stomp');
//            stompClient = Stomp.over(socket);
//            stompClient.connect({}, function(frame) {
//                console.log('Connected: ' + frame);
//                stompClient.subscribe('/topic/addTask', function(message){
//                    $scope.$apply(function() {
//                        $scope.tasks.unshift({name : JSON.parse(message.body)});
//                    });
//                });
//            });
//        }

//        $scope.disconnect = function () {
//            stompClient.disconnect();
//            console.log("Disconnected");
//        }

        $scope.addTaskSocket = function (taskName) {
            $scope.client.send("/app/addTask", {}, JSON.stringify(taskName));
        }

        var init = function () {
        }
        init();
    });
