////utilities///
utilities = new Object ();
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
		return null
	}
}
utilities.sortNumber = function (a,b) {
	var x = a.distance;
	var y = b.distance;
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
///data values///
function dynamicValues  () {
this.dlCounter = 0;
this.inst = "166683";
this.compareAttr = "gradrates";
this.cohort = "4yr%20bach";
this.currentgradrate  = "all";
this.overtimeRace = "X";
this.overtimeGen = "B";
this.currentCompare = "statesector";
this.compareAttr = "gradrates";
this.similarIDs = [];
}
///data elements///
function dataElements () {
	//toplevel elements//
	this.gradrate = [];
	this.compare = [];
	this.general = "";
	//gradrate children///
	this.gradrate.all = "";
	this.gradrate.men = "";
	this.gradrate.women="";
	this.gradrate.overtime=[];
	//gradrate overtime children//
	this.gradrate.overtime.both=[];
	this.gradrate.overtime.men=[];
	this.gradrate.overtime.women=[];
	//gradrate overtime gender children //
	this.gradrate.overtime.both.all = "";
	this.gradrate.overtime.both.white = "";	
	this.gradrate.overtime.both.black = "";
	this.gradrate.overtime.both.hispanic = "";
	this.gradrate.overtime.both.asian = "";
	this.gradrate.overtime.both.amIndian = "";
	this.gradrate.overtime.men.all = "";
	this.gradrate.overtime.men.white = "";
	this.gradrate.overtime.men.black = "";
	this.gradrate.overtime.men.hispanic = "";
	this.gradrate.overtime.men.asian = "";
	this.gradrate.overtime.men.amIndian = "";
	this.gradrate.overtime.women.all = "";
	this.gradrate.overtime.women.white = "";
	this.gradrate.overtime.women.black = "";
	this.gradrate.overtime.women.hispanic = "";
	this.gradrate.overtime.women.asian = "";
	this.gradrate.overtime.women.amIndian = "";
	//compare children//
	this.compare.state = [];
	this.compare.natl =[];
	this.compare.carnegie =[];
	this.compare.flagship =[];
	this.compare.hbcu =[];
	//compare category children//
	this.compare.state.gradrates = "";
	this.compare.state.efficiency = "";
	this.compare.natl.gradrates = "";	
	this.compare.natl.efficiency = "";
	this.compare.carnegie.gradrates = "";
	this.compare.carnegie.efficiency = "";
	this.compare.flagship.gradrates = "";
	this.compare.flagship.efficiency = "";
	this.compare.hbcu.gradrates = "";
	this.compare.hbcu.efficiency = "";
}
///data express-data display functions //
dataExpress = new Object ();

dataExpress.populateGeneral = function () {
	$('#stats_header_main h1').html(instElements.general.chronname);
	$('.sector').text(instElements.general.level+" "+instElements.general.control);
	$('.city').text(instElements.general.city+", "+instElements.general.state);
	$('.enrollment').text(utilities.addCommas(instElements.general.fte_value)+" undergraduates");
	$('.website').html("<a href='"+instElements.general.site+" target='_blank'>"+instElements.general.site+"</a>");
	$('.full_time').text(instElements.general.ft_pct+"% of students are full-time");
	$('#stats_section_efficiency h2').text(instElements.general.awards_per_value);
	$('#stats_section_efficiency .current_bar .value').text(instElements.general.awards_per_value);
	$("#stats_section_efficiency .compare_bar_1 .value").text(instElements.general.awards_per_state_value);
	$('#stats_section_efficiency .compare_bar_2 .value').text(instElements.general.awards_per_natl_value);
	$('#stats_section_efficiency .current_bar .bar_segment').css('width', instElements.general.awards_per_value+"%");
	$("#stats_section_efficiency .compare_bar_1 .bar_segment").css('width', instElements.general.awards_per_state_value+"%");
	$('#stats_section_efficiency .compare_bar_2 .bar_segment').css('width', instElements.general.awards_per_natl_value+"%");

}
dataExpress.populateGradRates = function () {
console.log(instElements.gradrate.all[0].grad_100_rate);
	$('#stats_section_gradrates .bar_chart_header .segment_1 h2').text(instElements.gradrate.all[0].grad_100_rate);
	$('#stats_section_gradrates .bar_chart_header .segment_2 h2').text(instElements.gradrate.all[0].grad_150_rate);
}
//function to pull initial data//
function initialize() {
//here you would load your data
}
function getGeneral(jsonP) {
	instElements.general = jsonP[0];
	dataValues.dlCounter += 1;
	populateCheck();
}
function populateCheck() {
	if (dataValues.dlCounter >= 2) {
		dataExpress.populateGeneral();
		dataExpress.populateGradRates();
	} else {
	console.log(dataValues.dlCounter);
	}
}
function getGradRates(jsonP) {
	instElements.gradrate.all = jsonP;
	dataValues.dlCounter += 1;
	populateCheck();
}
$(document).ready(function() {
	dataValues = new dynamicValues();
	instElements = new dataElements();
	initialize();
});