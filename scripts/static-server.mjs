// Servidor estático mínimo para auditar el build exportado (carpeta out/)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { gzipSync } from "node:zlib";

const ROOT = new URL("../out", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = Number(process.argv[2] || 4174);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".webmanifest": "application/manifest+json",
};

createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.endsWith("/")) path += "index.html";
    let file = normalize(join(ROOT, path));
    let body;
    try {
      body = await readFile(file);
    } catch {
      try {
        body = await readFile(file + ".html");
        file += ".html";
      } catch {
        res.writeHead(404).end("not found");
        return;
      }
    }
    const type = MIME[extname(file)] || "application/octet-stream";
    const compressible = /^(text\/|application\/(json|xml|manifest))/.test(type) || type === "image/svg+xml";
    const gzip = compressible && /\bgzip\b/.test(req.headers["accept-encoding"] || "");
    if (gzip) body = gzipSync(body);
    res.writeHead(200, {
      "content-type": type,
      "content-length": body.length,
      ...(gzip ? { "content-encoding": "gzip" } : {}),
      "cache-control": "no-store",
    });
    res.end(body);
  } catch {
    res.writeHead(500).end();
  }
}).listen(PORT, () => console.log("static server on http://localhost:" + PORT));
