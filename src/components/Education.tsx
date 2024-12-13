import educationList from "@data/education";
import certificateList from "@data/certificate";
import { Link } from "./Link";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      {educationList.map((item) => (
        <div key={item.name}>
          <IconEducation />
          <div className="education__col2">
            <Link label={`${item.name} / ${item.at}`} />
            <p>{item.category}</p>
          </div>
        </div>
      ))}
      <h4>Certificates</h4>
      {certificateList.map((item) => (
        <div className="certificate" key={item.name}>
          <IconCertificate />
          <div className="certificate__col2">
            <Link label={item.name} to={item.link} withIcon />
          </div>
          <p>{item.at}</p>
        </div>
      ))}
    </section>
  );
}

const IconEducation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
  >
    <title>Education</title>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 1.367l6.5 2.817L7 7L.5 4.184z" />
      <path d="m3.45 5.469l.006 3.064S4.529 9.953 7 9.953s3.55-1.42 3.55-1.42l-.001-3.064m-8.854 5.132v-5.89m.001 8.282a1.196 1.196 0 1 0 0-2.392a1.196 1.196 0 0 0 0 2.392" />
    </g>
  </svg>
);

const IconCertificate = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
  >
    <title>Certificate</title>
    <path
      fill="currentColor"
      d="M128 140a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h44a12 12 0 0 1 12 12m-12-52H72a12 12 0 0 0 0 24h44a12 12 0 0 0 0-24m120 79.14V228a12 12 0 0 1-17.95 10.42L196 225.82l-22 12.6A12 12 0 0 1 156 228v-24H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v32.86a55.87 55.87 0 0 1 0 78.28M196 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m-40 20v-12.86a56 56 0 0 1 56-92.8V60H44v120Zm56 27.32v-25.66a55.87 55.87 0 0 1-32 0v25.66l10.05-5.74a12 12 0 0 1 11.9 0Z"
    />
  </svg>
);
