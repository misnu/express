"use strict";
// Class definition

var KTDatatableHtmlTableDemo = function() {
	// Private functions

	// demo initializer
	var demo = function() {

		var datatable = $('.kt-datatable').KTDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				// {
				// 	field: 'Status',
				// 	title: 'Status',
				// 	autoHide: false,
				// 	// callback function support for column rendering
				// 	template: function(row) {
				// 		var status = {
				// 			1: {'title': 'Active', 'class': ' kt-badge--success'},
				// 			2: {'title': 'Inactive', 'class': ' kt-badge--danger'},
				// 		};
				// 		return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
				// 	},
                // },
                {
					field: 'Roles',
					title: 'Roles',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Superadmin', 'state': 'danger'},
							2: {'title': 'Admin', 'state': 'primary'},
							3: {'title': 'Staff', 'state': 'success'},
						};
						return '<span class="kt-badge kt-badge--' + status[row.Roles].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +status[row.Roles].state + '">' +	status[row.Roles].title + '</span>';
					},
                },
                {
					field: 'Actions',
					title: 'Actions',
					sortable: false,
					width: 110,
					autoHide: false,
					overflow: 'visible',
					template: function() {
						return '\
						<div class="dropdown">\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
                                <a class="dropdown-item" href="#"><i class="la la-level-up"></i> In Proccess</a>\
                                <a class="dropdown-item" data-toggle="modal" href="#modal_send_purchase_order"><i class="la la-send"></i> Send to supplier</a>\
                                <a class="dropdown-item" href="#"><i class="la la-file-pdf-o"></i> Save to PDF</a>\
						    	<a class="dropdown-item" href="detail_staff.html"><i class="la la-remove"></i> Delete</a>\
						  	</div>\
						</div>\
						\
						<div class="modal fade" id="modal_send_purchase_order" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
							<div class="modal-dialog modal-lg modal-dialog-centered" role="document">\
								<div class="modal-content">\
									<div class="modal-header">\
										<h5 class="modal-title" id="exampleModalLabel">Sending Purchase Order</h5>\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
										</button>\
									</div>\
									<div class="modal-body">\
										<form>\
											<div class="form-group">\
												<div class="col-md-12 kt-align-center">\
												<h6 class="form-control-label">You’re about to send a purchase order to</h6>\
												<h4 class="form-control-label kt-font-bold"><br>Freshtables<br>freshtables@hotmail.com</h4>\
												<h6 class="form-control-label"><br>Send the purchase order?</h6>\
												</div>\
											</div>\
										</form>\
									</div>\
									<div class="modal-footer">\
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
									<button type="button" class="btn btn-success">Send</button>\
									</div>\
								</div>\
							</div>\
						</div>\
					';
					},
				}
			],
		});

    $('#kt_form_status').on('change', function() {
      datatable.search($(this).val().toLowerCase(), 'Status');
    });

    $('#kt_form_type').on('change', function() {
      datatable.search($(this).val().toLowerCase(), 'Type');
    });

    $('#kt_form_status,#kt_form_type').selectpicker();

	};

	$('#kt_sweetalert_demo_9').click(function(e) {
		swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		}).then(function(result){
			if (result.value) {
				swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				)
				// result.dismiss can be 'cancel', 'overlay',
				// 'close', and 'timer'
			} else if (result.dismiss === 'cancel') {
				swal.fire(
					'Cancelled',
					'Your imaginary file is safe :)',
					'error'
				)
			}
		});
	});

	return {
		// Public functions
		init: function() {
			// init dmeo
			demo();
		},
	};
}();


jQuery(document).ready(function() {
	KTDatatableHtmlTableDemo.init();
});