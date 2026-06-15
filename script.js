function tampilPesan() {
    const pesan = document.getElementById('pesan');
    if (pesan.classList.contains('tersembunyi')) {
        pesan.classList.remove('tersembunyi');
    } else {
        pesan.classList.add('tersembunyi');
    }
}
