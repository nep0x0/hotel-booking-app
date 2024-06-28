# hotel-booking-app

# Tutorial: Membuat Website CRUD dengan Express.js & MongoDB

Ini adalah proyek hasil mengikuti tutorial dari video YouTube "[CRUD Website with Express.js & MongoDB - Crash Course](https://www.youtube.com/watch?v=YdBy9-0pER4&t=137s)" oleh Traversy Media.

## Daftar Isi

- [Deskripsi](#deskripsi)
- [Fitur](#fitur)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [Referensi](#referensi)
- [Lisensi](#lisensi)

## Deskripsi

Proyek ini adalah implementasi dari tutorial untuk membuat aplikasi CRUD sederhana menggunakan Express.js dan MongoDB. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data.

## Fitur

- Menambahkan item baru ke database
- Melihat daftar item yang ada
- Mengedit detail item
- Menghapus item dari database

## Instalasi

1. Clone repositori ini ke mesin lokal Anda:
    ```sh
    git clone https://github.com/username/repo-name.git
    ```

2. Masuk ke direktori proyek:
    ```sh
    cd repo-name
    ```

3. Install dependensi:
    ```sh
    npm install
    ```

4. Buat file `.env` di root direktori dan tambahkan konfigurasi database MongoDB:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

5. Jalankan server:
    ```sh
    npm start
    ```

## Penggunaan

Setelah server berjalan, buka browser dan akses `http://localhost:3000`. Anda dapat mulai menambahkan, melihat, mengedit, dan menghapus item dari database.

## Struktur Proyek

├── public
│   ├── css
│   │   └── styles.css
├── routes
│   └── index.js
├── views
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
├── .env
├── app.js
├── package.json
└── README.md

## Referensi

- [Video Tutorial](https://www.youtube.com/watch?v=YdBy9-0pER4&t=137s) oleh Traversy Media

## Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.
