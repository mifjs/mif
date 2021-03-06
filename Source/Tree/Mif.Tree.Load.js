/*
Mif.Tree.Load
*/

Mif.sheet.addRules({
	
	'tree .loader-icon': {
		'background-image': 'loader.gif'.toMifImg()
	}
	
});

Mif.Tree.implement({

	load: function(options){
		var loader=this.loader;
		loader.load(this, options);
		return this;
	}
	
});

Mif.Tree.Item.implement({
	
	load: function(options){
		var loader=this.loader||this.owner.loader;
		loader.load(this, options);
		return this;
	}
	
});


Mif.Tree.Loader=new Class({
	
	Implements: [Events],
	
	initialize: function(options){
		this.options=options;
		this.defaultOptions={
			isSuccess: $lambda(true),
			secure: true,
			onSuccess: this.onSuccess,
			method: 'get'
		};
	},
	
	toOptions: function(options){
		if(!options) return {};
		if($type(options)=='array'){
			options={loadData: options};
		}
		if($type(options)=='string'){
			options={url: options};
		}
		return options;	
	},
	
	load: function(item, options){
		item.$loading=true;
		options=this.toOptions(options);
		var defaultOptions=$unlink(this.defaultOptions);
		var localOptions={};
		var globalOptions=this.toOptions($lambda(this.options)(item));
		if(item instanceof Mif.Tree.Item){
			localOptions=this.toOptions($lambda(item.property.loaderOptions)(item));
		}
		options=$extend($extend($extend(defaultOptions, globalOptions), localOptions), options);
		var node, tree;
		if(item instanceof Mif.Tree.Item){//node
			node=item;
			tree=node.owner;
		}else{
			tree=item;
		}
		if(item instanceof Mif.Tree.Item){
			item.getElement('icon').addClass('loader-icon');
		}
		var struct={node: node, owner: tree};
		options.loadData=options.loadData||options.json;
		if(options.loadData){
			return this.loadData(options.loadData, struct);
		}
		var request = new Request.JSON(options);
		request.struct=struct;
		request.loader=this;
		request.send();
	},
	
	onSuccess: function(data){
		this.loader.loadData(data, this.struct);
	},
	
	/*onError: function(){
		
	},*/
	
	loadData: function(data, struct){
		var node=struct.node;
		var tree=struct.owner;
		if(!node && tree.forest){
			tree.root=new Mif.Tree.Item({}, {
				owner: tree,
				parentNode: null
			});
			struct.node=tree.root;
		}
		this.dataToObj(data, struct);
		if(node){
			node.$loading=null;
			tree.update(node);
			node.fireEvent('load');
			tree.fireEvent('load', node);
		}else{
			tree.$loading=null
			tree[tree.forest ? 'drawForestRoot' : 'drawRoot'](tree);
			tree.$getIndex();
			tree.fireEvent('load');
		}
	},
	
	dataToObj: function(data, struct){
		var parent=struct.node;
		var tree=struct.owner;
		var children=data;
		for( var i=children.length; i--; ){
			var child=children[i];
			var subChildren=child.children;
			var node=new Mif.Tree.Item(child, {
				owner: tree,
				parentNode: parent
			});
			if( tree.forest || parent != undefined){
				parent.children.unshift(node);
			}else{
				tree.root=node;
			}
			if(subChildren && subChildren.length){
				arguments.callee(subChildren, {node: node, owner: tree});
			}
		}
		if(parent) parent.property.loaded=true;
	}
	
});
