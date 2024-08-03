'use client';

import { Avatar, Grid } from '@mantine/core';
import styles from './styles.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.navbar}>
    <nav>
        <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#home">Home</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </div>

    <div className={styles.avatarContainer}>
        <Avatar src="https://joech.io/images/me-circle.jpeg" alt="it's me" size="10rem" />
    </div>

    <Grid className={styles.grid}>
      <Grid.Col span={4} className={styles.gridCol}>
      I&apos;m a freelance web and mobile app developer, based in Austria, with multiple years of experience working in agile teams. I specialize in creating complex web-applications with React and TypeScript. I&apos;m also skilled in creating mobile apps with React Native & Expo and also have worked with Angular and GraphQL. From my work as a full-stack developer I gained a lot of experience with Java, Spring Boot and Node.js.
      </Grid.Col>
      <Grid.Col span={4} className={styles.gridCol}>
        I particularly enjoy having the opportunity to mentor other developers, sharing my expertise and helping them build their skills.
      </Grid.Col>
      <Grid.Col span={4} className={styles.gridCol}>
        In my free time, I love exploring the outdoors, hiking in the mountains, and capturing nature through photography. I also enjoy reading tech blogs and staying updated with the latest trends in the tech industry.
      </Grid.Col>
    </Grid>

    </main>
  );
}
