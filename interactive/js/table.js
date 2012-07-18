$(document).ready(function(){
	$('#filter_size').val("500");
	var table = {
		init: function(){
			$('#filter_sector').val("all");
			$('#filter_state').val("all");
			table.data.get(true);
		},
		data: {
			hasLoadedOnce: false,
			params: {
				start: 1,
				limit: 20,
				sort: "grad_150_value",
				sortOrder: "desc",
				state: "All",
				sector: "All", // control_level
				size: "500",
				count: 0
			},
			get: function(getCount) {
				var that = this,
					getUrl = function(limitResults){
						var urlString = "",
							filterSeparator = "find/";
						
						if (limitResults) {
						 	urlString += "limit/" + (that.params.start-1) + "|" + that.params.limit + "/";
						}
						
						if (that.params.state !== "All") {
							urlString += filterSeparator + "state:" + that.params.state;
							filterSeparator = "|";
						}
						
						if (that.params.size !== "all") {
							urlString += filterSeparator + "cohort_size:" + that.params.size + ":gt";
							filterSeparator = "|";
						}
						
						if (that.params.sector !== "All") {
							var sectorArray = that.params.sector.split(' ');
								control = getControlValue(sectorArray[0]);
								level = sectorArray[1].toLowerCase();
							if (level == "2-year") {
							$('#stats_table').find('th.col_grad_150_value').text("Graduation rate (150% time)");
							$('#stats_table').find('th.col_grad_100_value').text("Graduation rate (100% time)");
							} else {
								$('#stats_table').find('th.col_grad_150_value').text("Graduation rate (6-year)");
								$('#stats_table').find('th.col_grad_100_value').text("Graduation rate (4-year)");
							}
							urlString += filterSeparator + "level:" + level;
							filterSeparator + "|";
							
							if (control !== 'All') {
								urlString += filterSeparator + "control:" + control;
							}
						} else {
							$('#stats_table').find('th.col_grad_150_value').text("Graduation rate (150%)");
							$('#stats_table').find('th.col_grad_100_value').text("Graduation rate (100%)");
						}				
	
						urlString += "/order/" + that.params.sort + ":" + that.params.sortOrder;
							
						return urlString;
						
						function getControlValue(str){
							switch (str) {
								case "Private":
									return "Private not-for-profit";
									break;
								case "Forprofit":
									return "Private for-profit";
									break;
								default:
									return str;
									break;
							}
						}
					}
				
				$('#table_page').removeClass('loaded');
				
				mymap.getData({
					name: 'tableResults',
					url: getUrl(true),
					table: 'gatesInst1',
					success: that.process,
					noResults: that.makeEmptyTable
				});

				// Get table results count
				if (getCount) {
					mymap.getData({
						name: 'tableCount',
						url: getUrl(false),
						table: 'gatesInst1',
						success: that.processCount,
						isCount: true
					});
				}
			},
			makeEmptyTable:function() {
				var $tableBody = $('#stats_table_body'),
					$tableStart = $('.table_results_start'),
					$tableFinish = $('.table_results_finish'),
					$pageContainer = $('#table_page');
					
					$tableBody.html('<tr><td colspan="9" class="no_results">No institutions match the search criteria. Please try again.</td></tr>');
					$pageContainer.addClass('loaded');
					$tableStart.html(0);
					$tableFinish.html(0, 0);
			}, 
			process: function(data){
				var $this = $(this),
					$tableBody = $('#stats_table_body'),
					$tableStart = $('.table_results_start'),
					$tableFinish = $('.table_results_finish'),
					$pageContainer = $('#table_page'),
					rowsHtml = '',
					isEvenRow = -1,
					i;
				
				for (i = 0; i < data.length; i++) {
					var college = data[i],
						rowHtml = '',
						className = '';
						
					if (isEvenRow === 1) {
						className = 'even';
					} else {
						className = 'odd';
					}
						
					rowHtml += '<tr class="clickable_row ' + className + '" id="r_'+college.unitid+'">';
					rowHtml += '<td class="first col_chronname"><a class="college_name" href="/institution/#id='+college.unitid+'">' + college.chronname + '</a>' + college.city + ', ' + college.state + '</td>';
					rowHtml += '<td class="col_grad_150_value">' + table.util.pct(college.grad_150_value) + '</td>';
					rowHtml += '<td class="col_grad_100_value">' + table.util.pct(college.grad_100_value) + '</td>';
					rowHtml += '<td class="col_control">' + table.util.displayControl(college.control) + '<span class="college_level">' + college.level + '</span></td>';
					rowHtml += '<td class="col_student_count">' + table.util.commaString(college.student_count) + '</td>';
					rowHtml += '<td class="col_med_sat_value">' + table.util.commaString(college.med_sat_value) + '</td>';
					rowHtml += '<td class="col_pell_value">' + table.util.pct(college.pell_value) + '</td>';
					//rowHtml += '<td id="col_awards_per_value">' + college.awards_per_value + '</td>';
					rowHtml += '<td class="col_exp_award_value">' + table.util.moneyString(college.exp_award_value) + '</td>';
					rowHtml += '<td class="last col_aid_value">' + table.util.moneyString(college.aid_value) + '</td>';
					rowHtml += '</tr>'
					rowsHtml += rowHtml;
					
					isEvenRow *= -1;
				}
				
				if (table.data.hasLoadedOnce) {
					$tableBody.html(rowsHtml);
					
				} else {
					$tableBody.hide().html(rowsHtml).fadeIn();
					table.data.hasLoadedOnce = true;
				}
				
				$('.clickable_row').click(function () {
				theID = this.id.split("_");
				_gaq.push(['_trackEvent', 'table_link', theID[1]]);
					window.location = '/institution/#id='+theID[1];
				}).hover(function () {
					$(this).find('.college_name').addClass('hover');
					$(this).css('cursor','pointer');
				}, function () {
					$(this).find('.college_name').removeClass('hover');
				});
				$tableStart.html(table.data.params.start);
				$pageContainer.addClass('loaded');
				
				if (table.data.params.start == 1) {
					$pageContainer.addClass('first_page');
				} else {
					$pageContainer.removeClass('first_page');
				}
				$('.table_results_finish').html(Math.min((table.data.params.start + table.data.params.limit - 1), table.data.params.count));
				if ((table.data.params.start + table.data.params.limit) > table.data.params.count) {
					$pageContainer.addClass('last_page');
				} else {
					$pageContainer.removeClass('last_page');
				}
				
				table.nav.init();
			},
			processCount: function(countData){
				var $pageContainer = $('#table_page'),
					count = countData[0];
				table.data.params.count = count.dracula;
				 $('.table_results_finish').html(Math.min((table.data.params.start + table.data.params.limit - 1), table.data.params.count));
				$('.results_num').html(table.util.commaString(count.dracula));
				if ((table.data.params.start + table.data.params.limit) > table.data.params.count) {
					$pageContainer.addClass('last_page');
				} else {
					$pageContainer.removeClass('last_page');
				}
			}
		},
		nav: {
			offset: 0,
			init: function(){
				$('#table_page').find('.btn').unbind('click').click(this.clickHandler);
				table.nav.offset = $("#stats_table").offset().top;
				$(document).unbind('scroll').scroll(this.affix);
			}, 
			clickHandler: function(e){
				var $this = $(this),
					startPos = table.data.params.start;
				
				e.preventDefault();
				
				if ($this.hasClass('next')) {
					startPos += 20;
				} else {
					startPos -= 20;
				}
				
				if (startPos < 1) { // or is greater than num results - 19 -- how to implement?
					return false;
				}
				
				$('.btn').unbind('click');
				table.data.params.start = startPos;
				table.data.get(false);
			},
			affix: function(){
				var scrollY = $(window).scrollTop(),
					delta = scrollY - table.nav.offset,
					$container = $('#stats_table'),
					$header = $container.find('thead');
				
				if (delta > 0) {
					$container.addClass('floating');
				} else {
					$container.removeClass('floating');
				}
			}
		},
		filters: {
			init: function(){
				var $filters = $('#table_filters').find('select');
				
				$filters.unbind('change').change(this.changeHandler);
			},
			changeHandler: function(){
				var $this = $(this),
					thisFilter = $this.attr('id').substr(7),
					selectedOption = $this.find('option:selected').val(),
					newValue = selectedOption.split('_').join(' ').toTitleCase();			
				_gaq.push(['_trackEvent',thisFilter+'_select',selectedOption]);
				table.data.params[thisFilter] = newValue;
				table.data.params.start = 1;
				table.data.get(true);
				
			}
		},
		sort: {
			init: function(){
				$('#stats_table').find('th').unbind('click').click(this.sortHandler);
			},
			sortHandler: function(){
				var $this = $(this);
				
				if ($this.hasClass('sorting')) {
					table.sort.reverseOrder($this);
				} else {
					table.sort.sortBy($this);
				}
			},
			reverseOrder: function($header) {
				var newOrder = 'asc';
				
				if (table.data.params.sortOrder === 'asc') {
					newOrder = 'desc';
				}
				
				table.data.params.sortOrder = newOrder;
				table.data.params.start = 1;
				$header.removeClass('asc desc').addClass(newOrder);
				table.data.get(false);
			},
			sortBy: function($header) {
				var $allHeaders = $('#stats_table').find('th');
				
				$allHeaders.removeClass('sorting asc desc');
				$header.addClass('sorting desc');
				
				table.data.params.sort = $header.attr('id').substr(4);
				table.data.params.sortOrder = 'desc';
				table.data.params.start = 1;
				table.data.get(false);
			}
		},
		util: {	
			moneyString: function(nStr){
				var shortFigure;

				if (Number(nStr) < 0) {
					return "NA";
				}
				
				if (nStr === null) {
					return "";
				}

				// shorten $10 million and above
				if (nStr >= 1000000000) {
					shortFigure = "$" + (Math.round(nStr / 100000000) / 10) + "-billion";
					return shortFigure;
				} else if (nStr >= 10000000) { 
					shortFigure = "$" + (Math.round(nStr / 100000) / 10) + "-million";
					return shortFigure; 
				}

				return "$" + this.commaString(nStr);
			},
			commaString: function(nStr){
				if (nStr === null) {
					return "";
				}
				
				nStr += '';

				var x = nStr.split('.'),
					x1 = x[0],
					x2 = x.length > 1 ? '.' + x[1] : '',
					rgx = /(\d+)(\d{3})/;

				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}

				return x1 + x2;
			},
			pct: function(nStr){
				if (nStr) {
					return nStr + '%';
				} else {
					return '';
					//return '<span class="unknown_value">Unknown</span>';
				}
			},
			displayControl: function(control){
				switch(control) {
					case 'Private not-for-profit':
						return 'Private';
						break;
					case 'Private for-profit':
						return 'For-profit';
						break;	
					case 'Public':
						return 'Public';
						break;
					default: 
						return 'Unknown sector';
						break;
				}
			}
		}
	};
	
	table.nav.init();
	table.sort.init();
	table.filters.init();
	table.init();

	/* 
	 * To Title Case 2.0.1 – http://individed.com/code/to-title-case/
	 * Copyright © 2008–2012 David Gouch. Licensed under the MIT License. 
	 */

	String.prototype.toTitleCase = function () {
	  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

	  return this.replace(/([^\W_]+[^\s-]*) */g, function (match, p1, index, title) {
	    if (index > 0 && index + p1.length !== title.length &&
	      p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && 
	      title.charAt(index - 1).search(/[^\s-]/) < 0) {
	      return match.toLowerCase();
	    }

	    if (p1.substr(1).search(/[A-Z]|\../) > -1) {
	      return match;
	    }

	    return match.charAt(0).toUpperCase() + match.substr(1);
	  });
	};

});