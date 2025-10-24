
import React from 'react';

function KategoriFiltre({ kategori, setKategori }) {
  // Kitaplardan benzersiz kategorileri al
  const kategoriler = ['Tümü', 'Klasik', 'Bilim Kurgu', 'Fantastik'];

  return (
    <div className="kategori-filtre">
      <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>{kat}</option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;