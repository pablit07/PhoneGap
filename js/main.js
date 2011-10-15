//main scripts file

function App() {
    if (!this instanceof App) { return new App(); }

    var self = this;
    
    this.$body = $('body');
    
    $('div.actionButton', this.$body[0]).each(function() {
        var $el = $(this);
        var $text = $('span', this);
        var x = ($el.width() - $text.width()) / 2;
        var y = ($el.height() - $text.height()) / 2;
        $text.css({'left': x+ 'px', 'top': y + 'px'});
    });

    this.$body.delegate('div.actionButton', 'click', function(e) {
        
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

App.prototype.action_changeGrid = function() {
    this.$body.toggleClass('alignedLeft');
    this.$body.toggleClass('grid');
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

