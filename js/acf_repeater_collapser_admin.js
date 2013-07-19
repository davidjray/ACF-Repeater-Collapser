jQuery(document).ready(function($) {

	// toggle the class that collapses the repeater
	// toggle appropriate button text
	function acf_repeater_toggle( event ) {
	    // Toggle Fields
	    $(this).parent().toggleClass('collapsed-repeater');
	    
	    // Nice Button Text
	    if( $(this).attr('value') == 'Collapse Fields' ) {
	    	$(this).attr('value', 'Expand Fields');
	    } else {
	    	$(this).attr('value', 'Collapse Fields');
	    }
	}

	// toggle the class that hides the repeater sub fields
	// toggle appropriate button text
	function acf_repeater_hide_toggle( event ) {
	    // Toggle Fields
	    $(this).parent().toggleClass('hidden-repeater');
	    
	    // Nice Button Text
	    if( $(this).attr('value') == 'Hide Fields' ) {
	    	$(this).attr('value', 'Show Fields');
	    } else {
	    	$(this).attr('value', 'Hide Fields');
	    }
	}

	// HTML to put above each repeater instance
	$collapseButton = '<input class="button field-repeater-toggle" type="button" value="Collapse Fields" />';

	// HTML to put above each repeater instance for HIDE button
	$hideButton = '<input class="button field-repeater-hide-toggle" type="button" value="Hide Fields" />';

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater .repeater, .field_type-flexible_content .repeater').each( function() {
		if( $( '.acf-input-table', $(this) ).hasClass('row_layout') ) {
			$(this).prepend( $collapseButton );
		}
	});

	// find each repeater instance, add the button if the field uses the row layout
	$('.field_type-repeater .repeater, .field_type-flexible_content .repeater').each( function() {
		//if( $( '.acf-input-table', $(this) ).hasClass('row_layout') ) {
			$(this).prepend( $hideButton );

			// Makes the fields hidden by default.
			$(this).addClass('hidden-repeater');
			$( '.field-repeater-hide-toggle' ).attr('value', 'Show Fields' )
		//}
	});


	// bind the click event to the toggle function
	$( '.field-repeater-toggle' ).on(
		'click',
		acf_repeater_toggle
	)

	// bind the click event to the HIDE toggle function
	$( '.field-repeater-hide-toggle' ).on(
		'click',
		acf_repeater_hide_toggle
	)



});
