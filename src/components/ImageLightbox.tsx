import { useEffect, useState } from "react";

type Img = { src: string; alt: string };

/** Makes every image inside elements matching `selector` open full-size in a viewer. */
export function ImageLightbox({ selector }: { selector: string }) {
  const [img, setImg] = useState<Img | null>(null);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(selector));
    const cleanups = imgs.map((el) => {
      el.classList.add("cursor-zoom-in");
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", `View full image: ${el.alt}`);
      const open = () => { setZoom(false); setImg({ src: el.currentSrc || el.src, alt: el.alt }); };
      const key = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } };
      el.addEventListener("click", open);
      el.addEventListener("keydown", key);
      return () => { el.removeEventListener("click", open); el.removeEventListener("keydown", key); };
    });
    return () => cleanups.forEach((c) => c());
  }, [selector]);

  useEffect(() => {
    if (!img) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setImg(null);
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [img]);

  if (!img) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-[100] bg-primary/95 flex flex-col" onClick={() => setImg(null)}>
      <div className="flex items-center justify-between gap-space-md px-space-md py-space-sm text-on-primary" onClick={(e) => e.stopPropagation()}>
        <p className="font-body-sm text-body-sm truncate">{img.alt}</p>
        <div className="flex items-center gap-space-xs shrink-0">
          <button type="button" onClick={() => setZoom((z) => !z)} className="px-space-sm py-space-2xs rounded bg-on-primary/10 hover:bg-on-primary/20 font-label-md text-label-md cursor-pointer">{zoom ? "Fit to screen" : "Zoom in"}</button>
          <a href={img.src} target="_blank" rel="noreferrer" className="px-space-sm py-space-2xs rounded bg-on-primary/10 hover:bg-on-primary/20 font-label-md text-label-md">Open in new tab</a>
          <button type="button" aria-label="Close" onClick={() => setImg(null)} className="w-9 h-9 flex items-center justify-center rounded bg-on-primary/10 hover:bg-on-primary/20 cursor-pointer"><span className="material-symbols-outlined">close</span></button>
        </div>
      </div>
      <div className={`flex-1 relative ${zoom ? "overflow-auto flex p-space-md" : "overflow-hidden"}`} onClick={(e) => e.target === e.currentTarget && setImg(null)}>
        <img src={img.src} alt={img.alt} onClick={(e) => { e.stopPropagation(); setZoom((z) => !z); }}
          className={`rounded ${zoom ? "m-auto max-w-none w-[200%] cursor-zoom-out" : "absolute inset-0 m-auto w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain cursor-zoom-in"}`} />
      </div>
    </div>
  );
}
