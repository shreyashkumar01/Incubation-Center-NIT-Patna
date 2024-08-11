import React from 'react';
import "./style.css";

const Director = () => {
	return (
		<div className='directors_desk'>	
		<section class="dark">
			<div class="container py-4">  
			<div class="director_header">
      <h1  data-aos="fade-down">Director Desk</h1>
    </div>
				<article class="postcard dark blue" data-aos="fade-right"> 
					<a class="postcard__img_link" href="#">
						<img class="postcard__img" src="img/team/director.jpg" alt="Image Title" />
					</a>
					<div class="postcard__text">
						<h1 class="postcard__title blue"><a href="#">Director</a></h1>
						{/* <div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div> */}
						<div class="postcard__bar"></div>
						<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
						<ul class="postcard__tagbox">
							{/* <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li> */}
							<li class="tag__item play blue">
								<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
							</li>
						</ul>
					</div>
				</article> 
				<article class="postcard dark red" data-aos="fade-left"> 
					<a class="postcard__img_link" href="#">
						<img class="postcard__img" src="img/team/bharatgupta.jpg" alt="Image Title" />
					</a>
					<div class="postcard__text">
						<h1 class="postcard__title red"><a href="#">Director</a></h1>
						<div class="postcard__subtitle small">
							<time datetime="2020-05-25 12:00:00">
								<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
							</time>
						</div>
						<div class="postcard__bar"></div>
						<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
						<ul class="postcard__tagbox">
							<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
							<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
							<li class="tag__item play red">
								<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
							</li>
						</ul>
					</div>
				</article>
				

			</div>
		</section> 
		</div> 
	)
}

export default Director;

