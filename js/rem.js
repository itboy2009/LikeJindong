(function(doc,win){
	var docEl=doc.documentElement,
	resizeEvt="orientationchange" in window?"orientationchange":"resize",
	relalc=function(){
		var clientWidth=docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize=clientWidth/7.5+"px"
	}
	if(!addEventListener) return;
	win.addEventListener(resizeEvt,relalc,false);
	doc.addEventListener("DOMContentLoaded",relalc,false);
})(document,window)
// var w=window.screen.width;
// var target=750;
// var scale=w/750;
// var meta=document.createElement('meta');
// meta.name='viewport';
// meta.content='initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale;
// document.head.appendChild(meta)