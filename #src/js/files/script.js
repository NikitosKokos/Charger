
document.addEventListener('DOMContentLoaded', () => {
    const sliderSwiper = new Swiper('.slider__body', {
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 10,
      });


      const rating = document.querySelectorAll('.stars-item-top');
      if(rating.length > 0){
        const setRatingCount = el => {
          const ratingActive = el.querySelector('.stars-item-top__active');
          const ratingActiveWidth = el.dataset.count / 0.05;
          ratingActive.style.width = `${ratingActiveWidth}%`
        }

        rating.forEach(el => setRatingCount(el));  
      }
      


}); // end