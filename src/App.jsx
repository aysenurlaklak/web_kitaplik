import React, { useState, useEffect } from 'react';
import AramaCubugu from './AramaCubugu';
import KategoriFiltre from './KategoriFiltre';
import KitapListe from './KitapListe';
import FavoriPaneli from './FavoriPaneli';
import './App.css';


const KITAPLAR = [
  { id: 1, baslik: 'Sefiller', yazar: 'Victor Hugo', kategori: 'Klasik' },
  { id: 2, baslik: '1984', yazar: 'George Orwell', kategori: 'Bilim Kurgu' },
  { id: 3, baslik: 'Suç ve Ceza', yazar: 'Dostoyevski', kategori: 'Klasik' },
  { id: 4, baslik: 'Dune', yazar: 'Frank Herbert', kategori: 'Bilim Kurgu' },
  { id: 5, baslik: 'Harry Potter', yazar: 'J.K. Rowling', kategori: 'Fantastik' },
  { id: 6, baslik: 'Yüzüklerin Efendisi', yazar: 'J.R.R. Tolkien', kategori: 'Fantastik' },
  { id: 7, baslik: 'Hayvan Çiftliği', yazar: 'George Orwell', kategori: 'Klasik' },
  { id: 8, baslik: 'Fahrenheit 451', yazar: 'Ray Bradbury', kategori: 'Bilim Kurgu' },
  
 
];

function App() {
  
  const [aramaMetni, setAramaMetni] = useState('');
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState([]);
  const [filtrelenmisKitaplar, setFiltrelenmisKitaplar] = useState([]);
  const [yuklendi, setYuklendi] = useState(false); 

  
  useEffect(() => {
    const kayitliArama = localStorage.getItem('aramaMetni') || '';
    let kayitliFavoriler = [];
    try {
      kayitliFavoriler = JSON.parse(localStorage.getItem('favoriler')) || [];
    } catch (e) {
      kayitliFavoriler = [];
    }

    setAramaMetni(kayitliArama);
    setFavoriler(kayitliFavoriler);
    setYuklendi(true);
  }, []);

  
  useEffect(() => {
    if (!yuklendi) return; 
    localStorage.setItem('aramaMetni', aramaMetni);
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [aramaMetni, favoriler, yuklendi]);

  
  useEffect(() => {
    let kitaplar = KITAPLAR;

    if (aramaMetni) {
      kitaplar = kitaplar.filter(kitap =>
        kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
      );
    }

    if (kategori !== 'Tümü') {
      kitaplar = kitaplar.filter(kitap => kitap.kategori === kategori);
    }

    kitaplar = kitaplar.map(kitap => ({
      ...kitap,
      favorideMi: favoriler.includes(kitap.id),
    }));

    setFiltrelenmisKitaplar(kitaplar);
  }, [aramaMetni, kategori, favoriler]);

  
  const favoriToggle = (kitapId) => {
    if (favoriler.includes(kitapId)) {
      setFavoriler(favoriler.filter(id => id !== kitapId));
    } else {
      setFavoriler([...favoriler, kitapId]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kitaplığıma Hoşgeldiniz...</h1>
      </header>

      <div className="container">
        <div className="filtreler">
          <AramaCubugu 
            aramaMetni={aramaMetni} 
            setAramaMetni={setAramaMetni} 
          />
          <KategoriFiltre 
            kategori={kategori} 
            setKategori={setKategori} 
          />
        </div>

        <div className="icerik">
          <div className="kitap-listesi">
            <h2>Kitaplar ({filtrelenmisKitaplar.length})</h2>
            <KitapListe 
              kitaplar={filtrelenmisKitaplar} 
              favoriToggle={favoriToggle} 
            />
          </div>

          <div className="favori-paneli">
            <FavoriPaneli 
              favoriler={favoriler} 
              kitaplar={KITAPLAR} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
