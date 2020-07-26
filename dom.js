var x = document.getElementById("money");

var form = document.getElementById("form");
var change = document.getElementById("change");

form.addEventListener("submit",


 function (event){
    if (!x.value) {
        alert("Add the Value to Proceed")
    }else {

        var result = (parseFloat(x.value) * 0.05);
        console.log(result);
    
        change.innerText="Result: "+"$"+ result;
        console.log(result);
        alert(result);
        event.preventDefault();

    }

    
});

