jQuery(document).ready(function($) {
	$('#SameAsShipping').attr('checked', true);
	$('#billingForm').hide();
	$('#SameAsShipping').change(function(e) {
		if ($('#SameAsShipping').attr('checked')) {
			$('#billingForm').hide();
		} else {
			$('#billingForm').show();
		}
    });
	
	$('#catwebformbutton').click(function(e) {
		if ($('#SameAsShipping').attr('checked')) {
			$('#BillingAddress').val($('#ShippingAddress').val());
			$('#BillingCity').val($('#ShippingCity').val());
			$('#BillingState').val($('#ShippingState').val());
			$('#BillingCountry').val($('#ShippingCountry').val());
			$('#BillingZip').val($('#ShippingZip').val());
		}
	});
});
