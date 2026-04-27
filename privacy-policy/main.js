/* ==========================================================================
   MAIN.JS — Satu Ramadhan Privacy Policy
   Handles: i18n (EN/ID), scroll progress, reveal animations, back-to-top
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. TRANSLATIONS
// ---------------------------------------------------------------------------
const TRANSLATIONS = {
  en: {
    header_subtitle: 'by Alea Farrel',
    hero_badge: 'Privacy Policy',
    hero_title_1: 'Your Privacy,',
    hero_title_2: 'Our Commitment.',
    hero_desc: 'Satu Ramadhan is built with respect for your personal data. This page explains clearly how we handle your information — because transparency is part of our values.',
    effective_label: 'Effective:',
    toc_title: 'Table of Contents',
    toc_1: 'Overview', toc_2: 'Data Collected', toc_3: 'App Permissions',
    toc_4: 'How We Use Data', toc_5: 'Data Sharing', toc_6: 'Data Storage',
    toc_7: "Children's Privacy", toc_8: 'Your Rights',
    toc_9: 'Policy Changes', toc_10: 'Contact Us',

    s1_title: 'Overview',
    s1_p1: 'This Privacy Policy applies to <strong>Satu Ramadhan</strong> (package: <strong>com.saturamadhan.mobile</strong>), an Islamic companion app for Android developed by <strong>Alea Farrel</strong>. By using the application, you agree to the practices described in this policy.',
    s1_p2: 'Satu Ramadhan is a comprehensive worship companion featuring accurate prayer times, Adhan reminders, a full digital Al-Qur\'an with Tajweed highlighting, Qibla direction with a live map, and a smart digital Tasbih.',
    s1_highlight: '<strong>Short version:</strong> Satu Ramadhan does not sell your data. We do not create user accounts. We operate no servers and store no user data on any developer-owned infrastructure. Location data is processed on-device to calculate prayer times and Qibla direction — it is only sent to public third-party APIs (Aladhan, Nominatim OpenStreetMap) solely to serve the app\'s features.',

    s2_title: 'Data We Collect',
    s2_p1: 'We collect only the minimum data required for the app to function properly. Here is a complete list of what the app accesses:',
    s2_item1: '<strong>Location (GPS):</strong> Used locally for Qibla direction, and sent temporarily to public APIs (Aladhan, Nominatim) strictly to fetch accurate prayer times and your city name. Coordinates are never stored or sold.',
    s2_item2: '<strong>Notification Preferences:</strong> Your Adhan reminder settings are stored locally on your device.',
    s2_item3: '<strong>Audio Playback:</strong> Adhan audio files are played locally. No audio data is recorded or captured from your device.',
    s2_item4: '<strong>Local Storage:</strong> App preferences (language, theme, Tasbih counts, bookmarks) are saved locally on your device and never leave it.',
    s2_item5: '<strong>Network Access:</strong> Used to contact third-party public APIs: <strong>Aladhan API</strong> (prayer times), <strong>Nominatim OpenStreetMap</strong> (reverse geocoding for city name), and <strong>EveryAyah API</strong> (Quranic audio recitation). Only the minimum required parameters (e.g. coordinates) are sent — no personal identifiers are ever transmitted.',
    s2_p2: 'We do <strong>not</strong> collect: your name, email address, phone number, payment information, browsing history, device identifiers for advertising, or any other personally identifiable information.',

    s3_title: 'App Permissions',
    s3_p1: 'Satu Ramadhan requests the following Android permissions. Each is used solely for the stated feature:',
    perm1_desc: 'Prayer times & Qibla', perm2_desc: 'Approximate location fallback',
    perm3_desc: 'Online data fallback', perm4_desc: 'Adhan reminders',
    perm5_desc: 'Precise prayer notifications', perm6_desc: 'Audio playback service',
    perm7_desc: 'Haptic feedback', perm8_desc: 'Keep notifications reliable',

    s4_title: 'How We Use Your Data',
    s4_p1: 'All data accessed by Satu Ramadhan is used exclusively for the following purposes:',
    s4_item1: 'Calculate accurate prayer times by sending your coordinates to the <strong>Aladhan API</strong> (aladhan.com) — a free, public Islamic prayer times service. No account or personal identifier is included in the request.',
    s4_item2: 'Reverse-geocode your location to display a city name using <strong>Nominatim OpenStreetMap</strong> (nominatim.openstreetmap.org). Only coordinates are sent; no personal data is attached.',
    s4_item3: 'Stream Quranic verse audio recitations on demand from <strong>EveryAyah API</strong> (everyayah.com). Requests contain only the surah and verse number — no user data.',
    s4_item4: 'Determine Qibla direction and deliver scheduled Adhan notifications — all processed locally on your device.',
    s4_item5: 'Store your personal preferences (theme, language, bookmarks, Tasbih counts) locally on your device between sessions.',
    s4_p2: 'We do not use your data for advertising, profiling, analytics sold to third parties, or any purpose beyond what is described above.',

    s5_title: 'Data Sharing',
    s5_p1: '<strong>We do not sell, trade, or rent your personal information to any third party.</strong>',
    s5_p2: 'Satu Ramadhan does not integrate any third-party advertising SDKs, analytics platforms, or social media tracking pixels.',
    s5_p3: 'The only external network calls the app may make are:',
    s5_item1: '<strong>Aladhan API</strong> (aladhan.com) — receives your geographic coordinates to return prayer times. No account, name, or device identifier is included.',
    s5_item2: '<strong>Nominatim OpenStreetMap</strong> (nominatim.openstreetmap.org) — receives your coordinates to return a human-readable city name for display purposes only.',
    s5_item3: '<strong>EveryAyah API</strong> (everyayah.com) — receives a surah and verse number to stream the corresponding Quranic audio. No user data is sent.',
    s5_p4: 'None of these requests include device identifiers, account information, advertising IDs, or any other personal data. We do not operate any developer-owned server or database.',

    s6_title: 'Data Storage & Security',
    s6_p1: 'All user preferences, bookmarks, Tasbih counts, and notification settings are stored <strong>locally on your device</strong> using Android\'s secure storage mechanisms (SharedPreferences / Capacitor Preferences). This data is private to the application and not accessible to other apps.',
    s6_p2: '<strong>Retention:</strong> App data is retained as long as the application is installed. You can clear all app data through Android\'s system settings (Settings → Apps → Satu Ramadhan → Clear Data).',
    s6_p3: '<strong>Security:</strong> Satu Ramadhan does not maintain any developer-owned server or database. User data is never uploaded to or stored on any server controlled by the developer. The only outbound network requests go to named public APIs (Aladhan, Nominatim, EveryAyah) with no personal identifiers attached.',
    s6_highlight: 'Because we do not operate user accounts or cloud storage, there is no "account deletion" process — simply uninstalling the app removes all associated data from your device permanently.',

    s7_title: "Children's Privacy",
    s7_p1: 'Satu Ramadhan is a general-audience application suitable for all ages. The app does not knowingly collect any personal information from children under 13 years of age.',
    s7_p2: 'Since we do not collect personal data from any user regardless of age, this application is inherently safe for use by children under parental guidance.',

    s8_title: 'Your Rights',
    s8_p1: 'Regardless of your location, you have the following rights with respect to your data:',
    s8_item1: '<strong>Right to Know:</strong> You can ask us what data (if any) we hold about you. As described above, we hold no server-side personal data.',
    s8_item2: '<strong>Right to Delete:</strong> Delete all locally stored data via Android Settings → Apps → Satu Ramadhan → Clear Data, or by uninstalling the app.',
    s8_item3: '<strong>Right to Withdraw Consent:</strong> Revoke any permission (location, notifications) at any time through Android\'s permission settings.',
    s8_item4: '<strong>Right to Contact:</strong> Reach us at any time with privacy questions. We will respond within a reasonable timeframe.',
    s8_p2: 'If you are in the EEA or UK, you may have rights under GDPR. For Indonesian users, your rights are covered under the Personal Data Protection Law (UU PDP No. 27 Tahun 2022).',

    s9_title: 'Changes to This Policy',
    s9_p1: 'We may update this Privacy Policy periodically to reflect changes in the application\'s features or applicable legal requirements. We will update the "Effective Date" when significant changes are made.',
    s9_p2: 'Your continued use of Satu Ramadhan after any changes constitutes your acceptance of the updated policy.',
    s9_p3: 'This page is hosted at a permanent, public URL and does not require any login or special software to access, in accordance with Google Play Developer Policy.',

    s10_title: 'Contact Us',
    s10_p1: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out. We are committed to responding to all privacy-related inquiries.',
    contact_label: 'Developer Contact',
    website_label: 'Website',
    s10_p2: '<strong>Developer:</strong> Alea Farrel &nbsp;|&nbsp; <strong>App:</strong> Satu Ramadhan &nbsp;|&nbsp; <strong>Package:</strong> com.saturamadhan.mobile',

    footer_rights: 'All rights reserved.',
    footer_desc: 'Built with care for the Muslim community.',
    footer_back_top: 'Back to top',
    footer_play_store: 'Google Play Store',
  },

  id: {
    header_subtitle: 'by Alea Farrel',
    hero_badge: 'Kebijakan Privasi',
    hero_title_1: 'Privasi Anda,',
    hero_title_2: 'Komitmen Kami.',
    hero_desc: 'Satu Ramadhan dibangun dengan menghormati data pribadi Anda. Halaman ini menjelaskan secara jelas bagaimana kami menangani informasi Anda — karena transparansi adalah bagian dari nilai-nilai kami.',
    effective_label: 'Berlaku:',
    toc_title: 'Daftar Isi',
    toc_1: 'Ikhtisar', toc_2: 'Data yang Dikumpulkan', toc_3: 'Izin Aplikasi',
    toc_4: 'Penggunaan Data', toc_5: 'Berbagi Data', toc_6: 'Penyimpanan Data',
    toc_7: 'Privasi Anak', toc_8: 'Hak Anda',
    toc_9: 'Perubahan Kebijakan', toc_10: 'Hubungi Kami',

    s1_title: 'Ikhtisar',
    s1_p1: 'Kebijakan Privasi ini berlaku untuk <strong>Satu Ramadhan</strong> (nama paket: <strong>com.saturamadhan.mobile</strong>), aplikasi pendamping ibadah Islam untuk Android yang dikembangkan oleh <strong>Alea Farrel</strong>. Dengan menggunakan aplikasi ini, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.',
    s1_p2: 'Satu Ramadhan adalah aplikasi islami komprehensif yang menampilkan jadwal sholat akurat, pengingat adzan, Al-Qur\'an digital lengkap dengan sorotan Tajweed, arah kiblat dengan peta langsung, dan Tasbih digital pintar.',
    s1_highlight: '<strong>Ringkasan:</strong> Satu Ramadhan tidak menjual data Anda. Kami tidak membuat akun pengguna. Kami tidak mengoperasikan server maupun menyimpan data pengguna di infrastruktur milik pengembang. Data lokasi diproses di perangkat dan hanya dikirim ke API pihak ketiga publik (Aladhan, Nominatim OpenStreetMap) semata-mata untuk menjalankan fitur aplikasi.',

    s2_title: 'Data yang Kami Kumpulkan',
    s2_p1: 'Kami hanya mengumpulkan data minimum yang diperlukan agar aplikasi berfungsi dengan baik. Berikut adalah daftar lengkap apa yang diakses aplikasi:',
    s2_item1: '<strong>Lokasi (GPS):</strong> Digunakan lokal untuk arah kiblat, dan dikirim sementara ke API publik (Aladhan, Nominatim) khusus untuk mengambil jadwal sholat dan nama kota. Koordinat tidak pernah disimpan atau dijual.',
    s2_item2: '<strong>Preferensi Notifikasi:</strong> Pengaturan pengingat adzan Anda disimpan secara lokal di perangkat Anda.',
    s2_item3: '<strong>Pemutaran Audio:</strong> File audio adzan diputar secara lokal. Tidak ada data audio yang direkam dari perangkat Anda.',
    s2_item4: '<strong>Penyimpanan Lokal:</strong> Preferensi aplikasi (bahasa, tema, hitungan Tasbih, bookmark) disimpan secara lokal dan tidak pernah meninggalkan perangkat Anda.',
    s2_item5: '<strong>Akses Jaringan:</strong> Digunakan untuk menghubungi API publik pihak ketiga: <strong>Aladhan API</strong> (waktu sholat), <strong>Nominatim OpenStreetMap</strong> (nama kota dari koordinat), dan <strong>EveryAyah API</strong> (audio tilawah Al-Qur\'an). Hanya parameter minimum yang diperlukan (mis. koordinat) yang dikirim — tidak ada pengenal pribadi yang pernah dikirimkan.',
    s2_p2: 'Kami <strong>tidak</strong> mengumpulkan: nama, alamat email, nomor telepon, informasi pembayaran, riwayat penelusuran, pengenal perangkat untuk iklan, atau informasi pengenal pribadi lainnya.',

    s3_title: 'Izin Aplikasi',
    s3_p1: 'Satu Ramadhan meminta izin Android berikut. Setiap izin hanya digunakan untuk fitur yang disebutkan:',
    perm1_desc: 'Waktu sholat & kiblat', perm2_desc: 'Lokasi perkiraan cadangan',
    perm3_desc: 'Data online cadangan', perm4_desc: 'Pengingat adzan',
    perm5_desc: 'Notifikasi sholat tepat waktu', perm6_desc: 'Layanan pemutaran audio',
    perm7_desc: 'Umpan balik haptic', perm8_desc: 'Jaga notifikasi tetap andal',

    s4_title: 'Cara Kami Menggunakan Data Anda',
    s4_p1: 'Semua data yang diakses oleh Satu Ramadhan digunakan secara eksklusif untuk tujuan berikut:',
    s4_item1: 'Menghitung waktu sholat dengan mengirimkan koordinat Anda ke <strong>Aladhan API</strong> (aladhan.com) — layanan waktu sholat Islam publik dan gratis. Tidak ada akun atau pengenal pribadi yang disertakan.',
    s4_item2: 'Mengonversi koordinat lokasi menjadi nama kota menggunakan <strong>Nominatim OpenStreetMap</strong> (nominatim.openstreetmap.org). Hanya koordinat yang dikirim; tidak ada data pribadi yang disertakan.',
    s4_item3: 'Streaming audio tilawah ayat Al-Qur\'an sesuai permintaan dari <strong>EveryAyah API</strong> (everyayah.com). Permintaan hanya berisi nomor surah dan ayat — tanpa data pengguna.',
    s4_item4: 'Menentukan arah kiblat dan mengirimkan notifikasi adzan terjadwal — semuanya diproses secara lokal di perangkat Anda.',
    s4_item5: 'Menyimpan preferensi pribadi Anda (tema, bahasa, bookmark, hitungan Tasbih) secara lokal di perangkat Anda antar sesi.',
    s4_p2: 'Kami tidak menggunakan data Anda untuk iklan, pemrofilan, analitik yang dijual kepada pihak ketiga, atau tujuan apa pun di luar yang dijelaskan di atas.',

    s5_title: 'Berbagi Data',
    s5_p1: '<strong>Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga mana pun.</strong>',
    s5_p2: 'Satu Ramadhan tidak mengintegrasikan SDK iklan pihak ketiga, platform analitik, atau piksel pelacakan media sosial apa pun.',
    s5_p3: 'Satu-satunya panggilan jaringan eksternal yang mungkin dilakukan aplikasi adalah:',
    s5_item1: '<strong>Aladhan API</strong> (aladhan.com) — menerima koordinat geografis Anda untuk mengembalikan jadwal waktu sholat. Tidak ada akun, nama, atau pengenal perangkat yang disertakan.',
    s5_item2: '<strong>Nominatim OpenStreetMap</strong> (nominatim.openstreetmap.org) — menerima koordinat Anda untuk mengembalikan nama kota yang dapat dibaca manusia, hanya untuk keperluan tampilan.',
    s5_item3: '<strong>EveryAyah API</strong> (everyayah.com) — menerima nomor surah dan ayat untuk streaming audio Al-Qur\'an yang sesuai. Tidak ada data pengguna yang dikirim.',
    s5_p4: 'Tidak ada dari permintaan tersebut yang menyertakan pengenal perangkat, informasi akun, ID iklan, atau data pribadi lainnya. Kami tidak mengoperasikan server atau database milik pengembang.',

    s6_title: 'Penyimpanan & Keamanan Data',
    s6_p1: 'Semua preferensi pengguna, bookmark, hitungan Tasbih, dan pengaturan notifikasi disimpan <strong>secara lokal di perangkat Anda</strong> menggunakan mekanisme penyimpanan aman Android (SharedPreferences / Capacitor Preferences). Data ini bersifat pribadi untuk aplikasi dan tidak dapat diakses oleh aplikasi lain.',
    s6_p2: '<strong>Retensi:</strong> Data aplikasi disimpan selama aplikasi terpasang. Anda dapat menghapus semua data aplikasi melalui pengaturan sistem Android (Pengaturan → Aplikasi → Satu Ramadhan → Hapus Data).',
    s6_p3: '<strong>Keamanan:</strong> Satu Ramadhan tidak memiliki server atau database milik pengembang. Data pengguna tidak pernah diunggah ke atau disimpan di server mana pun yang dikendalikan pengembang. Satu-satunya permintaan jaringan keluar ditujukan ke API publik yang disebutkan (Aladhan, Nominatim, EveryAyah) tanpa pengenal pribadi yang disertakan.',
    s6_highlight: 'Karena kami tidak mengoperasikan akun pengguna atau penyimpanan cloud, tidak ada proses "penghapusan akun" — cukup menghapus instalasi aplikasi akan menghapus semua data terkait dari perangkat Anda secara permanen.',

    s7_title: 'Privasi Anak',
    s7_p1: 'Satu Ramadhan adalah aplikasi umum yang cocok untuk semua usia. Aplikasi ini tidak secara sadar mengumpulkan informasi pribadi apa pun dari anak-anak di bawah usia 13 tahun.',
    s7_p2: 'Karena kami tidak mengumpulkan data pribadi dari pengguna mana pun tanpa memandang usia, aplikasi ini secara inheren aman untuk digunakan oleh anak-anak di bawah bimbingan orang tua.',

    s8_title: 'Hak Anda',
    s8_p1: 'Terlepas dari lokasi Anda, Anda memiliki hak-hak berikut sehubungan dengan data Anda:',
    s8_item1: '<strong>Hak untuk Mengetahui:</strong> Anda dapat menanyakan kepada kami data apa (jika ada) yang kami miliki tentang Anda. Seperti yang dijelaskan di atas, kami tidak menyimpan data pribadi di sisi server.',
    s8_item2: '<strong>Hak untuk Menghapus:</strong> Hapus semua data yang disimpan secara lokal melalui Pengaturan Android → Aplikasi → Satu Ramadhan → Hapus Data, atau dengan menghapus instalasi aplikasi.',
    s8_item3: '<strong>Hak untuk Mencabut Persetujuan:</strong> Cabut izin apa pun (lokasi, notifikasi) kapan saja melalui pengaturan izin Android.',
    s8_item4: '<strong>Hak untuk Menghubungi:</strong> Hubungi kami kapan saja dengan pertanyaan privasi. Kami akan merespons dalam jangka waktu yang wajar.',
    s8_p2: 'Untuk pengguna Indonesia, hak Anda dilindungi oleh Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022). Untuk pengguna di EEA atau Inggris, Anda mungkin memiliki hak di bawah GDPR.',

    s9_title: 'Perubahan Kebijakan Ini',
    s9_p1: 'Kami dapat memperbarui Kebijakan Privasi ini secara berkala untuk mencerminkan perubahan fitur aplikasi atau persyaratan hukum yang berlaku. Kami akan memperbarui "Tanggal Efektif" ketika perubahan signifikan dilakukan.',
    s9_p2: 'Penggunaan Satu Ramadhan yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda atas kebijakan yang diperbarui.',
    s9_p3: 'Halaman ini dihosting di URL publik permanen dan tidak memerlukan login atau perangkat lunak khusus untuk mengaksesnya, sesuai dengan Kebijakan Pengembang Google Play.',

    s10_title: 'Hubungi Kami',
    s10_p1: 'Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan mengenai Kebijakan Privasi ini, jangan ragu untuk menghubungi kami. Kami berkomitmen untuk merespons semua pertanyaan terkait privasi.',
    contact_label: 'Kontak Pengembang',
    website_label: 'Situs Web',
    s10_p2: '<strong>Pengembang:</strong> Alea Farrel &nbsp;|&nbsp; <strong>Aplikasi:</strong> Satu Ramadhan &nbsp;|&nbsp; <strong>Paket:</strong> com.saturamadhan.mobile',

    footer_rights: 'Semua hak dilindungi.',
    footer_desc: 'Dibangun dengan penuh perhatian untuk umat Muslim.',
    footer_back_top: 'Kembali ke atas',
    footer_play_store: 'Google Play Store',
  }
};

// ---------------------------------------------------------------------------
// 2. I18N ENGINE
// ---------------------------------------------------------------------------
let currentLang = 'en';

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;

  // Update html[lang]
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update page title
  document.title = lang === 'id'
    ? 'Kebijakan Privasi'
    : 'Privacy Policy';

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Update lang button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.id === `lang-${lang}`;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Persist preference
  try { localStorage.setItem('pp_lang', lang); } catch (_) {}
}

// ---------------------------------------------------------------------------
// 3. SCROLL PROGRESS BAR
// ---------------------------------------------------------------------------
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

// ---------------------------------------------------------------------------
// 4. BACK TO TOP BUTTON
// ---------------------------------------------------------------------------
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

// ---------------------------------------------------------------------------
// 5. SCROLL REVEAL (Intersection Observer)
// ---------------------------------------------------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll('.js-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings that appear together
        const delay = i * 60;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ---------------------------------------------------------------------------
// 6. CURRENT YEAR
// ---------------------------------------------------------------------------
function setCurrentYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ---------------------------------------------------------------------------
// 7. INIT
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Restore language preference
  let savedLang = 'en';
  try {
    const stored = localStorage.getItem('pp_lang');
    if (stored && TRANSLATIONS[stored]) savedLang = stored;
    else {
      // Auto-detect from browser
      const browserLang = navigator.language || navigator.userLanguage || '';
      if (browserLang.toLowerCase().startsWith('id')) savedLang = 'id';
    }
  } catch (_) {}

  setLang(savedLang);
  initScrollProgress();
  initBackToTop();
  initScrollReveal();
  setCurrentYear();
});
