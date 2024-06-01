import React from 'react';
import "./style.css";

const Director = () => {
  return (
    <section class="dark">
    <div class="container py-4">
      <h1 class="h1 text-center" id="pageHeaderTitle" data-animation="slideInUp" data-animation-delay=".3s">Directors Desk</h1>

      <div class="desk_box">
        <article class="postcard dark blue"   data-animation="slideInRight" data-animation-delay=".3s" >
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="img/team/director.jpg " alt="Image director" />
          </a>
          <div class="postcard__text1">
            <h1 class="postcard__title blue"><a href="#">Director</a></h1>
            <div class="postcard__subtitle small">
              {/* <!-- <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time> --> */}
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat
              asperiores inventore beatae accusamus odit minima enim, commodi quia, </div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#">
                  {/* <!-- <i class="fas fa-play mr-2"></i> --> */}
                  Read More</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark red"  data-animation="slideInLeft" data-animation-delay=".3s">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="  img/team/bharatgupta.jpg" alt="Image bharatgupta" />
          </a>
          <div class="postcard__text2">
            <h1 class="postcard__title red"><a href="#">Director</a></h1>
            <div class="postcard__subtitle small">
              {/* <!-- <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time> --> */}
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat
              asperiores inventore beatae accusamus odit minima enim, commodi quia, </div>
            <ul class="postcard__tagbox">
              <li class="tag__item play red">
                <a href="#">
                  {/* <!-- <i class="fas fa-play mr-2"></i> --> */}
                  Read More</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
  )
}

export default Director;

