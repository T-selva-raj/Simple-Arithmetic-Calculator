

var result = document.getElementById('screen');
function v(val){

    result.value +=val;
    event.preventDefault();
}
function d(){
    try{
        if(result.value == ""){
            // throw new IllegalArgumentException("Enter the value");
            event.preventDefault();
            result.value="";
        }
       else{
        result.value=eval(result.value);
        event.preventDefault();
       }
    }
    catch(e){
        window.alert("error");
    }
    
}
function del(){
    result.value=result.value.slice(0,-1);
    event.preventDefault();
}
function c(){
    result.value=" "
    event.preventDefault();
}