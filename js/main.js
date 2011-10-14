//main scripts file

function App() {
    if (!this instanceof App) { return new App(); }

    var self = this;

    $('body').delegate('div.actionButton', 'click', function(e) {
        
        var identifier = $(this).attr('identifier');

        if (!identifier) { return; }

        var action = "action_" + identifier;

        if (self[action] && typeof self[action] == 'function') {
            self[action]();
        } else {
            console.warn("Warning: Action " + action + " is not defined");
        }

    });
    
    this.$results = $('div#results');

};

App.prototype.action_1 = function() {
    alert('1');
}

App.prototype.action_2 = function() {
    alert('2');
}

App.prototype.action_3 = function() {
    alert('3');
}

App.prototype.action_ajax = function() {
    alert('4');
}

App.prototype.action_custom1 = function() {
    alert('5');
}

App.prototype.action_custom2 = function() {
    alert('6');
}
    
    
var App = new App();

function Dialog(rInputs, oArgs) {

    if (!this instanceof Dialog) { return new Dialog(); }

    var rInputs = rInputs || [];
    var oArgs = oArgs || {};

    $.each(rInputs, function(i) {
        
    })
}
