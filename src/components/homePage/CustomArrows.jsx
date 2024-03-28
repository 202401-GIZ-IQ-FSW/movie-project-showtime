import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const CustomArrows = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="carousel-button-group">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2  carousel-button ${currentSlide === 0 ? 'disable' : ''}`}
        onClick={() => previous()}
      >
        <MdKeyboardArrowLeft
          className="text-white bg-black/40 hover:bg-black/60 active:bg-black/40 rounded-full "
          size={36}
        />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2  carousel-button"
        onClick={() => next()}
      >
        <MdKeyboardArrowRight
          className="text-white bg-black/40 hover:bg-black/60 active:bg-black/40 rounded-full "
          size={36}
        />
      </button>
      <button
        className="carousel-button"
        onClick={() => goToSlide(currentSlide + 1)}
      ></button>
    </div>
  )
}

export default CustomArrows
