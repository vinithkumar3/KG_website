import React from "react";
import "./review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const googleReviewUrl =
  "https://www.google.com/search?q=KG%20batminton%20court&ludocid=16668555629921522522&ibp=gwp;0,7&sa=X&ved=2ahUKEwjsl_-L-9H_AhXTR2wGHX_6DD8Q_coHegQIDBAB&biw=360&bih=560&dpr=2";
const data = [
  {
    id: 1,

    title: "Vinith Kumar G",

    comment:
      " Maintenance is very good and it is right place to spend the time 👍",
  },
  {
    id: 2,

    title: " Suriya",

    comment:
      "Excellent coaching for beginners,intermediate and advance players. ",
  },
  {
    id: 3,

    title: " Kanni sha",

    comment: " Neat and well maintenace court at mangadu",
  },
  {
    id: 4,

    title: " Bala murugan",

    comment: " Very first court in mangadu ",
  },
  {
    id: 5,

    title: " Gopika ",

    comment:
      "Very good management... Safest place for girls and ladies... I really enjoyed playing badminton with correct rules and regulations.. ",
  },
  {
    id: 6,

    title: " Raja ",

    comment:
      "The best badminton academy in the neighborhood... Very friendly support staffs and coaches and well suited for all types of players (beginners, advance etc..). ",
  },
  {
    id: 7,

    title: " Krithika ",

    comment:
      "Great place for kids and adults to learn badminton. The coaches help improve fitness also. One can join as a student or just come and play badminton by paying a fee.  ",
  },
  {
    id: 8,

    title: " Sudha",

    comment:
      "Good place for the persons who have interest in playing badminton. The court's were really good and they are maintaining the courts on regular basis. ",
  },
];
const ReviewLink = () => {
  return (
    <>
      <section id="review" className="testimonials container section">
        <h2 className="section___title">Clients & Reviews</h2>

        <Swiper
          className="testimonials___container grid"
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }} // Set autoplay delay (in milliseconds)
        >
          {data.map(({ id, title, comment }) => {
            return (
              <SwiperSlide className="testimonial___item" key={id}>
                <div className="thumb"></div>
                <h3 className="testimonials___title">{title}</h3>

                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <a
          href={googleReviewUrl}
          class="reviewbutton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave a Google Review
        </a>
      </section>
    </>
  );
};

export default ReviewLink;
