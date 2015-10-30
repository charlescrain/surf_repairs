var app = angular.module( 'app' );

app.controller( 'HomeCtrl', function( $cookies, $state )  {
	if($state.current.name === 'home'){
		if( $cookies.get('userType') === 'surfer' ) {
			$state.go( 'home.surfers', {}, {reload:true} );
		} else if( $cookies.get('userType') === 'repair-artist' ) {
			$state.go( 'home.repair-artists', {}, {reload:true} );
		} else {
			$state.go( 'splash', {}, {reload:true} );
		}
	}
});