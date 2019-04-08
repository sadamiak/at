import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./styles.module.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Adam Traczyk biografia" />
    <div className={styles.mainContainer}>
      <article
        className={styles.articleContainer}
        style={{
          flexDirection: `column`,
        }}
      >
        <img
          className={styles.fullBioPhoto}
          src="https://fundacjagloballab.files.wordpress.com/2014/08/20150520_96.png?w=400&h=600"
          alt=""
        />
        <div style={{ padding: 20 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
            molestie nisl, non convallis ipsum. Cras quis orci ac justo aliquam
            vehicula. Suspendisse quis dictum quam, sed varius tellus. Maecenas
            quis eleifend ex. Sed eget nunc eros. Aliquam bibendum eget est quis
            blandit. Nullam sodales nulla nibh, at vestibulum arcu vestibulum
            quis. Quisque vitae feugiat nibh, quis ornare arcu. Praesent in
            dapibus sem. Aliquam consectetur mi sed dui commodo imperdiet.
            Mauris ut massa a leo facilisis fringilla quis id augue. Vestibulum
            vitae magna non sapien placerat elementum eget ut lorem.
          </p>
          <p>
            Sed tincidunt felis ut mauris dignissim, vehicula pharetra metus
            eleifend. Pellentesque tempor eros nec urna suscipit, nec porttitor
            turpis maximus. Sed pellentesque varius ante in convallis. Fusce vel
            dolor in elit gravida sodales. Vestibulum arcu neque, consequat ac
            blandit vitae, molestie non ipsum. Curabitur non est sed augue
            eleifend aliquet. Ut congue magna in nunc sollicitudin, vitae ornare
            ex facilisis. Ut justo ex, convallis quis tellus non, efficitur
            tempus nisl. Praesent ut bibendum tortor.
          </p>
          <p>
            Aliquam faucibus velit at erat luctus ornare. Donec malesuada
            tristique egestas. Sed et euismod erat, eu interdum massa. Morbi
            eget placerat orci. Fusce luctus volutpat maximus. Suspendisse
            tempor ipsum et metus vehicula gravida. Etiam a eros ac nunc
            malesuada tincidunt et eu diam. Praesent viverra eleifend eros
            luctus facilisis. Nunc volutpat gravida auctor. Suspendisse at
            placerat nisi, ornare mattis dolor. Fusce ullamcorper, sem nec
            tempor aliquet, justo dolor laoreet justo, et varius ex leo sed
            ipsum. Vivamus sit amet augue sed elit ornare luctus. Fusce nulla
            velit, fringilla eu nulla eu, commodo pellentesque ipsum. Integer
            fringilla metus sit amet auctor hendrerit.
          </p>
          <p>
            Pellentesque convallis vehicula diam, nec interdum dui euismod
            vitae. Praesent fringilla vitae quam quis hendrerit. Proin hendrerit
            tortor arcu. Nullam sit amet condimentum libero, aliquet suscipit
            leo. Donec faucibus sodales ex eu vehicula. Quisque condimentum,
            lectus ut iaculis hendrerit, neque dui porttitor est, non rutrum
            lorem dolor at est. Ut sem quam, egestas non fringilla in, vulputate
            id erat. Morbi vel sem vel nisi ornare elementum eget vel dolor.
          </p>
          <p>
            Aliquam faucibus ornare pellentesque. Sed elementum pellentesque
            magna vitae pharetra. Sed lectus justo, rutrum eu lectus in,
            tincidunt semper massa. Aenean bibendum neque id consectetur mollis.
            Vestibulum ullamcorper justo molestie lectus semper eleifend. Nullam
            maximus est ex, eget sodales quam ultrices nec. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed pulvinar cursus massa vulputate pretium. Vivamus et
            malesuada erat, ut porta magna. Aenean lobortis nisi justo, et
            ultricies augue tincidunt vitae. Cras eu ligula congue metus
            facilisis porta ac eget mi. Integer pulvinar arcu id lectus accumsan
            eleifend. Ut eget mollis felis. Proin pellentesque dapibus rutrum.
            Quisque sem orci, auctor in velit vel, fermentum consectetur odio.
          </p>
        </div>
      </article>
    </div>
  </Layout>
)

export default SecondPage
