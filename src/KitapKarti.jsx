
import React from 'react';

function KitapKarti({ kitap, favoriToggle }) {
  const { id, baslik, yazar, kategori, favorideMi } = kitap;

  return (
    <div className={`kitap-karti ${favorideMi ? 'favori' : ''}`}>
      <div className="kitap-bilgileri">
        <h3>{baslik}</h3>
        <p><strong>Yazar:</strong> {yazar}</p>
        <p><strong>Kategori:</strong> {kategori}</p>
      </div>
      <button 
        className={`favori-btn ${favorideMi ? 'favori-eklendi' : ''}`}
        onClick={() => favoriToggle(id)}
      >
        {favorideMi ? 'Favoriden Çıkar' : 'Favoriye Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;