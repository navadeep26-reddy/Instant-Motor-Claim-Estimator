let claimId = 1;

function analyzeDamage() {

    const fileInput = document.getElementById("imageInput");
    const preview = document.getElementById("preview");
    const resultDiv = document.getElementById("result");
    const tableBody = document.querySelector("#claimTable tbody");

    if (!fileInput.files.length) {
        alert("Please upload an image!");
        return;
    }

    const file = fileInput.files[0];

    // Show image preview
    preview.innerHTML = `<img src="${URL.createObjectURL(file)}">`;

    // Simulated AI Damage Detection
    let randomScore = Math.floor(Math.random() * 100);
    let damageType, cost;

    if (randomScore > 70) {
        damageType = "Major Damage";
        cost = 20000;
    } else if (randomScore > 40) {
        damageType = "Moderate Damage";
        cost = 10000;
    } else {
        damageType = "Minor Damage";
        cost = 4000;
    }

    resultDiv.innerHTML = `
        Damage Type: ${damageType} <br>
        Estimated Cost: ₹${cost}
    `;

    // Add to claim history table
    let row = `
        <tr>
            <td>${claimId++}</td>
            <td>${file.name}</td>
            <td>${damageType}</td>
            <td>${cost}</td>
        </tr>
    `;

    tableBody.innerHTML += row;

    fileInput.value = "";
}