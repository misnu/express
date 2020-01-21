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
				{
					field: 'Status',
					title: 'Status',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Active', 'class': ' kt-badge--success'},
							2: {'title': 'Inactive', 'class': ' kt-badge--danger'},
						};
						return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
					},
				}, {
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
						    	<a class="dropdown-item" href=""><i class="la la-plus-circle"></i> Add to Outlet</a>\
						    	<a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_edit_outlet"><i class="la la-edit"></i> Edit</a>\
								<a class="dropdown-item" href="#" data-toggle="modal" data-target="#kt_modal_1"><i class="la la-remove"></i> Delete</a>\
						  	</div>\
						</div>\
						<div class="modal fade" id="kt_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
							<div class="modal-dialog" role="document">\
								<div class="modal-content">\
									<div class="modal-header">\
										<h5 class="modal-title" id="exampleModalLabel">Delete Staff</h5>\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
										</button>\
									</div>\
									<div class="modal-body">\
										<p>Are you sure you want to delete this staff?</p>\
									</div>\
									<div class="modal-footer">\
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
										<button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>\
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

var KTDatatableHtmlTableTax = function() {
	// Private functions

	// demo initializer
	var tax = function() {

		var datatable = $('.kt-datatable-2').KTDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#generalSearch'),
			},
			columns: [
				{
					field: 'Status',
					title: 'Status',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Active', 'class': ' kt-badge--success'},
							2: {'title': 'Inactive', 'class': ' kt-badge--danger'},
						};
						return '<span class="kt-badge ' + status[row.Status].class + ' kt-badge--inline kt-badge--pill">' + status[row.Status].title + '</span>';
					},
				}, {
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
						    	<a class="dropdown-item" href="edit_staff.html"><i class="la la-edit"></i> Add To Outlet</a>\
						    	<a class="dropdown-item" href="detail_staff.html"><i class="la la-info"></i> Edit</a>\
								<a class="dropdown-item" href="#" data-toggle="modal" data-target="#kt_modal_1"><i class="la la-user-times"></i> Delete</a>\
						  	</div>\
						</div>\
						<div class="modal fade" id="kt_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
							<div class="modal-dialog" role="document">\
								<div class="modal-content">\
									<div class="modal-header">\
										<h5 class="modal-title" id="exampleModalLabel">Delete Staff</h5>\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
										</button>\
									</div>\
									<div class="modal-body">\
										<p>Are you sure you want to delete this staff?</p>\
									</div>\
									<div class="modal-footer">\
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
										<button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>\
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