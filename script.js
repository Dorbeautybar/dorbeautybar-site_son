// --- DİL SEÇİMİ ---
function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

// --- OTOMATİK GALERİ ---
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // Burada images klasöründeki bilinen fotoğraf uzantılarını kontrol ediyoruz
    const extensions = ["jpg", "jpeg", "png", "webp"];
    const totalImages = 200; // maksimum kontrol sayısı (yeterli)

    for (let i = 1; i <= totalImages; i++) {
        for (let ext of extensions) {
            const imgPath = `images/${i}.${ext}`;
            const img = new Image();
            img.src = imgPath;

            img.onload = () => {
                const imgElement = document.createElement("img");
                imgElement.src = imgPath;
                imgElement.alt = "Galeri Fotoğrafı";
                gallery.appendChild(imgElement);
            };
        }
    }
});
