$(document).ready(function(){
	$('#help_datatype').hide();
	$('#sector_error').hide();
	$('#stats_count_container').unbind('click').click(function(e) {
		e.preventDefault();
		grad.menu.scrollTo('performers');
	});
	var grad = {
		url: {
			defaultParams: {
				state: "ny", // default state if none if specified in URL. two-letter abbreviation. U.S. is 'us'
				sector: "public_four" // default sector. possible values: private_four, public_four, public_two, forprofit_four, forprofit_two 
			}, 
			currentParams: { // values for current state-sector 
				state: "", 
				sector: ""
			},
			hasHashHandler: false,
			read: function(){ // url routing
				if (!grad.url.hasHashHandler) { // don't set this more than once
					grad.url.hasHashHandler = true;
				    $(window).bind('hashchange', function(e){
						var url = $.param.fragment(),
							params = e.getState(),
							$wrap = $('#wrap'),
							initializePage = function(){
							_gaq.push(['_trackEvent', 'ss_initialize', grad.url.currentParams.state ]);
								dataValues = new dynamicValues();
								instElements = new dataElements();
								$wrap.addClass('loading'); // give page global loading class
								$('.stats_section').addClass('loading');	
								grad.filters.init(); // reset filters to default positions	
								dataValues.dlCounter = 0; // reset data calls counter			
								getStateData();
								grad.url.links.hide();
							}
						
						if (params.state && params.sector) {
							if ((params.state === grad.url.currentParams.state) && (params.sector === grad.url.currentParams.sector)) {
								return false;
							} else {
								if (params.state === grad.url.currentParams.state) {
									$wrap.addClass('loading_samestate');
								}
								if (grad.url.currentParams.state === "") {
									$wrap.addClass('loading_first')
								}
								
								grad.url.currentParams = params;
								initializePage();
							}
						} else { 
							params.sector = params.sector || grad.url.currentParams.sector || grad.url.defaultParams.sector;
							params.state = params.state || grad.url.currentParams.state || grad.url.defaultParams.state;
							
							$.bbq.pushState("#state=" + params.state + "&sector=" + params.sector, 2);
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
						filters = $section.data() || { }, // returns object with any filter state information
						fullUrlFragment = "",
						fullUrl = "",
						shortUrl,
						fillInLink = function(returnedUrl) {
							var $urlField = $overlay.find('input');
							$urlField.val(returnedUrl).select().unbind('focus').focus(function(){
								$(this).select();
							}).unbind('mouseup').mouseup(function(e){
								e.preventDefault();
							});
						}
					
					filters.section = sectionId;

					fullUrlFragment = jQuery.param.fragment("#state=" + grad.url.currentParams.state+"&sector="+grad.url.currentParams.sector, filters); // better way of accomplishing this?
					fullUrl = window.location.protocol+"//"+window.location.hostname+"/state/" + fullUrlFragment;
				
					shortenUrl(fullUrl, function(responseUrl){
						fillInLink(responseUrl);
					}, "state: "+grad.url.util.getDataCallParams(), function(response){
						fillInLink(fullUrl);
					});	
				}
			},
			util: {
				getDataCallParams: function(){
					var params = [ ],
						sectorParams = grad.url.currentParams.sector.split('_'),
						controlKey = sectorParams[0].toLowerCase(),
						levelKey = sectorParams[1].toLowerCase(),
						state = grad.url.currentParams.state,
						control,
						level;
						
					switch (controlKey) {
						case 'public':
							control = 'Public';
							break;
						case 'private':
							control = 'Private not-for-profit';
							break;
						case 'forprofit':
							control = 'Private for-profit';
							break;
					}
					
					switch (levelKey) {
						case 'two':
							level = '2-year';
							break;
						case 'four':
							level = '4-year';
							break;
					}
					
					if (state && control && level) {
						params.push(state, control, level);
						return params;
					} else {
						return 'Error: Could not process sector parameter';
					}
				}, 
				displayControl: function(longSector){
					switch(longSector) {
						case 'Private not-for-profit':
							return 'private';
							break;
						case 'Private for-profit':
							return 'for-profit';
							break;	
						case 'Public':
							return 'public';
							break;
						default: 
							return 'Unknown sector';
							break;
					}
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
					_gaq.push(['_trackEvent', 'ss_leftnav', value]);	
					grad.menu.scrollTo(value);
					e.preventDefault();
				});
			},
			scrollTo: function(id){
				if (id == "content") {
					$('html, body').animate({scrollTop: $("#"+ id).offset().top}, 500);
				} else {
					$('html, body').animate({scrollTop: $("#section_" + id).offset().top -79}, 500, function (){
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
					$header = $('#state_header'),
					$container = $('#wrap'),
					$menuOptions = $menu.find('#stats_menu').find('a'),
					$sections = $('#stats_main').find('.stats_section'),
					bottomOffset = 400;
				
				$menuOptions.each(function(i){
					var $this = $(this);
					
					if (scrollY >= $sections.eq(i).offset().top - 115) {
						if (!($this.hasClass('active'))) {
							$menuOptions.removeClass('active');
							$this.addClass('active');
						}
					}
				});
				
				if (scrollY + bottomOffset > maxScrollY) {
					$container.removeClass('floating').addClass('overscrolled');
					$header.css({'top': maxScrollY - bottomOffset + 'px'});
					$menu.css({'top': maxScrollY - bottomOffset - 221 + 'px'});
				} else if (delta > -95) {
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
							$('#gradrate_historical_source').text("four years");	
						} else {
							 // avoid floating-point math errors		
						 //	if (currentCohort = "ipedsother") {
						 	//	$('#gradrate_historical_source').text("150% of time");
						 //	} else {
						 		$('#gradrate_historical_source').text("150% time");
						 //	}
						}
						value = currentRaceData.rate6[currentRaceData.rate6.length - 1],
						change = (Math.round((value * 10) - (currentRaceData.rate6[0] * 10)) / 10).toPrecision(2);
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
								//console.log('no ypos', lineData);
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
							//return false;
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
			sectorOptions: {
				init: function(){
					$('#sector_tabs').find('li').unbind('click').click(this.clickHandler);
					//$('#state_selector').unbind('change').change(this.changeHandler); // not in use
					$('#stats_sector_menu').find('a').unbind('click').click(this.menuHandler);
					
					$('#stats_sector_menu_container').unbind('hover').hover(function(e){
						var $menu = $('#stats_sector_menu');
						
						$menu.show();//slideDown(100);
					}, function(e){
						$('#stats_sector_menu').hide();//slideUp(100);
					});
					
					if (Modernizr.touch) {
						$('#link_close').css('display', 'inline-block');
					}
				}, 
				clickHandler: function(e){
					var $this = $(this),
						id = this.id;
						
					if ($this.hasClass('active')) {
						return false;
					} 

					$this.parent().find('li').removeClass('active');
					$this.addClass('active');
					$.bbq.pushState("#state=" + grad.url.currentParams.state + "&sector=" + this.id.substr(4), 2); // change dataset by modifying url, see grad.url.read
					e.preventDefault();
				},
				changeHandler: function(){
					var $selectedOption = $(this).find('option:selected'),
						stateId = $selectedOption.attr('id').substr(4);
						
					$.bbq.pushState("#state=" + stateId + "&sector=" + grad.url.currentParams.sector, 2);
				},
				menuHandler: function(e){
					e.preventDefault();
					
					var stateId = this.id.substr(5);
					
					if (stateId === 'close') {
						$('#stats_sector_menu').hide();
						return false;
					}
					
					$('#stats_sector_menu').slideUp(200);
					//grad.menu.scrollTo('content');
					$.bbq.pushState("#state=" + stateId + "&sector=" + grad.url.currentParams.sector, 2);
				}
			},
			getData: {
				init: function(){
					var $export = $('#export_list');
					
					this.createDataLink('gradrates');
					this.createDataLink('general');
					this.createDataLink('colleges');
					this.createDataLink('states');
					this.createDataLink('sector');
					$('#data').removeClass('loading');
					$export.find('#export_expander').unbind('click').click(this.clickHandler);
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
							fullLink = mymap.transport+'/q/bo/public/name/gatesSS2/find/state_abbr:'+instElements.general.state_abbr+':eq/format/csv/filename/gradrates_'+instElements.general.state_abbr+'.csv';
							break;
						case 'general':
							fullLink = mymap.transport+'/q/bo/public/name/gatesSS1/find/state_abbr:'+instElements.general.state_abbr+':eq/format/csv/filename/generaldata_'+instElements.general.state_abbr+'.csv';
							break;
						case 'sector':
							fullLink = mymap.transport+'/q/bo/public/name/gatesSS2/find/stateid:00:eq|level:'+instElements.general.level+':eq|control:'+instElements.general.control+':eq|year:2010:eq/format/csv/filename/US_gradrates_'+instElements.general.level+'_'+instElements.general.control+'.csv';
							break;
						case 'colleges':
							fullLink = mymap.transport+'/q/bo/public/name/gatesInst1/find/state:'+instElements.general.state+':eq|level:'+instElements.general.level+':eq|control:'+instElements.general.control+':eq/format/csv/filename/colleges_'+instElements.general.state+"_"+instElements.general.level+'_'+instElements.general.control+'.csv';
							break;	
						default: 
							fullLink = 'http://graduation.chronicle.com/404';
							break;
					}
					
					this.shortenAndPopulate(fullLink, linkId);
				},
				shortenAndPopulate: function(fullLink, linkId) {
					// shortenUrl(fullLink, function(shortLink){
						var $link = $('#export_list').find('#export_' + linkId);
						$link.removeClass('disabled').attr('href', fullLink);
					// }, "state: "+grad.url.util.getDataCallParams());
				}
			}
		},
		filters: {			// 
					// cohort: "4y bach",
					// gradrateGender: "b",
					// gradrateType: "gradrate_overtime",
					// currentCompare: "statesector",
					// compareAttr: "gradrates",
			change: function(id){
				var params = id.split('_'),
					sectionId = params[0],
					filterName = params[1],
					filterState = params[2],
					$section = $('#' + sectionId);
				$section.data(filterName, filterState);
				_gaq.push(['_trackEvent', 'statechange', sectionId, filterName, filterState]);
				if (filterName == "source") {
					dataExpress.changeCohort(filterState);
					}
				if (sectionId === "states") {
				$('#states').addClass('loading');
				getStateBarsData();
				}	
				if (sectionId === "gradrates") {
					if (dataValues.setupCohorts) {
						dataValues.setupCohorts = false;
					} else {
						dataExpress.updateGradRates();
					}
					
					if (filterState === "historical") {
						$section.addClass("historical").removeClass("one_year");
					} else if (filterState === "year2010") {
						$section.removeClass("historical").addClass("one_year");
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
			
				activateFilters(grad.filters.getList(suppliedParams.section));
				
				function activateFilters(potentialParams) {
					// check each of the potential parameters for a valid value
					for (var i = 0; i < potentialParams.length; i++) {
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
	grad.graphics.sectorOptions.init();
	grad.graphics.selects.init();
	grad.url.links.init();
	grad.filters.init();
	
	///data express-data display functions //
	dataExpress = new Object ();
	
	// Data-getting functions
	
	function getStateData() { // General state data call (gatesSS1)
		var urlParams = grad.url.util.getDataCallParams(),
			state = urlParams[0],
			control = urlParams[1],
			level = urlParams[2];
			
		mymap.getData({
			name: 'stateGeneralData',
			table: 'gatesSS1',
			url: "find/state_abbr:" + state + ":eq|level:" + level + ":eq|control:" + control + ":eq",
			success: processStateGeneralData
		});
	}
	
	function getStateBarsData() { // General state data call (gatesSS1)
		var urlParams = grad.url.util.getDataCallParams(),
			state = urlParams[0],
			control = urlParams[1],
			level = urlParams[2],
			urlString,
			dlTable,
			find,
			fields,
			order,
			cohort;
			
			dataValues.statesSort = grad.filters.get('states','compare');
			
		if (dataValues.statesSort == "gradrates") {
			
			if (level === "4-year") {
				cohort = "*bach:like"
			} else {
				cohort = "2y*:like"
			}
			
			dlTable = 'gatesSS2';
			fields = "|grad_150_rate|grad_100_rate";
			find = "|year:2010:eq|gender:B:eq|race:X:eq|cohort:"+cohort;
			order = "grad_150_rate";
		} else {
			dlTable = 'gatesSS1',
			find = "|"+dataValues.statesAttr[dataValues.statesSort]+":0:gt",
			fields = "|"+dataValues.statesAttr[dataValues.statesSort],
			order = dataValues.statesAttr[dataValues.statesSort];
		}		
			
		var dataUrl = mymap.transport+"/q/bo/public/fields/state_abbr|state"+fields+"/order/"+order+":dsc/find/stateid:00:neq"+find+"|level:" + level + ":eq|control:" + control + ":eq/name/" + dlTable +"/format/csv/filename/statescompare_"+dataValues.statesSort +".csv";
			grad.graphics.getData.shortenAndPopulate(dataUrl, 'states');
		
		mymap.getData({
			name: 'stateBarsData',
			table: dlTable,
			url: "fields/state_abbr|state" + fields + "/order/" + order + ":dsc/find/stateid:00:neq" + find + "|level:" + level + ":eq|control:" + control + ":eq",
			success: processStateBarsData
		});
	}
	
	function getSectorRates() {
		var control = dataValues.control,
			level = dataValues.level,
			gender = grad.filters.get("gradrates", "gender");

		mymap.getData({
			name: 'sectorRates',
			table: 'gatesSS2',
			url: "find/stateid:00:eq|level:" + level + ":eq|control:" + control + ":eq|year:2010:eq/fields/cohort|gender|race|grad_100_rate|grad_150_rate",
			success: pushSectorRates
		});
	}
	
	function getGradrateData() {
		var urlParams = grad.url.util.getDataCallParams(),
			state = urlParams[0],
			control = urlParams[1],
			level = urlParams[2];
			if (level === "4-year") {
				var cohortFilter = "|cohort:*bach:like";
			} else {
				cohortFilter = "";
			}
		mymap.getData({
			name: 'stateGradrateData',
			table: 'gatesSS2',
			url: "find/state_abbr:" + state + ":eq|level:" + level + ":eq|control:" + control + ":eq"+cohortFilter+"/order/year:asc/",
			success: processGradRates,
			noResults: processGRError
			//error: processGRError
		});
	}
	
	function processStateGeneralData(jsonP) {
		instElements.general = jsonP[0];
		dataValues.dlCounter += 1; // do not delete, this is used to make sure the url is read at the right time
		dataExpress.populateGeneral();
	}
	function processGRError() {
	$('#wrap').removeClass('loading loading_first loading_samestate');
	var d = instElements.general,
			dataUtil = grad.url.util,
			$sectorTabs = $('#sector_tabs');
		
		// title + state
		$('#gradrates').hide();
		$('#gradrates_error').show();
		if (d.level == "4-year") {
			$('#four_error').show();
		} else {
			$('#four_error').hide();
		}
	}
	function processSectorError() {
			var d = instElements.general,
				dataUtil = grad.url.util,
				$sectorTabs = $('#sector_tabs');
		$('#wrap').removeClass('loading loading_first loading_samestate');
		// title + state
			$('.stats_section').hide();
			$('#sector_error').show();
	}
	function processStateBarsData(jsonP) {
		instElements.stateBars = jsonP;
		dataExpress.buildStateBars();
	}
	function pushSectorRates(json) {		
		// flush gradrates data (TK: Write function to flush all data and reset display elements)
		instElements.sectorRates = [ ];
		var gradData = instElements.sectorRates;
		
		for (var i = 0; i < json.length; i++) {
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
		
		if (grad.url.currentParams.section && dataValues.dlCounter >= 2) { // if url params exist and all data has been downloaded
			grad.filters.loadSaved(grad.url.currentParams);
		}
	}	
	function processGradRates(gradRates) {		
		// flush gradrates data (TK: Write function to flush all data and reset display elements)
		instElements.gradrates = [ ];
		var gradData = instElements.gradrates;
		for (var i = 0; i < gradRates.length; i++) {
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
		getSectorRates();
		
		// do not delete, this is used to ensure the url is read at the right time.
		dataValues.dlCounter += 1;
	}
	/////top performer///
	function processTopPerformers(jsonP) {
		instElements.customgroup = jsonP
		dataExpress.getCustomRange();
		dataExpress.buildCustomTable();
	}
	function getcomparedata() {
		mymap.getData({
			name: 'compareDataTopPerformers',
			table: 'gatesCompare1',
			url: "find/state:"+instElements.general.state+":eq|level:"+instElements.general.level+":eq|control:"+instElements.general.control+":eq/fields/pell_value|chronname|aid_value|grad_100_value|grad_150_value|unitid|exp_award_value|awards_per_value/order/grad_150_value:dsc",
			success: processTopPerformers
		});
	}
	
	///data values///
	function dynamicValues  () {
		this.tpAttr = ["none","chronname","grad_150_value","grad_100_value","awards_per_value","exp_award_value","aid_value", "pell_value"];
		this.customRange = [];
		this.isPrinting = false;
		this.setupCohorts = true;
		this.customSort = 2;
		this.customRangeCount = 5;
		this.offset = 0;
		this.tpSort = 2;
		this.sbAttr = "grad_150_rate";
		this.tpOrder = 'dsc';
		this.dlCounter = 0;
		this.minLineCohort = 20;
		this.generalExists = false;
		this.similarIDs = [];
		this.statesSort = "gradrates";
		this.compareCat = "state";
		this.statesAttr = {
			gradrates:"grad_150_rate",
			aid:'state_appr_value',
			awards: 'awards_per_state_value',
			spending: 'exp_award_state_value'
		}
		this.statesLabels = {
			gradrates:"grad_150_rate",
			aid:'state_appr_value',
			awards: 'awards_per_state_value',
			spending: 'exp_award_state_value'
		}
		this.state = "";
		this.level = "";
		this.control = "";
		this.carnegie = "";
		this.hbcu = "";
		this.flagship = "";
		this.historicalCohort = {};
		this.medianExpend = {
			fouryear: 0.0005,
			twoyear: 0.001
		};
	}
	///data elements///
	function dataElements () {
		this.gradrates = [];
		this.compare = [];
		this.general = "";
		this.sector = [];
		this.customgroup = [];
		this.stateBars = [];
	}
	dataExpress.populateGeneral = function () {
		var d = instElements.general,
			dataUtil = grad.url.util,
			$sectorTabs = $('#sector_tabs');
		// title + state
		$('#stats_sector_name').html(d.state + ' ');
		$('#stats_sector_control').html(dataUtil.displayControl(d.control) + ' colleges (' + d.level + ')');
		$('#opt_' + d.state_abbr.toLowerCase()).attr('selected', 'selected');
		$('#stats_header_state').removeClass().addClass(grad.url.currentParams.state.toLowerCase());
		$('.state_name').html(d.state);
		var shortenedURL = 'http://collegecompletion.chronicle.com/state/%23state='+grad.url.currentParams.state+'&sector='+grad.url.currentParams.sector,
			$statsHeaderMain = $('#stats_header_main');

		$statsHeaderMain.find('.twitter').attr('href', 'http://twitter.com/?status=How do %23collegecompletion rates for '+d.state+' '+d.level+' '+dataUtil.displayControl(d.control)+' colleges stack up against the nation? '+shortenedURL);
			
		// shortenUrl(shortenedURL, function(shortLink){
		// 		dataValues.bitly = shortLink;
		// 		$('#stats_header_main').find('.twitter').attr('href','http://twitter.com/?status=How do %23collegecompletion rates for '+d.state+' '+d.level+' '+dataUtil.displayControl(d.control)+'s stack up against the rest of the nation? '+dataValues.bitly);
		// });
		$statsHeaderMain.find('.facebook').attr('href','http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURI('College Completion: '+d.state+' '+d.level+' '+d.control+'s') +'&p[summary]=' + escape('View graduation rate details for '+d.state+' '+d.level+' '+d.control+'s to see how the individual colleges stack up, and how the state compares to the rest of the nation at College Completion from the Chronicle.')+'&p[url]=' + encodeURI(shortenedURL)+'&p[images][0]=http://collegecompletion.chronicle.com/wp-content/themes/gates-Microsite/imgassets/link_thumb.jpg');
		$statsHeaderMain.find('.linkedin').attr('href','http://www.linkedin.com/shareArticle?mini=true&url=' + escape(shortenedURL)+'&title='+escape('College Completion: '+d.state+' '+d.level+' '+d.control) +'&summary=' + escape('View graduation details for '+d.state+' '+d.level+' '+d.control+'s  to see how the individual colleges stack up, and how the state compares to the rest of the nation at College Completion from the Chronicle.')+'&source=chronicle.com')
	$('.sector_name').html(d.level+" "+dataUtil.displayControl(d.control));
		// tabs

		// header attributes
		$('.state_name').text(d.state);
		$('.state_sector').text((d.level +" "+d.control).toLowerCase());
		$('.sector').text(d.level +" "+d.control.toLowerCase());
				$sectorTabs.find('li').removeClass('active');
		$sectorTabs.find('#btn_' + grad.url.currentParams.sector).addClass('active');
				if (d.schools_count != "1") {
			$('#stats_count').html(d.schools_count + ' colleges');
			$('.menu_count').text(d.schools_count);
		} else {
			$('#stats_count').html(d.schools_count + ' college');
			$('.menu_count').text(d.schools_count);
		}
		if (instElements.general.schools_count  === "0") {
			processSectorError();
		} else {
			grad.graphics.getData.init();
			$('.stats_section').show();
			$('#about_datatype').unbind('hover click').hover(function() {
					$('#help_datatype').show();
				}, function () {
					$('#help_datatype').hide();
			}).click(function(e){
				e.preventDefault();
			});
			///level labeling///
			if (d.level == "4-year") {
				grad.filters.change("gradrates_source_ipedsbach");
				$('#gradrates_singlesource').html(mymap.ssOptions.ipedsbach);
				$('#gradrate_label_six').find('.value_label').html('graduated in <br /> <span class="cohort_complete">six years</span>');
				
				$('#gradrate_label_six').find('.cohort_complete').text("six years");
				$('#performers').find('thead').find('td.col_2').html("Grad. rate<br>(6 year)");
				$('#performers').find('thead').find('td.col_3').html("Grad. rate<br>(4 year)");
				$('.level_class').text("2004");
				var theLevel = "fouryear";
			} else {
				grad.filters.change("gradrates_source_ipedstwoyear");
				$('#gradrate_label_six').find('.value_label').html('of all <span class="total"></span> counted students graduated in  <span class="cohort_complete">150% time</span>');
				$('#gradrates_singlesource').html(mymap.ssOptions.ipedstwoyear);
				$('#gradrate_label_six').find('.cohort_complete').text("150% time");
				$('#performers').find('thead').find('td.col_2').html("Grad. rate<br>150% time");
				$('#performers').find('thead').find('td.col_3').html("Grad. rate<br>100% time");
				$('.level_class').text("2007");
				theLevel = "twoyear";
			}
			//efficiency//
			$('#efficiency').removeClass('loading');
			$('#efficiency_awards').find('h2.efficiency_awards_inst_value').text(instElements.general.awards_per_state_value);
			$('#efficiency_awards_inst_value').text(instElements.general.awards_per_state_value);
			$('#efficiency_awards_sector_value').text(instElements.general.awards_per_natl_value);
			$('#efficiency_awards_inst_container').animate({'width': utilities.over100(parseFloat(instElements.general.awards_per_state_value)*2.5, '#efficiency_awards_inst_container')+"%"});
			$('#efficiency_awards_sector_container ').animate({'width': (parseFloat(instElements.general.awards_per_natl_value)*2.5)+"%"});
			$('#efficiency_spending').find('h2.efficiency_spending_inst_value').text(utilities.moneyString(instElements.general.exp_award_state_value));
			$('#efficiency_spending_inst_value').text(utilities.moneyString(instElements.general.exp_award_state_value));
			$('#efficiency_spending_sector_value').text(utilities.moneyString(instElements.general.exp_award_natl_value));
			$('#efficiency_spending_inst_container').animate({'width': (utilities.over100(parseFloat(instElements.general.exp_award_state_value)*dataValues.medianExpend[theLevel], '#efficiency_spending_inst_container'))+"%"});
			$('#efficiency_spending_sector_container ').animate({'width': (parseFloat(instElements.general.exp_award_natl_value)*dataValues.medianExpend[theLevel])+"%"});
			$('#efficiency').find('.data').attr('href',mymap.transport+'/q/bo/public/name/gatesSS1/find/state_abbrev:'+d.state_abbrev+':eq/fields/chronname|awards_per_value|awards_per_state_value|awards_per_natl_value|exp_award_value|exp_award_state_value|exp_award_natl_value/format/csv/');
			$('#wrap').removeClass('loading loading_first loading_samestate');
			var countedSource = d.counted_pct;
			if (countedSource != null) {
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
		
			$('#sector_error').hide();
			//print buttons//
			$('#gradrates').find('.print').unbind('click').click(function(e) {
				var theClasses = $('#gradrates').attr("class");
				e.preventDefault();
				utilities.printDiv('gradrates', theClasses);
			});
			$('#efficiency').find('.print').unbind('click').click(function(e) {
				e.preventDefault();
				utilities.printDiv('efficiency');
			});
			$('#states').find('.print').unbind('click').click(function(e) {
				e.preventDefault();
				utilities.printDiv('states');
			});
			$('#performers').find('.print').unbind('click').click(function(e) {
				e.preventDefault();
				utilities.printDiv('performers');
			});
			getGradrateData();
			$('.compare_label').text("U.S. average, "+d.level+" "+d.control.toLowerCase()+"s");
			//get sector///
			dataValues.level = d.level;
			dataValues.control = d.control;
			//load custom searchbar & setup header//
			getcomparedata();
			dataExpress.customheaderSetup();
			//state bars!//
			getStateBarsData();
		}
	}	
	dataExpress.swClasses = function (thePercentile) {
		var theClass;
		for (i=9;i<=0;i--) {
			if (thePercentile >= i*10) {
				theClass = i;
				break;
			}
		}
		return "sw_circle_"+i;
	}
	dataExpress.changeCohort = function(theCohort) {
		$('#stats_section_gradrates').removeClass('ipedsbach');
		$('#stats_section_gradrates').removeClass('ipedsother');
		$('#stats_section_gradrates').removeClass('ipedstwoyear');
		$('#stats_section_gradrates').addClass(theCohort);
	}
	dataExpress.updateGradRates = function() {
	$('#gradrates').removeClass('loading');
			$('#historical_error').hide();
		if (grad.filters.get("gradrates","time") == "year2010") {
				dataExpress.populateGradRates();
				dataExpress.processSectorBars();
		} else {
			dataExpress.processOvertimeGradrates();
		}
	
	}
	dataExpress.processSectorBars = function () {
		var currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
			currentCohort = grad.filters.get("gradrates", "source"),
			gradRateArray = instElements.sectorRates[currentCohort]['y2010'][currentGender];	
		
		for (var i = 0; i < gradRateArray.length; i++) {
			var thisData = gradRateArray[i];
			var $raceContainer = $('#gradrates_bar_' + thisData.race.toLowerCase()),
				$currentBar = $raceContainer.find('.compare_bar_1'),
				$segment1 = $currentBar.find('.segment_1'),
				$segment2 = $currentBar.find('.segment_2');
			if (thisData.grad_100_rate == null) {
				var data100 = "0";
				$segment1.hide();
			} else {
				$segment1.show();
				data100 = thisData.grad_100_rate
			}
			if (thisData.grad_150_rate == null) {
				var data150 = "0";
				$segment2.hide();
			//	$currentBar.find('.segment_3').show();
			} else {
				data150 = thisData.grad_150_rate
				$segment2.show();
				//$currentBar.find('.segment_3').hide();
			}		
			if (currentCohort == "ipedsbach") {		
				$segment1.animate({'width' : data100 + '%'});
				$segment1.find('.value').text(data100+ '%');
				$segment2.animate({'width':(parseFloat(data150)-parseFloat(data100))+'%'});
				$segment2.find('.value').text(data150 + '%');
			} else {
			$segment1.hide();
				$segment2.animate({'width':data150+"%"});
				$segment2.find('.value').text(data150 + '%');
			}
		}
	}
	dataExpress.populateGradRates = function () {
		var currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
			currentCohort = grad.filters.get("gradrates", "source"),
			gradRateArray = instElements.gradrates[currentCohort]['y2010'][currentGender];	
		for (var i = 0; i < gradRateArray.length; i++) {
			var thisData = gradRateArray[i];
			var $raceContainer = $('#gradrates_bar_' + thisData.race.toLowerCase()),
				$currentBar = $raceContainer.find('.current_bar'),
				$segment1 = $currentBar.find('.segment_1'),
				$segment2 = $currentBar.find('.segment_2'),
				$barChartHeader = $('#stats_section_gradrates').find('.bar_chart_header');
				$raceContainer.find('.total').text(' ' + utilities.addCommas(thisData.grad_cohort));
			if (thisData.grad_100_rate == null || thisData.grad_100_rate == "0") {
				var data100 = "0";
				$segment1.hide();
			} else {
				$segment1.show();
				data100 = thisData.grad_100_rate
			}
			if (thisData.grad_150_rate == null|| thisData.grad_150_rate == "0") {
				var data150 = "0";
				$segment2.hide();
			} else {
				data150 = thisData.grad_150_rate
				$segment2.show();
			}	
			if (currentCohort == "ipedsbach") {				
				$segment1.animate({'width' : thisData.grad_100_rate + '%'});
				$segment1.find('.value').html(utilities.tooShort(thisData.grad_100_rate,6,"%"));
				$segment2.animate({'width':(parseFloat(thisData.grad_150_rate)-parseFloat(thisData.grad_100_rate))+'%'});
				$segment2.find('.value').text(thisData.grad_150_rate + '%');
			} else {
				$segment1.hide();
				$segment2.animate({'width':parseFloat(thisData.grad_150_rate)+"%"});
				$segment2.find('.value').text(thisData.grad_150_rate + '%');
			}
			if (thisData.race === "X") {
				if (currentCohort == "ipedsbach") {		
					$barChartHeader.find('.segment_1').find('h2').text(thisData.grad_100_rate+"%");
					$('#gradrate_label_four').animate({'width':thisData.grad_100_rate+"%"});				
				} 
				$barChartHeader.find('.total').text(utilities.addCommas(thisData.grad_cohort) + ' ')
				$barChartHeader.find('.segment_2').find('h2').text(thisData.grad_150_rate+"%");	
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
				var minYear = 2002,
					maxYear = 2010,
					currentGender = grad.dataUtilities.getGenderString(grad.filters.get("gradrates", "gender")),
					currentCohort = grad.filters.get("gradrates", "source"),
					formattedData = { }; // stores data to be returned
					dataValues.historicalCohort[currentCohort] = {};
					dataValues.historicalCohort[currentCohort][currentGender] = {};
					var theCohort = dataValues.historicalCohort[currentCohort][currentGender];
				
				for (var year = minYear; year <= maxYear; year++){ // cycle through each year
					var thisYearData = data[currentCohort]['y' + year][currentGender];

					for (var i = 0; i < thisYearData.length; i++){ // cycle through each slice of the data within each year
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
////state bar chart///

	dataExpress.buildStateBars = function (){
		var urlParams = grad.url.util.getDataCallParams(),
			$chart = $('#bar_chart_viewport'),
			chartHeight = 400,
			totalChartWidth = '100%',
			barData = instElements.stateBars,
			level = urlParams[2],
			control = urlParams[1];
			level_6 = "150%&nbsp;time",
			level_4 = "100%&nbsp;time";
		$chart.html('');
		if (level == "4-year") {
			level_6 ="six&nbsp;years";
			level_4 ="four&nbsp;years";
		}
		$('#states_compare_aid').remove();
		if (control == "Public") {
		$('#states_data_compare').append('<option  id="states_compare_aid">state support, 2011</option>');
		} 
		if (dataValues.statesSort == "aid") {
			var scale = 0.145;
		} else if (dataValues.statesSort == "awards") {
			scale = 2.5;
		} else if (dataValues.statesSort == "spending") {
			if (urlParams[2] == "4-year") {
				scale = dataValues.medianExpend.fouryear;
			} else {
				scale = dataValues.medianExpend.twoyear;
			}
		} else {
			scale = 1;
		}	
		$('#states').removeClass('loading');
		for (i = 0; i < barData.length; i++) {  //barData.length
			createBar(barData[i],i);
		}
		var $profiledBar = $('#e' + urlParams[0].toUpperCase());
		$profiledBar.addClass('profiled active');
		setBarHandlers();
		$('#states').removeClass('loading');
	
		function createBar(thisBar,position){
			var barId = "e" + thisBar.state_abbr,
				heightPct = 99-(scale*(parseFloat(thisBar[dataValues.statesAttr[dataValues.statesSort]]))).toFixed(1),
				barHeight = (scale*(parseFloat(thisBar[dataValues.statesAttr[dataValues.statesSort]]))).toFixed(1),
				$bar = $('<div class="bar ' + thisBar.state_abbr.toLowerCase() + '" id="' + barId + '" />'),
				$barActive = $('<div class="magnitude" style="height: ' + barHeight + '%;" />');
			var overlayTop = heightPct;//(100 - heightPct);
			if (overlayTop < 15) {
				overlayTop = 15;
			} 
			if (position > 37) {
				var $overlay = $('<div class="overlay_right" />');
				overlayTop = overlayTop*0.8;
				if (overlayTop > 45) {
					overlayTop = 45;
				}
			} else {
				var $overlay = $('<div class="overlay" />');
			}
			if (dataValues.statesAttr[dataValues.statesSort] == "grad_150_rate") {
				$barActive = $('<div class="magnitude" style="bottom: '+thisBar.grad_100_rate+'%; height: ' + (parseFloat(thisBar.grad_150_rate)-parseFloat(thisBar.grad_100_rate)) + '%;" /><div class="magnitude segment_2" style="height: '+thisBar.grad_100_rate+'%" />');
				var $overlayContent = $('<h4 class="state"><span class="icon"></span>' + thisBar.state + '</h4><h4 class="six_year"><span class="number">' + thisBar.grad_150_rate + '%</span>&nbsp;graduate&nbsp;in&nbsp;'+level_6+'</h4><h4 class="four_year"><span class="number">' + thisBar.grad_100_rate + '%</span>&nbsp;graduate&nbsp;in&nbsp;'+level_4+'</h4>');
			} else if (dataValues.statesAttr[dataValues.statesSort] == "awards_per_state_value") {
				var $overlayContent = $('<h4 class="state"><span class="icon"></span>' + thisBar.state + '</h4><h4 class="six_year">' + thisBar[dataValues.statesAttr[dataValues.statesSort]] + '</h4>');
			} else {
				var $overlayContent = $('<h4 class="state"><span class="icon"></span>' + thisBar.state + '</h4><h4 class="six_year">' + utilities.moneyString(thisBar[dataValues.statesAttr[dataValues.statesSort]]) + '</h4>');
			}

			$overlay.css('top', overlayTop + "%").append($overlayContent);
			$bar.append($barActive).append($overlay); //.data(thisBar);
			$('#bar_chart_viewport').append($bar);
		};	
		function getHeight(comp) {
			var maxComp = 100,
				maxHeight = chartHeight,
				height = (comp / maxComp) * maxHeight;			
			return height;
		};
		function setBarHandlers(){
			var urlParams = grad.url.util.getDataCallParams(),
				currentStateCode = urlParams[0].toLowerCase();
				
			$('#bar_chart_viewport').find('.bar').hover(function(){
				var $this = $(this);
				$('#e' + currentStateCode.toUpperCase()).removeClass('active');
				$this.addClass('active');
			}, function(){
				$(this).removeClass('active');
			}).click(function(){
				if (Modernizr.touch) {
					return false;
				}
				
				if ($(this).hasClass(currentStateCode)) { // if click was on the current state
					return false;
				}
				
				var newId = this.id.slice(1);
				changeState(newId);
		});		
		$('#bar_chart_viewport').unbind('mouseleave').mouseleave(function(){
			$('#e' + urlParams[0].toUpperCase()).addClass('active');
		});
	}
	function changeState(id) {
		_gaq.push(['_trackEvent', 'comparestates_link', id]);
		grad.menu.scrollTo('content');
		window.location.hash = "#state=" + id+"&sector="+grad.url.currentParams.sector;
	}
}

//////top performers////



dataExpress.getCustomRange = function () {
		dataValues.customRange = [];
		var theData = instElements.customgroup;
		var min = [0,0,999,999,999,99999999,9999999,999];
		var max = [0,0,0,0,0,0,0,0];
		var increment;
		for (i=0; i < theData.length;i++) {
			for (j=2; j<8; j++) {
				if (parseFloat(theData[i][dataValues.tpAttr[j]]) < min[j] && theData[i][dataValues.tpAttr[j]] !== null) {
					min[j] = parseFloat(theData[i][dataValues.tpAttr[j]]);
				}
				if (parseFloat(theData[i][dataValues.tpAttr[j]]) > max[j] && theData[i][dataValues.tpAttr[j]] !== null) {
					max[j] = parseFloat(theData[i][dataValues.tpAttr[j]]);
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
		var theTHead = $('#performers').find("thead");
		theTHead.find('.col_'+num).unbind('click').click(function() {
			dataValues.tpSort = num;
			dataExpress.sortCustom(num);
								
				
			})
	}
	dataExpress.sortCustom = function (theCol) {
		if (theCol === dataValues.customSort) {
			_gaq.push(['_trackEvent', 'ss_colleges', 'reverse']);
			instElements.customgroup.reverse();
		} else {
			dataValues.customSort = theCol;
			var sortAttribute = dataValues.tpAttr[parseFloat(theCol)]
			if (theCol != 1) {
			_gaq.push(['_trackEvent', 'ss-colleges', 'sort_by_'+sortAttribute]);
				instElements.customgroup.sort(function(a,b){
					var y = a[sortAttribute];
					var x = b[sortAttribute];
					return x-y;
				});
			} else {
			_gaq.push(['_trackEvent', 'ss-colleges', 'sort_by_name']);
				instElements.customgroup.sort(function(a,b){
					var x = a[sortAttribute];
					var y = b[sortAttribute];
					return ((x < y) ? -1 : ((x > y) ? 1 : 0))
				});
			}
			dataValues.offset = 0;
		}
		dataExpress.buildCustomTable();
	}
	dataExpress.formatCustomHeader = function () {
		var theTHead = $('#performers').find("thead");
		theTHead.find('td').removeClass('active');
		theTHead.find('.col_'+dataValues.tpSort).addClass('active');
	}
	dataExpress.buildCustomTable = function () {
		dataExpress.formatCustomHeader();
		var sectLength = instElements.customgroup.length;
		var pageLimit = sectLength;
		if (pageLimit > (dataValues.offset+10)) {
			pageLimit = dataValues.offset+10;
		}
		var pageStart = dataValues.offset + 1;
		if (sectLength > 10+dataValues.offset) {
			var theNext = "<a href='#' id='nextPage'>Next Page &rarr;</a>";
			pageLimit = 10+dataValues.offset;
		} else {
			theNext = "";
		}
		if (dataValues.offset > 0) {
			var thePrev = "<a href='#' id='prevPage'>&larr; Previous</a>";
		} else {
			thePrev = "";
		}
		$('#performers').find('.pagination').html(thePrev+'Showing '+pageStart+' - '+(pageLimit)+' of '+sectLength+' colleges'+theNext);
		//if ($('#nextPage')) {
		$('#nextPage').click(function(e) {
			e.preventDefault();
			_gaq.push(['_trackEvent', 'tp_pagination', 'previous',grad.url.util.getDataCallParams()]);
		 	dataValues.offset = dataValues.offset +10;
			dataExpress.buildCustomTable();
		});
		$('#prevPage').click(function(e) {
			e.preventDefault();
			_gaq.push(['_trackEvent', 'tp_pagination', 'next',grad.url.util.getDataCallParams()]);
		 	dataValues.offset = dataValues.offset -10;
			dataExpress.buildCustomTable();
		});
		var theTBody = $('#performers').find("tbody");
		theTBody.html("");
		for (i=dataValues.offset;i<pageLimit;i++) {
			var theRow = '';
			theName = '<a class="toplink" href="/institution/#id='+instElements.customgroup[i].unitid+'">'+ instElements.customgroup[i].chronname+'</a>';
			theRow = '<tr class="clickable_row" id="c_'+instElements.customgroup[i].unitid+'"><td class="col_name">'+theName+'</td><td class="col_2 average">'+utilities.percentileCheck(instElements.customgroup[i].grad_150_value)+'</td><td class="col_3 average">'+utilities.percentileCheck(instElements.customgroup[i].grad_100_value)+'</td><td class="col_4 average">'+utilities.numberCheck(instElements.customgroup[i].awards_per_value,"text")+'</td><td class="col_5 average">'+utilities.moneyString(instElements.customgroup[i].exp_award_value)+'</td><td class="col_6 average">'+utilities.moneyString(instElements.customgroup[i].aid_value)+'</td><td class="col_7 average">'+utilities.percentileCheck(instElements.customgroup[i].pell_value)+'</td></tr>';
			theTBody.append(theRow);
		}
		theTBody.find('.clickable_row').unbind('click hover').click(function(event) {
			var theID = this.id.split("_");
			_gaq.push(['_trackEvent', 'ss_tp_link', theID[1]]);
			window.location = "/institution/#id="+theID[1];
		//	event.preventDefault();
		//	grad.menu.scrollTo('content');
		}).hover(function() {
				$(this).addClass('hovering').find('a').addClass('hover');
			},function () {
				$(this).removeClass('hovering').find('a').removeClass('hover');
		});
		dataExpress.prettyupCustomTable();
	}
	dataExpress.prettyupCustomTable = function () {
		for (i=0;i<instElements.customgroup.length;i++) {
			if ($('#c_'+instElements.customgroup[i].unitid).length > 0) {
				var theRow = $('#c_'+instElements.customgroup[i].unitid);
				for (j=2;j<8;j++) {
				var theValue = parseFloat(instElements.customgroup[i][dataValues.tpAttr[j]]);
				theRow.find('.col_'+j).addClass(function () {
					var theClass = 1;
					for (k=dataValues.customRangeCount-1;k>=0;k--) {
							if (theValue >= dataValues.customRange[j].min+ (dataValues.customRange[j].increment*k)) {
								if (j == 5) {
									theClass = 4-k;
									break;
								} else {
									theClass = k;
									break;
								}	
							}
					}
					if (isNaN(theValue)) {
						theClass = 2;
					}
					if (instElements.customgroup.length == 1) {
						theClass = 3;
					}
					//else if (dataValues.customRangeCount < 5) {
					//	theClass = 1+((theClass -1)*Math.round(4/(dataValues.customRangeCount-1)))
					//} 
					return "perform_"+theClass;
				});
			}
			}
		}
		$('#performers').removeClass('loading');
	}
	////utilities///
	var utilities = new Object ();
		utilities.tooShort = function(theNumber,limit,suffix) {
		if (parseFloat(theNumber) < limit && parseFloat(theNumber) > 0 ) {
			return "&nbsp;";
		} else if (theNumber == null || parseFloat(theNumber) == 0) {
			return "";
		} else {
			return theNumber+suffix;
		}
	}
	utilities.numberCheck = function (theNumber,format) {
		if (parseFloat(theNumber) > 0) {
			var rNumber = parseFloat(theNumber);
			var fNumber =  new Number(parseFloat(theNumber));
			if (format == "number") {
				return fNumber;
			} else {
				return rNumber;
			}
		} else if (format == "number") {
			return 0;
		} else {
			return "N/A"
		}
	}
		utilities.percentileCheck = function (theNumber) {
		if (theNumber == null) {
			rNumber = "N/A"
		} else if (parseFloat(theNumber) > 0) {
			var rNumber = theNumber+"%";
		} else if(theNumber == 0) {
			rNumber = "0"		
		} else {
			rNumber = "N/A"
		} 
		return rNumber;
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
	
	utilities.getRankSuffix = function(rank){
		if (!rank || (rank === "")) {
			return 'NA';
		}
		
		var lastChar = rank.charAt(rank.length - 1);
		
		if (rank == '11' || rank == '12' || rank == '13') {
			return rank + 'th';
		} else if (lastChar == '1') {
			return rank + 'st';
		} else if (lastChar == '2') {
			return rank + 'nd';
		} else if (lastChar == '3') {
			return rank + 'rd';
		} else {	
			return rank + 'th';
		}
	}
	
	utilities.over100 = function (theNumber,theDiv) {
		if (theNumber > 100) {
				$(theDiv).prepend("<div class='oversized' />");
				return 100;
		} else {
				$(theDiv).remove('div.oversized');
				return theNumber;
		}
	}
	utilities.sortNumber = function (a,b,value) {
		var x = a.value;
		var y = b.value;
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
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
			var header = document.getElementById('state_header').innerHTML;
			var siteHeader = document.getElementById('site_header_container').innerHTML;
         	foo.contentWindow.document.head.appendChild(cssLink);
      	  	foo.contentWindow.document.head.appendChild(fontStyle);
         	foo.contentWindow.document.body.innerHTML = '  <div id="wrap" class="container" role="document"><div id="site_header_container">'+siteHeader+'</div><div id="state_header"  class="stats_header" style="top: auto;">'+header+'</div><div id="content" class="span-24"><div id="main" class="span-14 append-1" role="main"><div id="stats_main"><div id="'+theDiv+'" class="'+theClass+' soloprint">'+document.getElementById(theDiv).innerHTML+'</div></div></div></div></div>';
        	foo.contentWindow.focus();
          	foo.contentWindow.print();
			window.focus();
		} 
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
	utilities.addCommas = function (str,prefix, suffix) {
		if (prefix == undefined) {
			prefix = "";
		}
		if (suffix == undefined) {
			suffix = "";
		}
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
			output = prefix+output+suffix;
		}	
		return output;
	}
	utilities.processURL = function (url) {
		var processedURL;
		if (url.indexOf("www") != -1) {
			processedURL = url.slice(4);
		} else {
		processedURL = url;
		}
		return processedURL
	}
});
