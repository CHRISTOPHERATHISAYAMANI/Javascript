var app  ={};
var foo= 1;
app.show = function(msg) {
 return function()
 {
    
    console.log('Hello World');
    msg = document.getElementById("txt");
    var msgDiv = document.getElementById('msg');

    msgDiv.innerHTML = "Name Spacing  with JS"+msg;
 }

}
app.init =function()
{
    var btnClick =document.getElementById("btn");
    btnClick.onclick = this.show("hello");
}
app.hoisting = function ()
{
if(!foo)
{
     foo= 10;
}
alert(foo);
}