var EventUtil=(function(){
    // 跨浏览器DOM操作
    function Hack(){

    }
    Hack.prototype={
        constructor:Hack,
        addHandle:function(ele,type,handle){
            //其他支持标准事件模型的浏览器
            if(ele.addEventListener){
                ele.addEventListener(type,handle);
            }
            // ie8及以下浏览器
            else if(ele.attachEvent){
                ele.attachEvent('on'+type,handle);
            }
        },
        // 取得选择的文本
        getSelectedText:function(textbox) {
            if(textbox.selectionStart){
                return textbox.value.substring(textbox.selectionStart,textbox.selectionEnd)
            }else if(document.selection){
                return document.selection.createRange().text;
            }
        },
        // 跨浏览器取得字符编码
        getCharCode:function(evt){

        },
        focus:function(ele){
            if(ele.autfocus!==true){
                ele.focus();
            }
        },
        // 获取窗口的滚动偏移量
        getScrollOffsets:function(w){
            // 使用制定的窗口，如果不带参数则使用当前窗口
            w=w|| window;
            // 除了ie8及更早版本以外，其他浏览器都可以用
            if( w.pageXOffset !=null)return {x:w.pageXOffset,y:w.pageYOffset}
              
             // 对标准模式下的IE和所有浏览器
            if(document.compatMode=='CSS1Compact')return {x:document.documentElememt.scrollLeft,y:document.documentElement.scrollTop}
            
              
            // 怪异模式下的浏览器
            return {x:document.body.scrollLeft,y:document.body.scrollTop}
        }
          
    }
    // var eu=new Hack();
    return new Hack()
}())