
Mif.sheet.addRules({
	
	'tabs': {
		'width': '100%',
		'height': '100%',
		'position': 'absolute'
	},
	
	'tabs > header': {
		'position': 'absolute',
		'height': '24px',
		'width': '100%',
		'cursor': 'default'
	},
	
	'tabs > container': {
		'position': 'absolute',
		'top': '23px',
		'bottom': '0px',
		'width': '100%'
	},
	
	'tabs > header > tab': {
		'height': '22px',
		'margin-top': '1px',
		'display': 'inline-block',
		'position': 'relative',
		'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif'
	},
	
	'tabs > header > tab.selected': {
		'z-index': '2'
	},
	
	'tabs > container > content': {
		'position': 'absolute',
		'width': '100%',
		'top': '0px',
		'bottom': '0px',
		'display': 'none'
	},
	
	'tabs > container > content.selected': {
		'display': 'block'
	},
	
	//normal tabs styles
	
	'tabs > header tab': {
		'min-width': '70px'
	},
	
	'tabs > header text': {
		'position': 'relative',
		'display': 'inline-block',
		'height': '20px',
		'margin': '0 10px',
		'font-size': '12px'
	},
	
	'tabs > header bg.left': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-left.png'.toMifImg(),
		'width': '10px',
		'height': '100%'
	},
	
	'tabs > header bg.center': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-center.png'.toMifImg(),
		'left': '10px',
		'right': '10px',
		'height': '100%'
	},
	
	'tabs > header bg.right': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-right.png'.toMifImg(),
		'width': '10px',
		'height': '100%',
		'right': '0px'
	},
	
	'tabs > header bg.line': {
		'width': '100%',
		'height': '3px',
		'background': 'tab-line.png'.toMifImg(),
		'position': 'absolute',
		'left': '0',
		'bottom': '1px',
		'z-index': '1'
	},
	
	
	//mini tabs styles
	
	'tabs.mini > header text': {
		'position': 'relative',
		'display': 'inline-block',
		'height': '100%',
		'margin': '0 10px',
		'font-size': '10px'
	},
	
	'tabs.mini > header bg.left': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-mini-left.png'.toMifImg(),
		'width': '9px',
		'height': '100%'
	},
	
	'tabs.mini > header bg.center': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-mini-center.png'.toMifImg(),
		'left': '9px',
		'right': '9px',
		'height': '100%'
	},
	
	'tabs.mini > header bg.right': {
		'position': 'absolute',
		'display': 'inline-block',
		'background': 'tab-mini-right.png'.toMifImg(),
		'width': '9px',
		'height': '100%',
		'right': '0px'
	},
	
	'tabs.mini > header bg.line': {
		'width': '100%',
		'height': '3px',
		'background': 'tab-mini-line.png'.toMifImg(),
		'position': 'absolute',
		'left': '0',
		'bottom': '0',
		'z-index': '1'
	}
	
});