import "@css/header.css";

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
          <IconEmail />
        </a>
        <a href="tel:+18292758177" target="_blank" rel="noreferrer">
          <IconPhone />
        </a>
        <a
          href="https://www.linkedin.com/in/adrydev/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedIn />
        </a>
        <a
          href="https://github.com/Adrydevmateo"
          target="_blank"
          rel="noreferrer"
        >
          <IconGitHub />
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

const IconEmail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-label="Email"
  >
    <title>Email</title>
    <path
      fill="currentColor"
      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
    />
  </svg>
);

const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-label="Phone"
  >
    <title>Phone</title>
    <path
      fill="currentColor"
      d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm0 0"
    />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    aria-label="LinkedIn"
  >
    <title>LinkedIn</title>
    <path
      fill="currentColor"
      d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-56a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 148v28a12 12 0 0 1-24 0v-28a16 16 0 0 0-32 0v28a12 12 0 0 1-24 0m-16-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16"
    />
  </svg>
);

const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    aria-label="GitHub"
  >
    <title>GitHub</title>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
      <path d="M19.183 45.472q-.29-.375 0-6.674q-3.107.108-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371s-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122s.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583q.864-1.248-.153-5.314Q17.466 13.2 19.473 16c.002.01 1.756-1.043 4.527-1.043s3.755.858 4.514 1.043s1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583q-1.509 4.455-5.929 5.433q-.506.162-.506.522c0 .36.456.399 1.114 2.086q.66 1.686.096 9.635q-1.427.363-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a20 20 0 0 1-2.654-.424" />
    </g>
  </svg>
);
