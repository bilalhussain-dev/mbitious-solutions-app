$( '#navbar-active-class' ).on( 'click', function () {
	$( '#re-menu .nav-menu' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});