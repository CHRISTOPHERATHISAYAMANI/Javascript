(function(msg){
console.log(msg);
})("Helloworld Immediately Invoke funtion expression");


(function(){
    console.log("Immediately Invoke funtion expression without argument");
    })();

    (function ()
    {
        console.log("first Block")
        function display()
        {
            var disVar= "display block";
            console.log("second block");
function showInsideBl()
{
console.log(disVar);
}
showInsideBl();
        }
        display();
        var books =["Java",".net",'c','c++'];
        books.forEach(function (ele,indx){
            console.log("index",indx,"element",ele);
        })
    })();

 
    function closure()
    {
        var clos="This is closure Action";

        return function(){
            return clos;
        };
    }
    var closSample = closure();
    console.log(closure()());
    console.log(closSample());
