document.getElementById("clk-btn").addEventListener("click", function(){

    let number1 = document.getElementById("fisrtNumber").value
    let number2 = document.getElementById("secondNumber").value

      try {
        
        document.getElementById("result").innerHTML = divide(Number(number1),Number(number2))
      } catch (error){
        document.getElementById("result").innerHTML = error
      }
  
})

function divide(num1 ,num2){
if (num2 == 0){
    throw "can not divide the number"
}
    return num1 / num2

}
function divide22222222(num1 ,num2){
  if (num2 == 0){
      throw "can not divide the number"
  }
      return num1 / num2
  
  }
