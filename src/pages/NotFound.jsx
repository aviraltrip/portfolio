export const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <section className="container mx-auto max-w-md text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">404</h1>
        <p className="text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="cosmic-button inline-flex items-center justify-center"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
};