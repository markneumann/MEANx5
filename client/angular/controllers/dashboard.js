app.controller('dashboard', ['$scope', 'sessionFactory', 'usersFactory', 'bucketFactory', '$location', function($scope, sf, uf, bf, loc) {
  var _this = this;
  this.user = sf.getUser();
  console.log('this.user at top', this.user);
  if (Object.keys(this.user).length == 0){
    loc.url('/');
  }
  // Object.keys({}).length

  this.index = function(){uf.index(function(data){
      _this.users = data;
      console.log('_this.users at dashboard index', _this.users);
    });
  }
  this.index();
  this.usersshow= function(){uf.show(_this.user, function(data){
    console.log('usersshow data = ',data);
    _this.user = data;
    sf.setUser = _this.user;
    });
  }
  this.usersshow();
  this.submit_list = function(){
    console.log('dashboard submit_list');
    bf.create(_this.bucketlist, _this.user, function(output){
      console.log('_this.bucketlist =', _this.bucketlist);
      if(!output){
          _this.usersshow();
          _this.bucketlist = {};
      } else {
          console.log('output = ', output );
          var theMessage = '';
          for (var field in output.errors) {
            console.log('field',field);
            theMessage = output.errors[field].message;
          }
          _this.errorArea = theMessage;
      }
    });
  }
  this.update_bucket = function(data){
    console.log('bf.update', data);
    bf.update(data, this.usersshow);
  }

  //
  // this.forErrors = function(output){
  //         console.log('catch --->', output);
  //         // if(output.data.error){  //handle other errors
  //         //     //console.log('error = ', output.data.error);
  //         //     console.log('error errmsg = ', output.data.error);
  //         //     $scope.errorArea.errmsg = output.data.error;
  //         // }
  //         // if(output.data.errmsg){   //handle not unique
  //         //     console.log('errmsg = ', output.data.errmsg);
  //         _this.errorArea.errmsg = output;
  //         //}
  //     }
  //

}]);
