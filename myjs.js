function insert(num)
{
    document.form.textview.value=document.form.textview.value+num;
}
function equal() {
    try {
        document.form.textview.value = eval(document.form.textview.value);
    }
    catch (error) {
        if(document.form.textview.value=='Infinity')
        document.form.textview.value = "VALUE ERROR";
        else
        {
            document.form.textview.value='FORMAT ERROR';
        }
    }
}
function clean(){
    document.form.textview.value="";
}
function  back(){
    var previous=document.form.textview.value;
    document.form.textview.value=previous.substring(0,previous.length-1);
}

