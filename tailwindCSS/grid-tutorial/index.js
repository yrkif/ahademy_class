console.log("Memulai Demo CSS Grid...");

// CODE BY HENRY RIVARDO
const explanations = {
  "grid-template-columns": {
    "1fr-1fr-1fr": "Membagi grid jadi tiga kolom dengan lebar sama (1fr = satu bagian).",
    "100px-1fr-1fr": "Kolom pertama 100px, sisanya dibagi rata jadi dua kolom.",
    "auto-200px-1fr": "Kolom pertama menyesuaikan isi (auto), kolom kedua 200px, sisanya penuh.",
  },
  "grid-gap": {
    "10px": "Jarak antar item di grid 10px, baik horizontal maupun vertikal.",
    "20px": "Jarak antar item di grid jadi 20px, lebih lebar.",
    "40px": "Jarak antar item di grid 40px, bikin lebih renggang.",
  },
  "justify-items": {
    start: "Item rata kiri di dalam kotak grid (horizontal).",
    center: "Item di tengah kotak grid secara horizontal.",
    end: "Item rata kanan di dalam kotak grid.",
    stretch: "Item melebar penuh di kotak grid (default).",
  },
  "align-items": {
    start: "Item rata atas di dalam kotak grid (vertikal).",
    center: "Item di tengah kotak grid secara vertikal.",
    end: "Item rata bawah di dalam kotak grid.",
    stretch: "Item memanjang penuh di kotak grid (default).",
  },
  "grid-column": {
    "1-2": "Item ada di kolom 1 sampai 2 (kolom pertama).",
    "1-3": "Item membentang dari kolom 1 sampai 3 (dua kolom).",
    "2-4": "Item membentang dari kolom 2 sampai 4 (kolom kedua dan ketiga).",
  },
  "grid-row": {
    "1-2": "Item ada di baris 1 sampai 2 (baris pertama).",
    "1-3": "Item membentang dari baris 1 sampai 3 (dua baris).",
    "2-4": "Item membentang dari baris 2 sampai 4 (baris kedua dan ketiga, kalau ada).",
  },
};

const changeGrid = (className, containerId) => {
  const inputs = document.querySelectorAll(`.${className}`);
  const container = document.querySelector(`#${containerId}`);
  const explanationText = document.querySelector("#explanation-text");
  if (!container) {
    console.error(`Container #${containerId} tidak ditemukan!`);
    return;
  }
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const classValue = `${className}-${input.value}`;
      console.log(`Menerapkan kelas ${classValue} ke #${containerId}`);
      container.className = `grid-container ${classValue}`;
      explanationText.textContent = explanations[className][input.value] || "Pilih properti untuk melihat penjelasannya.";
      animateItems();
    });
  });
};

const changeGridItem = (className, itemId) => {
  const inputs = document.querySelectorAll(`.${className}`);
  const item = document.querySelector(`#${itemId}`);
  const explanationText = document.querySelector("#explanation-text");
  if (!item) {
    console.error(`Item #${itemId} tidak ditemukan!`);
    return;
  }
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const classValue = `${className}-${input.value}`;
      console.log(`Menerapkan kelas ${classValue} ke #${itemId}`);
      item.className = `item ${className}-${input.value}`;
      explanationText.textContent = explanations[className][input.value] || "Pilih properti untuk melihat penjelasannya.";
      animateItems();
    });
  });
};

const setItemColors = () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    if (item.hasAttribute("data-color")) {
      const color = item.getAttribute("data-color");
      item.style.backgroundColor = `#${color}`;
      console.log(`Warna latar #${color} disetel untuk item`);
    } else {
      console.warn(`Atribut data-color tidak ada untuk item`, item);
      item.style.backgroundColor = "#999";
    }
  });
};

const animateItems = () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    gsap.fromTo(
      item,
      { x: item._gsTransform?.x || 0, y: item._gsTransform?.y || 0 },
      {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => console.log(`Menganimasikan item: ${item.id || "tanpa-id"}`),
      }
    );
  });
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM selesai dimuat, menyiapkan demo...");
  setItemColors();
  changeGrid("grid-template-columns", "grid-demo");
  changeGrid("grid-gap", "grid-demo");
  changeGrid("justify-items", "grid-demo");
  changeGrid("align-items", "grid-demo");
  changeGridItem("grid-column", "target-item");
  changeGridItem("grid-row", "target-item");
  animateItems();
});

// Handle resize
window.addEventListener("resize", () => {
  console.log("Jendela di-resize, animasi ulang...");
  animateItems();
});
