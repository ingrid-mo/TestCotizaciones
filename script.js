document.addEventListener('DOMContentLoaded', function () {
    const inputPrice = document.getElementById("inputPrice");
    const plan = document.getElementById("plan");
    const resultElement = document.getElementById("result");
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener('click', function () {
        const iva = parseFloat(inputPrice.value) * 0.19;
        const finalPrice = parseFloat(inputPrice.value) + iva;
        const planValue = parseFloat(plan.value);
        const result = finalPrice * planValue;
        resultElement.textContent = result.toFixed(2);
    });

    
    plan.addEventListener('change', function () {
        const selectedPlan = parseFloat(plan.value);
        if (!isNaN(selectedPlan)) {
            const inputPriceValue = parseFloat(inputPrice.value);
            if (!isNaN(inputPriceValue)) {
                const iva = inputPriceValue * 0.19;
                const finalPrice = inputPriceValue + iva;
                const result = finalPrice * selectedPlan;
                resultElement.textContent = result.toFixed(2);
            }
        }
    });
});
