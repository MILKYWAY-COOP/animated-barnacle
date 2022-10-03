import { SliderContainer } from './Slider.styled'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { ISlider } from '../../Elements/types'
import { useState } from 'react'

const Slider = (props: ISlider) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = props.img.length

  const slideWithBackground = {
    backgroundImage: `url(${props.img[currentIndex]})`,
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? props.img.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === props.img.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <SliderContainer>
      <div style={slideWithBackground} className="img"></div>
      <div className="btns">
        <div
          className={`btn ${currentIndex === 0 ? 'hide' : ''}`}
          onClick={goToPrevious}
        >
          {<GrFormPrevious />}
        </div>
        <div
          className={`btn ${currentIndex === length - 1 ? 'hide' : ''}`}
          onClick={goToNext}
        >
          {<GrFormNext />}
        </div>
      </div>
      <div className="dots">
        {props.img.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </SliderContainer>
  )
}

export default Slider
