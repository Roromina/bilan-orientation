console.log("JS chargé");
document.getElementById('bilan-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
  
    const data = {
      nom: form.nom.value,
      q1: form.q1.value,
      q2: form.q2.value,
      q20: "", // à compléter plus tard
      metier: form.metier.value
    };
  
    fetch("https://script.google.com/macros/s/AKfycbzRMAPLuUMlzea9OEMvdYsi2J6Bs9kNB1gHd1VzBV0GdJrEigT71xdPdxELfIpiMCog/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('confirmation').style.display = 'block';
        form.reset();
      } else {
        alert("Une erreur est survenue. Réessaye.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Erreur de connexion. Vérifie ta connexion Internet.");
    });
  });
  