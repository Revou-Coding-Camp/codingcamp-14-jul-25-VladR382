document.addEventListener('DOMContentLoaded', function() {

    // Logika untuk Hamburger Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#main-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        
        navMenu.classList.toggle('active');
        
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Pesan Selamat Datang Dinamis
    const welcomeGreeting = document.getElementById('welcome-greeting');
    // Menggunakan nama default jika pengguna membatalkan prompt
    const userName = prompt("Halo! Silakan masukkan nama Anda:", "Pengunjung") || "Pengunjung";
    if (userName) {
        welcomeGreeting.textContent = `Hi ${userName}, Welcome To Website`;
    }

    // Logika Navigasi Satu Halaman
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Tutup menu hamburger jika terbuka saat link di klik
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); 
                hamburger.setAttribute('aria-expanded', 'false');
            }

            const targetId = this.getAttribute('href').substring(1);
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });
        
            // Gulir halus ke bagian section
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });


    // Validasi dan Pengiriman Formulir
    const contactForm = document.getElementById('contact-form');
    const outputContent = document.getElementById('output-content');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Mendapatkan nilai dari formulir
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const telepon = document.getElementById('telepon').value.trim();
        const pesan = document.getElementById('pesan').value.trim();
        const tanggalLahir = document.getElementById('tanggal-lahir').value;
        const jenisKelamin = document.getElementById('jenis-kelamin').value;

        // Pemeriksaan validasi dasar
        if (!nama || !email || !telepon || !pesan || !tanggalLahir || !jenisKelamin) {
            alert('Harap lengkapi semua kolom.');
            return;
        }

        // Validasi format khusus
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alert('Format email tidak valid.');
            return;
        }

        if (!/^\d+$/.test(telepon)) {
            alert('Nomor telepon hanya boleh berisi angka.');
            return;
        }

        // Menampilkan data yang dikirimkan
        const currentTime = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });

        outputContent.innerHTML = `
            <div class="submitted-item"><span class="label">Waktu:</span> ${currentTime}</div>
            <hr>
            <div class="submitted-item"><span class="label">Nama:</span> ${nama}</div>
            <div class="submitted-item"><span class="label">Email:</span> ${email}</div>
            <div class="submitted-item"><span class="label">Tanggal Lahir:</span> ${tanggalLahir}</div>
            <div class="submitted-item"><span class="label">Jenis Kelamin:</span> ${jenisKelamin}</div>
            <div class="submitted-item"><span class="label">Telepon:</span> ${telepon}</div>
            <div class="submitted-item"><span class="label">Pesan:</span> ${pesan}</div>
        `;

        contactForm.reset();
        
        alert('Pesan Anda berhasil dikirim!');
    });
});