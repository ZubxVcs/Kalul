let buttonClicked = false;

function checkKodam() {
    const name = document.getElementById('name').value;
    const button = document.getElementById('cekButton');

    if (name.trim() === "") {
        showModal();
        return;
    }

    if (buttonClicked) {
        return; // Tidak melakukan apa-apa jika tombol sudah diklik
    }

    buttonClicked = true;
    button.disabled = true; // Menonaktifkan tombol

    let kodam = determineKodam();
    document.getElementById('result').innerHTML = `Nama: ${name}<br>Kodam: ${kodam}`;

    // Aktifkan kembali tombol setelah 3 detik
    setTimeout(() => {
        button.disabled = false;
        buttonClicked = false;
    }, 3000);
}

function determineKodam() {
    const kodamList = [
        "tiang listrik", "artis bokep", "kipas cosmos", "Raja kikir", "Raja SUKI",
        "Raja Sigma", "sigit rendang", "sempak mas Amba", "genteng pecah", "pos ronda",
        "el gangsing", "Pace kobo", "Raja Typo", "Herman Bengkulu", "Raja Skibidi",
        "Ngap owi", "Raja OPM", "pendukung PSHT", "penghina PSHT", "Tidak ada"
    ];
    const randomIndex = Math.floor(Math.random() * kodamList.length);
    return kodamList[randomIndex];
}

function showModal() {
    const modal = document.getElementById('errorModal');
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('errorModalContent');
    modal.style.animation = 'slide-up 0.5s ease-out';
    setTimeout(() => {
        document.getElementById('errorModal').style.display = "none";
        modal.style.animation = '';
    }, 500); // Mengubah delay menjadi 0.5 detik (500 milidetik)
}

function showProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = "flex";
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = "none";
}

// Event listener untuk menutup modal profil saat area di luar modal diklik
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target == modal) {
        closeProfileModal();
    }
};