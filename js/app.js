'use strict';

var chatApp = angular.module("chatApp", ["firebase"]);

// http is build in...  but if we use, will put firebase below AND above because it is external.

chatApp.controller('ChatController', ['$scope', '$firebase', function ($scope, $firebase) {
	var chatRef = new Firebase("https://dazzling-fire-8103.firebaseio.com/chats");
  $scope.comments = $firebase(chatRef);

  $scope.addComment = function(comment) {
    // AngularFire $add method
    $scope.comments.$add({comment: comment, when: Date(), name: "Anon" });
    //or add a new person manually
    // chatRef.update({name: 'Alex', age: 35});
    $scope.newComment = "";
  };
}]);

