export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa definisi paling tepat dari ancaman siber (cyber threat)?",
    options: [
      { id: "A", text: "A. Kerusakan fisik pada perangkat keras komputer akibat korsleting listrik." },
      { id: "B", text: "B. Berbagai tindakan atau aktivitas ilegal yang bertujuan mengganggu, merusak, mencuri, atau mengakses data dan sistem digital tanpa izin." },
      { id: "C", text: "C. Proses memperbarui sistem operasi komputer secara otomatis." },
      { id: "D", text: "D. Penggunaan koneksi internet berkecepatan tinggi di ruang publik." }
    ],
    correctAnswerId: "B",
    explanation: "Ancaman siber mencakup segala aktivitas jahat yang berupaya merusak integritas, kerahasiaan, atau ketersediaan sistem dan data digital."
  },
  {
    id: 2,
    question: "Manakah di bawah ini yang merupakan ciri khas utama dari serangan Phishing?",
    options: [
      { id: "A", text: "A. Menginfeksi komputer melalui kabel USB secara langsung." },
      { id: "B", text: "B. Memikat korban menggunakan pesan/website palsu yang menyerupai pihak resmi untuk mencuri data sensitif." },
      { id: "C", text: "C. Mematikan listrik pada pusat data server secara fisik." },
      { id: "D", text: "D. Memaksa komputer restart secara berulang-ulang tanpa koneksi internet." }
    ],
    correctAnswerId: "B",
    explanation: "Phishing mengandalkan teknik penyamaran sebagai pihak terpercaya agar korban terperdaya mengisikan data sensitif."
  },
  {
    id: 3,
    question: "Jenis malware yang berfungsi mengunci atau mengenkripsi file korban lalu meminta tebusan uang disebut...",
    options: [
      { id: "A", text: "A. Spyware" },
      { id: "B", text: "B. Adware" },
      { id: "C", text: "C. Ransomware" },
      { id: "D", text: "D. Worm" }
    ],
    correctAnswerId: "C",
    explanation: "Ransomware mengunci file atau sistem dan menuntut uang tebusan (ransom) untuk memberikan kunci dekripsi."
  },
  {
    id: 4,
    question: "Serangan password dengan cara menebak kombinasi huruf dan angka secara otomatis hingga menemukan kata sandi yang tepat disebut...",
    options: [
      { id: "A", text: "A. Brute Force Attack" },
      { id: "B", text: "B. Password Attack" },
      { id: "C", text: "C. Social Engineering" },
      { id: "D", text: "D. Man-in-the-Middle Attack" }
    ],
    correctAnswerId: "A",
    explanation: "Brute Force Attack mencoba seluruh kombinasi kata sandi yang memungkinkan menggunakan bantuan otomatisasi perangkat lunak."
  },
  {
    id: 5,
    question: "Teknik Social Engineering fokus memanipulasi kelemahan pada aspek...",
    options: [
      { id: "A", text: "A. Hardware server" },
      { id: "B", text: "B. Sistem operasi komputer" },
      { id: "C", text: "C. Psikologi dan kepercayaan manusia" },
      { id: "D", text: "D. Router Wi-Fi" }
    ],
    correctAnswerId: "C",
    explanation: "Social Engineering menargetkan faktor manusia (human factor) dengan memanfaatkan rasa panik, penasaran, atau empati korban."
  },
  {
    id: 6,
    question: "Kombinasi kata sandi berikut ini yang PALING KUAT dan sulit diretas adalah...",
    options: [
      { id: "A", text: "A. indonesia2024" },
      { id: "B", text: "B. 12345678" },
      { id: "C", text: "C. K34m4n4n#S1b3r!99" },
      { id: "D", text: "D. tanggal lahir" }
    ],
    correctAnswerId: "C",
    explanation: "Kata sandi kuat terdiri dari kombinasi huruf besar, huruf kecil, angka, dan karakter khusus/simbol serta memiliki panjang minimal 12 karakter."
  },
  {
    id: 7,
    question: "Apa fungsi utama dari Autentikasi Dua Faktor (2FA / Two-Factor Authentication)?",
    options: [
      { id: "A", text: "A. Mempercepat koneksi internet saat login." },
      { id: "B", text: "B. Menambahkan lapisan keamanan ekstra selain kata sandi (misalnya kode verifikasi SMS/Authenticator App)." },
      { id: "C", text: "C. Menghapus virus secara otomatis di HP." },
      { id: "D", text: "D. Mengubah warna tampilan website menjadi lebih terang." }
    ],
    correctAnswerId: "B",
    explanation: "2FA memastikan bahwa meskipun peretas mengetahui kata sandimu, mereka tetap tidak bisa masuk tanpa faktor kedua (seperti kode OTP di ponselmu)."
  },
  {
    id: 8,
    question: "Tindakan pencegahan paling efektif untuk menghindari infeksi Malware dari file internet adalah...",
    options: [
      { id: "A", text: "A. Mengunduh aplikasi hanya dari sumber dan situs resmi serta selalu memperbarui antivirus." },
      { id: "B", text: "B. Mengunduh software bajakan dari situs torrent yang gratis." },
      { id: "C", text: "C. Mematikan fitur sistem keamanan Windows secara permanen." },
      { id: "D", text: "D. Menyimpan file di folder yang sama." }
    ],
    correctAnswerId: "A",
    explanation: "Mengunduh dari toko aplikasi/situs resmi dan memperbarui antivirus adalah benteng pertahanan terbaik melawan infeksi malware."
  },
  {
    id: 9,
    question: "Mengapa memberikan kode OTP (One-Time Password) kepada orang asing sangat berbahaya?",
    options: [
      { id: "A", text: "A. OTP membuat kuota internet cepat habis." },
      { id: "B", text: "B. OTP adalah kunci transaksi/login sementara yang jika diberikan dapat memberi akses penuh kepada peretas untuk menguasai akunmu." },
      { id: "C", text: "C. OTP hanya boleh digunakan saat mati lampu." },
      { id: "D", text: "D. OTP dapat merusak layar HP." }
    ],
    correctAnswerId: "B",
    explanation: "Kode OTP berfungsi seperti kunci rahasia sekali pakai. Memberikan OTP berarti menyerahkan kendali penuh akunmu kepada penipu."
  },
  {
    id: 10,
    question: "Prinsip 'Zero Trust' dalam dunia keamanan siber memiliki arti...",
    options: [
      { id: "A", text: "A. Percaya kepada semua email yang masuk." },
      { id: "B", text: "B. Jangan pernah langsung percaya, selalu verifikasi setiap akses dan komunikasi digital." },
      { id: "C", text: "C. Tidak perlu menggunakan kata sandi pada komputer." },
      { id: "D", text: "D. Mempercayakan keamanan siber sepenuhnya kepada teman." }
    ],
    correctAnswerId: "B",
    explanation: "Prinsip Zero Trust mengajarkan untuk selalu memverifikasi identitas dan keamanan setiap interaksi digital tanpa memandang asal pesan tersebut."
  }
];
