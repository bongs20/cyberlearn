# CyberLearn

CyberLearn adalah multimedia pembelajaran interaktif tentang keamanan siber. Aplikasi ini membantu pengguna mengenali ancaman digital dan mempraktikkan langkah perlindungan melalui materi visual, audio, video, studi kasus, serta kuis evaluasi.

## Fitur

- Halaman pengantar dan dashboard pembelajaran.
- Materi tentang phishing, malware, password attack, dan social engineering.
- Studi kasus keamanan siber dalam situasi sehari-hari.
- Kuis evaluasi dengan hasil dan skor pembelajaran.
- Petunjuk penggunaan aplikasi.
- Audio pembuka, pemutar audio, pemutar video, progress bar, dan feedback pembelajaran.
- Tampilan responsif untuk desktop dan perangkat mobile.

## Teknologi

- [Next.js](https://nextjs.org/) 16 dengan App Router.
- [React](https://react.dev/) 19 dan TypeScript.
- [Tailwind CSS](https://tailwindcss.com/) 4.
- [Lucide React](https://lucide.dev/) untuk ikon.
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) untuk feedback hasil kuis.

## Persyaratan

- Node.js 20.9 atau versi yang lebih baru.
- npm 10 atau versi yang kompatibel.
- Git, jika ingin melakukan clone dari GitHub.

## Menjalankan di Local

1. Clone repository dan masuk ke folder proyek:

	```bash
	git clone https://github.com/bongs20/cyberlearn.git
	cd cyberlearn
	```

2. Install dependency berdasarkan lockfile:

	```bash
	npm ci
	```

3. Jalankan development server:

	```bash
	npm run dev
	```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

Perubahan pada file di dalam folder `app`, `components`, atau `data` akan terlihat otomatis selama development server berjalan.

## Script NPM

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server. |
| `npm run lint` | Memeriksa masalah linting. |
| `npm run build` | Membuat production build. |
| `npm run start` | Menjalankan hasil production build. |

Sebelum deployment, jalankan pemeriksaan berikut:

```bash
npm run lint
npm run build
```

## Struktur Folder

```text
app/          Halaman dan layout Next.js App Router
components/   Komponen UI yang dapat digunakan kembali
data/         Data materi, pertanyaan kuis, dan studi kasus
public/       Asset statis seperti gambar dan audio
```

Route utama yang tersedia:

- `/` - halaman pembuka.
- `/dashboard` - dashboard pembelajaran.
- `/materi` - daftar materi keamanan siber.
- `/materi/phishing` - materi phishing.
- `/materi/malware` - materi malware.
- `/materi/password-attack` - materi password attack.
- `/materi/social-engineering` - materi social engineering.
- `/studi-kasus` - studi kasus.
- `/kuis` - kuis evaluasi.
- `/hasil` - hasil kuis.
- `/video` - halaman video.
- `/petunjuk` - petunjuk penggunaan.

## Deploy ke Vercel

### Cara 1: Melalui dashboard Vercel

1. Push repository ke GitHub.
2. Login ke [Vercel](https://vercel.com/), lalu pilih **Add New Project**.
3. Import repository `bongs20/cyberlearn`.
4. Pastikan pengaturan berikut:
	- **Framework Preset:** Next.js.
	- **Root Directory:** folder utama repository.
	- **Install Command:** `npm install` atau biarkan default Vercel.
	- **Build Command:** `npm run build` atau biarkan default Vercel.
	- **Output Directory:** biarkan default.
5. Klik **Deploy**.

Proyek ini tidak membutuhkan environment variable untuk dijalankan. Jika nantinya ditambahkan API atau layanan eksternal, masukkan variable tersebut melalui **Project Settings > Environment Variables** di Vercel dan jangan commit file `.env` ke repository.

Setiap push baru ke branch yang terhubung akan membuat deployment baru secara otomatis. Vercel juga menyediakan Preview Deployment untuk branch atau pull request selain production branch.

### Cara 2: Melalui Vercel CLI

Install dan login ke Vercel:

```bash
npm install -g vercel
vercel login
```

Dari folder utama proyek, jalankan deployment preview:

```bash
vercel
```

Untuk deployment production:

```bash
vercel --prod
```

Saat pertama kali dijalankan, ikuti pertanyaan CLI untuk menghubungkan folder dengan akun atau project Vercel. Pilih pengaturan Next.js dan folder utama sebagai root project.

## Catatan Asset

File yang digunakan langsung di browser harus disimpan di folder `public/`. Contohnya, audio pada `public/audio/intro.mp3` dipanggil menggunakan path `/audio/intro.mp3`, bukan path filesystem.

## Lisensi

Proyek ini dibuat untuk kebutuhan pembelajaran multimedia dan keamanan komputer.

## Referensi

- [Dokumentasi Next.js](https://nextjs.org/docs)
- [Dokumentasi Vercel](https://vercel.com/docs)
- [Dokumentasi Tailwind CSS](https://tailwindcss.com/docs)
