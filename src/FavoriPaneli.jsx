
import React from 'react';

function FavoriPaneli({ favoriler, kitaplar }) {
  const favoriKitaplar = kitaplar.filter(kitap => favoriler.includes(kitap.id));

  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriler.length})</h2>
      
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitap eklenmemiş.</p>
      ) : (
        <ul className="favori-listesi">
          {favoriKitaplar.map(kitap => (
            <li key={kitap.id} className="favori-oge">
              <strong>{kitap.baslik}</strong> - {kitap.yazar}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;