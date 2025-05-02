export const FooterApp = () => {
  const version = process.env.version || '1.0.0'
  return (
    <footer className="py-3 text-center justify-center items-center flex">
      <span>Power by</span>
      <a
        className="items-center hover:underline hover:underline-offset-4 px-2"
        href="https://moo100lan.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Moo100lan.
      </a>
      <span>| Version {version}</span>
    </footer>
  )
}
