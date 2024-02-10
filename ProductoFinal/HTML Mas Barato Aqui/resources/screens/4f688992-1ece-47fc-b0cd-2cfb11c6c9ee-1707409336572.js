jQuery("#simulation")
  .on("click", ".s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#D8CFE8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/82f8fc53-d3a0-42a1-bba5-ee9169533251",
                    "transition": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4f688992-1ece-47fc-b0cd-2cfb11c6c9ee #s-Input_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });