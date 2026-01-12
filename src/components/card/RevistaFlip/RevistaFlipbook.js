import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const RevistaFlipbook = () => {
  const flipbookRef = useRef(null)
  const fullscreenRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const BASE_WIDTH = 800
  const BASE_HEIGHT = 600
  const FULL_WIDTH = 1200
  const FULL_HEIGHT = 800

  // 📂 Imágenes
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "revista3" } }) {
        nodes {
          publicURL
          base
        }
      }
    }
  `)

  const paginas = data.allFile.nodes
    .slice()
    .sort((a, b) => a.base.localeCompare(b.base))
    .map(n => n.publicURL)

  // 📖 Init Turn.js (tamaño base)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.$ && flipbookRef.current) {
        window.$(flipbookRef.current).turn({
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          autoCenter: true,
          elevation: 50,
          gradients: true,
        })
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  // 🎯 Fullscreen change (CLAVE PREMIUM)
  useEffect(() => {
    const onFullscreenChange = () => {
      const fs = !!document.fullscreenElement
      setIsFullscreen(fs)

      if (fs) {
        document.body.style.overflow = "hidden"
        window.$(flipbookRef.current).turn("size", FULL_WIDTH, FULL_HEIGHT)
      } else {
        document.body.style.overflow = ""
        window.$(flipbookRef.current).turn("size", BASE_WIDTH, BASE_HEIGHT)
      }
    }

    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange)
  }, [])

  const enterFullscreen = () => {
    if (!document.fullscreenElement) {
      fullscreenRef.current.requestFullscreen()
    }
  }

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/blasten/turn.js/turn.min.js"></script>
      </Helmet>

      {/* BOTÓN FULLSCREEN (modo normal) */}
      {!isFullscreen && (
        <div style={{ marginBottom: 15 }}>
          <button onClick={enterFullscreen}>⛶ Pantalla completa</button>
        </div>
      )}

      {/* CONTENEDOR FULLSCREEN PREMIUM */}
      <div
        ref={fullscreenRef}
        style={{
          position: isFullscreen ? "fixed" : "relative",
          inset: 0,
          background: isFullscreen
            ? "radial-gradient(circle at center, #222, #000)"
            : "transparent",
          zIndex: isFullscreen ? 9999 : "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* ❌ SALIR */}
        {isFullscreen && (
          <button
            onClick={exitFullscreen}
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 10000,
              fontSize: 22,
              padding: "8px 14px",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        )}

        {/* ⬅ */}
        {isFullscreen && (
          <button
            onClick={() => window.$(flipbookRef.current).turn("previous")}
            style={{
              position: "fixed",
              left: 25,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 34,
              padding: "14px 20px",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ⬅
          </button>
        )}

        {/* ➡ */}
        {isFullscreen && (
          <button
            onClick={() => window.$(flipbookRef.current).turn("next")}
            style={{
              position: "fixed",
              right: 25,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 34,
              padding: "14px 20px",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            ➡
          </button>
        )}

        {/* 📖 FLIPBOOK */}
        <div
          ref={flipbookRef}
          style={{
            width: BASE_WIDTH,
            height: BASE_HEIGHT,
            background: "#fff",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          {paginas.map((src, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
              }}
            >
              <img
                src={src}
                alt={`Página ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTONES NORMALES */}
      {!isFullscreen && (
        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => window.$(flipbookRef.current).turn("previous")}
            style={{ marginRight: 10 }}
          >
            ⬅ Anterior
          </button>
          <button
            onClick={() => window.$(flipbookRef.current).turn("next")}
          >
            Siguiente ➡
          </button>
        </div>
      )}
    </div>
  )
}

export default RevistaFlipbook





