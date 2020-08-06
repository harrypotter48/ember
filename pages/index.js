import styles from "../styles/Home.module.css";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout metadata={{ title: "Inicio" }}>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </DashboardLayout>
  );
}
