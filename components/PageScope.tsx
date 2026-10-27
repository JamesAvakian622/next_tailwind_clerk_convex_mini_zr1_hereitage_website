"use client";

import styled from "styled-components";

const Scope = styled.div<{ $styles: string }>`
  ${(p) => p.$styles}
`;

/**
 * Wraps a page's body and scopes that page's own CSS (what used to be the
 * <style> block in each HTML file) to it via styled-components.
 *
 * NOTE: the prop must not be called `css` — the styled-components compiler
 * plugin treats a `css` prop as its special "css prop" and rewrites the element.
 */
export default function PageScope({ styles = "", children }: { styles?: string; children: React.ReactNode }) {
  return <Scope $styles={styles}>{children}</Scope>;
}
