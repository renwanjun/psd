window.onload=function(){
    // console.log('ss');

    console.log(document.implementation.hasFeature('MouseEvents','2.0'))
    console.log(document.implementation.hasFeature('MouseEvent','3.0'))

    // EventUtil.addHandle(document,'mouseenter',function(evt){
    //     alert('dbclick');
    //     // evt.preventDefault();
    // })

    EventUtil.addHandle(window,'hashchange',function(evt){
        console.log('submit');
        // evt.preventDefault();
    })

    var form=document.forms.staff;
    EventUtil.addHandle(form,'submit',function(evt){
        console.log('submit');
        // evt.preventDefault();
    })

    var submitBtn=form.elements.submit;
    EventUtil.addHandle(submitBtn,'click',function(evt){

        console.log('click')
        // evt.preventDefault();
    })
    
    EventUtil.addHandle(form.elements.name,'change',function(evt){
        console.log(this.value)
    })

    EventUtil.addHandle(form.elements.name,'blur',function(evt){
        console.log('blur')
    })

    EventUtil.addHandle(form.elements.name,'focus',function(evt){
        // console.log(this.value)
        this.select();
    })
    
    EventUtil.addHandle(form.elements.name,'select',function(evt){
        console.log(EventUtil.getSelectedText(this))
        // this.select();
    })

    EventUtil.addHandle(form.elements.describtion,'change',function(evt){
        console.log(this)
        console.log(this.value)
    })
    // submitBtn.addEventListener('click',function(evt){
    //     console.log('click')
    //     evt.preventDefault();
    // })

    var o={
        x:1,
        y:2
    }
    
}