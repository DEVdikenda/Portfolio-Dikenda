function sendWhatsApp() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // 👉 coloca o teu número aqui (formato internacional)
    const phoneNumber = "244941477806";

    const text =
        "Nome: " + name + "%0A" +
        "Mensagem: " + message;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
}
