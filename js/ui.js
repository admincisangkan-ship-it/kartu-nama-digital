function renderProfile(profile){

    document.getElementById("nama").textContent =
        profile.Nama;

    document.getElementById("jabatan").textContent =
        profile.Jabatan;

    document.getElementById("email").textContent =
        profile.Email;

    document.getElementById("website").textContent =
        profile.Website;

    //-------------------------------------
    // Nomor Telepon

    let phone = String(profile["No Telepon"]).trim();

    // Hapus semua karakter selain angka
    phone = phone.replace(/\D/g, "");

    // Nomor untuk WhatsApp
    let whatsappPhone = phone;

    if (whatsappPhone.startsWith("0")) {
        whatsappPhone = "62" + whatsappPhone.substring(1);
    }

    // Nomor yang ditampilkan
    let displayPhone = whatsappPhone;

    if (displayPhone.startsWith("62")) {
        displayPhone = "0" + displayPhone.substring(2);
    }

    document.getElementById("phone").textContent = displayPhone;

    //-------------------------------------

    document.getElementById("phoneLink").href =
        "tel:+" + whatsappPhone;

    document.getElementById("emailLink").href =
        "mailto:" + profile.Email;

    document.getElementById("websiteLink").href =
        profile.Website;

    document.getElementById("whatsappLink").href =
        "https://wa.me/" + whatsappPhone;

}