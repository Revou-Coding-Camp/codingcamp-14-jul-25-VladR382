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

    // Pesan Selamat Datang Dinamis dengan AlertifyJS
    const welcomeGreeting = document.getElementById('welcome-greeting');
    alertify.prompt(
        'Halo! Silakan masukkan nama Anda:', 
        'Pengunjung',  
        function(evt, value) {
            const finalValue = value.trim() === '' ? 'Pengunjung' : value;
            welcomeGreeting.textContent = `Hi ${finalValue}, Welcome To Website`;
            alertify.success('Selamat datang, ' + finalValue + '!');
        }, 
        function() {
            welcomeGreeting.textContent = `Hi Pengunjung, Welcome To Website`;
            alertify.message('Anda membatalkan, selamat datang Pengunjung.');
        }
    ).set({
        'title': 'Selamat Datang',
        'pinnable': false, 
        'closable': false
    });
    
    document.querySelector('.ajs-buttons .ajs-cancel').style.display = 'none';

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
        
            // Gulir halus ke bagian yang dituju
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });


    // Validasi dan Pengiriman Formulir dengan AlertifyJS
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
            alertify.error('Harap lengkapi semua kolom.');
            return;
        }

        // Validasi format khusus
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            alertify.error('Format email tidak valid.');
            return;
        }

        if (!/^\d+$/.test(telepon)) {
            alertify.error('Nomor telepon hanya boleh berisi angka.');
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
        
        alertify.success('Pesan Anda berhasil dikirim!');
    });
});