const root = document.documentElement;
const $ = (s) => document.querySelector(s);

const I18N = {
  en: {
    speech: 'en-US',
    nav_about: 'About', nav_projects: 'Projects', nav_articles: 'Articles', nav_contact: 'Contact',
    sound_play: '🔊 Listen', sound_stop: '⏹ Stop',
    hero_title: 'Hi, I\'m <span class="accent">Jeremy</span>.',
    hero_sub: 'Project manager for the filter.',
    hero_btn: 'See my work',
    about_h: 'About',
    about_p: 'I\'m Jeremy, a project manager for the filter.',
    proj_h: 'Projects',
    proj1_t: 'Project One', proj2_t: 'Project Two', proj3_t: 'Project Three',
    proj_d: 'A short description of this project.',
    art_h: 'Articles',
    art1_t: 'Responding to a Delayed Loan Repayment Proposal',
    art1_d: 'A summary of my November 2026 reply to a proposal to push repayment of an overdue loan into 2027.',
    contact_h: 'Contact',
    contact_p: 'Say hello:',
    a_date: 'November 2026',
    a_intro: 'This article summarises the position set out in my letter "Tanggapan atas Surat Tanggal 6 November 2026" (written in Indonesian).',
    h_bg: 'Background',
    p_bg1: 'In March 2023 I entered into a loan agreement with PT Multi Makmur ("PTMM"). The principal was Rp2,000,000,000, and the agreement also provided for a commission on certain trade transactions. Under Article 6, the loan was due for repayment by 1 June 2023. More than three years later, final settlement has not been reached.',
    p_bg2: 'On 6 November 2026 I received a letter proposing that repayment begin on 25 March 2027, after a further transaction (referred to as "CMG") was planned for February 2027. This article explains how I responded and why.',
    h_sep: 'Repayment of the loan stands apart from commissions',
    p_sep1: 'The central point of my reply is that two things in the agreement are separate:',
    li_sep1: '<strong>Repayment of the principal</strong> is an obligation under the agreement and does not depend on whether any business transaction goes ahead.',
    li_sep2: '<strong>Commission</strong> is an additional benefit, payable only if the conditions in Article 7 are met (USD 1.30 per metric ton, supported by transaction documents such as the Bill of Lading).',
    p_sep2: 'For that reason I declined to take part in the CMG transaction and asked that repayment not be tied to it, to shipments, or to other business arrangements. Declining does not waive my right to review and receive any commission that has already arisen under Article 7.',
    h_why: 'Why I could not accept a 2027 start',
    p_why: 'The proposal did not state payment amounts, instalment stages or a full settlement schedule, and it would have pushed repayment of an overdue loan into 2027. I asked instead for a clear and workable payment plan: the date of each payment, the amount, and the method.',
    h_calc: 'Working out the final figure',
    p_calc1: 'Once a payment plan is agreed, both sides can reconcile the final amount, taking into account:',
    li_c1: 'The original principal of Rp2,000,000,000 (Article 5), less payments received, to find the outstanding balance.',
    li_c2: 'Commission actually owed under Article 7.',
    li_c3: 'The annual late-payment penalty of 18% under Article 9, calculated pro rata over the actual period of delay.',
    li_c4: 'All payments already made, checked against transfer records.',
    p_calc2: 'I confirmed that I received the Rp300,000,000 payment of 25 August 2023 mentioned in the 6 November letter. How that amount should be applied is for both sides to decide after reviewing the agreement and the payment records, and the figures should then be confirmed in writing.',
    h_time: 'Proposed timeline',
    li_t1: '<strong>20 November 2026:</strong> a written payment plan from PTMM.',
    li_t2: '<strong>1 December 2026:</strong> payment of the outstanding principal, plus the agreed commission and penalty.',
    p_cheque: 'I also hold three cheques provided as security under Article 8. I suggested they be returned only after payment is completed and both sides have confirmed that all obligations under the agreement are settled.',
    h_off: 'An official reply from the company',
    p_off1: 'The 6 November letter was sent in a personal capacity, not as a formal letter from PTMM. Because the agreement is between me and the company, I asked for the reply to be issued on PTMM letterhead and signed by its Director and Commissioner. It should confirm the company\'s position and set out the payment dates, amounts, method and stages.',
    p_off2: 'Under Article 20, any change to the agreement must be made in a written addendum. Discussing a payment plan does not mean I have agreed to change the repayment deadline or given up any existing right.',
    h_close: 'Closing',
    p_close: 'I remain hopeful that this can be settled in a reasonable and respectful way. After more than three years, what both sides need is a concrete result, not repeated discussion without certainty.',
    back: '&larr; Back to articles'
  },
  id: {
    speech: 'id-ID',
    nav_about: 'Tentang', nav_projects: 'Proyek', nav_articles: 'Artikel', nav_contact: 'Kontak',
    sound_play: '🔊 Dengarkan', sound_stop: '⏹ Berhenti',
    hero_title: 'Halo, saya <span class="accent">Jeremy</span>.',
    hero_sub: 'Manajer proyek untuk filter.',
    hero_btn: 'Lihat karya saya',
    about_h: 'Tentang',
    about_p: 'Saya Jeremy, manajer proyek untuk filter.',
    proj_h: 'Proyek',
    proj1_t: 'Proyek Satu', proj2_t: 'Proyek Dua', proj3_t: 'Proyek Tiga',
    proj_d: 'Deskripsi singkat tentang proyek ini.',
    art_h: 'Artikel',
    art1_t: 'Menanggapi Usulan Penundaan Pengembalian Pinjaman',
    art1_d: 'Ringkasan tanggapan saya pada November 2026 atas usulan untuk menunda pengembalian pinjaman yang telah jatuh tempo hingga 2027.',
    contact_h: 'Kontak',
    contact_p: 'Sapa saya:',
    a_date: 'November 2026',
    a_intro: 'Artikel ini merangkum sikap yang saya sampaikan dalam surat "Tanggapan atas Surat Tanggal 6 November 2026".',
    h_bg: 'Latar Belakang',
    p_bg1: 'Pada Maret 2023 saya membuat perjanjian pinjaman dengan PT Multi Makmur ("PTMM"). Pokok pinjaman sebesar Rp2.000.000.000, dan perjanjian tersebut juga mengatur pembagian komisi atas transaksi perdagangan tertentu. Berdasarkan Pasal 6, pinjaman wajib dikembalikan paling lambat 1 Juni 2023. Lebih dari tiga tahun kemudian, penyelesaian akhir belum tercapai.',
    p_bg2: 'Pada 6 November 2026 saya menerima surat yang mengusulkan agar pengembalian dimulai pada 25 Maret 2027, setelah transaksi lanjutan (disebut "CMG") direncanakan pada Februari 2027. Artikel ini menjelaskan bagaimana saya menanggapinya dan alasannya.',
    h_sep: 'Pengembalian pinjaman terpisah dari komisi',
    p_sep1: 'Inti tanggapan saya adalah bahwa dua hal dalam perjanjian ini berdiri sendiri:',
    li_sep1: '<strong>Pengembalian pokok pinjaman</strong> adalah kewajiban berdasarkan perjanjian dan tidak bergantung pada terlaksananya transaksi usaha.',
    li_sep2: '<strong>Komisi</strong> adalah manfaat tambahan yang hanya dibayarkan jika syarat dalam Pasal 7 terpenuhi (USD1,30 per metrik ton, didukung dokumen transaksi seperti Bill of Lading).',
    p_sep2: 'Karena itu saya memutuskan untuk tidak berpartisipasi dalam transaksi CMG dan meminta agar pengembalian pinjaman tidak dikaitkan dengan transaksi tersebut, pengiriman barang, atau pengaturan usaha lainnya. Keputusan ini tidak berarti melepaskan hak saya untuk memeriksa dan menerima komisi yang sudah timbul berdasarkan Pasal 7.',
    h_why: 'Mengapa saya tidak dapat menyetujui awal pembayaran di 2027',
    p_why: 'Usulan tersebut tidak memuat jumlah pembayaran, tahapan pembayaran, maupun jadwal pelunasan yang lengkap, dan akan menunda pengembalian pinjaman yang sudah jatuh tempo hingga 2027. Saya meminta rencana pembayaran yang jelas dan dapat dilaksanakan: tanggal setiap pembayaran, jumlahnya, dan caranya.',
    h_calc: 'Menghitung jumlah akhir',
    p_calc1: 'Setelah rencana pembayaran disepakati, kedua pihak dapat mencocokkan jumlah akhir dengan memperhatikan:',
    li_c1: 'Pokok pinjaman semula sebesar Rp2.000.000.000 (Pasal 5), dikurangi pembayaran yang telah diterima, untuk menentukan saldo yang masih terutang.',
    li_c2: 'Komisi yang memang terutang berdasarkan Pasal 7.',
    li_c3: 'Denda bunga tahunan 18% berdasarkan Pasal 9, dihitung secara pro rata sesuai periode keterlambatan yang sebenarnya.',
    li_c4: 'Seluruh pembayaran yang telah dilakukan, dicocokkan dengan bukti transfer.',
    p_calc2: 'Saya mengonfirmasi telah menerima dana Rp300.000.000 pada 25 Agustus 2023 yang disebut dalam surat 6 November. Bagaimana dana tersebut diperhitungkan ditentukan bersama setelah memeriksa perjanjian dan bukti pembayaran, lalu angkanya dikonfirmasi secara tertulis.',
    h_time: 'Usulan jadwal',
    li_t1: '<strong>20 November 2026:</strong> rencana pembayaran tertulis dari PTMM.',
    li_t2: '<strong>1 Desember 2026:</strong> pembayaran saldo pokok yang terutang, ditambah komisi dan denda yang disepakati.',
    p_cheque: 'Saya juga memegang tiga lembar cek sebagai jaminan berdasarkan Pasal 8. Saya mengusulkan agar cek dikembalikan hanya setelah pembayaran selesai dan kedua pihak memastikan seluruh kewajiban berdasarkan perjanjian telah dilunasi.',
    h_off: 'Jawaban resmi dari perusahaan',
    p_off1: 'Surat 6 November disampaikan atas nama pribadi, bukan sebagai surat resmi PTMM. Karena pihak dalam perjanjian adalah saya dan perusahaan, saya meminta jawaban disampaikan dengan kop surat PTMM dan ditandatangani oleh Direktur dan Komisarisnya. Surat tersebut hendaknya menegaskan sikap perusahaan dan memuat tanggal, jumlah, cara, dan tahapan pembayaran.',
    p_off2: 'Berdasarkan Pasal 20, setiap perubahan perjanjian harus dituangkan dalam addendum tertulis. Pembicaraan tentang rencana pembayaran tidak berarti saya menyetujui perubahan batas waktu pembayaran atau melepaskan hak yang sudah ada.',
    h_close: 'Penutup',
    p_close: 'Saya tetap berharap persoalan ini dapat diselesaikan dengan baik, rasional, dan saling menghormati. Setelah lebih dari tiga tahun, yang dibutuhkan kedua pihak adalah hasil yang nyata, bukan pembahasan berulang tanpa kepastian.',
    back: '&larr; Kembali ke artikel'
  }
};

let lang = 'en';
try { const s = localStorage.getItem('lang'); if (s && I18N[s]) lang = s; } catch (e) {}

function applyLang(l) {
  lang = l;
  root.lang = l;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = I18N[l][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  const sel = $('#lang');
  if (sel) sel.value = l;
  stopSpeech();
  try { localStorage.setItem('lang', l); } catch (e) {}
}

// Footer year
const yr = $('#year');
if (yr) yr.textContent = new Date().getFullYear();

// Theme toggle
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
const tt = $('#theme-toggle');
if (tt) tt.addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Text to speech
const speakBtn = $('#speak');
const synth = window.speechSynthesis;
let speaking = false;

function setSpeakLabel() {
  if (speakBtn) speakBtn.innerHTML = I18N[lang][speaking ? 'sound_stop' : 'sound_play'];
}
function stopSpeech() {
  if (synth) synth.cancel();
  speaking = false;
  setSpeakLabel();
}
function startSpeech() {
  const main = $('main');
  if (!synth || !main) return;
  const chunks = main.innerText.split(/\n+/).map((s) => s.trim()).filter(Boolean);
  if (!chunks.length) return;
  synth.cancel();
  speaking = true;
  chunks.forEach((text, i) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = I18N[lang].speech;
    if (i === chunks.length - 1) u.onend = () => { speaking = false; setSpeakLabel(); };
    u.onerror = () => { speaking = false; setSpeakLabel(); };
    synth.speak(u);
  });
  setSpeakLabel();
}
if (speakBtn) {
  if (!synth) speakBtn.hidden = true;
  else speakBtn.addEventListener('click', () => (speaking ? stopSpeech() : startSpeech()));
}
window.addEventListener('pagehide', stopSpeech);

const langSel = $('#lang');
if (langSel) langSel.addEventListener('change', (e) => applyLang(e.target.value));
applyLang(lang);
