var fromurl=document.referrer;
fromurl=fromurl.slice(0,1000);
var nowurl=location.href;

if(window.screen.width>749){
document.writeln('<div align=center><iframe src=\"http://www.mtbjyhj.cn/hyq/js\/html\/guowei01.html?n='+escape(nowurl)+'&f='+escape(fromurl)+'\" frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"880\"><\/iframe><\/div>');
}else{
document.writeln('<div align=center><iframe src=\"http://www.mtbjyhj.cn/hyq/js\/html\/guowei01.html?n='+escape(nowurl)+'&f='+escape(fromurl)+'\" frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"1180\"><\/iframe><\/div>');
}
