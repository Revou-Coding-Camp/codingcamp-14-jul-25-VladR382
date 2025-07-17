# Mini Project Website - RevoU Coding Camp

Ini adalah *repository* untuk proyek mini yang dibuat sebagai bagian dari RevoU Coding Camp. Proyek ini adalah situs web halaman tunggal (*single-page website*) yang menampilkan profil perusahaan, portofolio, dan formulir kontak interaktif, yang dibuat dengan fokus pada desain responsif dan interaktivitas pengguna.

## Fitur Utama

  * **Navigasi Halaman Tunggal:** Pengguna dapat berpindah antar-bagian (*section*) seperti Home, Profil, Portofolio, dan Hubungi Kami tanpa perlu memuat ulang halaman, memberikan pengalaman pengguna yang mulus.
  * **Pesan Selamat Datang Dinamis:** Saat halaman dimuat, sebuah *prompt* akan muncul untuk menanyakan nama pengguna. Nama ini kemudian digunakan untuk menampilkan pesan selamat datang yang dipersonalisasi di bagian atas halaman.
  * **Desain Responsif:** Tampilan situs web sepenuhnya responsif dan dapat menyesuaikan diri dengan berbagai ukuran layar, mulai dari *desktop* hingga perangkat seluler, memastikan pengalaman yang konsisten di semua perangkat.
  * **Menu Hamburger:** Untuk perangkat dengan layar lebih kecil, navigasi utama disembunyikan di dalam menu hamburger yang fungsional, sehingga menghemat ruang layar dan tetap mudah diakses.
  * **Formulir Kontak Interaktif:**
      * Pengguna dapat mengisi formulir kontak dengan nama, email, tanggal lahir, jenis kelamin, nomor telepon, dan pesan.
      * Formulir ini memiliki validasi dasar untuk memastikan semua kolom terisi dengan benar sebelum pengiriman.
      * Setelah formulir dikirim, data yang dimasukkan akan langsung ditampilkan di samping formulir tanpa perlu memuat ulang halaman, lengkap dengan waktu pengiriman saat ini.
  * **Animasi dan Efek Visual:** Situs ini menggunakan transisi dan animasi CSS yang halus untuk memberikan pengalaman visual yang lebih menarik saat menggulir atau berinteraksi dengan elemen seperti tautan navigasi dan kartu portofolio.
  * **Notifikasi Modern:** Menggunakan pustaka **AlertifyJS** untuk menampilkan notifikasi yang menarik dan modern untuk pesan selamat datang, kesalahan validasi formulir, dan konfirmasi pengiriman pesan.

## Teknologi yang Digunakan

  * **HTML5:** Untuk struktur dan konten dasar situs web.
  * **CSS3:** Untuk *styling*, tata letak, desain responsif, dan animasi.
  * **JavaScript (ES6):** Untuk fungsionalitas interaktif, manipulasi DOM, validasi formulir, dan logika navigasi halaman tunggal.
  * **AlertifyJS:** Pustaka JavaScript pihak ketiga yang digunakan untuk membuat *prompt* input nama dan menampilkan notifikasi yang interaktif.

## Cara Menjalankan Proyek

1.  ***Clone Repository***
    *Clone repository* ini ke komputer lokal Anda menggunakan Git:
    ```bash
    git clone https://github.com/revou-coding-camp/codingcamp-14-jul-25-vladr382
    ```
2.  **Buka Berkas `index.html`**
    Navigasikan ke direktori proyek yang telah di-*clone* dan buka berkas `index.html` menggunakan peramban web pilihan Anda (contoh: Google Chrome, Mozilla Firefox, atau Microsoft Edge).

Tidak ada dependensi eksternal atau proses *build* yang rumit yang diperlukan untuk menjalankan proyek ini. Semua aset (CSS dan JavaScript) terhubung langsung di dalam HTML.

## Pembuat

Proyek ini dibuat oleh **Muhammad Rafli**.
