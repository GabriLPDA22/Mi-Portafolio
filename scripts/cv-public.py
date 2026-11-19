"""
Versión pública del CV: quita el email y el teléfono de la fila de contacto y re-centra el resto
(ubicación y web), conservando texto seleccionable y enlaces. Ambos se eliminan de verdad
(redacción), no se tapan: no quedan ni en el texto, ni en los enlaces ni en la estructura.
El contacto público es el formulario de la web (anti-spam); el email solo va en el CV que se envía en privado.

Uso: python3 scripts/cv-public.py <cv-original.pdf> public/cv/Gabriel-Saiz-CV.pdf   (requiere pymupdf)
Coordenadas pensadas para el CV actual (A4, fila de contacto en y≈85-101 pt).
"""
import sys
import pymupdf

src_path, out_path = sys.argv[1], sys.argv[2]
Y0, Y1 = 84.5, 101.0
LINE_ART = pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED
# (x0, x1, enlace) de cada elemento que se conserva, en el orden original
ITEMS = [(271.5, 392, None), (401, 530, 'https://gabrielcodes.dev/')]
GAP = 11.5


def only(x0: float, x1: float) -> pymupdf.Document:
    """Documento de una página que solo contiene la franja [x0, x1] de la fila de contacto."""
    d = pymupdf.open(src_path)
    d.select([0])
    p = d[0]
    w, h = p.rect.width, p.rect.height
    for r in (pymupdf.Rect(0, 0, w, Y0), pymupdf.Rect(0, Y1, w, h), pymupdf.Rect(0, Y0, x0, Y1), pymupdf.Rect(x1, Y0, w, Y1)):
        p.add_redact_annot(r, fill=(1, 1, 1))
    p.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_REMOVE, graphics=LINE_ART)
    for link in p.get_links():
        p.delete_link(link)
    return pymupdf.open('pdf', d.tobytes(garbage=4, deflate=True))


doc = pymupdf.open(src_path)
page = doc[0]
page.add_redact_annot(pymupdf.Rect(55, Y0, 540, Y1), fill=(1, 1, 1))
page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=LINE_ART)
for link in page.get_links():
    if link['from'].y0 >= Y0 - 5 and link['from'].y1 <= Y1 + 5:
        page.delete_link(link)

total = sum(b - a for a, b, _ in ITEMS) + GAP * (len(ITEMS) - 1)
x = page.rect.width / 2 - total / 2
for a, b, uri in ITEMS:
    dst = pymupdf.Rect(x, Y0, x + (b - a), Y1)
    page.show_pdf_page(dst, only(a, b), 0, clip=pymupdf.Rect(a, Y0, b, Y1))
    if uri:
        page.insert_link({'kind': pymupdf.LINK_URI, 'from': dst, 'uri': uri})
    x += b - a + GAP

# Anotaciones huérfanas (el árbol de estructura aún las referencia): se vacían
for xref in range(1, doc.xref_length()):
    obj = doc.xref_object(xref)
    if '(tel:' in obj or '(mailto:' in obj:
        doc.update_object(xref, '<< /Type /Annot /Subtype /Link /Rect [0 0 0 0] /F 2 >>')

doc.save(out_path, garbage=4, deflate=True)
