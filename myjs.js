/**
 * Created by 44623 on 2019/10/16.
 */
function insert(num) {
    document.form.textview.value=document.form.textview.value+num;
}
//利用eval（）函数计算输入的字符串
function  equal() {
    var number = document.form.textview.value;
    if (number) {
        document.form.textview.value = eval(number);
    }
}
function clean(){
    document.form.textview.value="";
}
//清除键
//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
function  back(){
    var previous=document.form.textview.value;
    document.form.textview.value=previous.substring(0,previous.length-1);
}
