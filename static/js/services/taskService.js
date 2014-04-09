'use strict';

angular.module('taskApp')
    .factory('taskService', function () {

        var tasks = [];

        return {
            add : function(task){
                 tasks.unshift(task);
            },
            fetch : function(){
                return tasks;
            }
        };
    });
