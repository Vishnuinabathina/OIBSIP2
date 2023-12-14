function swap1 (){
    let inp1 = Number(document.querySelector(".input1").value);
    let inp2 = document.querySelector(".input2").value;
    let inp3 = document.querySelector(".inp3").value;
    let input = document.querySelector(".input2");
    let input1 = document.querySelector(".inp3");
    input.value = inp3;
    input1.value = inp2;
}


function deg() {
    let inp1 = Number(document.querySelector(".input1").value);
    let inp2 = document.querySelector(".input2").value;
    let inp3 = document.querySelector(".inp3").value;

    if (isNaN(inp1)) {
        document.querySelector(".out").innerHTML = "enter valid input degree to convert";
    }
    else{
        
        if (inp2 === "Fahrenheit") {

            if (inp3 === "Celsius") {

            inp1 = (inp1 - 32 ) * 1.8;
            document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °C";
        }

        else if(inp3 === "Fahrenheit") {
            document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °F";
        }

        else  if(inp3 === "Kelvin"){
            inp1 = (inp1 + 459.96) * 1.8;
            document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °K";
        }
    }

        else if(inp2 === "Celsius") {
            if (inp3 === "Celsius") {
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °C";
            }
            else if (inp3 === "Fahrenheit") {

                inp1 = (inp1 * 1.8 ) +32;
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °F";
            }
            else if (inp3 === "Kelvin") {
                inp1 = inp1 + 273.15;
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °K";
            }
         }

         if (inp2 === "Kelvin") {
            if (inp3 === "kelvin") {
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °K";
            }
            else if(inp3 === "Fahrenheit") {

                inp1 = (inp1 * 1.8) - 459.67;
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °F";
            }
            else if(inp3 === "Celsius") {

                inp1 = inp1 - 273.15;
                document.querySelector(".out").innerHTML = inp1.toFixed(2) + " °C";

            }
         }
}
}
document.querySelector(".call").addEventListener("click",swap1)
document.querySelector(".sub").addEventListener("click",deg)
