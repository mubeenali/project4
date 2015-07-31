

var App = angular.module("App", ['ionic','firebase']);
App.controller("AppCtrl",["$scope","$log", AppCtrl]);

function AppCtrl($scope,$log) {
$scope.red = function()
{
  window.location="./index.html";
}
  $scope.save = function()
  { 
    alert("News data is saving now");
    var ref = new Firebase("https://mubeen.firebaseio.com/");
    var name = $('#newstitle').val();
      var url = $('#newsUrl').val();
      var description = $('#newsdiscription').val();
      ref.push({Name: name , Url: url , Description: description});
      $('#newstitle').val('');
      $('#newsUrl').val('');
      $('#newsdiscription').val('');
       


}
  }


App.controller("indexCtrl",["$scope","$log",indexCtrl]);




function indexCtrl($scope,$log) {
$scope.redirect = function()
{
  window.location="./create.html";
}

/*  $scope.get = function()
  {
     
          //aledrt("Hello World");
       // Get a database reference to our posts
       // debugger;
        var ref = new Firebase("https://mubeen.firebaseio.com/");
              // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      items =  snapshot.val();
    
      //$scope.items = items;
      //var i=0;
      for (var prop in items) {
      
        console.log(prop);
        $('#sp-table').append("<tr><td>"+ msg[prop].Name + "</td> <td>" + msg[prop].Description + " </td></tr>")
      }

      , function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
    );
  }
}*/
 
 $scope.get = function()
    {
       alert("Wait News will be displayed in a moment");
        //alert("Hello World");
       // Get a database reference to our posts
        var ref = new Firebase("https://mubeen.firebaseio.com/");



        
      // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {
      console.log(snapshot.val());
      var msg =  snapshot.val();
      //var i=0;
      for (var prop in msg) {
      
        console.log(prop);
        $('#sp-table').append("<div class='item'><tr><td><h3>"+msg[prop].Name+"</h3></td><br/> <td><a href="+ msg[prop].Url + ">"+msg[prop].Url +"</a></td><br/><td>" + msg[prop].Description + " </td></tr><div>")
       
      }
       alert("Data show complete");
    
      
    }, function (errorObject) {
      alert("fire base error");
    });

      }

  
}


 
 // setup an abstract state for the tabs directive
 
 // Each tab has its own nav history stack:



/*

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
*/