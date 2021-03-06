
/*
    common definitions for VAST.js  
*/

//
// utilities
//

// define log if not defined
if (typeof global.LOG === 'undefined') {
	var logger  = require('./common/logger');
	global.LOG  = new logger();

	// set default error level
	LOG.setLevel(3);
}


//
// VAST & VON
//
global.UTIL			= require('./common/util');

global.VAST         = require('./types');
global.VAST.net     = require('./net/vast_net');
global.VAST.client  = require('./client');
global.VAST.matcher = require('./matcher');

// ID definitions
global.VAST.ID_UNASSIGNED = 0;
global.VAST.ID_GATEWAY    = 1;

// TODO: find a better way to store this? (maybe in msg_handler?)
global.VAST.state = {
    ABSENT:         0,
   // INIT:           1,           // init done
    JOINING:        2,           // different stages of join
    JOINED:         3
};

global.VAST.priority = {
    HIGHEST:        0,
    HIGH:           1,
    NORMAL:         2,
    LOW:            3,
    LOWEST:         4
};

// TODO: combine into nicer-looking global
global.VAST.msgtype = {
    BYE:        0,  // disconnect
    PUB:        1,  // publish request  
    SUB:        2   // subscribe request
};

global.VAST.msgstr = [
    'BYE',
    'PUB',  
    'SUB'
];

global.VON          = {
    peer: require('./VON_peer')
};

// configurable settings
global.VAST.Settings = {
	port_gateway:	37700,
	IP_gateway:		'127.0.0.1'	
};
