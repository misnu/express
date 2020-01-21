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
						    	<a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal_edit_special_promo"><i class="la la-edit"></i> Edit</a>\
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
										<p>Are you sure you want to delete this promo?</p>\
									</div>\
									<div class="modal-footer">\
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
										<button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="modal fade" id="modal_edit_special_promo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
						<div class="modal-dialog modal-lg modal-dialog-centered" role="document">\
							<div class="modal-content">\
								<div class="modal-header">\
									<h5 class="modal-title" id="exampleModalLabel">Edit Special Promo</h5>\
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
									</button>\
								</div>\
								<div class="modal-body">\
									<form>\
										<div class="form-group">\
											<label for="recipient-name" class="form-control-label">Promo Name :</label>\
											<input type="text" class="form-control" id="special-promo-name" placeholder="Promo Pelajar">\
										</div>\
										<div class="form-group form-group-last">\
												<label for="address">Promo Description and discount rate :</label>\
													<ul class="nav nav-pills" role="tablist">\
														<li class="nav-item">\
															<a class="nav-link active" data-toggle="tab" href="#special_promo_tabs_1">Regulation</a>\
														</li>\
														<li class="nav-item">\
															<a class="nav-link" data-toggle="tab" href="#special_promo_tabs_2">How To Use</a>\
														</li>\
													</ul>\
													<div class="tab-content">\
														<div class="tab-pane active" id="special_promo_tabs_1" role="tabpanel">\
															<textarea class="form-control" id="address" rows="3" placeholder="Regulation"></textarea>\
														</div>\
														<div class="tab-pane" id="special_promo_tabs_2" role="tabpanel">\
															<textarea class="form-control" id="address" rows="3" placeholder="How To Use"></textarea>\
														</div>\
													</div>\
										</div>\
										<div class="input-group mb-4">\
												<div class="input-group-prepend">\
												<button class="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" autocomplete="off" type="button">Percentage</button>\
												<button class="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" autocomplete="off" type="button">Rupiah</button>\
												</div>\
												<input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" placeholder="10000">\
										</div>\
										<div class="form-group">\
											<label for="exampleSelect1">Location</label>\
											<select class="form-control" id="exampleSelect1">\
												<option>All Location</option>\
												<option>Green Lake</option>\
												<option>Taman Palem</option>\
											</select>\
										</div>\
										<div class="form-group">\
											<label>Promo Banner</label>\
											<div class="dropzone dropzone-default" id="kt_dropzone_1">\
												<div class="dropzone-msg dz-message needsclick">\
													<h3 class="dropzone-msg-title">Drop files here or click to upload.</h3>\
													<span class="dropzone-msg-desc">Attach a 320 x 200 Banner for a better fit.</span>\
												</div>\
											</div>\
										</div>\
										</form>\
									</div>\
									<div class="modal-footer">\
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
										<button type="button" class="btn btn-primary">Save</button>\
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