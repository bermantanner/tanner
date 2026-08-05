<svelte:head>
  <title>Tanner Berman</title>
  <meta name="description" content="Portfolio of Tanner Berman, software engineer." />
</svelte:head>

<main class="page">
  <header class="intro">
    <h1 class="name">Tanner J. Berman</h1>
    <p class="tagline">
      Hi!
    </p>
  </header>

  <a class="center-link" href="/resume">Resume</a>
  <a class="center-link" href="https://github.com/bermantanner">GitHub</a>
</main>

<style>
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .name {
    margin: 0;
    font-size: clamp(2rem, 6vw, 3.25rem);
    font-weight: 500;
  }

  .tagline {
    margin: 0;
    max-width: 32rem;
    font-size: clamp(0.95rem, 2vw, 1.05rem);
    color: var(--muted);
  }

  .center-link {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight: 500;
    text-decoration: none;
    color: var(--fg);
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease;
  }

  .center-link:hover,
  .center-link:focus-visible {
    transform: scale(1.05);
  }
</style>
