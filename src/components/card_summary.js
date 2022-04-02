import * as React from "react";
import { Link } from "gatsby";

const CardSummary = ({}) => {
  return (
    <section class="card card--summary">
      <a href="#" class="full-bleed">
        <img src="assets/img/glider.jpg" alt="" class="image-fill" />
        <div class="card__slider">
          <h3 class="card__title">Lorem ipsum dolor sit.</h3>
          <p class="card__extract">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            perspiciatis animi est odit maxime eum recusandae, nam, adipisci
            minus rem illo quisquam minima doloremque eligendi ex. Saepe
            excepturi odit facere.
          </p>
        </div>
      </a>
    </section>
  );
};

export default CardSummary;
