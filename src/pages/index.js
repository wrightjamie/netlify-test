// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import CardSummary from "../components/card_summary";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" pageHero={<BannerComponent />}>
      <section id="page1" class="page grid grid__hero hero hero--image1">
        <div class="hero__summary--right">
          <h3 class="hero__header">Ready?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ab
            ipsam exercitationem praesentium voluptatibus, aspernatur, fugit
            vero facere, recusandae temporibus molestias vitae modi saepe minima
            beatae reprehenderit? Pariatur, velit sapiente?
          </p>
          <div class="flex flex--center">
            <a href="#" class="button">
              Join Us
            </a>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div class="page__footer">
          <a class="down-arrow" href="#page2">
            {" "}
            &#8681;{" "}
          </a>
        </div>
      </section>
      <section id="page2" class="page page__grid grid">
        <h2 class="page__header">What We Do</h2>
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <div class="page__footer">
          <a class="down-arrow" href="#page3">
            {" "}
            &#8681;{" "}
          </a>
        </div>
      </section>
      <section id="page3" class="page page__grid--double grid">
        <h2 class="page__header">What We've Done</h2>
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <CardSummary />
        <div class="page__footer">
          <a class="down-arrow" href="#page4">
            {" "}
            &#8681;{" "}
          </a>
        </div>
      </section>
      <section id="page4" class="page grid grid__hero hero hero--image2">
        <h2 class="page__header">Future Ready</h2>
        <div class="hero__summary--left">
          <em>
            As a member of the RAFAC you can gain Nationally recognised
            qualifications - helping to make sure you are ready for your future.
          </em>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ab
            ipsam exercitationem praesentium voluptatibus, aspernatur, fugit
            vero facere, recusandae temporibus molestias vitae modi saepe minima
            beatae reprehenderit? Pariatur, velit sapiente?
          </p>
        </div>
        <div class="page__footer">
          <a class="down-arrow" href="#page5">
            {" "}
            &#8681;{" "}
          </a>
        </div>
      </section>
      <section id="page5" class="page page__grid--chequer grid">
        <h2 class="page__header">Opportunities For All</h2>

        <div class="card card--no-grid">
          <img class="image-fill" src="assets/img/Torp.jpg" />
          <div class="card__cover">
            <h3 class="">Cadets</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              illo quaerat, necessitatibus nulla impedit quos.
            </p>
          </div>
        </div>
        <div class="card card--no-grid">
          <img class="image-fill" src="assets/img/Torp.jpg" />
          <div class="card__cover">
            <h3 class="">Uniformed Staff</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              illo quaerat, necessitatibus nulla impedit quos.
            </p>
          </div>
        </div>
        <div class="card card--no-grid">
          <img class="image-fill" src="assets/img/Torp.jpg" />
          <div class="card__cover">
            <h3 class="">Civilian Instructor</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              illo quaerat, necessitatibus nulla impedit quos.
            </p>
          </div>
        </div>
        <div class="card card--no-grid">
          <img class="image-fill" src="assets/img/Torp.jpg" />
          <div class="card__cover">
            <h3 class="">Civilian Committee</h3>
            <p class="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              illo quaerat, necessitatibus nulla impedit quos.
            </p>
          </div>
        </div>
        <div class="page__footer">
          <a href="#footer">Learn More About Joining Us</a>
          <a class="down-arrow" href="#footer">
            {" "}
            &#8681;{" "}
          </a>
        </div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;

const BannerComponent = () => {
  return (
    <section class="banner page full-bleed parallax__wrapper">
      <img
        src="assets/img/Torp.jpg"
        alt=""
        class="image parallax__background"
      />
      <div class="container parallax__foreground">
        <div class="banner__layout flex">
          <div class="banner__logo">
            <img src="assets/svg/rafacLogo.svg" />
          </div>
          <div class="banner__title">
            <h1 class="banner__heading">2459 Squadron</h1>
            <em class="banner__subtitle">Poulton-le-Fylde</em>
          </div>
          <div class="banner__summary">
            <em>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis voluptatem debitis ipsam odit laboriosam molestiae,
              doloribus mollitia, earum delectus impedit quibusdam voluptate
              repellat nobis, explicabo neque magni aperiam! Nemo, consectetur!
            </em>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              nostrum tempore. Beatae error quas id nihil blanditiis et animi
              eaque hic corporis porro voluptatum ea suscipit rerum earum, omnis
              corrupti!
            </p>
          </div>
          <ul class="banner__social flex">
            <li class="">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </li>

            <li class="">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M32 7.075a12.941 12.941 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.21 13.21 0 0 1-4.169 1.594A6.565 6.565 0 0 0 22.155 4a6.563 6.563 0 0 0-6.563 6.563c0 .512.056 1.012.169 1.494A18.635 18.635 0 0 1 2.23 5.195a6.56 6.56 0 0 0-.887 3.3 6.557 6.557 0 0 0 2.919 5.463 6.565 6.565 0 0 1-2.975-.819v.081a6.565 6.565 0 0 0 5.269 6.437 6.574 6.574 0 0 1-2.968.112 6.588 6.588 0 0 0 6.131 4.563 13.17 13.17 0 0 1-9.725 2.719 18.568 18.568 0 0 0 10.069 2.95c12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85A13.216 13.216 0 0 0 32 7.076z" />
                </svg>
              </a>
            </li>
            <li class="">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
                </svg>
              </a>
            </li>
          </ul>
          <div class="page__footer">
            <a class="down-arrow" href="#page1">
              {" "}
              &#8681;{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
