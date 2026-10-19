# Villa Jambu Klutuk - Website

Situs statis (HTML/CSS/JS). Tanpa build, tanpa dependensi.

## Deploy
- Netlify / Vercel / Cloudflare Pages: seret-lepas folder ini, atau hubungkan repo. Tidak perlu build command; publish directory = `.`
- Hosting biasa (cPanel/Hostinger): upload semua isi folder ke `public_html`.
- GitHub Pages: push ke repo, aktifkan Pages dari branch utama.

## Yang perlu Anda isi
1. Harga: buka `assets/app.js`, cari `CONFIG.villaPrice`, ganti `null` per villa dengan teks harga (tampil di halaman Our Rates).
2. Setelah punya domain, tambahkan `<link rel="canonical">` dan `og:url` di `index.html`.
3. Foto: ganti file di `assets/img` (nama sama) atau tambah entri di `assets/app.js`.
