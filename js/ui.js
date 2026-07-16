function renderProfile(profile) {

    //==============================
    // Data Profil
    //==============================

    document.getElementById("nama").textContent =
        profile.Nama;

    document.getElementById("jabatan").textContent =
        profile.Jabatan;

    document.getElementById("email").textContent =
        profile.Email;

    //-------------------------------------
    // Website

    let website = String(profile.Website || "").trim();

    // Jika tidak diawali http:// atau https://
    if (
        website &&
        !/^https?:\/\//i.test(website)
    ) {
        website = "https://" + website;
    }

    // Tampilkan tanpa protocol
    document.getElementById("website").textContent =
        website.replace(/^https?:\/\//i, "");

    // Link website
    document.getElementById("websiteLink").href =
        website;

    document.getElementById("websiteLink").target =
        "_blank";

    document.getElementById("websiteLink").rel =
        "noopener noreferrer";

    //-------------------------------------
    // Nomor Telepon

    let phone = String(profile["No Telepon"] || "").trim();

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

    document.getElementById("phone").textContent =
        displayPhone;

    //-------------------------------------
    // Link Telepon

    document.getElementById("phoneLink").href =
        "tel:+" + whatsappPhone;

    //-------------------------------------
    // Link Email

    document.getElementById("emailLink").href =
        "mailto:" + profile.Email;

    //-------------------------------------
    // Link WhatsApp

    document.getElementById("whatsappLink").href =
        "https://wa.me/" + whatsappPhone;

}