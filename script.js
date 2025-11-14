document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery-grid");

    // Desteklenen resim formatları
    const formats = ["jpg", "jpeg", "png", "webp"];
    const maxImages = 200;

    // images klasöründeki fotoğrafları kontrol et
    for (let i = 1; i <= maxImages; i++) {
        formats.forEach(ext => {
            const imgPath = `images/${i}.${ext}`;
            const img = new Image();
            img.src = imgPath;

            img.onload = () => {
                const el = document.createElement("img");
                el.src = imgPath;
                el.alt = "Galeri";
                gallery.appendChild(el);
            };
        });
    }
});
