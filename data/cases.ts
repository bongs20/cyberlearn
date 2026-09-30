export interface CaseOption {
  id: string;
  text: string;
}

export interface CaseStudy {
  id: number;
  category: "Phishing" | "Malware" | "Password Attack" | "Social Engineering";
  title: string;
  scenario: string;
  options: CaseOption[];
  correctOptionId: string;
  explanation: {
    correct: string;
    incorrectByOption: Record<string, string>; // Tailored explanation for chosen option
    tipsByOption: Record<string, string>;      // Tailored security tip for chosen option
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  // --- PHISHING (2 Kasus) ---
  {
    id: 1,
    category: "Phishing",
    title: "Kasus Phishing 1: Pesan Verifikasi Akun Bank",
    scenario: "Kamu menerima SMS/WhatsApp yang mengatasnamakan bank langgananmu. Pesan tersebut mengabarkan bahwa akunmu akan diblokir permanen dalam kurun waktu 1 jam jika tidak segera melakukan verifikasi ulang melalui tautan http://bca-verifikasi-online-aman.com. Apa tindakan terbaik yang sebaiknya kamu lakukan?",
    options: [
      { id: "A", text: "A. Langsung mengklik tautan tersebut dan memasukkan data akun agar tidak diblokir." },
      { id: "B", text: "B. Memberikan kode OTP SMS kepada pengirim pesan agar dibantu verifikasi." },
      { id: "C", text: "C. Abaikan tautan tersebut, periksa domain yang mencurigakan, dan konfirmasi ke call center resmi bank." },
      { id: "D", text: "D. Meneruskan pesan tersebut ke grup obrolan teman untuk menanyakan kebenarannya." }
    ],
    correctOptionId: "C",
    explanation: {
      correct: "Memeriksa alamat domain dan mengonfirmasi via saluran resmi adalah tindakan paling tepat. Pihak bank resmi tidak pernah meminta verifikasi data sensitif atau OTP melalui tautan domain yang tidak dikenal.",
      incorrectByOption: {
        A: "Mengklik tautan 'http://bca-verifikasi-online-aman.com' akan membawamu ke website tiruan. Memasukkan data akun di sana menyebabkan kredensial loginmu langsung dicuri peretas.",
        B: "Kode OTP adalah verifikasi rahasia transaksi. Menyerahkan OTP kepada siapapun sama saja memberikan akses penuh kepada penipu untuk mengambil alih dan menguras tabunganmu.",
        D: "Meneruskan pesan phising ke grup obrolan dapat membingungkan orang lain dan berisiko membuat teman-manmu ikut mengeklik tautan berbahaya tersebut."
      },
      tipsByOption: {
        A: "💡 Tips Keamanan URL: Selalu periksa domain di address bar browser. Bank resmi menggunakan domain utama sah (misal: bca.co.id), bukan domain bertanda hubung gratisan.",
        B: "💡 Tips Keamanan OTP: Pihak bank atau layanan resmi TIDAK PERNAH meminta kode OTP, PIN, atau Password melalui telepon/SMS dalam kondisi apapun.",
        D: "💡 Tips Etika Informasi: Terapkan prinsip 'Saring sebelum Sharing'. Verifikasi kebenaran pesan keamanan siber sebelum membagikannya ke media sosial/grup."
      }
    }
  },
  {
    id: 2,
    category: "Phishing",
    title: "Kasus Phishing 2: File APK Unduhan Kurir Paket",
    scenario: "Kamu menerima pesan WhatsApp dari nomor asing yang mengaku kurir ekpedisi. Ia mengirimkan file bernama 'Lihat_Foto_Paket_Anda.apk' dan mendesakmu membukanya untuk mengonfirmasi lokasi rumahmu. Apa yang harus kamu lakukan?",
    options: [
      { id: "A", text: "A. Mengunduh dan menginstal file APK tersebut agar paket segera sampai." },
      { id: "B", text: "B. Menolak mengunduh file .apk, memblokir nomor pengirim, dan mengecek resi resmi melalui aplikasi marketplace/ekspedisi." },
      { id: "C", text: "C. Mengirim file tersebut ke teman untuk dites." },
      { id: "D", text: "D. Mengisi data pribadi di kolom obrolan WA kurir tersebut." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Penolakan terhadap file .apk dan verifikasi resi resmi adalah prosedur tepat. Kurir resmi tidak pernah meminta penerima menginstal aplikasi tambahan via pesan pribadi.",
      incorrectByOption: {
        A: "File berformat .apk tersebut mengandung Malware/Spyware yang secara otomatis menyadap SMS dan mencuri kode OTP di ponselmu setelah diinstal.",
        C: "Mengirimkan file .apk jahat ke teman dapat membahayakan perangkat temanmu jika ia tidak sengaja mengkliknya.",
        D: "Memberikan data pribadi ke nomor asing yang belum terverifikasi dapat dimanfaatkan pelaku untuk kejahatan penipuan berikutnya."
      },
      tipsByOption: {
        A: "💡 Tips Instalasi Aplikasi: Jangan pernah menginstal file .apk di luar Google Play Store / App Store, terutama file yang dikirimkan via pesan obrolan.",
        C: "💡 Tips Proteksi Perangkat: Jangan mengirimkan file executable berbahaya ke orang lain. Hapus file tersebut dan lakukan scan antivirus.",
        D: "💡 Tips Privasi Data: Lindungi alamat rumah, nomor NIK, dan nomor rekening dari pihak tak dikenal di media obrolan pesan."
      }
    }
  },

  // --- MALWARE (2 Kasus) ---
  {
    id: 3,
    category: "Malware",
    title: "Kasus Malware 1: Unduhan Software Bajakan",
    scenario: "Budi ingin mengunduh aplikasi desain gratisan. Ia menemukan blog tidak dikenal yang menyediakan tombol unduh 'Photoshop_2024_Crack.exe'. Saat tombol diunduh, antivirus memberi peringatan Trojan perusak. Apa yang sebaiknya Budi lakukan?",
    options: [
      { id: "A", text: "A. Mematikan fitur antivirus dan tetap menginstal file executable tersebut." },
      { id: "B", text: "B. Menghapus file yang baru diunduh, memindai komputer, dan beralih menggunakan aplikasi resmi/open-source." },
      { id: "C", text: "C. Mengirim file tersebut ke email teman untuk dites di komputer lain." },
      { id: "D", text: "D. Mengubah nama file menjadi .txt agar antivirus tidak bisa mendeteksi." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Menghapus file dan memindai ulang perangkat memastikan malware tidak sempat menginfeksi sistem operasi komputermu.",
      incorrectByOption: {
        A: "Mematikan antivirus saat ada peringatan bahaya memberi jalan masuk bagi Trojan atau Ransomware untuk merusak seluruh isi komputermu.",
        C: "Mengirim file terinfeksi ke teman akan menginfeksi komputer temanmu jika file tersebut dijalankan.",
        D: "Mengubah ekstensi menjadi .txt hanya menyembunyikan file, namun jika diubah kembali dan dijalankan, malware tetap aktif merusak."
      },
      tipsByOption: {
        A: "💡 Tips Antivirus: Antivirus adalah garda pertahanan utama. Jangan pernah mematikan antivirus hanya untuk menginstal file crack bajakan.",
        C: "💡 Tips Etika Keamanan: Selalu peringatkan teman jika ada tautan/file berbahaya, dan jangan membagikan file terinfeksi.",
        D: "💡 Tips Manajemen File: Mengubah ekstensi file tidak menghilangkan kode berbahaya di dalamnya. Hapus permanen file yang terdeteksi virus."
      }
    }
  },
  {
    id: 4,
    category: "Malware",
    title: "Kasus Malware 2: Peringatan Pop-Up Virus Palsu",
    scenario: "Saat browsing internet, tiba-tiba muncul jendela pop-up merah menyala yang berbunyi: 'PERINGATAN! HP Anda Terinfeksi 13 Virus! Klik di sini untuk menginstal Cleaner Pro sekarang juga!'. Apa tindakan yang benar?",
    options: [
      { id: "A", text: "A. Mengklik tombol unduh pop-up tersebut karena panik HP rusak." },
      { id: "B", text: "B. Menutup tab browser pop-up tersebut, tidak menekan tombol di dalam iklan, dan mengabaikan pesan ketakutan (scareware) tersebut." },
      { id: "C", text: "C. Membagikan iklan tersebut ke media sosial." },
      { id: "D", text: "D. Memasukkan nomor kartu kredit untuk membeli lisensi cleaner tersebut." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Menutup jendela pop-up adalah respon cepat yang tepat. Peringatan virus di dalam halaman situs web hanyalah iklan trik manipulasi psikologis (scareware).",
      incorrectByOption: {
        A: "Mengklik tombol unduh di iklan palsu justru akan mengunduh malware atau spyware sungguhan ke ponselmu.",
        C: "Membagikan iklan jebakan ini ke media sosial justru menyebarkan ancaman scareware ke orang lain.",
        D: "Memasukkan data kartu kredit pada situs perangkap iklan akan menyebabkan saldo atau limit kartu kreditmu dikuras penipu."
      },
      tipsByOption: {
        A: "💡 Tips Scareware: Peringatan virus di dalam browser web hampir selalu merupakan iklan manipulasi (scareware). Langsung tutup tab browser tersebut.",
        C: "💡 Tips Berselancar Aman: Gunakan fitur Ad-Blocker pada browser Anda untuk menyaring pop-up iklan jebakan yang berbahaya.",
        D: "💡 Tips Transaksi Online: Jangan pernah memasukkan nomor kartu kredit/CVV pada website yang muncul dari iklan pop-up mendadak."
      }
    }
  },

  // --- PASSWORD ATTACK (2 Kasus) ---
  {
    id: 5,
    category: "Password Attack",
    title: "Kasus Password Attack 1: Kebiasaan Kata Sandi Sama",
    scenario: "Siti menggunakan kata sandi 'Siti12345' untuk semua akunnya (Email, Medsos, & Portal Kampus). Suatu hari toko online tempat ia belanja mengalami kebocoran data. Apa ancaman terbesar dan tindakan terbaik bagi Siti?",
    options: [
      { id: "A", text: "A. Tidak ada masalah, peretas hanya bisa membuka toko online saja." },
      { id: "B", text: "B. Berbahaya, peretas dapat mencoba login ke seluruh akun Siti lainnya (Credential Stuffing). Siti wajib segera mengganti kata sandi unik di setiap akunnya." },
      { id: "C", text: "C. Cukup mengganti kata sandi toko online saja." },
      { id: "D", text: "D. Mengubah kata sandi di semua akun menjadi 'Siti123456'." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Mengganti kata sandi unik di setiap platform melindungi akun lainnya saat salah satu layanan mengalami kebocoran data (data breach).",
      incorrectByOption: {
        A: "Peretas tidak hanya berhenti di satu situs, melainkan menggunakan skrip otomatis untuk menguji kata sandi yang bocor ke seluruh layanan populer.",
        C: "Jika kata sandimu sama di semua akun, mengganti 1 kata sandi saja tidak mengamankan email atau medsosmu yang masih memakai kata sandi lama yang sudah bocor.",
        D: "Menambahkan angka sederhana seperti '123456' sangat mudah ditebak oleh peretas menggunakan Brute Force / Dictionary Attack."
      },
      tipsByOption: {
        A: "💡 Tips Kredensial Unik: Selalu asumsikan satu kata sandi yang bocor dapat meretaskan seluruh akunmu jika kamu menggunakan kata sandi yang sama.",
        C: "💡 Tips Manajemen Akun: Lakukan pembaruan kata sandi di seluruh akun penting jika kamu menyadari pernah menggunakan kata sandi yang sama di situs yang bocor.",
        D: "💡 Tips Kompleksitas Password: Kombinasikan huruf besar, huruf kecil, angka, dan simbol (minimal 12 karakter) agar tahan serangan Brute Force."
      }
    }
  },
  {
    id: 6,
    category: "Password Attack",
    title: "Kasus Password Attack 2: Bahaya Login di Wi-Fi Publik",
    scenario: "Rian sedang berada di kafe dan menggunakan Wi-Fi gratisan bernama 'Free_Coffee_WiFi'. Ia hendak melakukan transaksi m-banking dan login ke akun email penting tanpa menggunakan VPN. Apa risiko keamanan yang dihadapi Rian?",
    options: [
      { id: "A", text: "A. Wi-Fi publik selalu aman 100% dari peretasan." },
      { id: "B", text: "B. Peretas di jaringan Wi-Fi yang sama dapat melakukan Man-in-the-Middle Attack untuk mengendus (sniffing) kata sandi Rian yang dikirim tanpa enkripsi." },
      { id: "C", text: "C. Wi-Fi gratis membuat baterai ponsel lebih hemat." },
      { id: "D", text: "D. Password Rian otomatis akan terenkripsi oleh pemilik kafe." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Menghindari transaksi sensitif di Wi-Fi publik tanpa VPN mencegah lalu lintas data diintai oleh pihak yang berada di jaringan yang sama.",
      incorrectByOption: {
        A: "Wi-Fi publik terbuka tanpa password adalah media paling berisiko karena siapapun (termasuk peretas) bisa bergabung di jaringan tersebut.",
        C: "Penggunaan Wi-Fi tidak menjamin keamanan lalu lintas data kredensial akunmu.",
        D: "Pemilik kafe tidak mengenkripsi lalu lintas data individual. Peretas di jaringan terbuka dapat mengintip data tanpa perlindungan enkripsi VPN."
      },
      tipsByOption: {
        A: "💡 Tips Wi-Fi Publik: Matikan fitur 'Auto-Connect Wi-Fi' pada HP agar tidak otomatis terhubung ke jaringan terbuka yang tidak dikenal.",
        C: "💡 Tips Penggunaan Data: Utamakan menggunakan Kuota Seluler Pribadi saat mengakses perbankan atau email penting di tempat umum.",
        D: "💡 Tips Enkripsi VPN: Manfaatkan VPN (Virtual Private Network) saat terpaksa menggunakan Wi-Fi umum agar data terenkripsi aman."
      }
    }
  },

  // --- SOCIAL ENGINEERING (2 Kasus) ---
  {
    id: 7,
    category: "Social Engineering",
    title: "Kasus Social Engineering 1: Telepon Penelepon Hadiah Palsu",
    scenario: "Rani menerima panggilan telepon dari seseorang yang mengaku Customer Service dompet digital. Penelepon mengabarkan Rani memenangkan hadiah Rp 5.000.000, tetapi meminta Rani menyebutkan 6 angka OTP yang baru masuk via SMS. Apa yang harus dilakukan Rani?",
    options: [
      { id: "A", text: "A. Langsung menyebutkan 6 angka OTP karena panggilan terasa meyakinkan." },
      { id: "B", text: "B. Meminta penelepon menunggu sebentar lalu memberikan 6 angka OTP." },
      { id: "C", text: "C. Menolak memberikan OTP, menutup telepon, dan melaporkan nomor tersebut." },
      { id: "D", text: "D. Meminta hadiah dikirimkan dalam bentuk pulsa terlebih dahulu." }
    ],
    correctOptionId: "C",
    explanation: {
      correct: "Menolak memberikan kode OTP dan menutup panggilan telepon adalah benteng keamanan terbaik terhadap penipuan teknik Vishing (Voice Phishing).",
      incorrectByOption: {
        A: "Menyebutkan 6 angka OTP akan membuat penipu berhasil mengambil alih akun m-banking atau dompet digitalmu saat itu juga.",
        B: "Menunda sebentar tidak mengubah fakta bahwa menyerahkan OTP berarti menyerahkan kunci masuk akunmu ke peretas.",
        D: "Menanggapi atau bernegosiasi dengan penipu tetap membuka celah baginya untuk memanipulasi emosimu lebih jauh."
      },
      tipsByOption: {
        A: "💡 Tips Kerahasiaan OTP: Anggap OTP seperti kunci rumahmu. Jangan pernah berikan kode OTP kepada siapapun melalui telepon.",
        B: "💡 Tips Kontrol Emosi: Penipu menggunakan teknik urgensi (menakut-nakuti/mengiming-imingi). Tetap tenang dan jangan terburu-buru bertindak.",
        D: "💡 Tips Verifikasi Undian: Pemenang undian resmi diumumkan di website sah instansi, bukan via telepon mendadak yang meminta syarat OTP."
      }
    }
  },
  {
    id: 8,
    category: "Social Engineering",
    title: "Kasus Social Engineering 2: Pura-Pura Teman Kampus Darurat",
    scenario: "Kamu menerima pesan dari akun Instagram teman dekatmu yang menulis: 'Bro, darurat banget nih! HP gue kena retas, boleh pinjem transfer Rp 500rb dulu gak ke rekening ini? Nanti malam tak ganti'. Apa langkah verifikasi terbaik?",
    options: [
      { id: "A", text: "A. Langsung mentransfer uang ke rekening tersebut karena merasa kasihan." },
      { id: "B", text: "B. Menhubungi temanmu secara langsung via panggilan telepon atau bertemu langsung untuk memastikan bahwa akunnya tidak dibajak." },
      { id: "C", text: "C. Meminta diskon pinjaman menjadi Rp 250rb." },
      { id: "D", text: "D. Mengirimkan nomor PIN ATM kamu ke obrolan IG tersebut." }
    ],
    correctOptionId: "B",
    explanation: {
      correct: "Melakukan cross-check melalui panggilan telepon atau kontak lain memutus rantai penipuan pengambilalihan akun (account takeover).",
      incorrectByOption: {
        A: "Penipu sering mengambil alih akun medsos untuk meminjam uang secara massal ke semua kontak korban.",
        C: "Menawar nominal pinjaman tetap akan membuat uangmu hilang terkirim ke rekening peretas.",
        D: "Nomor PIN ATM adalah rahasia pribadi yang tidak boleh dikirimkan via obrolan pesan apapun."
      },
      tipsByOption: {
        A: "💡 Tips Verifikasi 2-Arah: Selalu konfirmasi pinjaman uang via telepon langsung/suara sebelum mentransfer ke rekening mana pun.",
        C: "💡 Tips Identifikasi Rekening: Periksa nama pemilik rekening tujuan. Jika nama pemilik rekening beda dengan nama temanmu, patut dicurigai!",
        D: "💡 Tips Kerahasiaan PIN: Jangan pernah mengirimkan PIN, password, atau foto kartu ATM di dalam aplikasi pesan instan."
      }
    }
  }
];
