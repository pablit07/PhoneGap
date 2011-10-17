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
        
        self.$results.html('');
        
        var identifier = $(this).attr('identifier');

        if (!identifier) { return; }

        var action = "action_" + identifier;
        
        if (self[action] && typeof self[action] == 'function') {
            self[action]();
        } else {
            console.warn("Warning: Action " + action + " is not defined");
        }

    });

    this.$results = $('div#Results');

};

App.prototype.action_changeGrid = function() {
    this.$body.toggleClass('alignedLeft');
    this.$body.toggleClass('grid');

    return false;
}

App.prototype.action_accelerometer = function() {

    var self = this;

    this.$results.html(_text);

    var threshold = 1;

    function onSuccess(acceleration) {

        self.lastAcc = self.lastAcc || {x: 0, y: 0, z: 0};

        var change = self.lastAcc.z - acceleration.z;

        if (Math.abs(change) > threshold) {
            if (change > 0) {
               self.$results.scrollTop( self.$results.height() );
            } else {
                self.$results.scrollTop( 0 );
            }
        }

        self.lastAcc = acceleration;
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 100 };

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    return false;
}

App.prototype.action_vibrate = function() {
    navigator.notification.vibrate(2000);

    return false;
}

App.prototype.action_ajax = function() {
    this.$results.load("http://http://wallst.com/business.asp");

    return false;
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

var _text = "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>";

