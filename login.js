$(document).ready(function () {
    // Pilih elemen input password dan toggle-password
    const $passwordInput = $('.password-container .input-field');
    const $togglePassword = $('.toggle-password');
  
    // Tambahkan event listener untuk toggle password
    $togglePassword.on('click', function () {
      // Cek apakah input saat ini bertipe "password"
      if ($passwordInput.attr('type') === 'password') {
        $passwordInput.attr('type', 'text'); // Ubah tipe menjadi "text"
        $(this).text('Sembunyikan'); // Ubah teks toggle
      } else {
        $passwordInput.attr('type', 'password'); // Ubah kembali tipe menjadi "password"
        $(this).text('Tampilkan'); // Ubah teks toggle
      }
    });
  });
  