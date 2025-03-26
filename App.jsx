import React, { useState } from 'react';
import './App.css';

// Datos temporales de prueba (simulando backend)
const videos = [
  { id: 1, title: 'Álgebra Básica', subject: 'Matemáticas', url: 'https://www.youtube.com/embed/_6uyQISZvBc' },
  { id: 2, title: 'Fotosíntesis', subject: 'Biología', url: 'https://www.youtube.com/embed/Pqr4HVdI9a4' },
];

const pdfGuides = [
  { id: 1, title: 'Guía de Matemáticas', url: 'https://aws.s3/guia-matematicas.pdf' },
  { id: 2, title: 'Guía de Biología', url: 'https://aws.s3/guia-biologia.pdf' },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Estilo temporal para problemas de responsive
  const mobileWarning = {
    color: 'red',
    display: 'none' // Cambiar a 'block' en móviles mediante media queries
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Plataforma Educativa</h1>
        <nav>
          <button>Videos</button>
          <button>Guías</button>
          <button>Mi Cuenta</button>
        </nav>
      </header>

      {/* Sección principal */}
      <main>
        {/* Barra de búsqueda (funcionalidad parcial) */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Listado de videos */}
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
              <div className="thumbnail-placeholder"></div>
              <h3>{video.title}</h3>
              <p>{video.subject}</p>
            </div>
          ))}
        </div>

        {/* Reproductor de video (implementación básica) */}
        {selectedVideo && (
          <div className="video-player">
            <iframe
              title={selectedVideo.title}
              width="560"
              height="315"
              src={selectedVideo.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Sección de descargas (con problema de responsive) */}
        <div className="pdf-section">
          <h2>Guías Disponibles</h2>
          <p style={mobileWarning}>⚠️ Los PDF pueden no verse bien en móviles</p>
          <div className="pdf-list">
            {pdfGuides.map((guide) => (
              <div key={guide.id} className="pdf-card">
                <h3>{guide.title}</h3>
                <a
                  href={guide.url}
                  download
                  className="download-button"
                >
                  Descargar PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
