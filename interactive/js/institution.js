$(document).ready(function(){
	$('#help_datatype').hide();
	$('#as_values_custom_chooser').unbind('click').click(function(e){
			e.preventDefault();
			$('#custom_chooser').focus();
		});
		
	var grad = {
		url: {
			defaultParams: {
				id: "166683", // default ID. examples: mit: 166683, harvard: 166027, nyu 193900 stanford 243744 harvard 166027 Phx SD 372222 berkeley 110635 devry tx 224402 baylor 223232 evergreen 235167
				section: ""
			}, 
			currentParams: { 
				id: "",
				section: "" 
			},
			cohorts: "",
			hasHashHandler: false,
			read: function(){
				if (!grad.url.hasHashHandler) { // don't set this more than once
					grad.url.hasHashHandler = true;

				    $(window).bind('hashchange', function(e){

						var url = $.param.fragment(),
							params = e.getState(),
							$wrap = $('#wrap'),
							initializePage = function(){
								_gaq.push(['_trackEvent', 'inst_initialize', grad.url.currentParams.id]);
								$wrap.addClass('loading');
								$('.stats_section').addClass('loading');	
								dataValues = new dynamicValues();	
									instElements = new dataElements();
								grad.filters.init(); // reset filters to default positions	
								getInstData();
								getGradrateData();
								grad.url.links.hide();
							};
						
						if (params.id) {
							if (params.id === grad.url.currentParams.id) {
								return false;
							} else {
								// try to load the new institution. 
								if (grad.url.currentParams.id === "") {
									$wrap.addClass('loading_first');
								}
								
								grad.url.currentParams = params;
								initializePage();
							}
						} else { 
							if (grad.url.currentParams.id === "") { // if no institution id and no current institution, reset url to default institution with no arguments
								$.bbq.pushState("id=" + grad.url.defaultParams.id, 2);
							} 
						}
					});
					
				}
				$(window).trigger('hashchange'); // try to interpret hash when page loads
			},
			links: {
				init: function(){
					$('.generate_link').unbind('click').click(grad.url.links.clickHandler);
				},
				clickHandler: function(){
					var $this = $(this),
						sectionId = this.id.substr(9),
						$overlay = $('#link_overlay_' + sectionId);
						
						if ($overlay.is(':visible')) {
							$overlay.slideUp();
						} else {
							var $urlField = $overlay.find('input');
							$urlField.val('Getting link...');
							
							$overlay.slideDown();
							grad.url.links.generate(sectionId);
						}
				},
				hide: function(){
					$('.link_overlay').hide();
				},
				generate: function(sectionId){
					var $section = $('#' + sectionId),
						$overlay = $('#link_overlay_' + sectionId),
						filters = $section.data(), // returns object with filter state information
						fullUrlFragment = "",
						fullUrl = "",
						shortUrl,
						getCustomIdString = function(customArray) {
							var customLength = customArray.length,
								customString = '';

							if (customLength !== 0) {
								for (var i = 0; i < customLength; i++) {
									customString += '+' + customArray[i].toString();
								}
								// remove initial plus [+] char
								return customString.substr(1);
							}
						},
						fillInLink = function(returnedUrl) {
							var $urlField = $overlay.find('input');
							$urlField.val(returnedUrl).select().unbind('focus').focus(function(){
								$(this).select();
							}).unbind('mouseup').mouseup(function(e){
								e.preventDefault();
							});
						}
					
					if (sectionId === 'custom') {
						filters.customIds = getCustomIdString(dataValues.customIDs);
					};

					filters.section = sectionId;
					fullUrlFragment = jQuery.param.fragment("#id=" + grad.url.currentParams.id, filters); // better way of accomplishing this?
					fullUrl = window.location.protocol+"//"+window.location.hostname+"/institution/" + fullUrlFragment;
					
					shortenUrl(fullUrl, function(responseUrl){
						fillInLink(responseUrl);
					}, "institution: "+grad.url.currentParams.id, function(response){
						fillInLink(fullUrl);
					});	
				}
			}
		},
		menu: {
			menuOffset: 0,
			supportsFixedPos: mymap.supportsFixedPosition(),
			init: function(){
				var $buttons = $('#stats_menu').find('a'),
					browser = $.browser,
					browserVersion = parseInt(browser.version, 10);
				
				grad.menu.menuOffset = $("#main").offset().top;
				
				if (!this.supportsFixedPos) {
					return false;
				} else if (browser.msie && (browserVersion == 7 || browserVersion == 8)) {
					$(window).scroll(grad.menu.affix);
				} else {
					$(document).scroll(grad.menu.affix);
				}
				
				$buttons.click(function(e){				
					var value = this.id.substring(7);
					_gaq.push(['_trackEvent', 'inst_leftnav', value]);	
					grad.menu.scrollTo(value);
					e.preventDefault();
				});
			},
			scrollTo: function(id){
				if (id === "content") {
					$('html, body').animate({scrollTop: $("#content").offset().top}, 400);
				} else {
					$('html, body').animate({scrollTop: $("#section_" + id).offset().top - 67}, 500, function (){
						$('#stats_left').find('#stats_menu').find('a').removeClass('active');
						$('#anchor_'+id).addClass('active');
					});
				}
			},
			affix: function(){
				var $statsMain = $('#stats_main'),
					scrollY = $(window).scrollTop(),
					maxScrollY = $statsMain.offset().top + $statsMain.height(),
					delta = scrollY - grad.menu.menuOffset,
					$menu = $('#stats_left'),
					$header = $('#institution_header'),
					$container = $('#wrap'),
					$menuOptions = $menu.find('#stats_menu').find('a'),
					$sections = $statsMain.find('.stats_section'),
					bottomOffset = 400;
				
				$menuOptions.each(function(i){
					var $this = $(this);
					
					if (scrollY >= $sections.eq(i).offset().top - 122) {
						if (!($this.hasClass('active'))) {
							$menuOptions.removeClass('active');
							$this.addClass('active');
						}
					}
				});
				
				if (scrollY + bottomOffset > maxScrollY) {
					$container.removeClass('floating').addClass('overscrolled');
					$header.css({'top': maxScrollY - bottomOffset + 'px'});
					$menu.css({'top': maxScrollY - bottomOffset - 110 + 'px'});
				} else if (delta > -74) {
					$container.removeClass('overscrolled').addClass('floating');
					$menu.css({'top': '0'});
					$header.css({'top': 'auto'});
				} else {
					$container.removeClass('floating');
				}
			}
		},
		graphics: {
			lineChart: {
				init: function (id, type, w, h, xMarks, yMarks){
					grad.graphics.lineChart.chart = Raphael(id, w, h);
					
					var thisObject = grad.graphics.lineChart,
						thisChart = thisObject.chart,
						s = thisObject.settings;
						
						s.xMarks = xMarks;
						s.yMarks = yMarks;
						s.rightEdge = w - s.margins[1];
						s.bottomEdge = h - s.margins[2];
						s.leftEdge = s.margins[3];
						s.topEdge = s.margins[0];
						s.chartWidth = s.rightEdge - s.margins[3];
						s.chartHeight = s.bottomEdge - s.margins[0];
						s.xIncrement = s.chartWidth / (xMarks - 1);
						s.yIncrement = s.chartHeight / yMarks;
						s.yRange = s.yMax - s.yMin;
						
						s.lines = thisChart.set();
						s.bgs = thisChart.set();
						s.axes = thisChart.set(); // white axis lines
						s.bgAxes = thisChart.set(); // dark axis lines
						s.overlayDots = thisChart.set();
						s.overlayLabels = thisChart.set();
						s.overlayLabelsBgs = thisChart.set();
						s.cohortLabels = thisChart.set();

					drawAxes();

					function drawAxes(){
						thisChart.rect(s.leftEdge,s.topEdge,s.chartWidth,s.chartHeight).attr(s.fillStyle);

						// y axis lines and labels
						for (var i = 0; i < yMarks; i++) {
							var yPos = (i * s.yIncrement) + s.topEdge + .5, // in svg, odd px width lines must sit on half-pixel to avoid blurryness 
								pathString = 'M' + s.leftEdge + ',' + yPos + 'L' + s.rightEdge + ',' + yPos,
								label = ((10 - i) * 10) + '%';
								
							s.axes.push(thisChart.path(pathString).attr({'stroke': '#fff', 'stroke-dasharray': '-', 'stroke-width': '1', 'opacity': '.15'}));
							s.bgAxes.push(thisChart.path(pathString).attr({'stroke': '#d1d9dd', 'stroke-dasharray': '-', 'stroke-width': '1', 'opacity': '1'}));
							
							thisChart.text(s.rightEdge + 4, yPos, label).attr({'fill': '#555', 'text-anchor': 'start', 'font-size': '11'});
						}

						// x axis 
						for (var j = 0; j < xMarks; j++) {
							var xPos = (j * s.xIncrement) + s.leftEdge,
								labelXPos = xPos;
								
							if (j === 0) {
								labelXPos += 20;
							} else if (j === xMarks - 1) {
								labelXPos -= 20;
							}
							// labels
							thisChart.text(xPos, (h - s.margins[2] + 10), s.labels[j]).attr({'fill': '#555', 'font-size': '11'});
							// overlay dots
							s.overlayDots.push(thisChart.circle(xPos, 20, 5).attr({'fill': '#fff', 'stroke': '#777', 'stroke-width': '2'}));
							// black bg behind overlay labels
							s.overlayLabelsBgs.push(thisChart.rect(labelXPos - 25, 40, 49, 19).attr({'fill': '#000', 'opacity': '.8', 'r' : '5', 'stroke-width': '1', 'stroke' : '#000', 'stroke-opacity' : '.2'}));
							// overlay labels
							s.overlayLabels.push(thisChart.text(labelXPos, 40, 'XX').attr({'fill': '#fff', 'font-size': '14'}));
						}
						
						// cohort labels
						var labelStyle = {'text-anchor': 'start', 'font-size': '13', 'font-weight': 'bold', 'fill': '#fff'};
						s.cohortLabels.push(thisChart.text(s.leftEdge + 10, 50, 'Graduated in four years').attr(labelStyle));
						s.cohortLabels.push(thisChart.text(s.leftEdge + 10, 150, 'Graduated in six years').attr(labelStyle));
						s.cohortLabels.hide();
						
						s.overlayDots.hide();
						s.overlayLabels.hide();
						s.overlayLabelsBgs.hide();
					}
				}, 
				drawLines: function(chartData){
					var thisObject = grad.graphics.lineChart,
						thisChart = thisObject.chart,
						s = thisObject.settings,
						$val2010 = $('#gradrate_historical_2010_value'),
						$valChange = $('#gradrate_historical_change_value'),
						$raceContainer = $('#gradrate_historical_race'),
						$genderContainer = $('#gradrate_historical_gender'),
						currentRace = grad.filters.get('gradrates', 'race');
						
					if (s.lines.length >= 1) {
						animateLines(chartData[currentRace]);
					} else {
						initializeLines(chartData[currentRace]);
					}
					
					populateChartHeader(chartData[currentRace]);

					function initializeLines(lineData) {
						var thisLine;
						
						drawNewLine(lineData, 'rate6');
						drawNewLine(lineData, 'rate4');
						setCohortLabels(s.bgs, false);
						s.lines.toFront();
						s.axes.toFront();
						s.cohortLabels.show().toFront();
						
						checkTwoYearLine();
					}

					function drawNewLine(lineData, field) {
						var pathString = getPathString(lineData[field], false),
							bgPathString = getPathString(lineData[field], true),
							line = thisChart.path(pathString),
							bgLine = thisChart.path(bgPathString),
							coords = Raphael.parsePathString(pathString);	
							
						line.data(lineData)
							.data("type", field)
							.data("coords", coords)
							.attr(s.getLineStyle(field));
						
						bgLine.data(lineData)
							  .data("type", field)
							  .data("coords", coords)
							  .attr(s.getBgLineStyle(field))
							  .hover(function(){
								thisObject.mouseoverHandler(this);
							  }, function(){
								thisObject.mouseoutHandler(this);
							  });
							
						s.lines.push(line);
						s.bgs.push(bgLine);
					}
					
					function animateLines(lineData) {
						var dots = s.overlayDots,
							labels = s.overlayLabels,
							labelBgs = s.overlayLabelsBgs;
							
						dots.hide();
						labels.hide();
						labelBgs.hide();
						
						s.lines.forEach(function(line){
							var type = line.data('type'),
								newPathString = getPathString(lineData[type], false);
								
							s.anim = Raphael.animation({path: newPathString},s.transitionDelay);
								
							line.data(lineData).animate(s.anim);
						});
						
						s.bgs.forEach(function(bg){
							var type = bg.data('type'),
								newPathString = getPathString(lineData[type], true);
								coords = Raphael.parsePathString(newPathString);
							
							bg.data(lineData).data('coords', coords).animateWith(s.lines[0], s.anim, {path: newPathString}, s.transitionDelay);
						});
						
						setCohortLabels(s.bgs, true);
						checkTwoYearLine();
					}
					
					function checkTwoYearLine(){
						var level = instElements.general.level;
						
						if (level === '2-year') {
							s.lines[1].hide();
							s.bgs[1].hide();
							s.cohortLabels[0].hide();
						} else {
							s.lines[1].show();
							s.bgs[1].show();
							s.cohortLabels[0].show();
						}
					}
					
					function setCohortLabels(bgs, animate) {
						var thisArea, 
							positions = [ ],
							fourYearColor = '#fff',
							sixYearColor = '#fff',
							fourYearText = 'Graduated in four years',
							sixYearText = 'Graduated in six years',
							fourStyle,
							sixStyle,
							getLowerPos = function(area) {
								var coords = area.data('coords'),
									areaY = Math.max(coords[0][2], coords[1][2], coords[2][2]) + 12;
									
								return areaY;
							},
							getHigherPos = function(area) {
								var coords = area.data('coords'),
									areaY = Math.min(coords[0][2], coords[1][2], coords[2][2]) - 12;
									
								return areaY;
							}						

						// Two-year colleges get a different label
						if (instElements.general.level === '2-year') {
							sixYearText = 'Graduated in 150% time, typically three years';
						}
							
						// By default, y position of each label is 12 pixels below the lowest point during the first three years
						positions.push(getLowerPos(bgs[1]), getLowerPos(bgs[0]));
						
						if (((positions[0] > 385) && (instElements.general.level === '4-year')) ||
							((positions[1] > 385) && (instElements.general.level === '2-year'))) { // if the lower-level graduation rate is very low, move both labels above the dots, and add extra text explanation
							positions[1] = getHigherPos(bgs[0]) - 50;
							positions[0] = positions[1] + 20;
							sixYearColor = '#6393a9';
							fourYearColor = '#19516b';
							sixYearText = 'Top line: ' + sixYearText;
							fourYearText = 'Bottom line: ' + fourYearText;
						} else if ((positions[0] - 40 < positions[1])) {  // if the labels would overlap, move six-year rate above the dots
							positions[1] = getHigherPos(bgs[0]);
							sixYearColor = '#6393a9';
						}
						
						fourStyle = {'y': positions[0], 'fill': fourYearColor};
						sixStyle = {'y': positions[1], 'fill': sixYearColor};
						
						if (animate) {
							s.cohortLabels[0].animateWith(s.lines[0], s.anim, fourStyle, s.transitionDelay).attr('text', fourYearText);
							s.cohortLabels[1].animateWith(s.lines[1], s.anim, sixStyle, s.transitionDelay).attr('text', sixYearText);
						} else {
							s.cohortLabels[0].attr(fourStyle).attr('text', fourYearText);
							s.cohortLabels[1].attr(sixStyle).attr('text', sixYearText);
						}
					}
					
					function populateChartHeader(currentRaceData) {
						var currentCohort = grad.filters.get('gradrates', 'source');
					 	if (currentCohort == "ipedsbach") {
						//	var value = currentRaceData.rate4[currentRaceData.rate4.length - 1],
						//		change = ((value * 10) - (currentRaceData.rate4[0] * 10)) / 10; // avoid floating-point math errors
							$('#gradrate_historical_source').text("six years");	
						} else {
							 // avoid floating-point math errors		
						 //	if (currentCohort = "ipedsother") {
						 	//	$('#gradrate_historical_source').text("150% of time");
						 //	} else {
						 		$('#gradrate_historical_source').text("150% of normal time");
						 //	}
						}
						value = currentRaceData.rate6[currentRaceData.rate6.length - 1],
						change = ((value * 10) - (currentRaceData.rate6[0] * 10)) / 10;
						var genderString = grad.dataUtilities.getGenderString(grad.filters.get('gradrates', 'gender')),
							raceString = grad.dataUtilities.getRaceString(currentRace);
						if (isNaN(change)) {
							change = "N/A";
						} else if (change > 0) {
							change = '<span class="operator">+</span>' + change;
							$valChange.addClass('positive').removeClass('negative');
						} else if (change < 0) {
							change = '<span class="operator">&#150;</span>' + (change * -1);
							$valChange.addClass('negative').removeClass('positive');
						}  else {
							$valChange.removeClass('positive negative');
						}
						
						if (genderString === 'both') { 
							genderString = 'students';
						}
						
						if (raceString === 'All Students') {
							raceString = 'all';
						}
						
						$val2010.html(value + '%');
						$valChange.html(change);
						$raceContainer.html(raceString);
						$genderContainer.html(genderString);
					}
					
					function getPathString(lineData, isFill) {
						var pathString = '',
							xPos,
							lineDataLength = lineData.length;
							
						for (var j = 0; j < lineDataLength; j++) {
							var yPos = getYPos(lineData[j]);
							
							if (yPos) { 
								if (j === 0) {
									pathString += 'M' + s.leftEdge + ',' + yPos;
								} else {
									xPos = (j * s.xIncrement) + s.leftEdge;
									pathString += 'L' + xPos + ',' + yPos;
								}
							} else {
								// if there is no valid y value, do nothing: don't draw this segment
								// the problem with this is that an unequal number of points between lines screws up the line transitions 
								// this could get complicated to interpolate between the closest two known points ech
								// temporarily returning to treating NA values as 0
							}
						}
						
						if (isFill) {
							pathString += 	'L' + s.rightEdge + ',' + s.bottomEdge +
										  	'L' + s.leftEdge + ',' + s.bottomEdge + 'Z';
						}
						
						return pathString;
					}
					
					function getYPos(val){
						var yPos;
						if (val) {
							yPos = (1 - (val / s.yRange)) * s.chartHeight + s.topEdge;
							return yPos;
						} else {
							return (1 - (0 / s.yRange)) * s.chartHeight + s.topEdge;
						}
					}
				},
				mouseoverHandler: function(area){
					var rate = area.data('type'),
						vals = area.data(rate), // Array with graduation rates in each year
						coords = area.data('coords'); // Array with path coordinates for each year
					
					this.drawHoverLabels(vals, coords, rate);
				},
				mouseoutHandler: function(line){
					// do nothing
				},
				drawHoverLabels: function(vals, coords, rate){
					var thisChart = grad.graphics.lineChart.chart,
						s = grad.graphics.lineChart.settings,
						dots = s.overlayDots,
						labels = s.overlayLabels,
						labelBgs = s.overlayLabelsBgs,
						strokeColor = '#6393a9',
						valsLength = vals.length;
					
					if (rate === 'rate4') {
						strokeColor = "#19516b";
					}
					
					for (var i = 0; i < valsLength; i++) {
						var xPos = coords[i][1],
							yPos = coords[i][2],
							rate;
							
						if (vals[i] || vals[i] === 0) {
							rate = vals[i] + '%';
						} else {
							rate = 'NA';
						}
						
						dots[i].attr({'cy': yPos, 'stroke' : strokeColor});
						labelBgs[i].attr({'y': yPos - 27});
						labels[i].attr({'y': (yPos - 18), 'text': rate}); //#19516b
					}
					
					dots.show().toFront();
					labelBgs.show().toFront();
					labels.show().toFront();					
				},
				settings: {
					labels: [2002,2003,2004,2005,2006,2007,2008,2009,2010],
					margins: [30,36,20,20],
					yMin: 0,
					yMax: 100,
					lineStyle: {'stroke': '#3a596a', 'stroke-width': '3'},
					fillStyle: {'fill': '#f0f4f6', 'stroke-width': '0', 'stroke': 'none'},
					transitionDelay: 400,
					getLineStyle: function(type) {
						var styleObject = {
								'stroke': '#6393A9',
								'stroke-width': '2',
								'stroke-opacity': '1'
							}
						
						if (type === 'rate4') {
							styleObject.stroke = '#19516B';
						}
						
						return styleObject;
					},
					getBgLineStyle: function(type) {
						var styleObject = {
							'stroke': 'none',
							'opacity': '.85',
							'fill': '#6393A9' //'270-#bdd5e0-#29586f:50'
						}
						
						if (type === 'rate4') {
							styleObject.fill = '#19516B'
						}
						
						return styleObject;
					}
				}
			},
			tabs: {
				init: function(){
					var tabs = grad.graphics.tabs;
					$('.stats_filters').find('li').unbind('click').click(tabs.clickHandler);
				},
				clickHandler: function(e){
					var $this = $(this),
						id = this.id;
						
					if ($this.hasClass('active')) {
						return false;
					}

					$this.parent().find('li').removeClass('active');
					$this.addClass('active');
					grad.filters.change(id);
					e.preventDefault();
				}
			},
			selects: {
				init: function(){
					var selects = grad.graphics.selects;
					$('select.filter').unbind('change').change(selects.changeHandler);
				},
				changeHandler: function(){
					var $selectedOption = $(this).find('option:selected'),
						optionId = $selectedOption.attr('id');
					
					grad.filters.change(optionId);
				}
			},
			getData: {
				init: function(){
					var $export = $('#export_list');
					
					this.createDataLink('gradrates');
					this.createDataLink('general');
					this.createDataLink('sector');
					
					$export.find('#export_expander').unbind('click').click(this.clickHandler);
					$('#data').removeClass('loading');
					$('#comments').removeClass('loading');
				},
				clickHandler: function(e){
					var $this = $(this);
					e.preventDefault();
					$this.toggleClass('expanded').parent().find('#menu_overlay').toggle();//.show();
				},
				createDataLink: function(linkId){
					var fullLink,
						filter = filter || "",
						order = order || "",
						compareGroup = "";
					
					switch (linkId) {
						case 'gradrates':
							fullLink = mymap.transport+'/q/bo/public/name/gatesInst2/find/unitid:'+grad.url.currentParams.id+':eq/format/csv/filename/gradrates_'+grad.url.currentParams.id+'.csv';
							break;
						case 'general':
							fullLink = mymap.transport+'/q/bo/public/name/gatesInst1/find/unitid:'+grad.url.currentParams.id+':eq/format/csv/filename/generaldata_'+grad.url.currentParams.id+'.csv';
							break;
						case 'sector':
							fullLink = mymap.transport+'/q/bo/public/name/gatesSS2/find/stateid:00:eq|level:'+instElements.general.level+':eq|control:'+instElements.general.control+':eq|year:2010:eq/format/csv/filename/gradrates_'+instElements.general.level+'_'+instElements.general.control+'.csv';
							break;
						default: 
							fullLink = 'http://graduation.chronicle.com/404';
							break;
					}
					
					this.shortenAndPopulate(fullLink, linkId);
				},
				shortenAndPopulate: function(fullLink, linkId) {
						//shortenUrl(fullLink, function(shortLink){
						var $link = $('#export_list').find('#export_' + linkId);
						$link.removeClass('disabled').attr('href', fullLink);
					//}, "institution: "+grad.url.currentParams.id);
				}
			}
		},
		filters: {	
			change: function(id){
				var params = id.split('_'),
					sectionId = params[0],
					filterName = params[1],
					filterState = params[2],
					$section = $('#' + sectionId);
				$section.data(filterName, filterState);
				_gaq.push(['_trackEvent', 'instchange', sectionId, filterName, filterState]);
				if (sectionId === "gradrates") {
					if (filterName == "source") {
						dataExpress.changeCohort(filterState);
					}
					if (dataValues.setupCohorts) {
						dataValues.setupCohorts = false;
					} else {
						if (!dataValues.firstFire) {
							dataExpress.updateGradRates();
						}
					}
					if (filterState === "historical") {
						$section.addClass("historical").removeClass("one_year");
					} else if (filterState === "year2010") {
						$section.removeClass("historical").addClass("one_year");
					}
				} 
				if (sectionId === "compare") {
					$('#compare_name').removeClass();
					$('#compare_table_header_2').removeClass();
					dataValues.compareOrder = "dsc";
					$('#compare_table_header_2').addClass('active dsc');
					if (filterName === "group") {
						dataValues.offset = 0;
						dataValues.compareSort = "2";
						$('#compare').addClass('loading');	
						getcomparedata();
					} else {
						dataValues.activeCompare = filterState;
						$('#compare').find('table').removeClass().addClass('compare_peers').addClass(filterState);
						dataValues.compareSort = "2";
						dataExpress.sortCompare("2",true);
					}
				}
			}, 
			get: function(section, filter){
				var $section = $('#' + section),
					filterValue = $section.data(filter);
				
				return filterValue;
			},
			getList: function(section) {
				switch (section) {
					case 'gradrates':
						return ['time', 'gender', 'source', 'race'];
						break;
					case 'efficiency':
					case 'strengths':
						return [ ];
					case 'compare': 
						return ['metric', 'group'];
						break;
					default: 
						return 'not a valid section';
				}
			},
			init: function(){ // sets filters to default positions and stores default filter data in #sectionName.data()
				var $sections = $('.stats_section');
				
				$sections.each(function(){
					var $thisSection = $(this),
						$tabs = $thisSection.find('ul.stats_filters'),
						$allTabs = $tabs.find('li'),
						$defaultTabs = $tabs.find('li.default'),
						$selects = $thisSection.find('select.filter'),
						$allOptions = $selects.find('option'),
						$defaultOptions = $selects.find('option.default');
					
					$allTabs.removeClass('active');
					$defaultTabs.addClass('active');
					$defaultOptions.attr('selected', 'selected');
						
					$defaultTabs.each(function(){
						var params = this.id.split('_');
						$thisSection.data(params[1], params[2]);
					});
					
					$defaultOptions.each(function(){
						var params = this.id.split('_');
						$thisSection.data(params[1], params[2]);
					});
					
					if ($thisSection.attr('id') === 'gradrates') {
						$thisSection.removeClass("historical").addClass("one_year");
					}
				});
			}, 
			loadSaved: function(suppliedParams){ // loads one section's filters based on params in the url
				var potentialParams = [ ];
				
				// if this section even exists
				grad.menu.scrollTo(suppliedParams.section); // to prevent browser-directed scroll on reload see http://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh
			
				if (suppliedParams.section === 'custom') {
					getCustomPeersList(suppliedParams.customIds);
					return false;
				}
			
				activateFilters(grad.filters.getList(suppliedParams.section));
				
				function activateFilters(potentialParams) {
					var potentialParamsLength = potentialParams.length;
					
					// check each of the potential parameters for a valid value
					for (var i = 0; i < potentialParamsLength; i++) {
						var thisParameter = suppliedParams[potentialParams[i]],
							$thisFilterElement = $('#' + suppliedParams.section + '_' + potentialParams[i] + '_' + thisParameter);

						// if the parameter i'm looking for is in the url and the corresponding filter exists in the DOM, activate the filter
						if (thisParameter && ($thisFilterElement.length > 0)) { 
							if ($thisFilterElement.is('option')) {
								$thisFilterElement.attr('selected', 'selected');
								$thisFilterElement.parent().change();
							} else {
								$thisFilterElement.click();
							}
						}
					}
				}
				
				function getCustomPeersList(ids) {
					var customIdsArray = ids.split('+');
					importCustomData(customIdsArray);
					//log(customIdsArray);
				}
			}
		},
		dataUtilities: {
			getGenderString: function(genderKey) {
				genderKey = genderKey.toLowerCase();

				switch (genderKey) {
					case 'b':
						return 'both';
						break;
					case 'm':
						return 'men';
						break;
					case 'f':
						return 'women';
						break;
					default: 
						return 'invalid';
						break;
				}
			},
			getRaceString: function(raceKey) {
				raceKey = raceKey.toLowerCase();

				switch (raceKey) {
					case 'x':
						return 'All Students';
						break;
					case 'ai':
						return 'American Indian';
						break;
					case 'a':
						return 'Asian';
						break;
					case 'b':
						return 'Black';
						break;
					case 'h':
						return 'Hispanic';
						break;
					case 'w':
						return 'White';
						break;
					default: 
						return 'invalid';
						break;
				}
			}, 
			getCohortString: function(cohortKey){
				cohortKey = cohortKey.toLowerCase();
				
				switch (cohortKey) {
					case '4y bach':
						return 'ipedsbach';
						break;
					case '4y other':
						return 'ipedsother';
						break;
					case '2y all':
						return 'ipedstwoyear';
						break;	
					default:
						return 'invalid';
						break;
				} 
			}
		}
	};
	
	// data -needs to be created before data is called by datalite
	
	// url
	grad.url.read();
	
	// graphics + interface
	grad.menu.init();
	grad.graphics.tabs.init();
	grad.graphics.selects.init();
	grad.url.links.init();
	grad.filters.init();
	
	///data express-data display functions //
	dataExpress = new Object ();
	
	// Data-getting functions
	
	function getInstData() {
		mymap.getData({
			name: 'instGeneralData',
			table: 'gatesInst1',
			url: "find/unitid:"+grad.url.currentParams.id+":eq",
			success: processGeneralData
		});
	}
	function getSectorCount() {
		mymap.getData({
			name: 'sectorCount',
			table: 'gatesInst1',
			url: 'find/level:' + dataValues.level + ':eq|control:' + dataValues.control + ':eq',
			success: processGeneralData,
			isCount: true
		});
	}

	function getGradrateData() {
		mymap.getData({
			name: 'gradRates',
			table: 'gatesInst2',
			url: "find/unitid:"+grad.url.currentParams.id+":eq/fields/year|cohort|gender|race|grad_cohort|grad_100|grad_150|grad_100_rate|grad_150_rate/order/year:asc",
			success: processGradRates
		});
	}

	function getCustomValue(id) {
		mymap.getData({
			name: 'compareCustomValue',
			table: 'gatesCompare1',
			url: "/find/unitid:"+id+":eq",
			success: pushCompareData
		});
	}
	
	function getSectorRates() {
		var control = dataValues.control,
			level = dataValues.level,
			gender = grad.filters.get("gradrates", "gender");
		
		mymap.getData({
			name: 'sectorGradRates',
			table: 'gatesSS2',
			url: "find/stateid:00:eq|level:" + level + ":eq|control:" + control + ":eq|year:2010:eq/fields/cohort|gender|race|grad_100_rate|grad_150_rate",
			success: pushSectorRates
		});
	}

	function pushCompareData(jsonP) {
		instElements.customgroup.push(jsonP[0]);
		dataExpress.getCustomRange();
		dataExpress.buildCustomTable();
		dataExpress.getCustomLink();
		//$('#export_custom').removeClass('disabled');
	}
	function pushCustomImport(jsonP) {
		for (var i=0;i<jsonP.length;i++) {
			instElements.customgroup.push(jsonP[i]);
		}
		dataExpress.getCustomRange();
		dataExpress.buildCustomTable();
		dataExpress.getCustomLink();
	}
	function parseSectorCount (countData) {
	//	var count = countData[0];
	//	dataValues.compareLength.sector = count.dracula;
	}
	function processTopColNumber (countData) {
//		var count = countData[0];
	//	$('#compare').find('.current_college_top').find('.col_number').text(Number(count.dracula) + 1);
	}		
	function importCustomData(idArray) {
		var id = "";
		for (var i = 0;i<idArray.length;i++) {
			if (i>0) {
				id += "||"
			}
			id += "unitid:"+idArray[i]+":eq";
		}
		mymap.getData({
			name: 'importCustomValue',
			table: 'gatesCompare1',
			url: "find/"+id,
			success: pushCustomImport
		});
	}
	function getcomparedata() {
		var countUrl;
		dataValues.compareCat = grad.filters.get("compare","group");
		dataValues.activeCompare = grad.filters.get("compare","metric");
		var filter = "";
		var order = dataValues.compareAttr[dataValues.activeCompare]+":dsc";//+dataValues.compareOrder;
	//	}
		if (dataValues.compareCat == "hbcu") {
			filter = filter + "hbcu:X:eq";
		} else if (dataValues.compareCat == "flagship") {
			filter = filter + "flagship:X:eq";
		} else if (dataValues.compareCat == "carnegie") {
			filter = filter + "basic:"+encodeURI(dataValues.carnegie)+":eq";
		} else if (dataValues.compareCat == "similar") {
			filter = "unitid:"+grad.url.currentParams.id+":eq";
			var similarIdLength = dataValues.similarIDs.length;
			
			for (i=0;i<similarIdLength;i++) {
				filter = filter + "||unitid:"+dataValues.similarIDs[i]+":eq"
			}
		} else if (dataValues.compareCat == "sector") {
			filter = filter + "level:"+dataValues.level+":eq|control:"+dataValues.control+":eq";
		} else {
			filter = filter + "state:"+dataValues.state+":eq|level:"+dataValues.level+":eq|control:"+dataValues.control+":eq";
		}		
		var dataUrl = mymap.transport+'/q/bo/public/name/gatesInst1/find/'+filter+'/order/'+order+'/fields/pell_value|chronname|aid_value|grad_100_value|grad_150_value|unitid|exp_award_value|awards_per_value/format/csv/filename/'+dataValues.compareCat+'_'+grad.url.currentParams.id+'.csv';
		grad.graphics.getData.shortenAndPopulate(dataUrl, 'compare');
		countUrl = "find/"+filter+"/order/"+order+"/fields/pell_value|chronname|aid_value|grad_100_value|grad_150_value|unitid|exp_award_value|awards_per_value/name/gatesCompare1";
		mymap.getData({
			name: 'instCompareToPeers',
			table: 'gatesCompare1',
			url: countUrl,
			success: processCompareGroup
		});
	}
	function processCompareGroup(jsonP) {
		instElements.compare= jsonP;
		dataExpress.sortCompare("2",true);
	}
	function processGeneralData(jsonP) {
		instElements.general = jsonP[0];
		instElements.customgroup = [];
		instElements.customgroup.push(jsonP[0]);
		dataExpress.getCustomRange();
		resetDisqus(instElements.general.unitid, instElements.general.chronname, instElements.general.city, instElements.general.state);
		dataValues.dlCounter += 1;
		populateCheck();
	}

	function processGradRates(gradRates) {		
		// flush gradrates data (TK: Write function to flush all data and reset display elements)
		instElements.gradrates = [ ];
		var gradData = instElements.gradrates,
			gradRatesLength = gradRates.length;
		
		for (var i = 0; i < gradRatesLength; i++) {
			var thisRate = gradRates[i],
				gender = grad.dataUtilities.getGenderString(thisRate.gender),
				cohort = grad.dataUtilities.getCohortString(thisRate.cohort),
				yearString = 'y' + thisRate.year;
			
			if (!gradData[cohort]) {
				gradData[cohort] = [ ];
			}
			
			if (!gradData[cohort][yearString]) {
				gradData[cohort][yearString] = {
					'both': [ ],
					'men': [ ],
					'women': [ ]
				};
			}
			
			gradData[cohort][yearString][gender].push(thisRate);
		}
		dataValues.dlCounter += 1;
		populateCheck();
	}
	function pushSectorRates(json) {		
		// flush gradrates data (TK: Write function to flush all data and reset display elements)
		instElements.sectorRates = [ ];
		var gradData = instElements.sectorRates,
			jsonLength = json.length;
		
		for (var i = 0; i < jsonLength; i++) {
			var thisRate = json[i],
				gender = grad.dataUtilities.getGenderString(thisRate.gender),
				cohort = grad.dataUtilities.getCohortString(thisRate.cohort),
				yearString = 'y2010';
			
			if (!gradData[cohort]) {
				gradData[cohort] = [ ];
			}
			
			if (!gradData[cohort][yearString]) {
				gradData[cohort][yearString] = {
					'both': [ ],
					'men': [ ],
					'women': [ ]
				};
			}
			
			gradData[cohort][yearString][gender].push(thisRate);
		}
	dataExpress.updateGradRates();
	}	
	function populateCheck() {
		if (dataValues.dlCounter >= 2) {
					dataExpress.checkCohort();
			dataExpress.populateGeneral();

			// load filters from url, if they exist
			if (grad.url.currentParams.section) {
				grad.filters.loadSaved(grad.url.currentParams);
			}
		} else {
		}
	}
	
	///data values///
	function dynamicValues  () {
		this.bitly;
		this.dlCounter = 0;
		this.noBach = false;
		this.isPrinting = false;
		this.firstFire = true;
		this.setupCohorts = true;
		this.generalExists = false;
		this.similarIDs = [];
		this.VSAdrawn = false;
		this.minLineCohort = 20;
		this.customIDs = [];
		this.compareCat = "similar";
		this.activeCompare = "sectorstate";
		/*this.compareLength = {
			sectorstate:"",
			carnegie:"",
			hbcu:"92",
			flagship:"51",
			similar: "21",
			sector: ""
		};*/
		this.compareAttr = {
			gradrates:"grad_150_value",
			pell:'pell_value',
			aid:'aid_value',
			awards: 'awards_per_value',
			spending: 'exp_award_value'
		}
			this.compareLabels = {
			gradrates:"% graduating in six years",
			pell:'Pell Grant %',
			aid:'Student aid avg. per undergraduate recipient',
			awards: 'Completions per 100 FTE undergraduates',
			spending: 'Educational spending per completion'
		}
		this.customAttr = ["none","chronname","grad_150_value","grad_100_value","awards_per_value","exp_award_value","aid_value", "pell_value"];
		this.customRange = [];
		this.customRangeCount = 5;
		this.state = "";
		this.offset = 0;
		this.level = "";
		this.control = "";
		this.carnegie = "";
		this.hbcu = "";
		this.flagship = "";
		this.compareSort = "2";
		this.customSort = "0";
		this.compareOrder = "dsc";
		this.historicalCohort = {};
		this.medianExpend = {
			four: 0.0007,
			two: 0.0013
		};
	}
	///data elements///
	function dataElements () {
		this.gradrates = [];
		this.sectorRates = [];
		this.compare = "";
		this.compareCount = [];
		this.general = "";
		this.sector = [];
		this.customgroup = [];
	}
	///////Custom Table functions///////
	dataExpress.getCustomRange = function () {
		dataValues.customRange = [];
		var theData = instElements.customgroup;
		var min = [0,0,999,999,999,99999999999990,9999999,999];
		var max = [0,0,0,0,0,0,0,0];
		var increment,
			dataLength = theData.length;
			
		for (i=0; i < dataLength;i++) {
			for (j=2; j<8; j++) {
				if (parseFloat(theData[i][dataValues.customAttr[j]]) < min[j] && theData[i][dataValues.customAttr[j]] !== null) {
					min[j] = parseFloat(theData[i][dataValues.customAttr[j]]);
				}
				if (parseFloat(theData[i][dataValues.customAttr[j]]) > max[j] && theData[i][dataValues.customAttr[j]] !== null) {
					max[j] = parseFloat(theData[i][dataValues.customAttr[j]]);
				}			
			}
		}	
		for (k=0;k<8;k++) {
			var rangeItem = {
				min: min[k],
				increment: (max[k]-min[k])/dataValues.customRangeCount
			}
			dataValues.customRange.push(rangeItem);
		}
	}
	dataExpress.customheaderSetup = function () {
		for (i=1;i<8;i++) {
			dataExpress.addCustomSortButton(i);
		}
	}
	dataExpress.addCustomSortButton = function (num) {
		var theTHead = $('#custom').find("thead");
		theTHead.find('.col_'+num).unbind('click').click(function() {
				dataExpress.sortCustom(num);
				dataExpress.formatCustomHeader();
			})
	}
	dataExpress.sortCustom = function (theCol) {
		if (theCol == dataValues.customSort) {
			_gaq.push(['_trackEvent', 'custom-compare', 'reverse']);
			instElements.customgroup.reverse();
		} else {
			dataValues.customSort = theCol;
				_gaq.push(['_trackEvent', 'custom-compare', 'sort_by_'+dataValues.customAttr[parseFloat(theCol)]]);
			var sortAttribute = dataValues.customAttr[parseFloat(theCol)]
			if (theCol != 1) {
				instElements.customgroup.sort(function(a,b){
					var y = a[sortAttribute];
					var x = b[sortAttribute];
					return x-y;
				});
			} else {
				_gaq.push(['_trackEvent', 'custom-compare', 'sort_by_name']);
				instElements.customgroup.sort(function(a,b){
					var x = a[sortAttribute];
					var y = b[sortAttribute];
					return ((x < y) ? -1 : ((x > y) ? 1 : 0))
				});
			}
		}
		dataExpress.buildCustomTable();
	}
	dataExpress.getCustomLink = function () {
		var idString = "",
			dataUrl,
			customIdLength;
			customIdLength = dataValues.customIDs.length;
		for (i = 0; i < customIdLength; i++) {
		 	idString = idString + "||unitid:" + dataValues.customIDs[i]+":eq";
		}		
		dataUrl = mymap.transport+'/q/bo/public/name/gatesInst1/find/unitid:'+grad.url.currentParams.id+':eq'+idString+'/fields/chronname|grad_150_value|aid_value|grad_100_value|pell_value|exp_award_value|awards_per_value/format/csv/filename/customcompare_'+grad.url.currentParams.id+'.csv';
		grad.graphics.getData.shortenAndPopulate(dataUrl, 'custom');
	}
	dataExpress.formatCustomHeader = function () {
		var theTHead = $('#custom').find("thead");
		theTHead.find('td').removeClass('active');
		theTHead.find('.col_'+dataValues.customSort).addClass('active');
	}
	dataExpress.deleteCustomRow = function (theID) {
		$('#c_'+theID).find('.col_delete').find('a').click(function (event) {
			 event.preventDefault();
		 	for (i=0;i<dataValues.customIDs.length;i++) {
		 		if (dataValues.customIDs[i] == theID) {
		 			dataValues.customIDs.splice(i,1);
		 			break;
		 		}
		 	}
		 	for (j=0;j<instElements.customgroup.length;j++) {
		 		if (instElements.customgroup[j].unitid == theID) {
		 			instElements.customgroup.splice(j,1);
		 			break;
		 		}
		 	}
		 		_gaq.push(['_trackEvent', 'custom-compare', 'delete_row']);
		 	dataExpress.getCustomLink();
			dataExpress.getCustomRange();
		 	dataExpress.buildCustomTable();
		})
	}
	dataExpress.buildCustomTable = function () {
	$('#custom').removeClass('loading');
		var theTBody = $('#custom').find("tbody"),
			customGroupLength = instElements.customgroup.length,
			theRow = '',
			therowend,
			therowclass,
			theName,
			thisCollege;
		
		dataExpress.formatCustomHeader();
		theTBody.html("");
		
		for (var i = 0; i < customGroupLength; i++) {
			theRow = '';
			therowend = '';
			therowclass = '';
			theName = '';
			thisCollege = instElements.customgroup[i];
			if (thisCollege.unitid != grad.url.currentParams.id) {
				therowend = '<td class="col_delete"><a href="#" class="circle red">X</a></td></tr>';
				therowclass = 'class="clickable_row"';
				theName = '<a class="toplink" href="#id='+thisCollege.unitid+'">'+ thisCollege.chronname+'</a>'
			} else {
				therowend = '</tr>';
				therowclass = '';
				theName = thisCollege.chronname;
			}
			theRow = '<tr '+therowclass+' id="c_'+thisCollege.unitid+'"><td class="col_name">'+theName+'</td><td class="col_2 average">'+utilities.percentileCheck(thisCollege.grad_150_value)+'</td><td class="col_3 average">'+utilities.percentileCheck(thisCollege.grad_100_value)+'</td><td class="col_4 average">'+utilities.numberCheck(thisCollege.awards_per_value,"text")+'</td><td class="col_5 average">'+utilities.moneyString(thisCollege.exp_award_value)+'</td><td class="col_6 average">'+utilities.moneyString(thisCollege.aid_value)+'</td><td class="col_7 average">'+utilities.percentileCheck(thisCollege.pell_value)+'</td>'+therowend;
		//	theRow = '<tr '+therowclass+' id="c'+thisCollege.unitid+'"><td class="col_name">'+theName+'</td><td class="col_2 average">'+thisCollege.grad_150_value+'%</td><td class="col_3 average">'+thisCollege.grad_100_value+'%</td><td class="col_4 average">'+thisCollege.awards_per_value+'</td><td class="col_5 average">'+utilities.moneyString(thisCollege.exp_award_value)+'</td><td class="col_6 average">'+utilities.moneyString(thisCollege.aid_value)+'</td><td class="col_7 average">'+thisCollege.pell_value+'%</td>'+therowend;
			theTBody.append(theRow);
			dataExpress.deleteCustomRow(thisCollege.unitid);
		}
		dataExpress.prettyupCustomTable();
		dataExpress.scrollupNames('#custom');
	}
	dataExpress.prettyupCustomTable = function() {
		var customGroupLength = instElements.customgroup.length,
			i,
			j,
			k;
		for (i=0;i<customGroupLength;i++) {
			var theRow = $('#c_'+instElements.customgroup[i].unitid);
			for (j=2;j<8;j++) {
				var theValue = parseFloat(instElements.customgroup[i][dataValues.customAttr[j]]);
				theRow.find('.col_'+j).addClass(function () {
					var theClass = 1;
					for (k=dataValues.customRangeCount-1;k>=0;k--) {
						if (theValue >= dataValues.customRange[j].min+ (dataValues.customRange[j].increment*k)) {
							if (j == 5) {
								theClass = 4-k;
							} else {
								theClass = k;
							}
							break;
						}
					}
					if (isNaN(theValue)) {
						theClass = 2;
					}
					if ((customGroupLength) == 1) {
						theClass = 2;
					}
					return "perform_"+theClass;
				});
			}
		}
	}
	dataExpress.customsearch = function () {
		var results = mymap.search.items;
		$('#custom_chooser').fadeTo(100, 1).autoSuggest(results, { 
			asHtmlID: "custom_chooser",
			selectedItemProp: "value", 
			searchObjProps: "name, nickname",
			minChars: 3, 
			retrieveLimit: 6, 
			neverSubmit: true,
			startText: "Find a college",
			resultClick: function(data){
				dataExpress.addCustomValue(data.attributes.value);
			},
			formatList: function(data, elem){
				var identifier = data.type;
				if (identifier != "state") {
					var new_elem = elem.html(data.name);
				}
				return new_elem;
			}	
		}).bind('focus', function() {
			$(this).addClass('focused');
		}).bind('blur', function() {
			$(this).removeClass('focused');
		});
	}
	dataExpress.addCustomValue = function (theID) {
		var exists = false,
			customGroupLength = instElements.customgroup.length;
			
		for (i=0; i < customGroupLength; i++) {
			if (instElements.customgroup[i].unitid == theID) {
				exists = true;
				break
			}
		}
		if (!exists) {
			_gaq.push(['_trackEvent', 'add_custom', grad.url.currentParams.id, theID]);
			dataValues.customIDs.push(theID);
			getCustomValue(theID);
		} 
	}
	
	///////compare table functions////
	
	dataExpress.createCompareCount = function () {
		instElements.compareCount[dataValues.compareCat] = [];
		var thisCount = instElements.compareCount[dataValues.compareCat];
		for (var i = 0;i<instElements.compare.length;i++) {
		theID = instElements.compare[i].unitid;
			instElements.compareCount[dataValues.compareCat][theID] = i+1;
		}
		dataExpress.processCompareGroup(false);
	}
	dataExpress.sortCompare = function (theCol,isNew) {
		if (theCol == dataValues.compareSort && !isNew) {
			_gaq.push(['_trackEvent', 'sort-comparepeers', 'reverse', dataValues.activeCompare+": "+dataValues.compareCat]);
			instElements.compare.reverse();
		} else  {
			dataValues.compareSort = theCol;
			if (theCol == "0") {
				_gaq.push(['_trackEvent', 'sort-comparepeers', 'chronname', dataValues.activeCompare+": "+dataValues.compareCat]);
				instElements.compare.sort(function(a,b){
					var x = a.chronname;
					var y = b.chronname;
					return ((x < y) ? -1 : ((x > y) ? 1 : 0))
				});
			} else {
				_gaq.push(['_trackEvent', 'sort-comparepeers', 'datacolumn', dataValues.activeCompare+": "+dataValues.compareCat]);
				var sortAttribute = dataValues.compareAttr[dataValues.activeCompare];
				instElements.compare.sort(function(a,b){
					var y = a[sortAttribute];
					var x = b[sortAttribute];
					return x-y; 
				});
			}
		}
		if (!isNew) {
			dataExpress.processCompareGroup(false);
		} else {
			dataExpress.createCompareCount();
		}
	}
	dataExpress.processCompareGroup = function (error) {
		if (error == "error") {
			$('#compare').find("tbody").html("<tr><td colspan=3 style='padding-left:20px;font-weight:bold;'>No other institutions found in this compare group</td></tr>");
			$('#compare').removeClass('loading');
		} else {
			dataValues.activeCompare =  grad.filters.get("compare","metric");
			dataValues.compareCat = grad.filters.get("compare","group");
			$('#compare_table_header_2').find('.th_label').text(dataValues.compareLabels[dataValues.activeCompare]);
		/*	if (grad.filters.get('compare','metric') != "gradrates") {
				$('#compare_table_header_1').hide();
			} else {
				$('#compare_table_header_1').show();
				$('#compare_table_header_1').text(dataValues.compareLabels.gradrates1);
			}*/
			var theTBody = $('#compare').find("tbody");
			//var isEven = true;
			var tableRows = instElements.compare.length;
			if (tableRows > (dataValues.offset+10)) {
				tableRows = dataValues.offset+10;
			}
			var theCompare = instElements.compare;
			if ((dataValues.offset+10) < instElements.compare.length) { ////Length[dataValues.compareCat]
				var theNext = "<a href='#' id='nextPage' class=''>Next &rarr;</a>";
			} else {
				theNext = "";
			}
			if (dataValues.offset > 0) {
				var thePrev = "<a href='#' id='prevPage' class=''>&larr; Prev</a>";
			} else {
				thePrev = "";
			}
			if (dataValues.activeCompare == "aid") {
				var scale = 0.0029;
			} else if (dataValues.activeCompare == "awards") {
				scale = 2.5;
			} else if (dataValues.activeCompare == "spending") {
				if (dataValues.level == "4-year") {
					scale = dataValues.medianExpend.four;
				} else {
					scale = dataValues.medianExpend.two;
				}
			} else {
				scale = 1;
			}
			$('#compare').removeClass('loading');
			$('#compare').find('.pagination').html(thePrev+'Showing '+(1+dataValues.offset)+'&#150;'+tableRows+' of '+instElements.compare.length + theNext);
			$('#nextPage').click(function(e) {
				e.preventDefault();
			 	dataValues.offset = dataValues.offset +10;
			 	_gaq.push(['_trackEvent', 'compare_next-page', "from "+dataValues.offset, dataValues.activeCompare+": "+dataValues.compareCat, grad.url.currentParams.id, theID]);
			 	//$('#compare').addClass('loading');	
				dataExpress.processCompareGroup();
			});
			$('#prevPage').click(function(e) {
			 	e.preventDefault();
				dataValues.offset = dataValues.offset -10;
				_gaq.push(['_trackEvent', 'compare_previous-page', "from "+dataValues.offset, dataValues.activeCompare+": "+dataValues.compareCat, grad.url.currentParams.id, theID]);
			 	
				//$('#compare').addClass('loading');	
				dataExpress.processCompareGroup();
			});
			var topRow = '<tr class="current_college_top"><td class="col_number">'+instElements.compareCount[dataValues.compareCat][grad.url.currentParams.id]+'</td><td class="col_name">'+instElements.general.chronname+'</td>';
			var dv = false;
			if (dataValues.compareAttr[dataValues.activeCompare] ==  "grad_150_value") {
				dv = true;
				var the100 = utilities.tooShort(instElements.general.grad_100_value,6,"%");
				var the150 = utilities.percentileCheck(instElements.general.grad_150_value);
				var topRow2 = '<td class="col_value">'+the150+'</td><td class="col_bar"><div class="bar current_bar compare_bar"><div class="bar_segment segment_1" style="width:'+the100+'"><span class="value">'+the100+'</span></div><div class="bar_segment segment_2" style="width:'+ (parseFloat(instElements.general.grad_150_value)-parseFloat(instElements.general.grad_100_value))+'%"><span class="value">'+the150+'</span></div></div></td></tr>';
			} else if (dataValues.compareAttr[dataValues.activeCompare] ==  "pell_value") {
				var topRow2 = '<td class="col_value">'+utilities.percentileCheck(instElements.general[dataValues.compareAttr[dataValues.activeCompare]])+'</td><td class="col_bar"><div class="bar current_bar compare_bar"><div class="bar_segment segment_2" style="width:'+ (instElements.general[dataValues.compareAttr[dataValues.activeCompare]]*scale)+'%"><span class="value">'+ utilities.percentileCheck(instElements.general[dataValues.compareAttr[dataValues.activeCompare]])+'</span></div></div></td></tr>';
			} else if (dataValues.compareAttr[dataValues.activeCompare] ==  "awards_per_value") {
				var topRow2 = '<td class="col_value">'+utilities.numberCheck(instElements.general[dataValues.compareAttr[dataValues.activeCompare]],"text")+'</td><td class="col_bar"><div class="bar current_bar compare_bar"><div class="bar_segment segment_2" style="width:'+ (instElements.general[dataValues.compareAttr[dataValues.activeCompare]]*scale)+'%"><span class="value">'+instElements.general[dataValues.compareAttr[dataValues.activeCompare]]+'</span></div></div></td></tr>'	
			} else {
				var topRow2 = '<td class="col_value">'+utilities.moneyString(instElements.general[dataValues.compareAttr[dataValues.activeCompare]])+'</td><td class="col_bar"><div class="bar current_bar compare_bar"><div id="compare_top_bar" class="bar_segment segment_2'+ utilities.over100(parseFloat(instElements.general[dataValues.compareAttr[dataValues.activeCompare]])*scale, '#compare_top_bar',18)+'<span class="value">'+  utilities.moneyString(instElements.general[dataValues.compareAttr[dataValues.activeCompare]])+'</span></div></div></td></tr>'
			}
			var topRow3 = topRow + topRow2;
			theTBody.html(topRow3);
			for (i=dataValues.offset;i<tableRows;i++) {
				if (theCompare[i].unitid != grad.url.currentParams.id) {
					var theRow = "";
					if (dataValues.compareAttr[dataValues.activeCompare] ==  "grad_150_value" || dataValues.compareAttr[dataValues.activeCompare] ==  "pell_value") {
						var displayVal = utilities.percentileCheck(theCompare[i][dataValues.compareAttr[dataValues.activeCompare]]);
					} else if (dataValues.compareAttr[dataValues.activeCompare] ==  "awards_per_value") {
						var displayVal = utilities.numberCheck(theCompare[i][dataValues.compareAttr[dataValues.activeCompare]],"text");
					} else {
						var displayVal = utilities.moneyString(theCompare[i][dataValues.compareAttr[dataValues.activeCompare]]);
					}
					theRow= '<tr class="clickable_row" id="p_'+theCompare[i].unitid+'"><td class="col_number">'+instElements.compareCount[dataValues.compareCat][theCompare[i].unitid]+'</td><td class="col_name"><a class="toplink" href="#id='+theCompare[i].unitid+'">'+theCompare[i].chronname+'</a></td><td class="col_value">'+displayVal+'</td><td class="col_bar"><div class="bar current_bar compare_bar">';
					if (dv) {
						theRow = theRow + '<div class="bar_segment segment_1" style="width:'+ parseFloat(theCompare[i].grad_100_value)+'%"><span class="value">'+utilities.tooShort(theCompare[i].grad_100_value,6,"%")+'</span></div>'
						var theWidth = ' " style="width:'+(parseFloat(theCompare[i].grad_150_value) - parseFloat(theCompare[i].grad_100_value))+'%">';
					} else {
						var theWidth = utilities.over100(theCompare[i][dataValues.compareAttr[dataValues.activeCompare]]*scale,'#compare_'+theCompare[i].unitid,18);
					}		
					theRow = theRow + '<div  id="compare_'+theCompare[i].unitid+'" class="bar_segment segment_2'+ theWidth+'<span class="value">'+ displayVal+'</span></div>'
					theRow = theRow + '</div></td></tr>'
					theTBody.append(theRow);
				} 
			}
			dataExpress.scrollupNames('#compare');
		}
	}
	dataExpress.compareheaderSetup = function () {
			$('#compare_table_header_2').removeClass('active').addClass('active');
				$('#compare_name').removeClass('active');
				$('#compare_table_header_2').addClass(dataValues.compareOrder);
		$('#compare_table_header_2').unbind('click').click(function () {
			if (dataValues.compareSort == "2") {
				$('#compare_table_header_2').removeClass(dataValues.compareOrder);
				if (dataValues.compareOrder == "dsc") {
					dataValues.compareOrder = "asc";
				} else {
					dataValues.compareOrder = "dsc";
				}
			} else {
				$('#compare_name').removeClass(dataValues.compareOrder);
				dataValues.compareOrder = "dsc";
				$('#compare_name').removeClass('active');
				$('#compare_table_header_2').addClass('active');
			}	
			$('#compare').addClass('loading');	
			$(this).addClass(dataValues.compareOrder);
			dataExpress.sortCompare("2",false);
		});	
		$('#compare_name').unbind('click').click(function () {
			if (dataValues.compareSort == "0") {
			$('#compare_name').removeClass(dataValues.compareOrder);
				if (dataValues.compareOrder == "dsc") {
					dataValues.compareOrder = "asc";
				} else {
					dataValues.compareOrder = "dsc";
				}
			} else {
				$('#compare_table_header_2').removeClass(dataValues.compareOrder);
				dataValues.compareOrder = "asc";
				$('#compare_table_header_2').removeClass('active');
				$('#compare_name').addClass('active');
			}		
			$('#compare').addClass('loading');
			$(this).addClass(dataValues.compareOrder);
			dataExpress.sortCompare("0",false);
		});	
	}
	
	///////general processing functions/////
	
	dataExpress.checkCohort = function () {
		if (instElements.gradrates.ipedstwoyear) {
			dataValues.noBach = false;
			$('#gradrates_singlesource').show();
			$('#gradrates_data_source').hide();
			$('#gradrates_singlesource').html(mymap.ssOptions.ipedstwoyear);
			$('#gradrates_source_ipedstwoyear').hide();
			grad.filters.change("gradrates_source_ipedstwoyear");
		} else {
		var cohortCount = 0;
			var otherCohort =0;
			var bachCohort = 0;
				for (i=0;i<6;i++) {
				if(instElements.gradrates.ipedsother.y2010.both[i].race == "X") {
					otherCohort = utilities.numberCheck(instElements.gradrates.ipedsother.y2010.both[i].grad_cohort,"number");
				}
				if (instElements.gradrates.ipedsbach.y2010.both[i].race == "X") {
					bachCohort = utilities.numberCheck(instElements.gradrates.ipedsbach.y2010.both[i].grad_cohort,"number");
				}
			}
			if (otherCohort > 0) {
				cohortCount += 1;
				isOther = mymap.ddOptions.ipedsother;
				var ssLabel = mymap.ssOptions.ipedsother;
				var theSwitch = "gradrates_source_ipedsother";
			} else {
				isOther = "";
			}
			if (bachCohort > 0) {
				cohortCount += 1;
				dataValues.noBach = false;
				$('#strengths_table').removeClass();
				var isBach = mymap.ddOptions.ipedsbach;
				var ssLabel = mymap.ssOptions.ipedsbach;
				theSwitch = "gradrates_source_ipedsbach";
			} else {
				dataValues.noBach = true;
				$('#strengths_table').addClass('no_grad_rates');
				isBach = "";
			}
			if (utilities.numberCheck(instElements.general.vsa_grad_after6_first,"number") > 0) {
				var isVSA = mymap.ddOptions.vsa;
				cohortCount += 1;
			} else {
				isVSA = "";
			}
			if (cohortCount > 1) {
				$('#gradrates_data_source').show();
				$('#gradrates_singlesource').hide();
				$('#gradrates_data_source').html(isBach+isOther+isVSA);
				if (otherCohort > bachCohort) {
					$('#gradrates_source_ipedsbach').attr("selected", "selected");
					$('#gradrates_source_ipedsother').attr("selected", " ");
					grad.filters.change("gradrates_source_ipedsother");
				} else {
					$('#gradrates_source_ipedsother').attr("selected", "selected");
					$('#gradrates_source_ipedsbach').attr("selected", " ");
					grad.filters.change("gradrates_source_ipedsbach");
				}
			} else {
				$('#gradrates_singlesource').show();
				$('#gradrates_data_source').hide();
				$('#gradrates_singlesource').html(ssLabel);
				grad.filters.change(theSwitch);
			}	
		} 
	}
	dataExpress.populateGeneral = function () {
		grad.graphics.getData.init();
		
		$('.oversized').remove();
		$('#compare_group_flagship').remove();
		$('#compare_group_hbcu').remove();
		$('#compare_data_group').append('<option id="compare_group_flagship">Flagships</option><option id="compare_group_hbcu">HBCUs</option>');
		$('#about_datatype').unbind('hover click').hover(function() {
				$('#help_datatype').show();
			}, function () {
				$('#help_datatype').hide();
		}).click(function(e){
			e.preventDefault();
		});
		//header contents//
		dataValues.level =  instElements.general.level;
		dataValues.control = instElements.general.control;
		dataValues.carnegie =  instElements.general.basic;
		dataValues.hbcu =  instElements.general.hbcu;
		dataValues.flagship =  instElements.general.flagship;
		if (instElements.general.level == "4-year") {
			if (grad.filters.get('gradrates','source') == 'ipedsother') {
				$('#gradrate_label_six').find('.value_label').html('of all <span class="total"></span> counted students graduated in <span class="cohort_complete">150% time</span>');
				dataValues.compareLabels.gradrates = "% graduating in 150% time" ;
			} else {
				$('#gradrate_label_six').find('.value_label').html('graduated in <br /> <span class="cohort_complete">six years</span>');
				$('#sw_onehundred').text("4-year graduation rate");
				$('#sw_onefifty').text("6-year graduation rate");
				$('.level_class').text("2004");
				dataValues.compareLabels.gradrates = "% graduating in six years" ;
			}
			$('.sw_level_label').text("bachelor's");
			var theLevel = "four";
		} else {
					$('#gradrate_label_six').find('.value_label').html('of all <span class="total"></span> counted students graduated in  <span class="cohort_complete">150% time</span>');
			$('#sw_onehundred').text("100%-Time graduation rate");
			$('#sw_onefifty').text("150%-Time graduation rate");
			$('.level_class').text("2007");
			dataValues.compareLabels.gradrates = "% graduating in 150% time" ;
			$('.sw_level_label').text("degree");
			theLevel = "two";
		}
		dataValues.state = instElements.general.state;
		var $statsHeaderMain = $('#stats_header_main');
			/*	var shortenedURL = 'http://collegecompletion.chronicle.com/institution//%23id='+instElements.general.unitid;
		$statsHeaderMain.find('.twitter').unbind('click').click(function(event) {
			event.preventDefault();
			shortenUrl(shortenedURL, function(shortLink){
				theURL = 'http://twitter.com/?status=How do %23collegecompletion rates for '+instElements.general.chronname+' stack up against its peers? '+shortLink;
				window.open(theURL,'external'); 
			}, '', function (shortLink) {
				theURL ="http://twitter.com/?status=4.3-mil freshmen started college in fall '04. Look at their %23collegecompletion rates across institutions and states: http://chroni.cl/w1k9lU";
				window.open(theURL,'external'); 
			});
		});	
		$('#stats_header_main').find('.facebook').attr('href','http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURI('College Completion: '+instElements.general.chronname) +'&p[summary]=' + escape('View graduation details for '+instElements.general.chronname+' and compare them to thousands of other colleges across the nation at College Completion from the Chronicle.')+'&p[url]=' + encodeURI('http://collegecompletion.chronicle.com/institution/#id='+instElements.general.unitid)+'&p[images][0]=http://collegecompletion.chronicle.com/wp-content/themes/gates-Microsite/imgassets/link_thumb.jpg');
		$('#stats_header_main').find('.linkedin').attr('href','http://www.linkedin.com/shareArticle?mini=true&url='+ escape('http://collegecompletion.chronicle.com/institution/#id='+instElements.general.unitid)+'&title='+escape('College Completion: '+instElements.general.chronname) +'&summary=' + escape('View graduation details for '+instElements.general.chronname+' and compare them to thousands of other colleges across the nation at College Completion from the Chronicle.')+'&source=chronicle.com')
		
		*/
		var shortenedURL = 'collegecompletion.chronicle.com/institution/%23id='+instElements.general.unitid;

			
		$statsHeaderMain.find('.twitter').attr('href', 'http://twitter.com/?status=How do %23collegecompletion rates for '+instElements.general.chronname+' stack up against its peers? '+shortenedURL);
		
		// $('#stats_header_main').find('.twitter').unbind('click').click(function(event) {
		// 			log(shortenedURL);
		// 			$(this).attr('href', 'http://twitter.com/?status=How do %23collegecompletion rates for '+instElements.general.chronname+' stack up against its peers? '+shortenedURL);
		// 			// shortenUrl(shortenedURL, function(shortLink){
			// 				log('bitly not error');
			// 				event.preventDefault();
			// 				dataValues.bitly = shortLink;
			// 				$(this).attr('href','http://twitter.com/?status=How do %23collegecompletion rates for '+instElements.general.chronname+' stack up against its peers? '+dataValues.bitly);
			// 			}, '', function(shortLink){ // error callback
			// 				event.preventDefault();
			// 				log('bitly error');
			// 				dataValues.bitly = shortenedURL;
			// 				$(this).attr('href','http://twitter.com/?status=How do %23collegecompletion rates for '+instElements.general.chronname+' stack up against its peers? '+dataValues.bitly);
			// 			});
		// });	*/
		$statsHeaderMain.find('.facebook').attr('href','http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURI('College Completion: '+instElements.general.chronname) +'&p[summary]=' + escape('View graduation details for '+instElements.general.chronname+' and compare them to thousands of other colleges across the nation at College Completion from the Chronicle.')+'&p[url]=' + encodeURI('http://collegecompletion.chronicle.com/institution/#id='+instElements.general.unitid)+'&p[images][0]=http://collegecompletion.chronicle.com/wp-content/themes/gates-Microsite/imgassets/link_thumb.jpg');
		$statsHeaderMain.find('.linkedin').attr('href','http://www.linkedin.com/shareArticle?mini=true&url='+ escape('http://collegecompletion.chronicle.com/institution/#id='+instElements.general.unitid)+'&title='+escape('College Completion: '+instElements.general.chronname) +'&summary=' + escape('View graduation details for '+instElements.general.chronname+' and compare them to thousands of other colleges across the nation at College Completion from the Chronicle.')+'&source=chronicle.com')
		///print buttons//
		$('#gradrates').find('.print').unbind('click').click(function(e) {
			var theClasses = $('#gradrates').attr("class");
			e.preventDefault();
			utilities.printDiv('gradrates', theClasses);
		});
		$('#efficiency').find('.print').unbind('click').click(function(e) {
			e.preventDefault();
			utilities.printDiv('efficiency');
		});
		$('#compare').find('.print').unbind('click').click(function(e) {
			e.preventDefault();
			utilities.printDiv('compare');
		});
		$('#strengths').find('.print').unbind('click').click(function(e) {
					var theClasses = $('#strengths').attr("class");
			e.preventDefault();
			utilities.printDiv('strengths');
		});
		$('#custom').find('.print').unbind('click').click(function(e) {
			e.preventDefault();
			utilities.printDiv('custom');
		});
	
		$('#custom').find('.active').removeClass('active');
		$('#header_inst_name').html(instElements.general.chronname);
		$('#stats_section_data').find('#data_college_name').text(instElements.general.chronname);
		$('.sector').text(instElements.general.level +" "+instElements.general.control.toLowerCase());
		$('.city').html(instElements.general.city+", <a href='/state/#state="+utilities.getStateAbbreviation(dataValues.state)+"&sector="+utilities.getControl(dataValues.control)+"_"+theLevel+"'>"+instElements.general.state+"</a>");
		$('.enrollment').text(utilities.addCommas(instElements.general.student_count)+" undergraduates");
		$('.website').html("<a href='http://"+instElements.general.site+"' target='external'>"+utilities.processURL(instElements.general.site)+"</a>");
		$('.full_time').text(instElements.general.ft_pct+"% of students are full-time");
		$('#stats_header_state').removeClass().addClass(utilities.getStateAbbreviation(dataValues.state));
		//gradrates//
		var countedSource = instElements.general.counted_pct;
		if (countedSource != null) {
			$('.counted').show();
			var pieParams = [];
			pieParams = countedSource.split('|');
			var pieCounted = parseFloat(pieParams[0]);
			var pieOmit = (100 - parseFloat(pieParams[0])).toFixed(1);
			var pieYear= pieParams[1];
			var pieRotate = (pieOmit/100) * Math.PI;
			var thePie = '<img src="https://chart.googleapis.com/chart?cht=p&amp;chs=80x80&amp;chco=d96949|d7d7d7&amp;chp='+pieRotate+'&amp;chd=t:'+pieCounted+','+pieOmit+'" class="goog-serverchart-image" width="80" height="80">';
			$('#stats_section_gradrates').find('.counted_pie').html(thePie);
			$('#gradrates_counted').text(pieCounted+"%");
			$('#gradrates_left_out').text(pieOmit+"%");
		} else {
			$('.counted').hide();			
		}
		
		///efficiency contents///
		var efficienciesHidden = 0;
		$('#efficiency').removeClass('loading');	
		$('#efficiency').remove('#noData');
		if (utilities.numberCheck(instElements.general.awards_per_value,"number") > 0) {
			$('#efficiency_awards').show();
			$('#efficiency_awards').find('h2.efficiency_awards_inst_value').text(instElements.general.awards_per_value);
			$('#efficiency_awards_inst_value').text(instElements.general.awards_per_value);
			$('#efficiency_awards_state_value').text(instElements.general.awards_per_state_value);
			$('#efficiency_awards_sector_value').text(instElements.general.awards_per_natl_value);
			$('#efficiency_awards_inst_container').animate({'width': utilities.over100(parseFloat(instElements.general.awards_per_value)*2.5, '#efficiency_awards_inst_container',23)+"%"});
			$("#efficiency_awards_state_container").animate({'width':(parseFloat(instElements.general.awards_per_state_value)*2.5)+"%"});
			$('#efficiency_awards_sector_container ').animate({'width': (parseFloat(instElements.general.awards_per_natl_value)*2.5)+"%"});
		} else {
			efficienciesHidden += 1;
			$('#efficiency_awards').hide();
		}
		if (utilities.numberCheck(instElements.general.exp_award_value,"number") > 0) {
			$('#efficiency_spending').show();
			$('#efficiency_spending').find('h2.efficiency_spending_inst_value').text(utilities.moneyString(instElements.general.exp_award_value));
			$('#efficiency_spending_inst_value').text(utilities.moneyString(instElements.general.exp_award_value));
			$('#efficiency_spending_state_value').text(utilities.moneyString(instElements.general.exp_award_state_value));
			$('#efficiency_spending_sector_value').text(utilities.moneyString(instElements.general.exp_award_natl_value));
			$('#efficiency_spending_inst_container').animate({'width': utilities.over100(parseFloat(instElements.general.exp_award_value)*dataValues.medianExpend[theLevel], '#efficiency_spending_inst_container',23)+"%"});
			$("#efficiency_spending_state_container").animate({'width': utilities.over100(parseFloat(instElements.general.exp_award_state_value)*dataValues.medianExpend[theLevel], '#efficiency_spending_state_container',23)+"%"});
			$('#efficiency_spending_sector_container ').animate({'width': (parseFloat(instElements.general.exp_award_natl_value)*dataValues.medianExpend[theLevel])+"%"});
		} else {
			efficienciesHidden += 1;
			$('#efficiency_spending').hide();
		}
		if (efficienciesHidden >= 2) {
			$('#efficiency').html('<div id="noData"><p>There is no efficiency information for this institution</p></div>');
		} else {
			$('#stats_section_efficiency .state_abbrev').text(instElements.general.state);
		}
		//strengthandweaknesses//
		$('#strengths').removeClass('loading');	
		$('#strengths').find('.stats_label').find('.sector').text(dataValues.level + " " + dataValues.control.toLowerCase());
		$('#strengths_table .gradrate_all_four').text(utilities.bachCheck(instElements.general.grad_100_value));
		$('#strengths_table .gradrate_all_six').text(utilities.bachCheck(instElements.general.grad_150_value));
		$('#sw_sat_value').text(utilities.numberCheck(utilities.numberCheck(instElements.general.med_sat_value,"text")));
		$('#sw_aid_value').text(utilities.moneyString(instElements.general.aid_value));
		$('#sw_retention_value').text(utilities.percentileCheck(instElements.general.retain_value));
		$('#sw_pell_value').text(utilities.percentileCheck(instElements.general.pell_value));
		$('#sw_faculty_value').text(utilities.percentileCheck(instElements.general.ft_fac_value));
		if (instElements.general.endow_value >= 1000000) {
			$('#sw_endowment_value').removeClass().addClass('value_col').addClass('val_smaller');
		} else if (instElements.general.endow_value >= 100000) {
			$('#sw_endowment_value').removeClass().addClass('value_col').addClass('val_small');
		} else {
			$('#sw_endowment_value').removeClass().addClass('value_col')
		}
		$('#sw_endowment_value').text(utilities.moneyString(instElements.general.endow_value));
		$('#gradrates_all_four_percentile').text(utilities.percentileCheck(instElements.general.grad_100_percentile));
		$('#gradrates_all_six_percentile').text(utilities.percentileCheck(instElements.general.grad_150_percentile));
		$('#sw_sat_percentile').text(utilities.percentileCheck(instElements.general.med_sat_percentile));
		$('#sw_aid_percentile').text(utilities.percentileCheck(instElements.general.aid_percentile));
		$('#sw_retention_percentile').text(utilities.percentileCheck(instElements.general.retain_percentile));
		$('#sw_pell_percentile').text(utilities.percentileCheck(instElements.general.pell_percentile));
		$('#sw_faculty_percentile').text(utilities.percentileCheck(instElements.general.ft_fac_percentile));
		$('#sw_endowment_percentile').text(utilities.percentileCheck(instElements.general.endow_percentile));
		$('#gradrates_all_four_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.grad_100_percentile));
		$('#gradrates_all_six_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.grad_150_percentile));
		$('#sw_sat_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.med_sat_percentile));
		$('#sw_aid_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.aid_percentile));
		$('#sw_retention_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.retain_percentile));
		$('#sw_pell_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.pell_percentile));
		$('#sw_faculty_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.ft_fac_percentile));
		$('#sw_endowment_percentile').parent().parent().removeClass().addClass('strengths_row').addClass(dataExpress.swClasses(instElements.general.endow_percentile));
		$('#gradrates_all_four_percentile').animate({'left': instElements.general.grad_100_percentile+"%"});
		$('#gradrates_all_six_percentile').animate({'left': instElements.general.grad_150_percentile+"%"});
		$('#sw_sat_percentile').animate({'left':instElements.general.med_sat_percentile+"%"});
		$('#sw_endowment_percentile').animate({'left':instElements.general.endow_percentile+"%"});
		$('#sw_aid_percentile').animate({'left':instElements.general.aid_percentile+"%"});
		$('#sw_retention_percentile').animate({'left':instElements.general.retain_percentile+"%"});
		$('#sw_pell_percentile').animate({'left':instElements.general.pell_percentile+"%"});
		$('#sw_faculty_percentile').animate({'left':instElements.general.ft_fac_percentile+"%"});
		//get sector///
		getSectorRates();
		//get compare lengths//
		if (dataValues.flagship != "X") {
			$('#compare_group_flagship').remove();
		}
		if (dataValues.hbcu != "X") {
			$('#compare_group_hbcu').remove();
		}
	//	getSectorCount();
		$('#compare_group_sectorstate').text(utilities.getStateAbbreviation(dataValues.state).toUpperCase()+" "+dataValues.level+" "+dataValues.control);
		$('#compare_group_sector').text("All "+dataValues.level+" "+dataValues.control);
		$('#compare_group_carnegie').text(dataValues.carnegie);
	//	dataValues.compareLength.sectorstate = instElements.general.state_sector_ct;
	//	dataValues.compareLength.carnegie = instElements.general.carnegie_ct;
		//parse similar insts//		
		if (instElements.general.similar != null) {
			dataValues.similarIDs = instElements.general.similar.split("|");
			$('#compare_group_similar').removeAttr('disabled');
		} else {
			$('#compare_group_similar').attr('disabled','disabled');
		}
		///run compare gathering function //
		getcomparedata();
		//load custom searchbar & setup header//
		dataExpress.buildCustomTable();
		dataExpress.customheaderSetup();
		dataExpress.compareheaderSetup();
		//generate blank custom//
		//dataExpress.customsearch();
		//add scrollto to name buttons///

	}
	dataExpress.scrollupNames = function (theSection) {
		$(theSection).find('.clickable_row').click(function(event) {
			var theID = this.id.split("_");
			_gaq.push(['_trackEvent', 'inst_link', theSection, theID[1]]);
			window.location = "#id="+theID[1];
			event.preventDefault;
			grad.menu.scrollTo('content');
		}).hover(function() {
				$(this).addClass('hovering');
			},function () {
				$(this).removeClass('hovering');
		});
	}
	dataExpress.swClasses = function (thePercentile) {
		var theClass = "no_data";
		for (i=2;i>=0;i--) {
			if (parseFloat(thePercentile) >= i*33.3) {
				theClass = "level_"+i;
				break;
			} 		}
		return theClass;
	}
	dataExpress.changeCohort = function(theCohort) {
		if (theCohort == "vsa") {
			if (!dataValues.VSAdrawn) {
				dataExpress.makeVsa();
				dataValues.VSAdrawn = true;	
			}
			
			// make sure data time tab displays accurate vsa year, not necessarily 2010
			$('#gradrates_time_year2010').find('a').text(instElements.general.vsa_year + ' Graduation Rate');
			
			grad.filters.change("gradrates_time_year2010");
			grad.filters.change("gradrates_gender_b");
			$('#gradrates_gender_b').parent().find('li').removeClass('active');
			$('#gradrates_gender_b').addClass('active');
			$('#gradrates_time_year2010').parent().find('li').removeClass('active');
			$('#gradrates_time_year2010').addClass('active');
		} else {
			if (theCohort != "ipedsbach") {
						$('#gradrate_label_six').find('.cohort_complete').text("150% time");
			} else {
				$('#gradrate_label_six').find('.cohort_complete').text("six years");
			}
		}	
		$('#gradrates').removeClass('ipedsbach');
		$('#gradrates').removeClass('ipedsother');
		$('#gradrates').removeClass('ipedstwoyear');
		$('#gradrates').removeClass('vsa');
		$('#gradrates').addClass(theCohort);
	}
	///////gradrates section functions/////
	dataExpress.makeVsa = function () {
			var $ftft6 = $('#vsa_ftft_6'),
				$ftft4 = $('#vsa_ftft_4'),
				$trans6 = $('#vsa_trans_6'),
				$trans4= $('#vsa_trans_4'),
				data = instElements.general,
				dropout_ftft_4 = parseInt(10 * (100 - data.vsa_grad_elsewhere_after4_first - data.vsa_grad_after4_first - data.vsa_enroll_elsewhere_after4_first - data.vsa_enroll_after4_first)) / 10,
				dropout_ftft_6 = parseInt(10 * (100 - data.vsa_grad_elsewhere_after6_first - data.vsa_grad_after6_first - data.vsa_enroll_elsewhere_after6_first - data.vsa_enroll_after6_first)) / 10,
				dropout_trans_4 = parseInt(10 * (100 - data.vsa_grad_elsewhere_after4_transfer - data.vsa_grad_after4_transfer - data.vsa_enroll_elsewhere_after4_transfer - data.vsa_enroll_after4_transfer)) / 10,
				dropout_trans_6 = parseInt(10 * (100 - data.vsa_grad_elsewhere_after6_transfer - data.vsa_grad_after6_transfer - data.vsa_enroll_elsewhere_after6_transfer - data.vsa_enroll_after6_transfer)) / 10,
				getLabel = function(datum) {
					var label;
					
					if (datum < 4) {
						return '';
					} else {
						return datum + '%';
					}
				};
			if (dropout_trans_4 >= 100) {
				$trans4.hide();
			} else {
				$trans4.show();
			}
			if (dropout_ftft_4 >= 100) {
				$ftft4.hide();
			} else {
				$ftft4.show();
			}
			if (dropout_ftft_6 >= 100) {
				$ftft6.hide();
			} else {
				$ftft6.show();
			}
			if (dropout_trans_4 >= 100) {
				$trans4.hide();
			} else {
				$trans4.show();
			}
			if (dropout_trans_6 >= 100) {
			$trans6.hide();
			} else {
			$trans6.show();
			}
			if (dropout_trans_6 >= 100 && dropout_trans_4 >= 100) {
			$('.last_vsa_section').hide()
			} else {
				$('.last_vsa_section').show()
			}
			$ftft6.find('.segment_1').find('span.value').text(getLabel(data.vsa_grad_after6_first));
			$ftft6.find('.segment_2').find('span.value').text(getLabel(data.vsa_grad_elsewhere_after6_first));
			$ftft6.find('.segment_3').find('span.value').text(getLabel(data.vsa_enroll_after6_first));
			$ftft6.find('.segment_4').find('span.value').text(getLabel(data.vsa_enroll_elsewhere_after6_first));
			$ftft6.find('.segment_5').find('span.value').text(getLabel(dropout_ftft_6));
			
			$ftft4.find('.segment_1').find('span.value').text(getLabel(data.vsa_grad_after4_first));
			$ftft4.find('.segment_2').find('span.value').text(getLabel(data.vsa_grad_elsewhere_after4_first));
			$ftft4.find('.segment_3').find('span.value').text(getLabel(data.vsa_enroll_after4_first));
			$ftft4.find('.segment_4').find('span.value').text(getLabel(data.vsa_enroll_elsewhere_after4_first));
			$ftft4.find('.segment_5').find('span.value').text(getLabel(dropout_ftft_4));
			
			$trans6.find('.segment_1').find('span.value').text(getLabel(data.vsa_grad_after6_transfer));
			$trans6.find('.segment_2').find('span.value').text(getLabel(data.vsa_grad_elsewhere_after6_transfer));
			$trans6.find('.segment_3').find('span.value').text(getLabel(data.vsa_enroll_after6_transfer));
			$trans6.find('.segment_4').find('span.value').text(getLabel(data.vsa_enroll_elsewhere_after6_transfer));
			$trans6.find('.segment_5').find('span.value').text(getLabel(dropout_trans_6));
			
			$trans4.find('.segment_1').find('span.value').text(getLabel(data.vsa_grad_after4_transfer));
			$trans4.find('.segment_2').find('span.value').text(getLabel(data.vsa_grad_elsewhere_after4_transfer));
			$trans4.find('.segment_3').find('span.value').text(getLabel(data.vsa_enroll_after4_transfer));
			$trans4.find('.segment_4').find('span.value').text(getLabel(data.vsa_enroll_elsewhere_after4_transfer));
			$trans4.find('.segment_5').find('span.value').text(getLabel(dropout_trans_4));
			
			$ftft6.find('.segment_1').animate({'width':data.vsa_grad_after6_first + "%"});
			$ftft6.find('.segment_2').animate({'width':data.vsa_grad_elsewhere_after6_first + "%"});
			$ftft6.find('.segment_3').animate({'width':data.vsa_enroll_after6_first + "%"});
			$ftft6.find('.segment_4').animate({'width':data.vsa_enroll_elsewhere_after6_first + "%"});
			$ftft6.find('.segment_5').animate({'width':dropout_ftft_6 + "%"});
			
			$ftft4.find('.segment_1').animate({'width':data.vsa_grad_after4_first + "%"});
			$ftft4.find('.segment_2').animate({'width':data.vsa_grad_elsewhere_after4_first + "%"});
			$ftft4.find('.segment_3').animate({'width':data.vsa_enroll_after4_first + "%"});
			$ftft4.find('.segment_4').animate({'width':data.vsa_enroll_elsewhere_after4_first + "%"});
			$ftft4.find('.segment_5').animate({'width':dropout_ftft_4 + "%"});
			
			$trans6.find('.segment_1').animate({'width':data.vsa_grad_after6_transfer + "%"});
			$trans6.find('.segment_2').animate({'width':data.vsa_grad_elsewhere_after6_transfer + "%"});
			$trans6.find('.segment_3').animate({'width':data.vsa_enroll_after6_transfer + "%"});
			$trans6.find('.segment_4').animate({'width':data.vsa_enroll_elsewhere_after6_transfer + "%"});
			$trans6.find('.segment_5').animate({'width':dropout_trans_6 + "%"});
			
			$trans4.find('.segment_1').animate({'width':data.vsa_grad_after4_transfer + "%"});
			$trans4.find('.segment_2').animate({'width':data.vsa_grad_elsewhere_after4_transfer + "%"});
			$trans4.find('.segment_3').animate({'width':data.vsa_enroll_after4_transfer + "%"});
			$trans4.find('.segment_4').animate({'width':data.vsa_enroll_elsewhere_after4_transfer + "%"});
			$trans4.find('.segment_5').animate({'width':dropout_trans_4 + "%"});
		}
		
	dataExpress.updateGradRates = function() {
		$('#historical_error').hide();
		$('#gradrates').removeClass('loading');
		$('#wrap').removeClass('loading loading_first');
		if (grad.filters.get("gradrates","time") == "year2010") {
			if (grad.filters.get("gradrates","source") != "vsa") {


				dataExpress.populateGradRates();
				dataExpress.processSectorBars();
			}
		} else {
			dataExpress.processOvertimeGradrates();
		}
		dataValues.firstFire = false;
		
	}
	dataExpress.processSectorBars = function () {
		var currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
			currentCohort = grad.filters.get("gradrates", "source"),
			gradRateArray = instElements.sectorRates[currentCohort]['y2010'][currentGender],
			gradRateArrayLength = gradRateArray.length;
		
		for (var i = 0; i < gradRateArrayLength; i++) {
			var thisData = gradRateArray[i];
			var $raceContainer = $('#gradrates_bar_' + thisData.race.toLowerCase()),
				$currentBar = $raceContainer.find('.compare_bar_1'),
				$segment1 = $currentBar.find('.segment_1'),
				$segment2 = $currentBar.find('.segment_2'),
				$seg2label = $currentBar.find('.seg2val');
			if (thisData.grad_100_rate == null || thisData.grad_100_rate == "0" || dataValues.level == "2-year") {
				var data100 = "0";
				$segment1.hide();
			} else {
				$segment1.show();
				data100 = thisData.grad_100_rate
			}
			if (thisData.grad_150_rate == null || thisData.grad_150_rate == "0") {
				var data150 = "0";
				$segment2.hide();
				$seg2label.hide();
			//	$currentBar.find('.segment_3').show();
			} else {
				data150 = thisData.grad_150_rate
				$segment2.show();
				$seg2label.show();
				//$currentBar.find('.segment_3').hide();
			}		
			if (currentCohort == "ipedsbach") {		
				$segment1.animate({'width' : data100 + '%'});
				$segment1.find('.value').text(data100+ '%');
				$segment2.animate({'width':(parseFloat(data150)-parseFloat(data100))+'%'});
				$seg2label.text(data150 + '%');
			} else {
				$segment2.animate({'width':data150+"%"});
				$seg2label.text(data150 + '%');
			}
		}
	}
	dataExpress.populateGradRates = function () {
		$('#gradrates_time_year2010').find('a').text('2010 Graduation rate');
		var currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender"));
		var currentCohort = grad.filters.get("gradrates", "source");
		var gradRateArray = instElements.gradrates[currentCohort]['y2010'][currentGender],
			gradRateArrayLength = gradRateArray.length;
		for (var i = 0; i < gradRateArrayLength; i++) {
			var thisData = gradRateArray[i];
			var $raceContainer = $('#gradrates_bar_' + thisData.race.toLowerCase()),
				$currentBar = $raceContainer.find('.current_bar'),
				$segment1 = $currentBar.find('.segment_1'),
				$segment2 = $currentBar.find('.segment_2'),
				$seg2label = $currentBar.find('.seg2val'),
				$barChartHeader = $('#stats_section_gradrates').find('.bar_chart_header');
				$raceContainer.find('.total').text(utilities.addCommas(thisData.grad_cohort));
			if (thisData.grad_100_rate == null || thisData.grad_100_rate == "0") {
				var data100 = "";
				$segment1.hide();
			} else {
				$segment1.show();
				data100 = thisData.grad_100_rate
			}
			if (thisData.grad_150_rate == null) {
				var data150 = "0";
				$segment2.hide();
				$seg2label.hide();
			} else {
				data150 = thisData.grad_150_rate
				$segment2.show();
				$seg2label.show();
			}	
			if (currentCohort == "ipedsbach") {		
				$segment1.animate({'width' : data100 + '%'});
				$segment1.find('.value').html(utilities.tooShort(data100,6,"%"));
				$segment2.animate({'width':(parseFloat(data150)-parseFloat(data100))+'%'});
				$seg2label.text(data150 + '%');
			} else {
				$segment1.hide();
				$segment2.animate({'width':data150+"%"});
				$seg2label.text(data150 + '%');
			}

			if (thisData.race === "X") {
				if (currentCohort == "ipedsbach") {		
					$barChartHeader.find('.segment_1').find('h2').text(data100+"%");
					$('#gradrate_label_four').animate({'width':data100+"%"});				
				} 
				$barChartHeader.find('.total').text(utilities.addCommas(thisData.grad_cohort));
				$barChartHeader.find('.segment_2').find('h2').text(data150+"%");	
			}
		}
	}
	dataExpress.processOvertimeGradrates = function () {
		var existingData = instElements.gradrates, // graduation rate data already pulled from data server
			lineChartData = getLineChartData(existingData),
			currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
			currentCohort = grad.filters.get("gradrates", "source");
		if (!grad.graphics.lineChart.chart) {
			grad.graphics.lineChart.init("historical_chart_ipeds", "historical", 746, 400, 9, 10);
		}
		checkHistoricalSet(lineChartData);
		function checkHistoricalSet(lineChartData) {
			$('.historical_chart').show();
			var currentRace = grad.filters.get('gradrates', 'race'),
				currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
				currentCohort = grad.filters.get("gradrates", "source");
			 if (dataValues.historicalCohort[currentCohort][currentGender][currentRace]) {
				$('#historical_error').show();
				$('.historical_chart').hide();
			} else {
				$('#historical_error').hide();
				grad.graphics.lineChart.drawLines(lineChartData);	
			}			
		}	
		function getLineChartData(data) {
		$('#gradrates_data_race').html("");
			var minYear = 2002,
				maxYear = 2010,
				currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
				currentCohort = grad.filters.get("gradrates", "source");
				dataValues.historicalCohort[currentCohort] = {};
				dataValues.historicalCohort[currentCohort][currentGender] = {};
				var theCohort = dataValues.historicalCohort[currentCohort][currentGender];
				formattedData = { }; // stores data to be returned
			for (key in mymap.raceOptions) {
				$('#gradrates_data_race').append(mymap.raceOptions[key]);
				if (key == grad.filters.get("gradrates","race")) {
					$('#gradrates_race_'+key).attr("selected","selected");
				}
			}
			for (var year = minYear; year <= maxYear; year++){ // cycle through each year
				var thisYearData = data[currentCohort]['y' + year][currentGender],
					thisYearDataLength = thisYearData.length;
					
				for (var i = 0; i < thisYearDataLength; i++){ // cycle through each slice of the data within each year
					var thisDataObject = thisYearData[i],
						race = thisDataObject.race.toLowerCase();
					if (parseFloat(thisDataObject.grad_cohort) <= dataValues.minLineCohort) {
						theCohort[race] = true;
						$('#gradrates_race_'+race).remove();
					};
					if (!formattedData[race]) {
						formattedData[race] = {
							'name': race, 
							'rate4': [ ],
							'size4': [ ],
							'rate6': [ ],
							'size6': [ ],
							'cohort': [ ]
						}
					}
					formattedData[race].rate4.push(parseFloat(thisDataObject.grad_100_rate));
					formattedData[race].size4.push(parseFloat(thisDataObject.grad_100));
					formattedData[race].rate6.push(parseFloat(thisDataObject.grad_150_rate));
					formattedData[race].size6.push(parseFloat(thisDataObject.grad_150));
					formattedData[race].cohort.push(parseFloat(thisDataObject.grad_cohort));
				}
			}
			return formattedData;
		}
	}
	////utilities///
	var utilities = new Object ();	
	utilities.numberCheck = function (theNumber,format) {
		if (parseFloat(theNumber) > 0) {
			var rNumber = parseFloat(theNumber);
			var fNumber =  new Number(parseFloat(theNumber));
			if (format == "number") {
				return rNumber;
			} else {
				return rNumber;
			}
		} else if (format == "number") {
			return 0;
		} else if (format == "") {
		return ""
		} else {
			return "N/A"
		}
	}
	utilities.tooShort = function(theNumber,limit,suffix) {
		if (parseFloat(theNumber) < limit && parseFloat(theNumber) > 0 ) {
			return "&nbsp;";
		} else if (theNumber == null || parseFloat(theNumber) == 0) {
			return "";
		} else {
			return theNumber+suffix;
		}
	}
	utilities.bachCheck = function (theNumber) {
		if (dataValues.noBach) {
			var rNumber = "N/A";
		} else {
			if (parseFloat(theNumber) > 0) {
				rNumber = theNumber+"%";
			} else if(theNumber == 0) {
				rNumber = "0%"		
			} else {
				rNumber = "N/A"
			}
		}	
		return rNumber;
	}
	utilities.percentileCheck = function (theNumber) {
		if (parseFloat(theNumber) > 0) {
			var rNumber = theNumber+"%";
		} else if(theNumber == 0) {
			rNumber = "0"		
		} else {
			rNumber = "N/A"
		} 
		return rNumber;
	}
	utilities.over100 = function (theNumber,theDiv,size) {
		if (theNumber > 100) {
			if (size == 18) {
				return ' trunc" style="width:100%"><div class="oversized" />'
			} else {
				$(theDiv).prepend("<div class='oversized' />");
				return 100;
			}
		} else {
			if (size == 18) {
				$(theDiv).remove('div.oversized');
				return '" style="width:'+theNumber+'%">';
			} else {
				$(theDiv).remove('div.oversized');
				return theNumber;
			}
		}
	}
	utilities.sortNumber = function (a,b,value) {
		var x = a.value;
		var y = b.value;
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	}
	utilities.sortNames = function (a,b) {
		var x=a.name.toLowerCase()
		var y=b.name.toLowerCase()
		if (x < y) {
			return -1
	 	} else if (x > y) {
	  		return 1
	  	} else {
			return 0 //default return value (no sorting)
		}
	}	
	utilities.addCommas = function (str) {
		var amount = new String(str);
		if (amount == "-1") {
			var output = "Not Available";
		} else {
			amount = amount.split("").reverse();		 
			output = "";
			for (i = 0; i <= amount.length-1; i++ ) {
				output = amount[i] + output;
				if ((i+1) % 3 === 0 && (amount.length-1) !== i) {
					output = ',' + output;
				}
			}
		}	
		return output;	
	}
	utilities.processURL = function (url) {
		var processedURL;
		if (url == null) {
			processedURL = "";
		} else if (url.indexOf("www") != -1) {
			processedURL = (url.slice(4)).toLowerCase();
		} else {
			processedURL = url.toLowerCase();
		}
		return processedURL
	}	
	utilities.printDiv = function (theDiv, theClass) {
		_gaq.push(['_trackEvent', 'inst_sectionprint', theDiv])
		if(window.print && typeof(window.print) == 'function'){
		$('.stats_section').addClass('noprint');
			$('#'+theDiv).removeClass('noprint').addClass('soloprint');
			window.print();
		 	$('.stats_section').removeClass('noprint').removeClass('soloprint');
		} else {
		//if (navigator.userAgent.indexOf("Chrome")!==-1 && navigator.userAgent.indexOf("Safari")!==-1 ) {
			if (theClass == undefined) {
				theClass = 'stats_section';
			}
	 		var foo = document.getElementById("print"),
			cssLink = document.createElement("link");
			cssLink.href = "/wp-content/themes/gates-Microsite/style.css"; 
			cssLink.rel = "stylesheet"; 
			cssLink.type = "text/css"; 
			var fontStyle = document.createElement('link');
			fontStyle.href = 'http://fonts.googleapis.com/css?family=Crete+Round';
			fontStyle.rel = 'stylesheet';
			fontStyle.type = 'text/css';
			var header = document.getElementById('institution_header').innerHTML;
			var siteHeader = document.getElementById('site_header_container').innerHTML;
         	foo.contentWindow.document.head.appendChild(cssLink);
      	  	foo.contentWindow.document.head.appendChild(fontStyle);
         	foo.contentWindow.document.body.innerHTML = '  <div id="wrap" class="container" role="document"><div id="site_header_container">'+siteHeader+'</div><div id="institution_header" class="stats_header printFrame">'+header+'</div><div id="content" class="span-24"><div id="main" class="span-14 append-1" role="main"><div id="stats_main"><div id="'+theDiv+'" class="'+theClass+' soloprint">'+document.getElementById(theDiv).innerHTML+'</div></div></div></div></div>';
          	foo.contentWindow.focus();
          	foo.contentWindow.print();
          	window.focus();
		} 
	}
	utilities.moneyString = function(nStr){
		var shortFigure;			
		if (Number(nStr) < 0 || nStr == null) {
			return "N/A";
		}
		// shorten $10 million and above
		if (nStr >= 1000000000) {
			shortFigure = "$" + (Math.round(nStr / 100000000) / 10) + "-billion";
			return shortFigure;
		} else if (nStr >= 10000000) { 
			shortFigure = "$" + (Math.round(nStr / 100000) / 10) + "-million";
			return shortFigure; 
		}
		nStr += '';
		var x = nStr.split('.'),
		x1 = x[0],
		x2 = x.length > 1 ? '.' + x[1] : '',
		rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return "$" + x1 + x2;
	}
	utilities.getControl = function (fullcontrol) {
		switch(fullcontrol) {
			case 'Public':
				return 'public';
				break;
			case 'Private not-for-profit':
				return 'private';
				break;
			case 'Private for-profit':
				return 'forprofit';
				break;
		}
	}
	utilities.getStateAbbreviation = function(fullState){
		switch(fullState) {
			case 'Alaska':
				return 'ak'; 
				break;
			case 'Alabama':
				return 'al'; 
				break;
			case 'Arkansas':
				return 'ar'; 
				break;
			case 'Arizona':
				return 'az'; 
				break;
			case 'California':
				return 'ca'; 
				break;
			case 'Colorado':
				return 'co'; 
				break;
			case 'Connecticut':
				return 'ct'; 
				break;
			case 'Delaware':
				return 'de'; 
				break;
			case 'District of Columbia':
				return 'dc'; 
				break;
			case 'Florida':
				return 'fl'; 
				break;
			case 'Georgia':
				return 'ga'; 
				break;
			case 'Hawaii':
				return 'hi'; 
				break;
			case 'Idaho':
				return 'id'; 
				break;
			case 'Iowa':
				return 'ia'; 
				break;
			case 'Indiana':
				return 'in'; 
				break;
			case 'Illinois':
				return 'il'; 
				break;
			case 'Kansas':
				return 'ks'; 
				break;
			case 'Kentucky':
				return 'ky'; 
				break;
			case 'Louisiana':
				return 'la'; 
				break;
			case 'Massachusetts':
				return 'ma'; 
				break;
			case 'Maryland':
				return 'md'; 
				break;
			case 'Maine':
				return 'me'; 
				break;
			case 'Michigan':
				return 'mi'; 
				break;
			case 'Minnesota':
				return 'mn'; 
				break;
			case 'Mississippi':
				return 'ms'; 
				break;
			case 'Missouri':
				return 'mo'; 
				break;
			case 'Montana':
				return 'mt'; 
				break;
			case 'North Carolina':
				return 'nc'; 
				break;
			case 'North Dakota':
				return 'nd'; 
				break;
			case 'Nebraska':
				return 'ne'; 
				break;
			case 'New Hampshire':
				return 'nh'; 
				break;
			case 'New Jersey':
				return 'nj'; 
				break;
			case 'New Mexico':
				return 'nm'; 
				break;
			case 'Nevada':
				return 'nv'; 
				break;
			case 'New York':
				return 'ny'; 
				break;
			case 'Ohio':
				return 'oh'; 
				break;
			case 'Oklahoma':
				return 'ok'; 
				break;
			case 'Oregon':
				return 'or'; 
				break;
			case 'Pennsylvania':
				return 'pa'; 
				break;
			case 'Rhode Island':
				return 'ri'; 
				break;
			case 'South Carolina':
				return 'sc'; 
				break;
			case 'South Dakota':
				return 'sd'; 
				break;
			case 'Tennessee':
				return 'tn'; 
				break;
			case 'Texas':
				return 'tx'; 
				break;
			case 'Utah':
				return 'ut'; 
				break;
			case 'Virginia':
				return 'va'; 
				break;
			case 'Vermont':
				return 'vt'; 
				break;
			case 'Washington':
				return 'wa'; 
				break;
			case 'Wisconsin':
				return 'wi'; 
				break;
			case 'West Virginia':
				return 'wv'; 
				break;
			case 'Wyoming':
				return 'wy'; 
				break;
			default:
				return 'nostate';
				break;
		}
	}
});
