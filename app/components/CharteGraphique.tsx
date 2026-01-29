import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// Chargement du worker (version stable via CDN)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CharteGraphique() {
  const [isMobile, setIsMobile] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);

  // Détection de la taille d'écran
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Appel initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    console.error("Erreur lors du chargement du PDF:", error);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Document
        file="/images/terredethes/charte-graphique.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<p>Chargement de la charte graphique...</p>}
      >
        {numPages && (
          /* @ts-ignore */
          <div style={{ minHeight: isMobile ? "443px" : "625px" }}>
            <HTMLFlipBook
              key={isMobile ? "mobile" : "desktop"}
              width={isMobile ? 320 : 450}
              height={isMobile ? 443 : 625}
              size={isMobile ? "fixed" : "fixed"}
              minWidth={isMobile ? 300 : 450}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1200}
              showCover={true}
              usePortrait={isMobile}
              clickEventForward={false}
              useMouseEvents={true}
              swipeDistance={30}
              style={{ touchAction: "none" }}
              disableFlipByClick={false}
              /* @ts-ignore */
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              flippingTime={isMobile ? 1 : 1000}
              className="charte-flipbook"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} className="flip-page-shadow">
                  <Page
                    pageNumber={index + 1}
                    width={isMobile ? 320 : 450} // DOIT être identique à la width du FlipBook
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </Document>
    </div>
  );
}
