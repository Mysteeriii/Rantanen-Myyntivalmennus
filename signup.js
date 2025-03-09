<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rantanen Myyntivalmennus</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Tervetuloa myyntivalmennukseen!</h1>
        <p>Ilmoittaudu mukaan täyttämällä alla oleva lomake.</p>
        
        <form id="signup-form">
            <label for="name">Nimi:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Sähköposti:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Ilmoittaudu</button>
        </form>
    </div>
    
    <script>
        document.getElementById("signup-form").addEventListener("submit", async function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            
            const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email })
            });
            
            if (response.ok) {
                alert("Ilmoittautuminen onnistui!");
            } else {
                alert("Ilmoittautuminen epäonnistui. Yritä uudelleen.");
            }
        });
    </script>
</body>
</html>
