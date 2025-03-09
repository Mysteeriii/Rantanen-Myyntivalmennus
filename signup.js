document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const responseMessage = document.getElementById("response-message");

    const scriptURL = "https://script.google.com/macros/s/AKfycbwPfH-ygiBWAKc9K3OLqgC0x0mFRHgVNjWJY5cqirCoyckf8raFkAkGkHYfwSBH25xi/exec";
    
    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        });

        const result = await response.text(); // Google Apps Script palauttaa vastauksen tekstinä
        
        if (response.ok) {
            responseMessage.textContent = "✅ Ilmoittautuminen onnistui!";
            responseMessage.style.color = "green";
            document.getElementById("signup-form").reset(); // Tyhjennetään lomake
        } else {
            throw new Error(result);
        }
    } catch (error) {
        responseMessage.textContent = "❌ Ilmoittautuminen epäonnistui. Yritä uudelleen.";
        responseMessage.style.color = "red";
        console.error("Virhe:", error);
    }
});
