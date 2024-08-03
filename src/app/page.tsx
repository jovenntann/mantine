import { HeroText, GroupStats, EmailBanner } from "@/components/Index";
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <HeroText />
        <div className={styles.section}>
          <GroupStats />
        </div>
        <div className={styles.section}>
          <EmailBanner />
        </div>
      </div>
    </main>
  );
}