#!/opt/local/bin/python2.5
 
f=open('result-css.js', 'w')
 
#selector='window tbar > bg.tbar'#window-tbar
#selector='window > bg'#window-bg
selector='window.blur > bg'#window-bg-blur
ie6='.ie6'
 
 
#coords=(58, 53, 65, 60) #window-bg
coords=(42, 42, 37, 51) #window-bg-blur
#coords=(5, 5, 5, 5) #window-tbar
 

left, top, right, bottom = map(str, coords)
 
#padding_left='54'#window-bg

#padding_top='54'#window-bg
#l='-27'#window-bg
#t='-16'#window-bg
padding_left='39'#window-bg-blur
padding_top='39'#window-bg-blur
l='-19'#window-bg-blur
t='-8'#window-bg-blur


dir='../../Source/images/'
#img='window-bg-' #window-bg
img='window-bg-blur-' #window-bg-blur
#img='window-tbar-' #window-tbar
ext='png'
 
imgs={
	"tl": img+'tl'+'.'+ext,
	"tr": img+'tr'+'.'+ext,
	"bl": img+'bl'+'.'+ext,
	"br": img+'br'+'.'+ext,
	"t": img+'t'+'.'+ext,
	"b": img+'b'+'.'+ext,
	"l": img+'l'+'.'+ext,
	"r": img+'r'+'.'+ext,
	"c": img+'c'+'.'+ext
}
 
css=''
#1
css+='"'+selector+', '+selector+' div": {\n'+'"position": "absolute",\n'+'"overflow": "hidden"\n'+'},\n\n'
#2
css+='"'+selector+' ": {\n'+'"left":"'+l+'px",\n'+'"top": "'+t+'px",\n'+'"padding-left":"'+padding_left+'px",\n'+'"padding-top":  "'+padding_top+'px",\n"width": "100%",\n"height": "100%"\n},\n\n'
#3
css+='"'+selector+' .top": {\n'+'"height": '+'"'+top+'px",\n'+'"width": "100%",\n'+'"position": "relative",\n'+'"top":"-'+padding_top+'px",\n'+'"padding-left":"'+padding_left+'px",\n'+'"padding-top": "'+padding_top+'px",\n'+'"left":"-'+padding_left+'px"\n'+'},\n\n'
#4
css+='"'+selector+' .center": {\n'+'"height": "100%",\n'+'"width": "100%",\n'+'"position": "relative",\n'+'"top":"-'+str(int(bottom)+int(top)+2*int(padding_top))+'px",\n'+'"padding-left":"'+padding_left+'px",\n'+'"padding-top": "'+padding_top+'px",\n'+'"left":"-'+padding_left+'px"\n'+'},\n\n'
#5
css+='"'+selector+' .bottom": {\n'+'"height": '+'"'+bottom+'px",\n'+'"width": "100%",\n'+'"top":"-'+str(int(bottom)+int(top)+2*int(padding_top))+'px",\n'+'"position": "relative",\n'+'"padding-left":"'+padding_left+'px",\n'+'"left":"-'+padding_left+'px"'+'\n},\n\n'
#6
css+='"'+selector+' .tl": {\n'+'"width": '+'"'+left+'px",\n'+'"height": '+'"'+top+'px",\n'+'"background": '+'"'+imgs['tl']+'".toMifImg()'+',\n'+'"left":"0px",\n'+'"top": "0px"\n'+'},\n\n'
#7
css+='"'+selector+' .tr": {\n'+'"width": '+'"'+right+'px",\n'+'"height": '+'"'+top+'px",\n'+'"float": "right",\n'+'"position": "relative",\n'+'"background": '+'"'+imgs['tr']+'".toMifImg(),\n'+'"top":"-'+padding_top+'px"\n'+'},\n\n'
#8
css+='"'+selector+' .t": {\n'+'"height": '+'"'+top+'px",\n'+'"width": "100%",\n'+'"left":"-'+str(int(right)+int(padding_left))+'px",\n'+'"top": "0",\n'+'"clip": "rect(auto auto auto '+str(int(left)+int(right)+int(padding_left))+'px)",\n'+'"background": '+'"'+imgs['t']+'".toMifImg()'+',\n'+'"padding-left":"'+padding_left+'px"\n'+'},\n\n'
#9
css+='"'+selector+' .bl": {\n'+'"width": '+'"'+left+'px",\n'+'"height": '+'"'+bottom+'px",\n'+'"background": '+'"'+imgs['bl']+'".toMifImg(),\n'+'"left":"0px"\n'+'},\n\n'
#10
css+='"'+selector+' .br": {\n'+'"width": '+'"'+right+'px",\n'+'"height": '+'"'+bottom+'px",\n'+'"float": "right",\n'+'"position": "relative",\n'+'"background": '+'"'+imgs['br']+'".toMifImg()'+'\n'+'},\n\n'
#11
css+='"'+selector+' .b": {\n'+'"height": '+'"'+bottom+'px",\n'+'"width" : "100%",\n'+'"left":"-'+str(int(right)+int(padding_left))+'px",\n'+'"clip": "rect(auto auto auto '+str(int(left)+int(right)+int(padding_left))+'px)",\n'+	'"background": '+'"'+imgs['b']+'".toMifImg(),\n'+'"padding-left":"'+padding_left+'px"\n'+'},\n\n'
#css+='"'+ie6+' '+selector+' .b": {\n'+'"left":"-'+right+'px",\n'+'"clip": "rect(auto auto auto '+str(int(left)+int(right))+'px)"\n'+'},\n\n'
css+='"'+selector+' .l": {\n'+'"height" : "10000px",\n'+'"width": "'+left+'px",\n'+'"left":"0",\n'+'"top": "'+str(int(top)+int(bottom))+'px",\n'+'"background": '+'"'+imgs['l']+'".toMifImg()'+'\n'+'},\n\n'
css+='"'+selector+' .r": {\n'+'"height" : "10000px",\n'+'"width": "'+right+'px",\n'+'"top": "'+str(int(top)+int(bottom)-int(padding_top))+'px",\n'+'"float": "right",\n'+'"position": "relative",\n'+'"background": '+'"'+imgs['r']+'".toMifImg()'+'\n'+'},\n\n'
css+='"'+selector+' .c": {\n'+'"height": "10000px",\n'+'"width" : "100%",\n'+'"left":"-'+str(int(right)+int(padding_left))+'px",\n'+'"top": "'+str(int(top)+int(bottom))+'px",\n'+'"clip": "rect(auto auto auto '+str(int(left)+int(right)+int(padding_left))+'px)",\n'+'"background": '+'"'+imgs['c']+'".toMifImg(),\n'+'"padding-left":"'+padding_left+'px"\n'+'}\n\n'
#css+='"'+ie6+' '+selector+' .c": {\n'+'"left":"-'+right+'px",\n'+'"clip": "rect(auto auto auto '+str(int(left)+int(right))+'px)"\n'+'}'
 
 
f.write(css)