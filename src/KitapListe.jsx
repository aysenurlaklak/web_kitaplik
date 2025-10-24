
import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriToggle }) {
  if (kitaplar.length === 0) {
    return <div className="bos-liste">Kitap bulunamadı.</div>;
  }

  return (
    <div className="kitap-listesi">
      {kitaplar.map(kitap => (
        <KitapKarti 
          key={kitap.id} 
          kitap={kitap} 
          favoriToggle={favoriToggle} 
        />
      ))}
    </div>
  );
}

export default KitapListe;