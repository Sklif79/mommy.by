/*Подгрузка услуг на главной*/
$(document).ready(function(){
	var inProgress = false;
	$('body').on('click', '#services_index_load', function (event) {
		event.preventDefault();
		var dan;
		var st=$(this).attr('start');
		var pr=$(this).attr('parent');
		var serv_tpl = $(this).attr('serv_tpl');
		var ajax_url=$(this).attr('ajax_url');
		dan="&start="+st+"&parent="+pr+'&serv_tpl='+serv_tpl;

		var el = $('.services_index');

		if(!inProgress) {

			$.ajax({
				type: "GET",
				url: ajax_url,
				data: dan,
				beforeSend:function(){
					$(".spinner:not(.custom-pages)").show();
					inProgress = true;

					el.addClass('no-hover');
				},
				success: function(msg){ 	
					$('.services_index:not(.custom-pages)').append(msg);
					$(".spinner:not(.custom-pages)").hide();
					$("#services_index_load").hide();

					inProgress = false;
				},
				complete: function () {
					setTimeout(function () {
						el.removeClass('no-hover');
					}, 1000);

				}
			});		
		}	
	});
});


/*Подгрузка услуг на главной, мобильная*/
$(document).ready(function(){
	var inProgress = false;
	$('body').on('click', '#services_index_load_mobile', function (event) {
		event.preventDefault();
		var dan;
		var st=$(this).attr('start');
		var pr=$(this).attr('parent');
		var serv_tpl = $(this).attr('serv_tpl');
		var ajax_url=$(this).attr('ajax_url');
		dan="&start="+st+"&parent="+pr+'&serv_tpl='+serv_tpl;

		var el = $('.service-m-el-wrap');

		if(!inProgress) {

			$.ajax({
				type: "GET",
				url: ajax_url,
				data: dan,
				beforeSend:function(){
					$(".spinner:not(.custom-pages)").show();
					inProgress = true;

					el.addClass('no-hover');
				},
				success: function(msg){ 	
					el.append(msg);
					$(".spinner:not(.custom-pages)").hide();
					$("#services_index_load_mobile").hide();

					inProgress = false;
				},
				complete: function () {
					setTimeout(function () {
						el.removeClass('no-hover');
					}, 1000);

				}
			});		
		}	
	});
});




/*Подгрузка товаров и изменение вида отображения товаров*/
$(document).ready(function(){
	var inProgress = false;
	var spinner = '<div class="spinner center"><img src="assets/templates/market/img/spinner.gif" alt=""></div>'
	/*Отображение в виде плитки*/
	$('.sorting-catalog-view .view a.block').on("click", function (event) {
		event.preventDefault();
		if ( !$(this).hasClass("active") ) {
			$(this).addClass("active");
			$('.sorting-catalog-view .view a.line').removeClass("active");
			$('.sorting-catalog-view .view a.list').removeClass("active");
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');
			var load_prod=0;
			st=0;
			$('#product_site').attr('type','table');
			tp='table';
			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more-prod a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}
	});

	/*Отображение в виде списка*/
	$('.sorting-catalog-view .view a.line').on("click", function (event) {
		event.preventDefault();
		if ( !$(this).hasClass("active") ) {
			$(this).addClass("active");
			$('.sorting-catalog-view .view a.block').removeClass("active");
			$('.sorting-catalog-view .view a.list').removeClass("active");
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');
			var load_prod=0;
			st=0;
			$('#product_site').attr('type','line');
			tp='line';
			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more-prod a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}
	});

	/*Отображение в виде листа*/
	$('.sorting-catalog-view .view a.list').on("click", function (event) {
		event.preventDefault();
		if ( !$(this).hasClass("active") ) {
			$(this).addClass("active");
			$('.sorting-catalog-view .view a.block').removeClass("active");
			$('.sorting-catalog-view .view a.line').removeClass("active");
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');
			var load_prod=0;
			st=0;
			$('#product_site').attr('type','list');
			tp='list';
			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more-prod a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}
	});

	/*Отработка изменения количества отображаемых товаров*/
	$('.sorting-catalog-view .quantity a').on("click", function (event) {
		event.preventDefault();
		if ( !$(this).hasClass("active") ) {
			$('.sorting-catalog-view .quantity a').removeClass("active");
			$(this).addClass("active");
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');
			total=$(this).html();
			if(total=="Все"){
				total="all";
			}
			var load_prod=0;
			st=0;
			$('#product_site').attr('total',total);
			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more-prod a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}
	});



	/*Отработка изменения сортировки товаров товаров*/
	$('.sorting-catalog-view .rate a').on("click", function (event) {
		event.preventDefault();
		if ( !$(this).hasClass("active") ) {
			$('.sorting-catalog-view .rate a').removeClass("active");
			$(this).addClass("active");
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');

			sortby = $(this).attr('id');

			if(sortby=="menuindex"){
				sortby="c.pagetitle";
			}else if(sortby=="price"){
				sortby="new_price";
			}else{
				sortby="rating";
			}


			$('#product_site').attr('sort',sortby);

			if ( !$(this).hasClass("up") ) {
				sortdir="ASC";
			}else{
				sortdir="DESC";
			}

			$('#product_site').attr('sortdir',sortdir);

			var load_prod=0;
			st=0;

			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more-prod a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}else{
			var dan;
			var st=$('#product_site').attr('start');
			var pr=$('#product_site').attr('parent');
			var tp=$('#product_site').attr('type');
			var total=$('#product_site').attr('total');
			var sortby=$('#product_site').attr('sort');
			var sortdir=$('#product_site').attr('sortdir');
			var ajax_url=$('#product_site').attr('ajax_url');
			var fr = $('#product_site').attr('filter');

			sortby = $(this).attr('id');

			if(sortby=="menuindex"){
				sortby="c.pagetitle";
			}else if(sortby=="price"){
				sortby="new_price";
			}else{
				sortby="rating";
			}

			$('#product_site').attr('sort',sortby);

			$(this).toggleClass('up down')

			if ( !$(this).hasClass("up") ) {
				sortdir="ASC";
			}else{
				sortdir="DESC";
			}

			$('#product_site').attr('sortdir',sortdir);

			var load_prod=0;
			st=0;

			dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

			var endd=$('#ajax_stop').val();
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url,
					data: dan,
					beforeSend:function(){
						$('#product_cont').html(spinner);
						inProgress = true;
					},
					success: function(msg){ 	
						var suma;
						suma = parseInt(st) + parseInt(total);
						$('#product_site').attr('start',suma);
						$('#product_cont').html(msg);
						$(".spinner").hide();
						var endload=$('#ajax_stop').val();
						if(endload=='end'){$(".more a.primary-button").hide();}

						inProgress = false;
					}
				});		
			}
		}
	});

});	

$(document).ready(function(){
	var inProgress = false;
	$('body').on('click', '#product_cont .more-prod a.primary-button', function (event) {
		event.preventDefault();
		var dan;
		var st=$('#product_site').attr('start');
		var pr=$('#product_site').attr('parent');
		var tp=$('#product_site').attr('type');
		var total=$('#product_site').attr('total');
		var sortby=$('#product_site').attr('sort');
		var sortdir=$('#product_site').attr('sortdir');
		var ajax_url=$('#product_site').attr('ajax_url');
		var fr = $('#product_site').attr('filter');
		var load_prod=1;
		dan="&start="+st+"&parent="+pr+"&type="+tp+"&sort="+sortby+"&sortdir="+sortdir+"&total="+total+"&load_prod="+load_prod+"&filter="+fr;

		var endd=$('#ajax_stop').val();
		if((!inProgress) && (endd != 'end')) {

			$.ajax({
				type: "GET",
				url: ajax_url,
				data: dan,
				beforeSend:function(){
					$(".spinner").show();
					inProgress = true;
				},
				success: function(msg){ 	
					var suma;
					suma = parseInt(st) + parseInt(total);
					$('#product_site').attr('start',suma);
					$('#product_cont>div:first-child').append(msg);
					$(".spinner").hide();
					var endload=$('#ajax_stop').val();
					if(endload=='end'){$(".more-prod a.primary-button").hide();}

					inProgress = false;
				}
			});		
		}	
	});
});

$(document).ready(function(){
	$('.sorting-catalog-view .sorting-select-mobile > select').change(function(event){
		event.preventDefault();
		var mobile_sort_type=$( ".sorting-catalog-view .sorting-select-mobile > select option:selected" ).val();
		switch (mobile_sort_type) {
			case 'sort_menuindex':
				$('.sorting-catalog-view .rate #menuindex').click();
				break;
			case 'sort_price':
				$('.sorting-catalog-view .rate #price').click();
				break;
			case 'sort_rating':
				$('.sorting-catalog-view .rate #rating').click();
				break;
			case 'count_12':
				$('.sorting-catalog-view .quantity a:first-of-type').click();
				break;
			case 'count_48':
				$('.sorting-catalog-view .quantity a:nth-of-type(2)').click();
				break;
			case 'count_all':
				$('.sorting-catalog-view .quantity a:last-of-type').click();
				break;
		}
	});	
});

/*Пагинация в карточке товара*/
$(document).ready(function(){
	$('body').on('click', '.ajax-pages a', function (event) {
		event.preventDefault();
		var this_url = window.location.pathname;
		var input_data='';
		var link_pagin_url=$(this).attr('href');
		var link_pagin_url_arr = link_pagin_url.split('?');

		var ajax_url=link_pagin_url_arr[0];
		input_data = link_pagin_url_arr[1];

		var params = input_data
		.split('&')
		.reduce(
			function(p,e){
				var a = e.split('=');
				p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
				return p;
			},
			{}
		);
		var page_val = params['product_page'];
		var get_page ='';	
		if(page_val!==undefined && page_val!=='' && page_val!==0 && page_val!==null){
			get_page = 'product_page='+page_val;
		}


		if(!inProgress) {
			$.ajax({
				type: "GET",
				url: ajax_url,
				data: input_data,
				beforeSend:function(){
					$('#product_cont').html('');
					$(".spinner").show();
					inProgress = true;
					if(get_page!=''){
						var delim = '?';
					}else{
						delim = '';
					}
					var url = this_url +delim+ get_page;
					history.pushState(null, null, url);
				},
				success: function(msg){
					$('#product_cont').html(msg);
					$(".spinner").hide();
					inProgress = false;
				},
				complete: function(){
					var destination = $('body').offset().top;
					$('html').animate({ scrollTop: destination }, 700);
				}
			});		
		}
	});
});

/*Подгрузка страниц пользователя на главной*/
$(document).ready(function(){
	var inProgress = false;
	$('body').on('click', '#custom_pages_index_load', function (event) {
		event.preventDefault();
		var dan;
		var st=$(this).attr('start');
		var pr=$(this).attr('parent');
		var ajax_url=$(this).attr('ajax_url');
		dan="&start="+st+"&parent="+pr;

		var el = $('.services_index');

		if(!inProgress) {

			$.ajax({
				type: "GET",
				url: ajax_url,
				data: dan,
				beforeSend:function(){
					$(".spinner.custom-pages").show();
					inProgress = true;

					el.addClass('no-hover');
				},
				success: function(msg){ 	
					$('.services_index.custom-pages').append(msg);
					$(".spinner.custom-pages").hide();
					$("#custom_pages_index_load").hide();

					inProgress = false;
				},
				complete: function () {
					setTimeout(function () {
						el.removeClass('no-hover');
					}, 1000);

				}
			});		
		}	
	});
});


/*Функция обновления вывода диллеров на странице контакты*/
function contacts_dealers_filter(inProgress) {
	var region_id=$('select[name="select-region"]').val();
	var pr=$('#contact-dealers-params').attr('parent');
	var fltr = $('select[name="select-city"]').val();
	var ajax_url_dialers=$('#contact-dealers-params').attr('ajax_url_dialers');
	var dan='&region_id='+region_id+'&parent='+pr+'&filter='+fltr;
	var elw = $('.contact-dealers-wrap');
	if(!inProgress) {
		$.ajax({
			type: "GET",
			url: ajax_url_dialers,
			data: dan,
			beforeSend:function(){
				elw.html('');
				$(".spinner:not(.custom-pages)").show();
				inProgress = true;
			},
			success: function(msg){ 	
				elw.html(msg);
				$(".spinner:not(.custom-pages)").hide();
				inProgress = false;
			},
			complete: function () {

			}
		});		
	}
}

/*Подгрузка городов в контактах*/
$(document).ready(function(){
	inProgress = false;
	$('body').on('change', 'select[name="select-region"]', function (event) {
		event.preventDefault();
		var dan;
		var region_id=$(this).val();
		var pr=$('#contact-dealers-params').attr('parent');
		var ajax_url_city=$('#contact-dealers-params').attr('ajax_url_city');
		dan="&region_id="+region_id;

		var el = $('select[name="select-city"]');

		if(region_id==''){
			el.prop('disabled',true);
			el.html('<option></option>');
			contacts_dealers_filter(inProgress);
		}else{
			if(!inProgress) {

				$.ajax({
					type: "GET",
					url: ajax_url_city,
					data: dan,
					beforeSend:function(){
						$(".spinner:not(.custom-pages)").show();
						inProgress = true;
					},
					success: function(msg){ 	
						el.html('<option></option>'+msg);
						$(".spinner:not(.custom-pages)").hide();
						el.prop('disabled',false);
						inProgress = false;
					},
					complete: function () {
						contacts_dealers_filter(inProgress);
					}
				});		
			}
		}
	});
	$('body').on('change', 'select[name="select-city"]', function (event) {
		event.preventDefault();
		contacts_dealers_filter(inProgress);
	});
});

/*Подгрузка товаров в карточке товара*/
$(document).ready(function(){
	var inProgress = false;
	$('body').on('click', '.card_reviews_load', function (event) {
		event.preventDefault();
		var dan;
		var st=$(this).attr('start');
		var pr=$(this).attr('parent');
		var tpl = $(this).attr('tpl');
		var ajax_url=$(this).attr('ajax_url');
		dan="&start="+st+"&parent="+pr+'&tpl='+tpl;

		var el = $('.card-review-wrap');

		if(!inProgress) {

			$.ajax({
				type: "GET",
				url: ajax_url,
				data: dan,
				beforeSend:function(){
					$(".spinner:not(.custom-pages)").show();
					inProgress = true;

					el.addClass('no-hover');
				},
				success: function(msg){ 	
					$('.card-review-wrap').append(msg);
					$(".spinner:not(.custom-pages)").hide();
					$(".card_reviews_load").hide();

					inProgress = false;
				},
				complete: function () {
					setTimeout(function () {
						el.removeClass('no-hover');
					}, 1000);

				}
			});		
		}	
	});
});