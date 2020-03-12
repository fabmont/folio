import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Title, TextBody, GhostButton } from '../pageStyles/404';

export default function NotFoundPage() {
  const goBack = () => window.history.back();
  const refreshPage = () => window.location.reload();

  return (
    <Layout>
      <SEO title="Página não encontrada" />
      <Container>
        <Title>404</Title>
        <TextBody>
          Oops... Something went wrong <span role="img" aria-label="sad-emoji">😢</span>
          <br />
          The page you are looking for doesn't exist or an error occurred.
          <br />
          <GhostButton onClick={goBack}>
            Go back
          </GhostButton> or try
          {' '}
          <GhostButton onClick={refreshPage}>
            refreshing the page
          </GhostButton>
        </TextBody>
      </Container>
    </Layout>
  );
}
