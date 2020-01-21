'use strict';
// Class definition

var KTDatatableDataLocalDemo = function() {
	// Private functions

	// demo initializer
	var demo = function() {
		var dataJSONArray = JSON.parse('[{"RecordID":1,"OrderID":"0374-5070","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"Rempel Inc","Location":"Jakarta","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"N/A","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"untungpakebeet","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"N/A","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.300.000","Status":21,"Type":21,"Actions":null},\n' +
			'{"RecordID":3,"OrderID":"0144-5168","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"Sugar Rush","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"untungpakebeet","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.2.100.000","Status":7,"Type":3,"Actions":null},\n' +
			'{"RecordID":4,"OrderID":"0442-5066","StartDate":"24/08/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"Kopikiwi","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.300.000","Status":7,"Type":2,"Actions":null},\n' +
			'{"RecordID":5,"OrderID":"0231-5034","StartDate":"13/09/2019","Outlet":"Outlet 1","EndDate":"13/10/2019","username":"Kokumi","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.300.000","Status":7,"Type":1,"Actions":null},\n' +
			'{"RecordID":6,"OrderID":"0256-5012","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"Alto","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"0","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.300.000","Status":7,"Type":11,"Actions":null},\n' +
			'{"RecordID":7,"OrderID":"0374-5009","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"Fore","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"0","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.2.100.000","Status":7,"Type":3,"Actions":null},\n' +
			'{"RecordID":8,"OrderID":"0344-5126","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"24/09/2019","username":"WorkCoffee","Location":"Bandung","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"BCA - Bank Transfer","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.2.100.000","Status":7,"Type":3,"Actions":null},\n' +
			'{"RecordID":9,"OrderID":"0511-5123","StartDate":"09/09/2019","Outlet":"Outlet 1","EndDate":"21/10/2020","username":"xingfutang","Location":"Jakarta","CompanyEmail":"cdodman0@wsj.com","Subscription":"TRIAL","CompanyName":"XING FU TANG","Method":"MasterCard - Credit Card","Notes":"sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","Discount":"10%","Website":"tripadvisor.com","promocode":"-","Longitude":119.598195,"ShipDate":"8/27/2017","PaymentDate":"2016-09-15 22:18:06","TimeZone":"Asia/Chongqing","TotalPayment":"Rp.2.100.000","Status":6,"Type":3,"Actions":null}]');

		var datatable = $('.kt-datatable').KTDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 10,
			},

			// layout definition
			layout: {
				scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
				// height: 450, // datatable's body's fixed height
				footer: false, // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: true,

			search: {
				input: $('#generalSearch'),
			},

			// columns definition
			columns: [
				 {
					field: 'OrderID',
					title: 'Invoice ID',
					autoHide: false,
				}, {
					field: 'username',
					title: 'Username',
					width: 150,
					textAlign: 'center',
					autoHide: false,
					template: function(row) {
						return row.username + ' ' + row.Location;
					
					},
				}, {
					field: 'Outlet',
					title: 'Outlet',
					textAlign: 'center',
					autoHide: false,
				}, {
					field: 'EndDate',
					title: 'Expired Date',
					type: 'date',
					format: 'MM/DD/YYYY',
					textAlign: 'center',
				
				}, {
					field: 'TotalPayment',
					title: 'Amount',
					textAlign: 'center',
				}, {
					field: 'Discount',
					title: 'Discount',
					
				}, {
					field: 'promocode',
					title: 'Promo Code',
					
			
				}, {
					field: 'Type',
					title: 'Subscription',
					width: 150,
					textAlign: 'center',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							99: {'title': 'Waiting Payment', 'state': 'danger'},
							1: {'title': '1 Month - PAID', 'state': 'primary'},
							2: {'title': '3 Months - PAID', 'state': 'primary'},
							4: {'title': '6 Months - PAID', 'state': 'primary'},
							3: {'title': '1 Year - PAID', 'state': 'success'},
							11: {'title': '1 Month - UNPAID', 'state': 'danger'},
							21: {'title': '3 Months - UNPAID', 'state': 'danger'},
							31: {'title': '6 Months - UNPAID', 'state': 'danger'},
							41: {'title': '1 Year - UNPAID', 'state': 'danger'},
						};
						return '<span class="kt-badge kt-badge--' + status[row.Type].state + ' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' + status[row.Type].state +
							'">' +
							status[row.Type].title + '</span>';
					},


				}, {
					field: 'PaymentDate',
					title: 'Payment Date',
					type: 'date',
					format: 'MM/DD/YYYY',
					
						template: function(row) {
						return row.PaymentDate + ' - ' + row.Method;
					
					},
					}, {
					field: 'Actions',
					title: '',
					sortable: false,
					width: 20,
					overflow: 'visible',
					autoHide: false,
					template: function() {
						return '\
						<div class="dropdown">\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
                                <i class="la la-cog"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item"  data-toggle="modal" data-target="#modal_edit_transaction"><i class="la la-edit"></i> View Details</a>\
						    	<a class="dropdown-item" data-toggle="modal" data-target="#modal_edit_transaction"><i class="la la-leaf"></i> Edit Data</a>\
						  	</div>\
						</div>\
						</a>\
					';
					},
				}],
		});

		$('#kt_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});

		$('#kt_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Type');
		});

		$('#kt_form_status,#kt_form_type').selectpicker();

	};

	return {
		// Public functions
		init: function() {
			// init dmeo
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	KTDatatableDataLocalDemo.init();
});