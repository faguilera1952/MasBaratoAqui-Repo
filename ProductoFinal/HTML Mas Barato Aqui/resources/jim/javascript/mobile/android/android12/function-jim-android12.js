/*!
 * Copyright 2022 Justinmind. All rights reserved.
 */

(function(window, undefined) {

	var samsung_kb = {
		letters : [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#44;", "space", "&#46;", "return" ] 
		],
		email: [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#64;", "space", "&#46;", ".com", "return" ] 
		],
		url: [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#47;", "space", "&#46;", "www.", "return" ]
		],
		numbers : [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "&#43;", "&#215;", "&#247;", "&#61;", "&#47;", "&#95;", "&#8364;", "&#163;", "&#165;", "&#8361;" ],
			[ "&#33;", "&#64;", "&#35;", "&#36;", "&#37;", "&#94;", "&#38;", "&#42;", "&#40;", "&#41;" ],
			[ "signs", "&#45;", "&#39;", "&#34;", "&#58;", "&#59;", "&#44;right", "&#63;", "backspace" ],
			[ "letters", "&#44;left", "space", "&#46;", "return" ]
		],
		signs: [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "&#96;", "&#126;", "&#92;", "&#124;", "&#60;", "&#62;", "&#123;", "&#125;", "&#91;", "&#93;" ],
			[ "&#176;", "&#8226;", "&#9675;", "&#9679;", "&#9633;", "&#9632;", "&#9828;", "&#9825;", "&#9671;", "&#9831;" ],
			[ "numbers", "&#9734;", "&#9642;", "&#164;", "&#12298;", "&#12299;", "&#161;", "&#191;", "backspace" ],
			[ "letters", "&#44;", "space", "&#46;", "return" ]
		]
	},
	android_kb = {
		letters : [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#44;", "emote", "space", "&#46;", "return" ] 
		],
		email: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#64;", "emote", "space", "&#46;", "return" ] 
		],
		url: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l" ],
			[ "shift", "z", "x", "c", "v", "b", "n", "m", "backspace" ], 
			[ "numbers", "&#47;", "emote", "space", "&#46;", "return" ]
		],
		numbers : [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			[ "&#64;", "&#35;", "&#36;", "&#95;", "&#38;", "&#45;", "&#43;", "&#40;", "&#41;", "&#47;" ],
			[ "signs", "&#42;", "&#34;", "&#39;", "&#58;", "&#59;", "&#33;", "&#63;", "backspace" ],
			[ "letters", "&#44;", "num", "space", "&#46;", "return" ]
		],
		signs: [
			[ "&#126;", "&#96;", "&#124;", "&#8226;", "&#8730;", "&#960;", "&#247;", "&#215;", "&#182;", "&#9651;" ],
			[ "&#163;", "&#162;", "&#8364;", "&#165;", "&#94;", "&#186;", "&#61;", "&#123;", "&#125;", "&#92;" ],
			[ "numbers", "&#37;", "&#169;", "&#174;", "&#8482;", "&#10004;", "&#91;", "&#93;", "backspace" ],
			[ "letters", "&#60;", "num", "space", "&#62;", "return" ]
		]
	},
	android_tablet_kb = {
		letters : [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace"],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l", "return" ],
			[ "shiftleft", "z", "x", "c", "v", "b", "n", "m", "&#33;", "&#63;", "shiftright" ], 
			[ "numbersleft", "&#44;", "space", "emote", "&#46;", "numbersright" ] 
		],
		email: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l", "return"],
			[ "shiftleft", "z", "x", "c", "v", "b", "n", "m", "&#33;", "&#63;", "shiftright" ], 
			[ "numbersleft", "&#64;", "emote", "space", "&#46;", "numbersright" ] 
		],
		url: [
			[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace" ],
			[ "a", "s", "d", "f", "g", "h", "j", "k", "l", "return" ],
			[ "shiftleft", "z", "x", "c", "v", "b", "n", "m", "&#33;", "&#63;", "shiftright"], 
			[ "numbersleft", "&#47;", "emote", "space", "&#46;", "numbersright" ]
		],
		numbers : [
			["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace"],
			[ "&#64;", "&#35;", "&#36;", "&#95;", "&#38;", "&#45;", "&#43;", "&#40;", "&#41;", "&#47;", "return"],
			[ "signsleft", "&#92;", "&#37;", "&#42;", "&#34;", "&#39;", "&#58;", "&#59;", "&#33;", "&#63;", "signsright" ],
			[ "lettersleft", "&#44;", "space", "num", "&#46;", "lettersright" ]
		],
		signs: [
			[ "&#126;", "&#96;", "&#124;", "&#8226;", "&#8730;", "&#960;", "&#247;", "&#215;", "&#182;", "&#9651;", "backspace" ],
			[ "&#163;", "&#162;", "&#8364;", "&#165;", "&#94;", "&#186;", "&#61;", "&#123;", "&#125;", "&#177;", "return" ],
			[ "numbersleft", "&#8804;", "&#8805;", "&#8800;", "&#169;", "&#174;", "&#8482;", "&#10004;", "&#91;", "&#93;", "numbersright" ],
			[ "lettersleft", "&#60;", "space", "num", "&#62;", "lettersright" ]
		]
	},
	months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	daysCompressed = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
	monthsCompressed = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
	periods = [ "AM", "PM" ],
	input,
	initialInputValue,
	pressedTarget, 
	ddSize, currentMonth, currentWeekday, currentDay, currentYear,
	lastKeyboard = "#letters";
	
	
	/*********************** START KEYBOARD METHODS ************************/
	
	function createKeyboard() {
		var key="";
		var html = '<div id='+controller.keyboardKey.substring(1) +' onselectstart="return false;">';

		var keyboard = android_kb;
		if (jimDevice.name.startsWith("androidgalaxys2")) {
			keyboard = samsung_kb;
		}
		else if (jimDevice.name === "androidtablet") {
			keyboard = android_tablet_kb;
		}

		$.each(keyboard, function(key, value) {
			html += ('<div id="' + key + '">');
			var kbname = key;
			$.each(this, function(key, value) {
				html += '<div class="row">';
				$.each(this, function(key, value) {
					if(value.includes("shift") || value === "backspace" || value === "return" || value === "emote")
						html += ('<div class="' + value + '"> <div class="background-image-key"></div> </div>');
					else if(value.includes("numbers")) {
						var numbersString = "?123";
						if (jimDevice.name.startsWith("androidgalaxys2")) {
							numbersString = "!#1";
							if (kbname === "signs") {
								numbersString = "2/2";
							}
						}
						html += ('<div class="' + value + '">' + numbersString + '</div>');
					}
					else if(value.includes("signs")) {
						var signsString = "=\\<";
						if (jimDevice.name.startsWith("androidgalaxys2")) {
							signsString = "1/2";
						}
						html += ('<div class="' + value + '">' + signsString + '</div>');
					}
					else if(value.includes("letters"))
						html += ('<div class="' + value + '">ABC</div>');
					else if (value === "space") {
						var spaceValue = "";
						if (jimDevice.name.startsWith("androidgalaxys2")) {
							spaceValue = "English (US)";
						}
						html += ('<div class="' + value + '"><span>' + spaceValue + '</span></div>');
					}
					else if (value === "num")
						html += ('<div class="' + value + '"><span>' + "1 2<br>3 4" + '</span></div>');
					else {
						if (value.includes("&#")) {
							html += ('<div class="' + "char-code-" + value.replace("&#", "").replace(";", "") + '"><span>' + value.replace("left","").replace("right","") + '</span></div>');
						}
						else {
							html += ('<div class="' + value + '"><span>' + value + '</span></div>');
						}
					}
				});
				html += '</div>';
			});
			html += '</div>';
		});
		html += '</div>';
		
		jQuery("#jim-container").append(html);
		jQuery('[class*="shift"]').removeClass("caps").addClass("caps");
		toggleCapsFromKeyboard(jQuery("#letters"));
	}
	
	function bindKeyboard() {
		jQuery(controller.keyboardKey).on("mouseup", function(event, data) {
			var realTarget = event.target || event.srcElement;
			if (realTarget.tagName === "SPAN") {
				realTarget = jQuery(realTarget.parentElement).context;
			}
			if (realTarget.tagName === "DIV" && (realTarget===pressedTarget || ($(realTarget).hasClass("divBubble")) && $(realTarget).find("span.keyBubble").text() === $(pressedTarget).find("span.keyBubble").text())) {
				var key = pressedTarget.className;
				if(key) {
					if(key.indexOf(" ")>0) {
						key=key.substring(0, key.indexOf(" "));
					}
					switch(key){
						case "":
						case "num":
						case "emote":
						case "row":
							break;
						case "letters":
						case "lettersleft":
						case "lettersright":
							jQuery("#letters").css('display', 'none');
							jQuery("#numbers").css('display', 'none');
							jQuery("#signs").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');
							jQuery(lastKeyboard).css('display', 'block');
							deactivateSpecialKeys();
							break;
						case "numbers":
						case "numbersleft":
						case "numbersright":
							jQuery("#numbers").css('display', 'block');
							jQuery("#signs").css('display', 'none');
							jQuery("#letters").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');
							deactivateSpecialKeys();
							break;
						case "signs":
						case "signsleft":
						case "signsright":
							jQuery("#signs").css('display', 'block');							
							jQuery("#letters").css('display', 'none');
							jQuery("#email").css('display', 'none');
							jQuery("#url").css('display', 'none');						
							jQuery("#numbers").css('display', 'none');						
							deactivateSpecialKeys();
							break;
						default:
							changeValueByKeyboard(input, key.replace("left", "").replace("right", ""));
							toggleCapsFromKeyboard(jQuery(lastKeyboard));
							break;
					}
					jQuery("[class*='"+key+"']").removeClass("pressed");
				}
			}
			removeDivBubbleAndEffects(pressedTarget);
		});
		
		jQuery(controller.keyboardKey).on("mousedown", function(event, data) {
			var realTarget = event.target || event.srcElement;
			pressedTarget = realTarget;
			if (realTarget.tagName === "DIV") {
				var key = realTarget.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "":
					case "emote":
					case "num":
					case "row":
						break;
					case "space":
					case "backspace":
					case "return":
					case "numbers":
					case "numbersleft":
					case "numbersright":
					case "letters":
					case "lettersleft":
					case "lettersright":
					case "signs":
					case "signsleft":
					case "signsright":
					case "shift":
					case "shiftleft":
					case "shiftright":
						jQuery("[class='"+realTarget.className+"']").removeClass("pressed").addClass("pressed");
						break;
					default:
						var jQuerySelector = "." + key;
						if (key.length>1) {
							jQuerySelector = "[class='"+key+"']";
						}
						jQuery(jQuerySelector).removeClass("pressed").addClass("pressed");

						var bubbleValue = getCharacterFromCode(key.replace("left", "").replace("right", ""));
						var hasCaps = jQuery('[class*="shift"].caps, [class*="shift"].capsLock');
						if (hasCaps.length > 0) {
							bubbleValue = bubbleValue.toUpperCase();
						}
						keyBubble = "<div class='divBubble'><span class='keyBubble'>" + bubbleValue + "</span></div>";
						jQuery(pressedTarget).append(keyBubble);
						break;
				}
				event.preventDefault();
			}
		});
		
		jQuery(controller.keyboardKey).on("mouseleave", function(event, data) {
		  removeDivBubbleAndEffects(pressedTarget);
		});
	}

	function getCharacterFromCode(key) {
		var keyValue = key;	
		if (key.includes("char-code-")) {
			keyValue = "&#" + key.replace("char-code-", "") + ";";
		}
		return keyValue;
	}

	function deactivateSpecialKeys() {
		jQuery('[class*="shift"]').removeClass("capsLock");
		jQuery(".space").removeClass("pressed");
		jQuery(".backspace").removeClass("pressed");
		jQuery(".return").removeClass("pressed");
	}

	function removeDivBubbleAndEffects(pressed) {
		if(pressed) {
			jQuery(".divBubble").remove();
		    removeEffects(pressed);
		    pressed = null;
		 }
	}

	function removeEffects(target) {
		var key = jQuery(target).attr("class");
		if(key !== undefined) {
			if(key.indexOf(" ") > 0)
				key = key.substring(0, key.indexOf(" "));
			if(key.length == 1)
				jQuery(target).removeClass("pressed");
		}
	}

	function changeValueByKeyboard($target, newKey) {
		var action, type, oldValue = "", startPos=0, move = false;
	    type = $target.jimGetType();
		switch(type) {
		  case itemType.text:
		  case itemType.password:
			oldValue = $target.find("input").val();
			startPos = $target.find("input").caret().start;
			action = applyNewValue(oldValue, newKey, $target.find("input"));
			if(action.key==="return")
				$target.find("input").val(jimUtil.fromHTML(action.newValue));
			else {
				if(($target.find("input").get(0).offsetWidth + $target.find("input").get(0).scrollLeft >= $target.find("input").get(0).scrollWidth - 1) ||
				   ($target.find("input").get(0).offsetWidth + $target.find("input").get(0).scrollLeft <= $target.find("input").get(0).scrollWidth + 1)) move = true;
				$target.find("input").val(jimUtil.fromHTML(action.newValue)).caret({start: startPos+action.caretDespl, end:startPos+action.caretDespl});
				if(move) $target.find("input").get(0).scrollLeft = $target.find("input").get(0).scrollWidth;
			}
			break;
		  case itemType.textarea:
			oldValue = $target.find("textarea").val();
			startPos = $target.find("textarea").caret().start;
			action = applyNewValue(oldValue, newKey, $target.find("textarea"));
			if(action.key==="return") 
				$target.find("textarea").val(jimUtil.fromHTML(action.newValue));
			else {
				if(($target.find("textarea").get(0).offsetHeight + $target.find("textarea").get(0).scrollTop >= $target.find("textarea").get(0).scrollHeight - 1) ||
				   ($target.find("textarea").get(0).offsetHeight + $target.find("textarea").get(0).scrollTop <= $target.find("textarea").get(0).scrollHeight + 1)) move = true;
				$target.find("textarea").val(jimUtil.fromHTML(action.newValue)).caret({start: startPos+action.caretDespl, end:startPos+action.caretDespl});
				if(move) $target.find("textarea").get(0).scrollTop = $target.find("textarea").get(0).scrollHeight;
			}
			break;
		}
		input.closest(".firer").trigger("keyup.jim", [{"preventTrigger": true, "altKey":false, "ctrlKey":false, "shiftKey":false, "which": (newKey.startsWith("return")) ? 13 : newKey.toLowerCase().charCodeAt(0)-32 }]);
	}

	function applyNewValue(oldValue, newKey, $target) {
		var newValue, hasCaps, hasCapsLock, beforeCaret, afterCaret, caretDespl;
		newValue=oldValue;
		if (newKey.includes("char-code-")) {
			newKey = String.fromCharCode(getCharacterFromCode(newKey).replace("&#", "").replace(";", ""));
		}
		hasCaps = jQuery('[class*="shift"].caps');
		hasCapsLock = jQuery('[class*="shift"].capsLock');
		if(newKey.indexOf(" ")>0)
			newKey=newKey.substring(0, newKey.indexOf(" "));
		if((hasCaps.length>0 || hasCapsLock.length>0) && newKey.length===1)
			newKey = newKey.toUpperCase();
			
		//calculate value before and after caret	
		beforeCaret = oldValue.substring(0, $target.caret().start);
		afterCaret = oldValue.substring($target.caret().end);
			
		switch(newKey) {
			case "space":
				newValue = beforeCaret + " " + afterCaret;
				jQuery(".space").removeClass("pressed");
				caretDespl = 1;
				break;
			case "backspace":
				newValue = (beforeCaret.length>0) ? beforeCaret.substring(0, beforeCaret.length-1) : "";
				newValue += afterCaret; 
				jQuery(".backspace").removeClass("pressed");
				caretDespl = -1;
				break;
			case "shiftright":
			case "shiftleft":
			case "shift":
				if(hasCaps.length>0) {
					jQuery('[class*="shift"]').removeClass("caps").addClass("capsLock");
				}
				else if (hasCapsLock.length>0) {
					jQuery('[class*="shift"]').removeClass("caps").removeClass("capsLock");
				}
				else {
					jQuery('[class*="shift"]').addClass("caps");
				}
				caretDespl = 0;
				break;
			case "return":
				jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
				deactivateSpecialKeys();
				if(initialInputValue!==newValue) {
					input.closest(".firer").trigger("change");
				}
				input.find("input:focus").blur();
				caretDespl = 0;
				break;
			case "www.":
			case ".com":
				newValue = beforeCaret + newKey.toLowerCase() + afterCaret;
				jQuery('[class*="shift"]').removeClass("caps");
				caretDespl = 4;
				break;
			default:
				newValue = beforeCaret + newKey + afterCaret;
				jQuery('[class*="shift"]').removeClass("caps");
				caretDespl = 1;
				break;
		}
		
		return {newValue: newValue, caretDespl: caretDespl, key: newKey};
	}

	function setStartCaretPosition($target) {
		var endPos=0;
		type = $target.jimGetType();
		switch(type) {
		  case itemType.text:
		  case itemType.password:
			endPos = $target.find("input").val().length;
			$target.find("input").caret({start: endPos, end: endPos});
			break;
		  case itemType.textarea:
			endPos = $target.find("textarea").val().length;
			$target.find("textarea").caret({start: endPos, end: endPos});
			break;
		}
	}

	function toggleCapsFromKeyboard($keyboard) {
		var hasCaps = jQuery('[class*="shift"].caps, [class*="shift"].capsLock');
		$.each($keyboard.children(), function(index, element) {
			if ($(element).hasClass("row")) {
				toggleCapsFromKeyboard($(element));
			}
			else {
				var span = $(element).find("span");
				var className = $(element).attr("class");
				if(className.indexOf(" ")>0)
					className=className.substring(0, className.indexOf(" "));
				if (span.length > 0 && className.length === 1) {
					if (hasCaps.length>0) {
						span.first().text(span.first().text().toUpperCase());
					}
					else {
						span.first().text(span.first().text().toLowerCase());
					}
				}
			}
		});
	}
	
	/*********************** END KEYBOARD METHODS ************************/
	
	/*********************** START DROPDOWN METHODS ************************/
	
	function createDropDown() {
		var html = '<div id='+controller.dropdownKey.substring(1) +' onselectstart="return false;"><div class="dd_options scrollable"></div></div>';
		jQuery("#jim-container").append(html);
		jQuery(controller.dropdownKey+' .dd_options').overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
	}
	
	function bindDropDown() {
		dragStart=false;
		jQuery(controller.dropdownKey).on("mouseup", function(event, data) {
			if(dragStart) {
				dragStart = false;
			}
			else if (event.target.tagName === "DIV" && !dragStart) {
				var key = event.target.className;
				if(key==="")
					key = event.target.id;
				if(key) {
					if(key.indexOf(" ")>0)
						key=key.substring(0, key.indexOf(" "));
					switch(key) {
					case "dd_options":
						//case for IE on option without value
						if(jQuery(".dd_options .pressed").position()===undefined)
							break;
						case "options":
						case "tick":
							jQuery(controller.dropdownKey+" .dd_options .selected").removeClass("selected");
							var $target = jQuery(controller.dropdownKey+" .dd_options .pressed");
							$target.removeClass("pressed").addClass("selected");
							setDropDrownValue(input);
							var value = $target.text();
							if(initialInputValue!==value) {
								input.closest(".firer").trigger("change");
								initialInputValue = value;
							}
							jQuery(controller.dropdownKey).fadeOut(100,function(){
								jQuery(controller.dropdownKey+" .dd_options").get(0).style.removeProperty('height');
								jQuery("#jim-android-mask").hide();
							});
							jQuery(".nativedropdown").removeClass("pressed");
							input.closest(".firer").trigger("focusout");
							break;
						default:
							break;
					}
				}
			}
		});
		
		jQuery(controller.dropdownKey).on("mousedown", function(event, data) {
			if (event.target.tagName === "DIV" && !dragStart) {
				var key = event.target.className;
				if(key.indexOf(" ")>0)
					key=key.substring(0, key.indexOf(" "));
				switch(key) {
					case "tick":
					case "options":
						var $target = jQuery(event.target).parent().children(".options");
						$currentPressed = jQuery(controller.dropdownKey+" .dd_options .selected");
						
						if($target[0]===$currentPressed[0]) {
							jQuery(controller.dropdownKey+" .dd_options .pressed").removeClass("pressed");
							$target.parent().removeClass("pressed").addClass("pressed");
						}
						else {
							jQuery(controller.dropdownKey+" .dd_options .pressed").removeClass("pressed");
							$target.parent().removeClass("pressed").addClass("pressed");			
						}
						break;
					default:
						break;
				}
				event.preventDefault();
			}
		});
		
		jQuery(controller.dropdownKey).on("openedDD", function(event) {
			var $dropDiv = jQuery(controller.dropdownKey);
			//control height overflow
			var deviceHeight = parseInt(jQuery("#jim-mobile").css("height")) - 80;
			var $optionsDiv = jQuery(controller.dropdownKey+" .dd_options");
			var ddCurrentHeight = $dropDiv.get(0).clientHeight;
			if(ddCurrentHeight>deviceHeight){
				$optionsDiv.css("height",deviceHeight+"px");
			}
		});
		
		jQuery(controller.dropdownKey).on("dragstart", function(event, data) {
			jQuery(controller.dropdownKey+" .dd_options .pressed").removeClass("pressed");
			dragStart = true;
		});

		
	}
	
	function fillDropDownOptions($target) {
		var type = $target.jimGetType();
		jQuery(controller.dropdownKey+" .dd_options >").remove();
		switch(type) {
			case itemType.dropdown:
			case itemType.nativedropdown:
				var html = "";
				$holder = jQuery("#"+$target.attr("id"));
	            $options = $holder.find(".option");
	            ddSize = $options.length;
	            defaultValue = $target.find(".valign").children(".value").text();
	            var newOption, selectedPos=0;
	            for(i=0, iLen=ddSize; i<iLen; i++) {
	            	newOption = "<div class='line_options";
	            	if(defaultValue === jQuery($options[i]).text()) {
	            		selectedPos = i;
						newOption += " selected'>";
	            	}
	            	else {
	            		newOption += "'>";
	            	}

					newOption += "<div class='options'>"+ jQuery($options[i]).text() +"</div><div class='tick'></div></div>";
	            	html += newOption;
	            }
				jQuery(controller.dropdownKey+" .dd_options").append(html);
				
				/*var childHeight = parseInt(jQuery(".options").height()) + parseInt(jQuery(".options").css('padding-top'));
				if(jQuery("#jim-case").hasClass("portrait")) {
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : -(selectedPos*childHeight) + 88 + "px", queue:false });
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : -(selectedPos*childHeight) + 0 + "px", queue:false });
				}
				else {
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options .dd_options").animate({ "top" : -(selectedPos*childHeight) + 66 + "px", queue:false });
					jQuery(controller.dropdownKey+" #jim-iphone-dd_options_big .dd_options").animate({ "top" : -(selectedPos*childHeight) + "px", queue:false });
				}*/
				
				break;
		}
	}
	
	function setDropDrownValue($target) {
	var type = $target.jimGetType();
		switch(type) {
			case itemType.dropdown:
			case itemType.nativedropdown:
				$options = $target.children(".dropdown-options").children(".option");
				var value = jQuery(controller.dropdownKey+" .dd_options .line_options.selected .options").text();
				for(o=0, oLen=$options.length; o<oLen; o+=1) {
				  option = $options[o];
				  if(option.textContent === value || option.innerText === value) {
				    jQuery(option).parent().addClass("selected");
				    jQuery(option).parent().attr("selected","selected");
				    $target.find(".value").html(jimUtil.toHTML(value));
				    return false;
				  }
				}
				break;
		}
	}
	
	/*********************** END DROPDOWN METHODS ************************/
		
	/*********************** START MASK METHODS ************************/
	
	function addMask() {
		var html = "<div id='jim-android-mask'></div>";
		jQuery("#jim-container").append(html);
		
	}
	
	function removeMask() {
		jQuery("#jim-container").remove('#jim-android-mask');
	}
	
	/*********************** END MASK METHODS ************************/
	
	
	/*********************** START OTHER METHODS ************************/
	
	function checkExternalClick(event, data) {
		var $target = $(event.target || event.srcElement);
		if(input && ( (($target.closest(".text")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) || 
				(($target.closest(".password")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) || 
				(($target.closest(".textarea")[0]!==input[0]) && ($target.closest(".text").length===0 && $target.closest(".password").length===0 && $target.closest(".textarea").length===0)) )
				&& $target[0].id != $(controller.keyboardKey) && !$target.closest(controller.keyboardKey).length && $(controller.keyboardKey).css("display")!=="none" && !$(controller.keyboardKey+":animated").length) {
			jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
			deactivateSpecialKeys();
			
			var value = "";
			if(input.find("input").length>0)
				value = input.find("input").val();
			else if(input.find("textarea").length>0)
				value = input.find("textarea").val();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.find("input:focus").blur();
			input.find("textarea:focus").blur();
		}
		if(input && ($target.closest(".dropdown, .nativedropdown")[0]!==input[0]) && !$target.is(".dropdown, .nativedropdown") && $target[0].id != $(controller.dropdownKey) && !$target.closest(controller.dropdownKey).length && $(controller.dropdownKey).css("display")!=="none" && !$(controller.dropdownKey+":animated").length) {
			jQuery(controller.dropdownKey).fadeOut(100,function(){
				jQuery(controller.dropdownKey+" .dd_options").get(0).style.removeProperty('height');
				jQuery("#jim-android-mask").hide();
			});
			jQuery(".dropdown, .nativedropdown").removeClass("pressed");
			var value = input.children(".valign").children(".value").text();
			if(initialInputValue!==value) {
				input.closest(".firer").trigger("change");
			}
			input.closest(".firer").trigger("focusout");
		}
		
		dragStart=false;
	}
	
	function checkExternalTap(event, data) {
		var $target = $(event.target || event.srcElement);
		if($target.closest(".dropdown, .nativedropdown")[0]===undefined || !$target.is(".dropdown, .nativedropdown")) {
		  jQuery(".dropdown, .nativedropdown").removeClass("pressed");
		  event.stopPropagation();
		}
		
		dragStart=false;
	}
	
	function isComponentAssociatedinDataGrid(newInput) {
		hasDatagridParent = newInput.parents(".datagrid"),
		isOAAssociated = newInput.find("input[name]"),
		OAName = isOAAssociated ? (isOAAssociated.attr("name")!="") ? isOAAssociated.attr("name") : undefined : undefined;
		if(hasDatagridParent && OAName)
			return true;
		else return false;
	}
	
	/*********************** END OTHER METHODS ************************/
	
	
	/*********************** START STATIC ACCESS METHODS ************************/
	
	function bindClickEvents(){
		$("#jim-container").on("mousedown",checkExternalClick);
		if(window.jimDevice.isMobile() && window.jimUtil.isMobileDevice()) {
			$("#simulation").on("mousedown",checkExternalTap);
		}
	}
	
	function unbindClickEvents(){
		$("#jim-container").off("mousedown",checkExternalClick);
		if(window.jimDevice.isMobile() && window.jimUtil.isMobileDevice()) {
			$("#simulation").off("mousedown",checkExternalTap);
		}
	}
	
	var controller = {
		"keyboardKey":"#jim-android-kb",
		"dropdownKey":"#jim-android-dd",
		"dateKey":"#jim-android-da",
		"loadSimulator": function() {
			addMask();
			this.loadKeyboard();
			this.loadDropDown();
			jimDevice.dateControllers['android12'].activate();
			bindClickEvents();
		},
		"bindContainer" : function () {
			if (!window.jimUtil.isMobileDevice()) 
			  $("#jim-container").mousedown(checkExternalClick);
		},
		"unloadSimulator": function() {
			removeMask();
			this.unloadKeyboard();
			this.unloadDropDown();
			jimDevice.dateControllers['android12'].deactivate();
			unbindClickEvents();
		},
		"loadKeyboard": function() {
			createKeyboard();
			bindKeyboard();
			var controller=this;

			jQuery("#simulation").delegate(".text:not(.number, .email, .inputurl) input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				lastKeyboard = "#letters";
				var newInput = jQuery(this).closest(".text");
				initialInputValue = newInput.find("input").val();
				if(newInput.length===0) {
					newInput = jQuery(this).closest(".password");
					initialInputValue = newInput.find("input").val(); 
				}
				if(newInput.length===0) {
					newInput = jQuery(this).closest(".textarea");
					initialInputValue = newInput.val();
				}
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".number input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				lastKeyboard = "#letters";
				var newInput = jQuery(this).closest(".number");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".email input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				if(jQuery("body.iphone5").length>0)
					lastKeyboard = "#letters";
				else
					lastKeyboard = "#email";
				var newInput = jQuery(this).closest(".email");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
			
			jQuery("#simulation").delegate(".inputurl input:not([readonly])", "click, focusin", function(event, data) {
				if(!jQuery(controller.keyboardKey).css("display") || jQuery(controller.keyboardKey).css("display") === "none") {
					jQuery(controller.keyboardKey).show("slide", { direction: "down" }, 300);
				}
				if(jQuery("body.iphone5").length>0)
					lastKeyboard = "#letters";
				else
					lastKeyboard = "#url";
				var newInput = jQuery(this).closest(".inputurl");
				initialInputValue = newInput.find("input").val();
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					input = newInput;
					controller.resetWidgets();
					setStartCaretPosition(input);
					//input.closest(".firer").trigger("focusin");
				}
			});
		},
		"unloadKeyboard": function() {
			var controller = this;
			if(jQuery(controller.keyboardKey).length>0) {
				jQuery(controller.keyboardKey).off();
				jQuery("#simulation").undelegate(".text:not(.number, .email, .inputurl) input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "click");
				jQuery("#simulation").undelegate(".text:not(.number, .email, .inputurl) input:not([readonly]), .password input:not([readonly]), textarea:not([readonly])", "focusin");
				if(jQuery(controller.keyboardKey).css("display") !== "none") {
					jQuery(controller.keyboardKey).hide();
					//jQuery(controller.keyboardKey).hide("slide", { direction: "down" }, 300);
				}
				jQuery(controller.keyboardKey).remove();
			}
		},
		"loadDropDown": function() {
			createDropDown();
			bindDropDown();
			var controller=this;
			jQuery("#simulation").delegate(".dropdown:not([readonly]), .nativedropdown:not([readonly])", "click", function(event, data) {
				if(jimUtil.isAlternateModeActive())
				  return;
				controller.resetWidgets();
				fillDropDownOptions($(event.target).closest(".dropdown, .nativedropdown"));
				jQuery("#jim-android-mask").show();
				if(!jQuery(controller.dropdownKey).css("display") || jQuery(controller.dropdownKey).css("display") === "none") {
					jQuery(controller.dropdownKey).show();
					$(event.target).closest(".dropdown, .nativedropdown").closest(".firer").trigger("focusin");
					jQuery(controller.dropdownKey).trigger("openedDD");
				}
				var newInput = jQuery(this);
				if(!input || (newInput.length>0 && input[0]!==newInput[0])) {
					if(input) {
						jQuery(".dropdown, .nativedropdown").removeClass("pressed");
					}
					input = newInput;
				}
				initialInputValue = input.children(".valign").children(".value").text();
				//input.closest(".firer").trigger("focusin");
			});
		},
		"unloadDropDown": function() {
			var controller=this;
			if(jQuery(controller.dropdownKey).length>0) {
				jQuery(controller.dropdownKey).off();
				jQuery("#simulation").undelegate(".dropdown:not([readonly]), .nativedropdown:not([readonly])", "click");
				if(jQuery(controller.dropdownKey).css("display") !== "none")
					jQuery(controller.dropdownKey).hide("slide", { direction: "down" }, 100);
				jQuery(controller.dropdownKey).remove();
				jQuery("#jim-android-mask").remove();
			}
		},
		"resetWidgets": function() {
			var controller=this;
			//keyboard
			if(jQuery(input).closest(".number").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'block');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			else if(jQuery(input).closest(".inputurl").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'block');
			}
			else if(jQuery(input).closest(".email").find("input").length > 0) {
				jQuery(controller.keyboardKey +" #letters").css('display', 'none');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'block');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			else  {
				jQuery(controller.keyboardKey +" #letters").css('display', 'block');
				jQuery(controller.keyboardKey +" #numbers").css('display', 'none');
				jQuery(controller.keyboardKey +" #signs").css('display', 'none');
				jQuery(controller.keyboardKey +" #email").css('display', 'none');
				jQuery(controller.keyboardKey +" #url").css('display', 'none');
			}
			deactivateSpecialKeys();
		},
		"hideWidgets": function() {
			var controller = this;
			//keyboard
			jQuery(controller.keyboardKey).css('display', 'none');
			//dropdown
			jQuery(controller.dropdownKey).css('display', 'none');
		}
	};
	window.jimDevice.controllers["android12"] = controller;
	
	/*********************** END STATIC ACCESS METHODS ************************/
	
}) (window);