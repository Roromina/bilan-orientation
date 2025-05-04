console.log("JS chargé");

document.getElementById('bilan-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    nom: form.nom.value,
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value,
    q4: form.q4.value,
    q5: form.q5.value,
    q6: form.q6.value,
    q7: form.q7.value,
    q8: form.q8.value,
    q9: form.q9.value,
    q10: form.q10.value,
    q11: Array.from(form.querySelectorAll('input[name="q11"]:checked')).map(e => e.value).join(", "),
    q13: form.q13.value,
    q14: form.q14.value,
    q15: form.q15.value,
    q16: form.q16.value,
    q17: form.q17.value,
    q18: form.q18.value,
    q19: form.q19.value,
    q20: form.q20.value,
    metier: form.metier.value
  };

  const url = "https://script.google.com/macros/s/AKfycbzUsZZcLTPTid9WvDHF_VAV0jIbnrQUd4iX0IL5u71JFU2Bskd1q2iXk3HxQ7z_uVyk/exec";
  console.log("URL utilisée pour fetch :", url);

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  document.getElementById('confirmation').style.display = 'block';
  form.reset();
});
