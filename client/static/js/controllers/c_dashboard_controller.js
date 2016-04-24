console.log('loading dashboard_controller');                /////////////
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController',                ///////////////
function($scope, $location, $route, AppointmentFactory, UserFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.appointments array
    $scope.now = new Date();
    $scope.now.toISOString();
    // $scope.loggedIn = UserFactory.getUser().name;
    console.log('routeparams ', $route.current.params.username);
    $scope.loggedIn = $route.current.params.username;
    console.log('top of dashboard controller for user ', $scope.loggedIn);
    // Show current Appointments
    AppointmentFactory.index(function(data) {
        console.log("AppointmentFactory.index");
        $scope.appointments = data;
        console.log("$scope.appointments =", $scope.appointments);
    });

//
    // $scope.cancel_appointment = function(appointments) {
    //     var cancelThisAppointment =$scope.appointments.indexOf(appointments);
    //     console.log('cancelThisAppointment: ', cancelThisAppointment);
    //     console.log('$scope.appointments = ', $scope.appointments);
    //     console.log('remove_id: ', $scope.appointments[cancelThisAppointment]._id);
    //     if(~cancelThisAppointment){
    //         var cancel_id = $scope.appointments[cancelThisAppointment]._id;
    //         // note the use of callbacks here
    //         AppointmentFactory.cancel(cancel_id, function() {
    //             console.log("factory canceled  =", cancelThisAppointment);
    //             $route.reload();
    //         });
    //     }
    // };

});
