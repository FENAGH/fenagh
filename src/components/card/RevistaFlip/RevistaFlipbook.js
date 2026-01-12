import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"

const TOTAL_PAGINAS = 40 // AJUSTA si tienes más

const RevistaFlipbook = () => {
  const flipbookRef = useRef(null)
  const containerRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // 🔁 Inicializar Turn.js UNA sola vez
  useEffect(() => {
    const initTurn = () => {
      if (!window.$ || !window.$.fn.turn || !flipbookRef.current) return

      if (window.$(flipbookRef.current).data("turn")) return

      window.$(flipbookRef.current).turn({
        width: 900,
        height: 600,
        autoCenter: true,
        elevation: 50,
        gradients: true,
      })
    }

    const t = setTimeout(initTurn, 400)
    return () => clearTimeout(t)
  }, [])

  // 🎥 Fullscreen
  useEffect(() => {
    const onFsChange = () => {
      const fs = !!document.fullscreenElement
      setIsFullscreen(fs)

      if (window.$ && flipbookRef.current) {
        window.$(flipbookRef.current).turn(
          "size",
          fs ? 1200 : 900,
          fs ? 800 : 600
        )
      }
    }

    document.addEventListener("fullscreenchange", onFsChange)
    return () =>
      document.removeEventListener("fullscreenchange", onFsChange)
  }, [])

  const enterFullscreen = () => {
    if (containerRef.current && !document.fullscreenElement) {
      containerRef.current.requestFullscreen()
    }
  }

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  return (
    <div style={{ textAlign: "center", marginBottom: 80 }}>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/blasten/turn.js/turn.min.js"></script>
      </Helmet>

      {!isFullscreen && (
        <button onClick={enterFullscreen} style={{ marginBottom: 15 }}>
          ⛶ Pantalla completa
        </button>
      )}

      <div
        ref={containerRef}
        style={{
          position: isFullscreen ? "fixed" : "relative",
          inset: 0,
          background: isFullscreen ? "#000" : "transparent",
          zIndex: isFullscreen ? 9999 : "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isFullscreen && (
          <button
            onClick={exitFullscreen}
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              fontSize: 20,
              padding: "8px 14px",
              background: "rgba(0,0,0,.6)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ✕
          </button>
        )}

        {isFullscreen && (
          <>
            <button
              onClick={() => window.$(flipbookRef.current).turn("previous")}
              style={{
                position: "fixed",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 30,
                background: "rgba(0,0,0,.6)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                padding: "12px 18px",
                cursor: "pointer",
              }}
            >
              ⬅
            </button>

            <button
              onClick={() => window.$(flipbookRef.current).turn("next")}
              style={{
                position: "fixed",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 30,
                background: "rgba(0,0,0,.6)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                padding: "12px 18px",
                cursor: "pointer",
              }}
            >
              ➡
            </button>
          </>
        )}

        <div
          ref={flipbookRef}
          style={{
            width: 900,
            height: 600,
            background: "#fff",
            boxShadow: "0 20px 40px rgba(0,0,0,.5)",
          }}
        >
          {Array.from({ length: TOTAL_PAGINAS }).map((_, i) => (
            <div key={i}>
              <img
                src={`/fonts/revista3/${String(i + 1).padStart(2, "0")}.png`}
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

      {!isFullscreen && (
        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => window.$(flipbookRef.current).turn("previous")}
            style={{ marginRight: 10 }}
          >
            ⬅ Anterior
          </button>
          <button onClick={() => window.$(flipbookRef.current).turn("next")}>
            Siguiente ➡
          </button>
        </div>
      )}
    </div>
  )
}

export default RevistaFlipbook










