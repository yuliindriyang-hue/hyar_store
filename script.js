
/* =====================================
   HYAR STORE - JAVASCRIPT
===================================== */

// NOMOR WHATSAPP ADMIN
const ADMIN_WA = "6287899233139";

// DATA HARGA RENTAL
const rentalData = {
  1: {
    name: "RENTAL AKUN 01",
    prices: {
      "1 Jam": 17000,
      "2 Jam": 19000,
      "3 Jam": 28000,
      "4 Jam": 29000,
      "6 Jam": 38000,
      "School": 45000,
      "Night": 45000,
      "1 Hari": 58000,
      "2 Hari": 110000
    }
  },

  2: {
    name: "RENTAL AKUN 02",
    prices: {
      "1 Jam": 16000,
      "2 Jam": 18000,
      "3 Jam": 28000,
      "4 Jam": 29000,
      "6 Jam": 39000,
      "School": 45000,
      "Night": 48000,
      "1 Hari": 58000,
      "2 Hari": 110000
    }
  },

  3: {
    name: "RENTAL AKUN 03",
    prices: {
      "1 Jam": 14000,
      "2 Jam": 17000,
      "3 Jam": 19000,
      "4 Jam": 28000,
      "6 Jam": 29000,
      "School": 38000,
      "Night": 38000,
      "1 Hari": 50000,
      "2 Hari": 98000
    }
  },

  4: {
    name: "RENTAL AKUN 04",
    prices: {
      "1 Jam": 14000,
      "2 Jam": 16000,
      "3 Jam": 19000,
      "4 Jam": 28000,
      "6 Jam": 29000,
      "School": 38000,
      "Night": 38000,
      "1 Hari": 50000,
      "2 Hari": 96000
    }
  },

  5: {
    name: "RENTAL AKUN 05",
    prices: {
      "1 Jam": 14000,
      "2 Jam": 17000,
      "3 Jam": 19000,
      "4 Jam": 28000,
      "6 Jam": 29000,
      "School": 39000,
      "Night": 38000,
      "1 Hari": 50000,
      "2 Hari": 100000
    }
  },

  6: {
    name: "RENTAL AKUN 06",
    prices: {
      "1 Jam": 16000,
      "2 Jam": 18000,
      "3 Jam": 26000,
      "4 Jam": 28000,
      "6 Jam": 37000,
      "School": 48000,
      "Night": 48000,
      "1 Hari": 58000,
      "2 Hari": 110000
    }
  },

  7: {
    name: "RENTAL AKUN 07",
    prices: {
      "1 Jam": 15000,
      "2 Jam": 18000,
      "3 Jam": 25000,
      "4 Jam": 28000,
      "6 Jam": 36000,
      "School": 45000,
      "Night": 46000,
      "1 Hari": 57000,
      "2 Hari": 108000
    }
  },

  8: {
    name: "RENTAL AKUN 08",
    prices: {
      "1 Jam": 13000,
      "2 Jam": 16000,
      "3 Jam": 19000,
      "4 Jam": 26000,
      "6 Jam": 29000,
      "School": 38000,
      "Night": 39000,
      "1 Hari": 45000,
      "2 Hari": 96000
    }
  },

  9: {
    name: "RENTAL AKUN 09",
    prices: {
      "1 Jam": 10000,
      "2 Jam": 13000,
      "3 Jam": 19000,
      "4 Jam": 25000,
      "6 Jam": 26000,
      "School": 34000,
      "Night": 35000,
      "1 Hari": 46000,
      "2 Hari": 87000
    }
  },

  10: {
    name: "RENTAL AKUN 10",
    prices: {
      "1 Jam": 18000,
      "3 Jam": 38000,
      "6 Jam": 59000,
      "School": 65000,
      "Night": 65000,
      "1 Hari": 75000,
      "2 Hari": 145000
    }
  },

  11: {
    name: "RENTAL AKUN 11",
    prices: {
      "1 Jam": 11000,
      "2 Jam": 15000,
      "3 Jam": 19000,
      "4 Jam": 24000,
      "6 Jam": 29000,
      "School": 40000,
      "Night": 40000,
      "1 Hari": 50000,
      "2 Hari": 95000
    }
  }
};


// FORMAT RUPIAH
function formatRupiah(number) {
  return "Rp" + number.toLocaleString("id-ID");
}


// =====================================
// INTRO DAN REGISTRASI
// =====================================

const intro = document.getElementById("intro");
const registerPage = document.getElementById("register-page");
const mainPage = document.getElementById("main-page");

function showCorrectPage() {
  const savedName = localStorage.getItem("hyarCustomerName");

  if (savedName) {
    registerPage.style.display = "none";
    mainPage.style.display = "block";
  } else {
    registerPage.style.display = "flex";
    mainPage.style.display = "none";
  }
}

// Intro tampil selama 3 detik
window.addEventListener("load", function () {
  setTimeout(function () {
    intro.style.display = "none";
    showCorrectPage();
  }, 3200);
});


// =====================================
// FORM REGISTRASI
// =====================================

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("customer-name");
  const customerName = nameInput.value.trim();

  if (customerName.length < 2) {
    alert("Nama minimal 2 karakter!");
    return;
  }

  localStorage.setItem("hyarCustomerName", customerName);

  registerPage.style.display = "none";
  mainPage.style.display = "block";

  alert("Selamat datang di HYAR STORE, " + customerName + "!");
});


// =====================================
// PEMESANAN RENTAL WHATSAPP
// =====================================

function orderRental(accountNumber) {
  const account = rentalData[accountNumber];

  if (!account) {
    alert("Akun rental tidak ditemukan!");
    return;
  }

  const customerName =
    localStorage.getItem("hyarCustomerName") || "Pelanggan";

  const availableDurations = Object.keys(account.prices);

  const duration = prompt(
    "HYAR STORE\n\n" +
    account.name + "\n\n" +
    "Pilih durasi rental:\n\n" +
    availableDurations.map(function (item, index) {
      return (index + 1) + ". " + item +
        " - " + formatRupiah(account.prices[item]);
    }).join("\n") +
    "\n\nKetik durasi sesuai pilihan, contoh: 1 Jam"
  );

  if (duration === null) {
    return;
  }

  const selectedDuration = duration.trim();

  if (!account.prices[selectedDuration]) {
    alert("Pilihan durasi tidak tersedia. Periksa kembali penulisannya.");
    return;
  }

  const price = account.prices[selectedDuration];

  const message =
    "*ORDER RENTAL HYAR STORE*\n\n" +
    "Nama: " + customerName + "\n" +
    "Akun: " + account.name + "\n" +
    "Durasi: " + selectedDuration + "\n" +
    "Harga: " + formatRupiah(price) + "\n\n" +
    "Saya ingin memesan akun rental ini.\n" +
    "Mohon informasi selanjutnya dari admin.\n\n" +
    "Terima kasih.";

  const whatsappURL =
    "https://wa.me/" + ADMIN_WA +
    "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}


// =====================================
// MENU NAVIGASI MOBILE
// =====================================

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

// Tutup menu setelah memilih halaman
document.querySelectorAll("#navigation a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
  });
});


// =====================================
// MUSIK WEBSITE
// =====================================

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async function () {
  try {
    if (music.paused) {
      await music.play();
      musicButton.textContent = "♫ PAUSE MUSIC";
    } else {
      music.pause();
      musicButton.textContent = "♫ PLAY MUSIC";
    }
  } catch (error) {
    alert("Musik belum bisa diputar. Periksa file assets/musik.mp3");
  }
});

music.addEventListener("ended", function () {
  musicButton.textContent = "♫ PLAY MUSIC";
});


// =====================================
// SCROLL HALUS
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// =====================================
// CEK FOTO RENTAL
// =====================================

window.addEventListener("error", function (event) {
  if (event.target && event.target.tagName === "IMG") {
    console.warn("Foto tidak ditemukan:", event.target.src);
  }
}, true);

console.log("HYAR STORE berhasil dimuat!");
