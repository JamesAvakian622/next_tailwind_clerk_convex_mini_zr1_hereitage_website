"use client";

import styled from "styled-components";

const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px 72px;
  @media (max-width: 600px) {
    padding: 32px 16px 48px;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Updated = styled.p`
  color: var(--muted);
  font-size: 0.85rem;
  margin-bottom: 32px;
`;

export const Section = styled.section`
  margin-bottom: 28px;

  h2 {
    color: var(--accent);
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
  p,
  li {
    color: var(--text);
    font-size: 0.92rem;
    line-height: 1.8;
  }
  ul {
    padding-left: 20px;
    margin: 8px 0;
  }
  a {
    text-decoration: underline;
  }
`;

/** Shared template for the legal pages (Terms, Privacy, Content, Cookies). */
export default function PolicyPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Updated>Last updated: {lastUpdated}</Updated>
      {children}
    </Container>
  );
}
