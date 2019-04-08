import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./styles.module.css"
import wiosnaCheck from "./images/wiosnaCheck.svg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Adam Traczyk - strona oficjalna"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div className={styles.mainContainer}>
      <article className={styles.articleContainer}>
        <section className={styles.halfSection}>
          <h2>Kim jestem?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempor quis urna ultrices molestie. Duis eu dapibus purus.
            Suspendisse potenti. Donec gravida felis sed lacus finibus, eu
            sollicitudin nunc pretium. Quisque a neque et leo feugiat
            scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Sed quis venenatis nisl.
          </p>
          <p>
            Aliquam egestas quam eget placerat sollicitudin. Maecenas pharetra
            fermentum cursus. Fusce sed rhoncus ex. Sed convallis massa nibh,
            sollicitudin accumsan tortor condimentum porttitor. In quis
            condimentum dolor. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Phasellus pharetra neque
            vel fringilla dignissim.
          </p>
          <Link to="/omnie/" className={`${styles.button}`}>
            Pełna biografia
          </Link>
        </section>
        <section
          className={`${styles.halfSection} ${styles.imageSection} ${
            styles.candidatePhoto
          }`}
        />
      </article>
      <div className={styles.spacerSection}>
        <div>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Jakiś bardzo mądry cytat</p>
          </blockquote>

          <cite>– Mądra osoba, mądre dzieło</cite>
          <img
            className={styles.wiosnaTick}
            src={wiosnaCheck}
            alt="Wiosna logo"
          />
        </div>
      </div>
      <article className={styles.articleContainer}>
        <section
          className={`${styles.halfSection} ${styles.imageSection} ${
            styles.wiosnaPhoto
          }`}
        />
        <section className={styles.halfSection}>
          <h2>
            <span style={{ color: "#f48120" }}>Dlaczego</span>
            <span style={{ color: "#40b36e" }}> Wiosna?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempor quis urna ultrices molestie. Duis eu dapibus purus.
            Suspendisse potenti. Donec gravida felis sed lacus finibus, eu
            sollicitudin nunc pretium. Quisque a neque et leo feugiat
            scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Sed quis venenatis nisl.
          </p>
          <p>
            Aliquam egestas quam eget placerat sollicitudin. Maecenas pharetra
            fermentum cursus. Fusce sed rhoncus ex. Sed convallis massa nibh,
            sollicitudin accumsan tortor condimentum porttitor. In quis
            condimentum dolor. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Phasellus pharetra neque
            vel fringilla dignissim.
          </p>
        </section>
      </article>
      <div className={styles.spacerSection}>
        <div>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Jakaś pochlebna opinia o kandydacie, najlepiej Biedronia</p>
          </blockquote>

          <cite>– Osoba która te pochlebna opinie wyraziła</cite>
          <img
            className={styles.wiosnaTick}
            src={wiosnaCheck}
            alt="Wiosna logo"
          />
        </div>
      </div>
      <article className={styles.articleContainer}>
        <section className={styles.halfSection}>
          <h2>Moje priorytety</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor quis urna ultrices molestie. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna
              ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </section>
        <section
          className={`${styles.halfSection} ${styles.imageSection} ${
            styles.prioritiesPhoto
          }`}
        />
      </article>
    </div>
  </Layout>
)

export default IndexPage
