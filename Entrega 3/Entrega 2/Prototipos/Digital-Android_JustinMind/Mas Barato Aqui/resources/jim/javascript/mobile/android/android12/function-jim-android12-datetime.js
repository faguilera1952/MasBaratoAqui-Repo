(function (window, undefined) {
	var dp = $.datepicker;
	
	function addAndroidCalendarHeader(result, date) {
		var yearFormat = "yyyy";
		var dateFormat = "EEE, MMM dd";
		var customHeader = "<div class=\"ui-android-datepicker-header\"><div class=\"header-year-label\">";
		customHeader = customHeader + jimUtil.fromHTML(format(date, yearFormat)) + "</div>";
		customHeader = customHeader + "<div class=\"header-daymonth-label\">" + jimUtil.fromHTML(format(date, dateFormat)) + "</div></div>";
		return customHeader + result;
	}
	
	function addBottomButtons(result) {
		var buttons = "<div class=\"ui-datepicker-bottom-buttons\">";
		buttons += "<span class=\"ui-datepicker-button ui-datepicker-reset\">CLEAR</span>";
		buttons += "<span class=\"ui-datepicker-button ui-datepicker-set\">SET</span>";
		buttons += "<span class=\"ui-datepicker-button ui-datepicker-cancel\">CANCEL</span>";
		buttons += "</div>";
		
		return result + "<div class=\"ui-datepicker-bottom-buttons-spacer\"></div>" + buttons;
	}
	
	function addYearSelector(result) {
		return result + "<div class=\"jp-ui-year-selector\"></div>";
	}
	
	function activateYearSelector(elem, inst, dp) {
		var html = window.datepicker.getDatepickerHTML();
		elem.html(html);
		
		var tp = elem.find("#jp-ui-scroll-datepicker");
		var parent = elem.closest(".ui-datepicker");
		window.datepicker.fillDatepicker(tp, {
			onDateChange: function () {
				elem.find(".da_years > .years").removeClass("selected-year");
				elem.find(".year" + inst.drawYear).addClass("selected-year");				
			},
			onClick: function (src) {
				var year = parseInt(src.text());
				inst.drawYear = year;
				dp._updateDatepicker(inst);
			},
			currentDate: new Date(inst.drawYear, 1),
			hasMonths: false
		});
		
		elem.find(".year" + inst.drawYear).addClass("selected-year");
		elem.fadeIn();
	}
	
	function getTimepicker() {
		return $(".ui-datepicker #jp-ui-scroll-timepicker");
	}
	
	function addPickerSeparators(elem, pickerClass) {
		var h = ["left", "center", "right"];
		var v = ["top", "bottom"];
		for (var i = 0; i < 3; ++i)
			for (var j = 0; j < 2; ++j)
				elem.append("<div class=\"ui-android-" + pickerClass + "-separator " + h[i] + " " + v[j] + "\"></div>");
	}
	
	function repositionDP() {
		if (dp) {
			var currentDP = $("body > div.ui-datepicker");
			if (currentDP.css("display") != "none") {
				var inst = dp._curInst;
				if (inst) {
					var offset = dp._checkOffset(inst, {left: 0, top: 0}, false);
					inst.dpDiv.css({position: 'absolute', left: offset.left + 'px', top: offset.top + 'px'});
				}
			}
		}
	}
	
	var dateController = {
		"activate" : function() {
			if (dp.oldSetDateFromField == undefined || dp.oldSetDateFromField == null) {
				dp.oldSetDateFromField = dp._setDateFromField;
			}
			
			if (dp.oldGenerate == undefined || dp.oldGenerate == null) {
				dp.oldGenerate = dp._generateHTML;
			}
			
			if (dp.oldAttachHandlers == undefined || dp.oldAttachHandlers == null) {
				dp.oldAttachHandlers = dp._attachHandlers;
			}
			
			if (dp.oldSelectDate == undefined || dp.oldSelectDate == null) {
				dp.oldSelectDate = dp._selectDate;
			}
			
			if (dp.oldHideDatepicker == undefined || dp.oldHideDatepicker == null) {
				dp.oldHideDatepicker = dp._hideDatepicker;
			}
			
			if (dp.oldSelectDay == undefined || dp.oldSelectDay == null) {
				dp.oldSelectDay = dp._selectDay;
			}
			
			if (dp.oldCheckOffset == undefined ||dp.oldCheckOffset == null) {
				dp.oldCheckOffset = dp._checkOffset;
			}
			
			dp._defaults['dayNamesShort'] = ['S','M','T','W','T','F','S'];
			
			dp._hideDatepicker = function (input) {
				dp.oldHideDatepicker(input);
				$("#jim-container > .ui-android-datepicker-cover").remove();
			}
			
			dp._generateHTML = function (inst) {
				var result = dp.oldGenerate(inst);
				var input = inst.input;
				inst.jimPermanent = true;
				
				var date = new Date();
				if (input && input.val()) {
					date = new Date(inst.currentYear, 
									inst.currentMonth,
									inst.currentDay,
									inst.currentHour,
									inst.currentMinute);
				}
				
				if (inst.settings.timeOnly) {
					result = "<div class=\"ui-datepicker-android-time-header\"><span>Set time</span></div>";
					result = result + "<div class=\"ui-datepicker-content-box\">";
					result += window.timepicker.getTimepickerHTML();
				} else if (inst.settings.showTime) {
					result = "<div class=\"ui-datepicker-android-datetime-header\"><span>Set date and time</span></div>";
					result = result + "<div class=\"ui-datepicker-content-box\">";
					result += window.datepicker.getDatepickerHTML();					
					result += window.timepicker.getTimepickerHTML();					
				} else {
					result = "<div class=\"ui-datepicker-content-box\">" + result;
					result = addAndroidCalendarHeader(result, date);
				}
				
				if (inst.settings.showTime)
					result += "</div>";
				
				result = addBottomButtons(result);
				
				if (!inst.settings.timeOnly && !inst.settings.showTime) {
					result = addYearSelector(result);
					result += "</div>";
				} else if (inst.settings.timeOnly)
					result += "</div>";
				
				if ($("#jim-container > .ui-android-datepicker-cover").length == 0) {
					$("#jim-container").append("<div class=\"ui-android-datepicker-cover\"></div>");
					$("#jim-container > .ui-android-datepicker-cover").on('click', function (e) {
						dp._hideDatepicker(undefined);
					});
				}
				
				if ($("#jim-mobile").hasClass("landscape"))
					$(".ui-datepicker.ui-widget-content").addClass("landscape");
				else
					$(".ui-datepicker.ui-widget-content").removeClass("landscape");
				
				return result;
			}
			
			dp._attachHandlers = function (inst) {
				dp.oldAttachHandlers(inst);
				var input = inst.input;
				
				var date = new Date();
				if (input && input.val()) {
					date = new Date(inst.currentYear, 
									inst.currentMonth,
									inst.currentDay,
									inst.currentHour,
									inst.currentMinute);
				}
			
				$(".ui-datepicker .ui-datepicker-reset").on('click', function (e) {
					input.val("");
					input.closest(".date,.time,.datetime").trigger("parsedate");
					input.trigger('change');
					dp._updateDatepicker(input);
				});
				
				$(".ui-datepicker .ui-datepicker-set").on('click', function (e) {
					dp._selectDate(input[0], "");
					dp._hideDatepicker(undefined);
				});
				
				$(".ui-datepicker .ui-datepicker-cancel").on('click', function (e) {
					dp._hideDatepicker(undefined);
				});
				
				$(".ui-datepicker.ui-widget-content").removeClass("ui-showtime");
				$(".ui-datepicker.ui-widget-content").removeClass("ui-only-timepicker");
				$(".ui-datepicker.ui-widget-content").removeClass("ui-only-date");
				if (inst.settings.timeOnly) {
					var tp = getTimepicker();
					$(".ui-datepicker.ui-widget-content").addClass("ui-only-timepicker");
					window.timepicker.fillTimepicker(tp, null, null, inst.currentHour, inst.currentMinute);
					
					addPickerSeparators(tp, "timepicker");
				} else if (inst.settings.showTime) {
					var tp = getTimepicker();
					var scrollDatepicker = $(".ui-datepicker #jp-ui-scroll-datepicker");
					
					$(".ui-datepicker.ui-widget-content").addClass("ui-showtime");
					
					window.timepicker.fillTimepicker(tp, null, null, inst.currentHour, inst.currentMinute);
					window.datepicker.fillDatepicker(scrollDatepicker, {
						"onDateChange": function (newDate) { },
						"currentDate" : date,
						"hasDays" : true,
						"monthsName" : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
					});
					
					addPickerSeparators(tp, "timepicker");
					addPickerSeparators(scrollDatepicker, "datepicker");
				} else {
					$(".ui-datepicker.ui-widget-content").addClass("ui-only-date");
					
					// Year selector
					$(".ui-datepicker-title > span").on('click', function (e) {
						activateYearSelector($(".ui-datepicker .jp-ui-year-selector"), inst, dp);
					});
				}
				
			}
			
			dp._selectDate = function (id, dateStr) {
				var target = $(id);
				var inst = this._getInst(target[0]);
				
				if (inst.settings.showTime) {
					var tp = getTimepicker();
					var scrollDatepicker = $(".ui-datepicker #jp-ui-scroll-datepicker");
					
					var time = window.timepicker.getTimeValue(tp);
					var scrollDate = window.datepicker.getDateValue(scrollDatepicker);
					
					inst.currentHour = time.getHours();
					inst.currentMinute = time.getMinutes();
					inst.currentDay = scrollDate.getDate();
					inst.currentMonth = scrollDate.getMonth();
					inst.currentYear = scrollDate.getFullYear();
				} else if (inst.settings.timeOnly) {
					var time = window.timepicker.getTimeValue(getTimepicker());
					inst.currentHour = time.getHours();
					inst.currentMinute = time.getMinutes();
				}
				
				var date = new Date(inst.currentYear, 
									inst.currentMonth,
									inst.currentDay,
									inst.currentHour,
									inst.currentMinute);
				
				var inputDateFormat = target.closest(".datetime, .date, .time").attr("format");
				var text = jimUtil.fromHTML(format(date, inputDateFormat));
				
				dp.oldSelectDate(id, text);
			}
			
			dp._setDateFromField = function(inst, noDefault) {
				var format = inst.input.closest(".datetime, .date, .time").attr("format");
				
				var timestamp = (parse(inst.input.val(), format, new Date())).getTime();
				if (!isNaN(timestamp)) {
					var date = new Date(timestamp);
					inst.currentHour = date.getHours();
					inst.currentMinute = date.getMinutes();
					
					if (!inst.timeOnly) {
						inst.selectedDay = date.getDate();
						inst.drawMonth = inst.selectedMonth = date.getMonth();
						inst.drawYear = inst.selectedYear = date.getFullYear();
						inst.currentDay = date.getDate();
						inst.currentMonth = date.getMonth();
						inst.currentYear = date.getFullYear();
					}
				} else {
					inst.currentHour = 0;
					inst.currentMinute = 0;
					dp.oldSetDateFromField(inst, noDefault);
				}
				
				inst.settings['dateFormat'] = format;
			}
			
			dp._selectDay = function (id, month, year, td) {
				var target = $(id);
				if ($(td).hasClass(dp._unselectableClass) || dp._isDisabledDatepicker(target[0])) {
				  return;
				}
				var inst = dp._getInst(target[0]);
				inst.selectedDay = inst.currentDay = $('a', td).html();
				inst.selectedMonth = inst.currentMonth = month;
				inst.selectedYear = inst.currentYear = year;
				
				dp._updateDatepicker(inst);
				// this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
			}
			
			dp._checkOffset = function (inst, offset, isFixed) {
				var dpWidth = inst.dpDiv.outerWidth();
				var dpHeight = inst.dpDiv.outerHeight();
				var jimContainer = $("#jim-container");
				var containerOffset = jimContainer.offset();
				var containerWidth = jimContainer.outerWidth();
				var containerHeight = jimContainer.outerHeight();
				
				
				offset.left = containerOffset.left + containerWidth / 2 - dpWidth / 2;
				offset.top = containerOffset.top + containerHeight / 2 - dpHeight / 2;

				return offset;
			}
			
			if ($("#jim-mobile").hasClass("landscape")) {
				$(".ui-datepicker.ui-widget-content").css("display", "flex");
				$(".ui-datepicker.ui-widget-content").hide()
			}
			
			$("#jim-body").bind('scroll', repositionDP);
			$(window).bind('resize', repositionDP);
		},
		"deactivate" : function() {
			if (dp.oldSetDateFromField != undefined)
				dp._setDateFromField = dp.oldSetDateFromField;
			if (dp.oldGenerate != undefined)
				dp._generateHTML = dp.oldGenerate;
			if (dp.oldAttachHandlers != undefined)
				dp._attachHandlers = dp.oldAttachHandlers;
			if (dp.oldSelectDate != undefined)
				dp._selectDate = dp.oldSelectDate;
			if (dp.oldHideDatepicker != undefined)
				dp._hideDatepicker = dp.oldHideDatepicker;
			if (dp.oldCheckOffset != undefined)
				dp._checkOffset = dp.oldCheckOffset;
			if (dp.oldSelectDay != undefined)
				dp._selectDay = dp.oldSelectDay;
			
			dp.oldSetDateFromField = undefined;
			dp.oldGenerate = undefined;
			dp.oldAttachHandlers = undefined;
			dp.oldSelectDate = undefined;
			dp.oldHideDatepicker = undefined;
			dp.oldCheckOffset = undefined;
			dp.oldSelectDay = undefined;
			
			$("#jim-body").unbind('scroll', repositionDP);
			$(window).unbind('resize', repositionDP);
		}
	};
	
	jimDevice.dateControllers['android12'] = dateController;
	
})(window);