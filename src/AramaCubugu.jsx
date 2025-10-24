
import React from 'react';


function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div className="arama-cubugu">
      <input
        type="text"
        placeholder="Kitap adı ara..."
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
      />
    </div>
  );
}

export default AramaCubugu;