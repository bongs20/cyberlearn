export interface ThreatMaterial {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  definition: string;
  howItWorks: string[];
  characteristics: string[];
  example: {
    scenario: string;
    detail: string;
  };
  protectionWays: string[];
  imagePath: string;
  galleryImages?: { src: string; alt: string; label: string }[];
  audioPath: string;
  narrationText: string;
}

export const MATERIALS_DATA: Record<string, ThreatMaterial> = {
  phishing: {
    id: "phishing",
    slug: "phishing",
    title: "Phishing",
    shortDesc: "Upaya menipu pengguna agar memberikan informasi sensitif melalui pesan, situs, atau komunikasi yang dibuat menyerupai pihak terpercaya.",
    definition: "Phishing adalah jenis kejahatan siber di mana penyerang menyamar sebagai entitas yang sah dan terpercaya (seperti bank, perusahaan e-commerce, atau instansi pemerintah) untuk memancing korban agar memberikan data pribadi, kata sandi, nomor kartu kredit, atau kode OTP.",
    howItWorks: [
      "Penyerang membuat email, SMS (smishing), pesan WhatsApp, atau situs web palsu yang sangat mirip dengan milik instansi resmi.",
      "Pesan dikirimkan ke korban dengan narasi yang mendesak, mengancam, atau menggiurkan (misalnya akun diblokir, hadiah besar, atau tagihan menunggak).",
      "Korban diminta mengeklik tautan berbahaya dan mengisikan data sensitif pada formulir palsu.",
      "Data yang diisikan korban langsung terkirim ke server peretas dan digunakan untuk menguras akun atau pencurian identitas."
    ],
    characteristics: [
      "Pesan meminta data pribadi atau verifikasi akun secara tiba-tiba.",
      "Terdapat tautan (link) mencurigakan dengan domain yang janggal (contoh: www.bannk-bca-verifikasi.com).",
      "Menggunakan bahasa yang mendesak, menakut-nakuti, atau memaksa bertindak cepat.",
      "Alamat email pengirim tidak resmi atau menggunakan domain umum gratisan.",
      "Meminta password, PIN, nomor kartu kredit, atau kode OTP."
    ],
    example: {
      scenario: "Email Palsu Penangguhan Akun Bank",
      detail: "Anda menerima pesan email berpakaian logo resmi bank yang menyatakan bahwa akun rekening Anda akan dibekukan dalam 1x24 jam karena aktivitas mencurigakan. Di dalam email terdapat tombol 'Verifikasi Sekarang' yang mengarah ke website tiruan."
    },
    protectionWays: [
      "Periksa alamat email pengirim dan detail domain tautan dengan teliti.",
      "Jangan sembarangan membuka tautan atau mengunduh lampiran dari pengirim tidak dikenal.",
      "Jangan pernah membagikan password, PIN, atau kode OTP kepada siapa pun.",
      "Periksa apakah website menggunakan protokol aman (https://) dan sertifikat valid.",
      "Gunakan Autentikasi Dua Faktor (2FA / MFA) pada seluruh akun digital Anda."
    ],
    imagePath: "/images/phising.png",
    galleryImages: [
      { src: "/images/phishing-card.png", alt: "Kartu pembayaran dalam ilustrasi phishing", label: "Pencurian data kartu" },
      { src: "/images/phishing-email.png", alt: "Email mencurigakan dalam ilustrasi phishing", label: "Email palsu" },
      { src: "/images/phishing-social.png", alt: "Penipuan melalui hubungan sosial", label: "Manipulasi korban" },
      { src: "/images/phishing-login.png", alt: "Halaman login palsu", label: "Login palsu" },
      { src: "/images/phishing-protection.png", alt: "Perlindungan data dari phishing", label: "Perlindungan data" }
    ],
    audioPath: "/audio/phising.mp3.mp3",
    narrationText: "Phishing adalah upaya penipuan yang bertujuan membuat pengguna memberikan informasi sensitif dengan menyamar sebagai pihak terpercaya. Selalu periksa alamat pengirim dan jangan bagikan OTP atau password."
  },
  malware: {
    id: "malware",
    slug: "malware",
    title: "Malware",
    shortDesc: "Perangkat lunak berbahaya yang dirancang untuk mengganggu, merusak, mencuri data, atau memperoleh akses tidak sah.",
    definition: "Malware (Malicious Software) adalah istilah umum untuk perangkat lunak atau kode berbahaya yang dibuat khusus untuk merusak sistem komputer, mencuri data sensitif, mengintai aktivitas pengguna, atau mengontrol perangkat secara ilegal.",
    howItWorks: [
      "Penyerang menyisipkan kode berbahaya ke dalam file aplikasi bajakan, dokumen terlampir di email, atau iklan palsu di internet.",
      "Ketika pengguna mengunduh dan menjalankan file tersebut, malware aktif di latar belakang sistem.",
      "Malware dapat menginfeksi file lain, mengunci file sistem (Ransomware), mencetak ketikan tombol keyboard (Keylogger), atau mengirim data pribadi ke peretas."
    ],
    characteristics: [
      "Perangkat tiba-tiba terasa sangat lambat, sering freeze, atau crash secara mendadak.",
      "Kerap muncul iklan pop-up aneh yang sulit ditutup atau pergantian browser default secara otomatis.",
      "Penggunaan memori, CPU, atau kuota internet sangat tinggi meski tidak sedang membuka aplikasi berat.",
      "File di komputer tiba-tiba tidak bisa dibuka atau berubah ekstensi secara aneh (contoh: .locked).",
      "Program antivirus mendadak mati sendiri dan tidak bisa diaktifkan kembali."
    ],
    example: {
      scenario: "Serangan Ransomware pada Dokumen Penting",
      detail: "Seorang mahasiswa mengunduh software editor video bajakan dari blog gratisan. Setelah diinstal, seluruh file tugas dan foto di komputernya terkunci dengan ekstensi .encrypted dan muncul pesan meminta tebusan uang untuk pembuka kunci."
    },
    protectionWays: [
      "Selalu unduh aplikasi dan file dari sumber resmi (App Store, Play Store, Official Website).",
      "Pasang dan selalu perbarui perangkat lunak Antivirus / Anti-malware serta Firewall.",
      "Secara rutin lakukan update Sistem Operasi dan aplikasi ke versi terbaru.",
      "Hindari menggunakan perangkat lunak (software) atau game bajakan.",
      "Lakukan backup data penting secara berkala ke media penyimpanan offline atau cloud yang aman."
    ],
    imagePath: "/images/malware.png",
    galleryImages: [
      { src: "/images/malware-computer.png", alt: "Komputer rusak akibat malware", label: "Kerusakan sistem" },
      { src: "/images/malware-error-window.png", alt: "Jendela error komputer akibat malware", label: "Gangguan perangkat" },
      { src: "/images/malware-usb.png", alt: "USB yang terinfeksi malware", label: "Media terinfeksi" },
      { src: "/images/malware-locked-monitor.png", alt: "Monitor terkunci oleh malware", label: "Ransomware" },
      { src: "/images/malware-antivirus-laptop.png", alt: "Laptop dengan perlindungan antivirus", label: "Perlindungan" }
    ],
    audioPath: "/audio/malware.mp3.mp3",
    narrationText: "Malware adalah perangkat lunak berbahaya seperti virus, trojan, dan ransomware. Lindungi perangkat Anda dengan menginstal software resmi, rutin mengupdate sistem, dan menyalakan antivirus."
  },
  "password-attack": {
    id: "password-attack",
    slug: "password-attack",
    title: "Password Attack",
    shortDesc: "Berbagai upaya untuk mendapatkan, membongkar, atau menebak kata sandi pengguna secara ilegal.",
    definition: "Password Attack adalah metode kejahatan siber yang berfokus pada peretasan kata sandi akun untuk mendapatkan akses tanpa izin ke dalam sistem, data pribadi, maupun aset digital milik korban.",
    howItWorks: [
      "Brute Force Attack: Peretas mencoba ribuan hingga jutaan kombinasi karakter secara otomatis menggunakan bot sampai menemukan kata sandi yang tepat.",
      "Dictionary Attack: Peretas menggunakan daftar kata pasword paling umum (seperti '123456', 'password', 'indonesia123').",
      "Credential Stuffing: Peretas memanfaatkan data kebocoran kata sandi dari website lain untuk mencoba login pada akun milik korban."
    ],
    characteristics: [
      "Muncul notifikasi percobaan login mencurigakan dari lokasi atau perangkat yang tidak Anda kenal.",
      "Akun media sosial atau email terlog-out secara tiba-tiba dan kata sandi tidak bisa digunakan.",
      "Adanya aktivitas aneh pada akun (seperti mengirim pesan sendiri ke kontak Anda).",
      "Menggunakan kata sandi yang sangat pendek, sederhana, atau mudah ditebak seperti tanggal lahir."
    ],
    example: {
      scenario: "Percobaan Brute Force pada Akun Media Sosial",
      detail: "Seorang pengguna menggunakan kata sandi 'admin123' untuk akun emailnya. Peretas menggunakan skrip otomatis yang menebak kata sandi tersebut hanya dalam kurun waktu 3 detik."
    },
    protectionWays: [
      "Gunakan kata sandi yang kuat dan kompleks (minimal 12 karakter: kombinasi huruf besar, kecil, angka, dan simbol).",
      "Jangan pernah menggunakan kata sandi yang sama untuk berbagai akun (Gunakan Password Manager).",
      "Hindari menggunakan data pribadi yang mudah ditebak (seperti nama, tanggal lahir, nomor HP).",
      "Wajib mengaktifkan Autentikasi Dua Faktor (2FA) di seluruh akun penting.",
      "Ganti kata sandi secara berkala jika ada indikasi kebocoran data."
    ],
    imagePath: "/images/passwordattack.png",
    galleryImages: [
      { src: "/images/password-hacker.png", alt: "Peretas mencoba mendapatkan password", label: "Peretasan akun" },
      { src: "/images/password-lock.png", alt: "Gembok yang melambangkan keamanan password", label: "Password aman" },
      { src: "/images/password-breach.png", alt: "Kebocoran data password", label: "Kebocoran data" },
      { src: "/images/password-login.png", alt: "Upaya login mencurigakan", label: "Login mencurigakan" },
      { src: "/images/password-otp.png", alt: "Kode OTP untuk keamanan akun", label: "Kode OTP" }
    ],
    audioPath: "/audio/PasswordAttack.mp3.mp3",
    narrationText: "Password Attack adalah upaya menebak atau mencuri kata sandi pengguna. Gunakan kata sandi yang panjang dan unik, jangan pakai kombinasi sederhana, dan aktifkan Autentikasi Dua Faktor."
  },
  "social-engineering": {
    id: "social-engineering",
    slug: "social-engineering",
    title: "Social Engineering",
    shortDesc: "Teknik manipulasi psikologis manusia untuk memperoleh informasi rahasia atau mendorong korban melakukan tindakan tertentu.",
    definition: "Social Engineering (Rekayasa Sosial) adalah teknik kejahatan yang tidak menyerang celah kelemahan software/komputer, melainkan memanfaatkan celah kelemahan emosional dan rasa percaya manusia (seperti empati, ketakutan, atau kepanikan) agar korban secara sukarela memberikan akses atau data rahasia.",
    howItWorks: [
      "Penyerang melakukan riset mengenai korban di media sosial (profiling).",
      "Penyerang menghubungi korban melalui telepon (Vishing), pesan, atau secara langsung dengan menyamar sebagai teknisi IT, teman lama, atau kurir paket.",
      "Penyerang membangun rasa percaya atau kepanikan (misal: 'Anak Anda kecelakaan', 'Paket Anda tertahan di bea cukai').",
      "Korban terpengaruh emosinya dan langsung menyerahkan kode OTP, uang transfer, atau file rahasia."
    ],
    characteristics: [
      "Permintaan yang bersifat mendesak, menakut-nakuti, atau menawarkan tawaran yang terlalu bagus untuk jadi kenyataan (too good to be true).",
      "Pihak asing meminta informasi rahasia dengan alasan 'kebijakan baru' atau 'keadaan darurat'.",
      "Meminta Anda untuk melanggar prosedur standar keamanan resmi.",
      "Mengaku sebagai kenalan atau pejabat tanpa verifikasi identitas yang sah."
    ],
    example: {
      scenario: "Penipuan Kurir Paket PDF Palsu via WhatsApp",
      detail: "Anda menerima pesan WA dari nomor tak dikenal yang mengaku kurir ekspedisi. Ia mengirimkan file bernamai 'Foto_Paket.apk' atau 'Resi_Paket.pdf' dan meminta Anda membukanya untuk mengonfirmasi alamat."
    },
    protectionWays: [
      "Selalu bersikap skeptis dan tenang saat menerima pesan mendesak atau mencurigakan.",
      "Lakukan verifikasi identitas pengirim melalui nomor telepon resmi instansi terkait.",
      "Jangan pernah mentransfer uang atau memberikan data pribadi karena dorongan kepanikan.",
      "Jaga privasi data diri di media sosial (jangan umbar nomor telepon, NIK, atau nama ibu kandung).",
      "Terapkan prinsip Zero Trust: 'Jangan langsung percaya, selalu verifikasi'."
    ],
    imagePath: "/images/socialengineering.png",
    galleryImages: [
      { src: "/images/social-media.png", alt: "Manipulasi melalui media sosial", label: "Media sosial" },
      { src: "/images/social-collaboration.png", alt: "Interaksi sosial yang dapat dimanfaatkan penyerang", label: "Membangun kepercayaan" },
      { src: "/images/social-phone.png", alt: "Penipuan melalui telepon", label: "Telepon palsu" },
      { src: "/images/social-impersonation.png", alt: "Penyamaran identitas di layar komputer", label: "Penyamaran identitas" },
      { src: "/images/social-financial-scam.png", alt: "Penipuan untuk mengambil uang korban", label: "Penipuan finansial" }
    ],
    audioPath: "/audio/SosialEngineering.mp3.mp3",
    narrationText: "Social Engineering memanfaatkan kelalaian dan manipulasi emosi manusia. Tetap tenang, jangan panik, dan verifikasi ulang setiap informasi yang Anda terima dari orang asing."
  }
};
