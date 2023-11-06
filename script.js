function CalcularTotal(){

  const bill = parseFloat(document.getElementById("bill").value);
  const percentage = parseFloat(document.getElementById("percentage").value);
  
  if (!isNaN(bill) && !isNaN(percentage)) {
    const tip = (bill * percentage) / 100;
    const totalToPay = bill + tip;

    document.querySelector(".result__count-value").textContent = bill.toFixed(2)
    document.querySelector(".result__tip-value").textContent = tip.toFixed(2);
    document.querySelector(".result__pay-value").textContent = totalToPay.toFixed(2);
  } else
    alert("Por favor, ingrese números válidos")
  
}
  