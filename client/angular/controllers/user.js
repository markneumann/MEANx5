app.controller('user', ['$scope','usersFactory','sessionFactory','bucketFactory', '$routeParams', function($scope, uf,sf,bf, rp) {
  console.log('user.js sf.id', rp.userid);
  var _this = this;
    this.show = function(){uf.show2(rp.userid, function(data){
      console.log('user.show - data from uf',data);
      _this.user = data;
    });
  }
    this.show();
    console.log('called this.show in user');
    this.suser = sf.getUser();
    console.log("suser =", this.suser);
    this.update_bucket = function(data){
    console.log('user controller', data);
    // bf.update(data, this.usersshow);
    bf.update(data, this.show);

  }
}]);
