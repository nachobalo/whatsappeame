$whatsNumero = document.getElementById("whatsNumero");
$whatsBtn = document.getElementById("whatsBtn");

const sendWhatsApp = () => {
  let numero = $whatsNumero.value;

  if (numero.length < 10) return alert("El numero es muy corto");

  let url = `https://wa.me/${numero}`;

  window.open(url, "_blank");
};

$whatsBtn.addEventListener("click", () => sendWhatsApp());
