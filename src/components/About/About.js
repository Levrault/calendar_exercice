import React from 'react';
import styles from './About.css';

/**
 * About page
 */
const About = () => (
  <div className={styles.container}>
    <h1 className={styles.maintitle}>About</h1>
    <p>This is small calendar app created has an exercice</p>

    <h2 className={styles.title}>Stack</h2>
    <p>It uses the following technologies</p>
    <ul>
      <li>React</li>
      <li>React-Redux</li>
      <li>Redux-thunk</li>
      <li>Reselect</li>
      <li>Jest with enzyme</li>
      <li>Deployd</li>
      <li>Storybook</li>
    </ul>

    <h2 className={styles.title}>How to use</h2>
    <p>Yarn start compile project and start deployd</p>
    <p>Yarn jest will execute all the text</p>
    <p>Yarn storybook will compile stories</p>

    <h2 className={styles.title}>Icon pack</h2>
    <a href="https://material.io/tools/icons/?style=baseline" target="_blank">
      Material icon pack
    </a>
  </div>
);

export default About;
