const gliders = document.querySelectorAll("[id^=glider]");

gliders.forEach((glide) => {
    // console.log(glide);
  const glider = document.querySelector(`#${glide.id} .glider`);
  const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
  const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
  console.log(gliderNext);
  const gliderDots = document.querySelector(`#${glide.id} .glider-dots`);
    console.log(gliderDots);
  new Glider(glider, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    rewind: true,
    dots: gliderDots,
    arrows: {
      prev: gliderPrev,
      next: gliderNext
    }
  });
});