import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import TextTransition, { presets } from "react-text-transition";
import { FaRedoAlt } from "react-icons/fa";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [restarts, setRestarts] = React.useState(0);

  // var texts = [
  //   "Dine",
  //   "Experiment",
  //   "Climb",
  //   "Learn",
  //   "Explore",
  //   "Experience",
  //   "Skate",
  //   "Taste",
  //   "Teach",
  //   "Adventure",
  //   "Exercise",
  //   "Travel",
  //   "Podcast",
  //   "Blog",
  //   "Build",
  //   "Design",
  //   "Walk",
  //   "Grow",
  //   "Be",
  // ];

  var texts = [
    "Caring",
    "Adventurous",
    "Evil Genious",
    "Empathetic",
    "Intelligent",
    "Explorer",
    "Quest Superfan",
    "Sexy",
    "Climber",
    "Super Aunt",
    "Jolly",
    "Dog Lover",
    "Driven",
    "Beautiful",
    "Podder",
    "Growing",
    "Infomercial Lover",
    "Dweeb",
    "Adorable",
    "Entrepreneur",
    "Brave Daughter",
    "Smart",
    "Best Friend",
    "Hilarious",
    "Grammer Nazi",
    "Teammate",
    "Passionate",
    "Design-y",
    "My valentine",
    "Amazing",
  ];

  useEffect(() => {
    if (window !== "undefined") {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        400 // every 3 seconds
      );
      var brd = document.createElement("DIV");
      document.body.insertBefore(
        brd,
        document.getElementsByClassName("Aligner")[0]
      );

      const duration = 3000;
      const speed = 0.5;

      var hearts = [];

      function generateHeart(x, y, xBound, xStart, scale) {
        var heart = document.createElement("DIV");
        heart.setAttribute("class", "heart");
        brd.appendChild(heart);
        heart.time = duration;
        heart.x = x;
        heart.y = y;
        heart.bound = xBound;
        heart.direction = xStart;
        heart.style.left = heart.x + "px";
        heart.style.top = heart.y + "px";
        heart.scale = scale;
        heart.style.transform = "scale(" + scale + "," + scale + ")";
        if (hearts == null) hearts = [];
        hearts.push(heart);
        return heart;
      }

      var down = false;

      var before = Date.now();
      var id = setInterval(frame, 5);
      var gr = setInterval(renderHeart, 400);

      function frame() {
        var current = Date.now();
        var deltaTime = current - before;
        before = current;
        for (var i in hearts) {
          var heart = hearts[i];
          heart.time -= deltaTime;
          if (heart.time > 0) {
            heart.y -= speed;
            heart.style.top = heart.y + "px";
            heart.style.left =
              heart.x +
              ((heart.direction *
                heart.bound *
                Math.sin((heart.y * heart.scale) / 30)) /
                heart.y) *
                100 +
              "px";
          } else {
            heart.parentNode.removeChild(heart);
            hearts.splice(i, 1);
          }
        }
      }

      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function renderHeart() {
        var w = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        var h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );

        var ev = {
          pageX: randomIntFromInterval(100, w - 150),
          pageY: randomIntFromInterval(100, h - 150),
        };
        var start = 1 - Math.round(Math.random()) * 2;
        var scale = Math.random() * Math.random() * 0.8 + 0.2;
        var bound = 30 + Math.random() * 20;
        generateHeart(ev.pageX, ev.pageY, bound, start, scale);
      }
    }
  }, []);

  var restart = () => {
    setIndex(0);
    setRestarts(restarts + 1);

    if (restarts + 1 == 2) {
      alert("I like you too :)");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Jolly Watthem</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jolly Watthem"></meta>
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Jolly Watthem" />
        <meta itemProp="description" content="Jolly Watthem" />
        {/* <meta itemprop="image" content={imgLogoFull} /> */}

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://jollywatthy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Do Everything as Code" />
        <meta property="og:description" content="Jolly Watthem" />
        {/* <meta property="og:image" content={imgLogoFull} /> */}

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jolly Watthem" />
        <meta name="twitter:description" content="Jolly Watthem" />
        {/* <meta name="twitter:image" content={imgLogoFull}></meta> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Happy Valentines Day Jolly!</h1>

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <div className={styles.card} onClick={restart}>
            <h3>You are</h3>
            <h3>
              <TextTransition
                text={
                  index < texts.length - 1 * 2
                    ? texts[index % texts.length]
                    : texts[texts.length - 1]
                }
                springConfig={presets.gentle}
              />
            </h3>
            {index > texts.length - 1 * 2 ? <FaRedoAlt /> : <span> </span>}
          </div>
          {/* <TextTransition
              text={texts[state.textFastIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
              overflow
            /> */}

          <div className={styles.card}>
            <h3>Your valentine,</h3>
            <h4>Thor's handsome nerdy cousin, Your Watthem.</h4>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          But for realz you're like totally cool and hopefully you like this.
        </p>
        {/* Made with <span style="color: #e25555;">&#9829;</span> in Switzerland */}
      </footer>
    </div>
  );
}
