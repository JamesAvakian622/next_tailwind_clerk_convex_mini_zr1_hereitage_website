"use client";

import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Swap to this src if the primary one 404s (replaces the old `onerror="this.src=…"`). */
  fallback?: string;
  /** Hide the image entirely if it fails to load (replaces `onerror="this.style.display='none'"`). */
  hideOnError?: boolean;
};

/**
 * Plain <img> with the site's legacy error behaviours. We intentionally avoid
 * next/image here: the library is ~760 MB of pre-sized artwork served as-is.
 */
export default function Img({ fallback, hideOnError, alt = "", style, onError, ...rest }: Props) {
  const [src, setSrc] = useState(rest.src);
  const [hidden, setHidden] = useState(false);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...rest}
      alt={alt}
      src={src}
      style={hidden ? { ...style, display: "none" } : style}
      onError={(e) => {
        onError?.(e);
        if (fallback && src !== fallback) setSrc(fallback);
        else if (hideOnError) setHidden(true);
      }}
    />
  );
}
