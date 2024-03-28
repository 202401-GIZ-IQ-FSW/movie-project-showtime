export const homePageCarouselConfig = {
  swipeable: true,
  draggable: false,
  responsive: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    largTablet: {
      breakpoint: { max: 1024, min: 821 },
      items: 4,
    },
    smallTablet: {
      breakpoint: { max: 820, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  },
  infinite: true,
  focusOnSelect: false,
  autoPlay: false,
  autoPlaySpeed: 3000,
  keyBoardControl: true,
  additionalTransfrom: 0,
  customTransition: 'transform 300ms ease-in-out',
  transitionDuration: 300,
  containerClass: 'carousel-container mx-auto relative py-4',
  removeArrowOnDeviceType: ['tablet', 'mobile'],
  itemClass: 'mx-2',
  arrows: false,
  centerMode: false,
}
