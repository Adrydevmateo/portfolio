export default function Header() {
  return (
    <header>
      <h1>Adry Mateo Ramon</h1>
      <p>Web Developer</p>
      <p>Santo Domingo, Dominican Republic</p>
      <div className="contact-links">
        <a
          href="mailto:adrydevmateo@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a href="tel:+18292758177" target="_blank" rel="noreferrer">
          Phone
        </a>
        <a
          href="https://www.linkedin.com/in/adrydev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Adrydevmateo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          Junior Web Developer with a passion for building web applications.
          Currently seeking opportunities to further develop my skills in a
          professional setting.
        </p>
      </div>
    </header>
  );
}
