"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Swap to this src if the primary one 404s (replaces the old `onerror="this.src=…"`). */
  fallback?: string;
  /** Hide the image entirely if it fails to load (replaces `onerror="this.style.display='none'"`). */
  hideOnError?: boolean;
  /** Opt out of click-to-fullscreen (logos, decorative images). */
  noZoom?: boolean;
};

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

/** Full-page viewer: the image fills the viewport; any click (or Esc) closes it. */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.94);
  cursor: zoom-out;
  animation: ${fadeIn} 0.18s ease-out;

  img {
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    user-select: none;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Hint = styled.span`
  position: fixed;
  top: 14px;
  right: 18px;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  pointer-events: none;
`;

/**
 * Plain <img> with the site's legacy error behaviours, plus click-to-fullscreen.
 *
 * - Standalone images open full-page on click; click again (or press Esc) to close.
 * - Images inside links/buttons (cards) are left alone so navigation still works.
 * - Hero backgrounds and `noZoom` images are not interactive.
 *
 * We intentionally avoid next/image: the library is ~760 MB of pre-sized artwork
 * served as-is; lazy loading + async decoding are applied here instead.
 */
export default function Img({
  fallback,
  hideOnError,
  noZoom,
  alt = "",
  style,
  className,
  onError,
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(rest.src);
  const [hidden, setHidden] = useState(false);
  const [zoomable, setZoomable] = useState(false);
  const [open, setOpen] = useState(false);

  const isBackdrop = !!className && /\bhero-bg\b/.test(className);

  // Only zoom images that aren't wrapped in a link/button and aren't decorative.
  useEffect(() => {
    setZoomable(!noZoom && !isBackdrop && !ref.current?.closest("a, button"));
  }, [noZoom, isBackdrop]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const zoomProps = zoomable
    ? {
        role: "button" as const,
        tabIndex: 0,
        "aria-label": alt ? `View full size: ${alt}` : "View full size",
        onClick: (e: React.MouseEvent<HTMLImageElement>) => {
          onClick?.(e);
          setOpen(true);
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLImageElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        },
      }
    : { onClick };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading={isBackdrop ? "eager" : "lazy"}
        decoding="async"
        {...rest}
        {...zoomProps}
        ref={ref}
        alt={alt}
        src={src}
        className={className}
        style={{
          ...style,
          ...(zoomable ? { cursor: "zoom-in" } : null),
          ...(hidden ? { display: "none" } : null),
        }}
        onError={(e) => {
          onError?.(e);
          if (fallback && src !== fallback) setSrc(fallback);
          else if (hideOnError) setHidden(true);
        }}
      />
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <Overlay
            role="dialog"
            aria-modal="true"
            aria-label={alt || "Image viewer"}
            onClick={close}
          >
            <Hint>Click anywhere or press Esc to close</Hint>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} draggable={false} />
          </Overlay>,
          document.body,
        )}
    </>
  );
}
