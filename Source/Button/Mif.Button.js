
Mif.sheet.addRules({

	'bt': {
		'cursor': 'default',
		'overflow': 'hidden',
		'height': '22px',
		'min-width': '60px',
		'display': 'inline-block',
		'text-align': 'center',
		'font-size': '12px',
		'position': 'relative',
		'font-family': '"Lucida Grande", "Helvetica", Arial, sans-serif',
		'white-space': 'nowrap',
		'padding': '0 5px',
		'background-image': 'button-right.png'.toMifImg(),
		'background-repeat': 'no-repeat',
		'background-position': 'right 0'
	},
	
	'bt bg': {
		'background-image': 'button-left.png'.toMifImg(),
		'background-repeat': 'no-repeat',
		'width': '50px',
		'display': 'inline-block',
		'height': '22px',
		'position': 'absolute',
		'left': '0px',
		'top': '0'
	},
	
	'bt.hover': {
		'background-image': 'button-hover-right.png'.toMifImg()
	},
	
	'bt.hover bg': {
		'background-image': 'button-hover-left.png'.toMifImg()
	},
	
	'bt.active.hover': {
		'background-image': 'button-active-hover-right.png'.toMifImg()
	},
	
	'bt.active.hover bg': {
		'background-image': 'button-active-hover-left.png'.toMifImg()
	},
	
	'bt.active': {
		'background-image': 'button-right.png'.toMifImg()
	},
	
	'bt.active bg': {
		'background-image': 'button-left.png'.toMifImg()
	},
	
	'bt text': {
		'display': 'inline-block',
		'position': 'relative',
		'height': '22px',
		'vertical-align': 'middle',
		'line-height': Browser.Engine.trident ? (Browser.Engine.trident6 ? '20px' : '19px') : '22px',
		'text-shadow': '1px 1px 0 #F2F2F2',
		'font-weight': Browser.Platform.mac ? 'none' : 'bold',
		'color': '#000',
		'z-index': '1'
	},
	
	'bt text.shadow': {
		'position': 'absolute',
		'top': Browser.Engine.trident5 ? '2px' : '1px',
		'margin-left': '1px',
		'color': '#F2F2F2'
	},
	
	'bt icon': {
		'width': '20px',
		'height': '100%',
		'display': 'inline-block',
		'vertical-align': 'middle',
		'position': 'relative'
	}
	
});


Mif.Button=new Class({

	Implements: [Events, Options],
	
	options: {
		text: '',
		styles: {
		}
	},
	
	initialize: function(options){
		this.setOptions(options);
		this.property={};
		this.property.name=this.options.name;
		this.bound={};
		var html;
		if(Browser.Engine.trident){
			html='<bg></bg><icon></icon><text class="shadow">'+options.text+'</text><text>'+options.text+'</text>';
		}else{
			html='<bg></bg><icon></icon><text>'+options.text+'</text>'
		}
		this.element=new Element('bt').inject(document.body).set('html', html);
		this.element.setStyles(this.options.styles);
		this.positioning();
		this.initEvents();
	},
	
	inject: function(element, how){
		this.element.inject(element, how);
		return this;
	},
	
	setStyles: function(styles){
		this.element.setStyles(styles);
		this.autoWidth();
	},
	
	positioning: function(){
		var width=this.element.clientWidth-4;
		this.element.getElement('bg').setStyle('width', width);
		if(Browser.Engine.trident){
			this.element.getElement('text.shadow').setStyle('left', this.element.getElements('text')[1].offsetLeft);
		}
	},
	
	set: function(prop, value){
		if(arguments.length==2){
			this.setProperty(prop, value)
		}else{
			for(var p in prop){
				this.setProperty(p, prop[p]);
			}
		}	
		return this;
	},
	
	get: function(p){
		return this.property[p];
	},
	
	setProperty: function(p, v){
		this.property[p]=v;
		if(p=='text'){
			this.element.getElements('text').set('html', v);
			this.positioning();
		}
	},
	
	initEvents: function(){
		$extend(this.bound, {
			onMouseleave: this.onMouseleave.bind(this),
			onMouseenter: this.onMouseenter.bind(this),
			onMousedown: this.onMousedown.bind(this),
			onMouseup: this.onMouseup.bind(this),
			onClick: this.onClick.bind(this)
		});
		this.element.addEvents({
			mouseleave: this.bound.onMouseleave,
			mouseenter: this.bound.onMouseenter,
			mousedown: this.bound.onMousedown,
			click: this.bound.onClick
		});
		if(Browser.Engine.trident){
			this.element.addEvent('selectstart', $lambda(false));
		}
		Mif.addEvent('mouseup', this.bound.onMouseup)
		
	},
	
	onMouseleave: function(){
		this.element.removeClass('hover');
	},
	
	onMouseenter: function(){
		this.element.addClass('hover');
	},
	
	onClick: function(){
		this.fireEvent('click');
	},
	
	onMousedown: function(event){
		event.preventDefault();
		this.element.addClass('active');
	},
	
	onMouseup: function(){
		this.element.removeClass('active');
	}
	
});
