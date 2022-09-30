import { SliderContainer } from './Slider.styled'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

interface IImg {
  [key: string]: string
}

const Slider = (props: any) => {
  const { img } = props
  const nextBtn = document.querySelector('.next-btn')
  const prevBtn = document.querySelector('.prev-btn')
  const slides = document.querySelectorAll('.slide')
  const slideIcons = document.querySelectorAll('.slide-icon')
  const numberOfSlides = slides.length
  let slideNumber = 0

  slides[0]?.classList.add('active')
  slideIcons[0]?.classList.add('active')
  
  nextBtn?.addEventListener('click', () => {

    slides.forEach(slide => {
      slide?.classList.remove('active')
    })

    slideIcons.forEach(slideIcon => {
      slideIcon?.classList.remove('active')
    })

    slideNumber++

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0
    }

    slides[slideNumber]?.classList.add('active')
    slideIcons[slideNumber]?.classList.add('active')
  })

  //image slider previous button
  prevBtn?.addEventListener('click', () => {

    slides.forEach(slide => {
      slide?.classList.remove('active')
    })

    slideIcons.forEach(slideIcon => {
      slideIcon?.classList.remove('active')
    })

    slideNumber--

    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1
    }

    slides[slideNumber]?.classList.add('active')
    slideIcons[slideNumber]?.classList.add('active')
  })

  //image slider autoplay
  // let playSlider: any

  // const repeater = () => {
  //   playSlider = setInterval(function () {
  //     slides.forEach(slide => {
  //       slide.classList.remove('active')
  //     })
  //     slideIcons.forEach(slideIcon => {
  //       slideIcon.classList.remove('active')
  //     })

  //     slideNumber++

  //     if (slideNumber > numberOfSlides - 1) {
  //       slideNumber = 0
  //     }

  //     slides[slideNumber].classList.add('active')
  //     slideIcons[slideNumber].classList.add('active')
  //   }, 4000)
  // }
  // repeater()

  // //stop the image slider autoplay on mouseover
  // slider?.addEventListener('mouseover', () => {
  //   clearInterval(playSlider)
  // })

  // //start the image slider autoplay again on mouseout
  // slider?.addEventListener('mouseout', () => {
  //   repeater()
  // })

  return (
    <SliderContainer>
      <div className="slider">
        {Object.keys(img).map((key: string) => {
          const img: IImg = props.img
          return (
            <div className="slide">
              <img src={img[key]} alt={key} />
            </div>
          )
        })}

        <div className="navigation">
          <i className="prev-btn">
            <FaLessThan />
          </i>
          <i className="next-btn">
            <FaGreaterThan />
          </i>
        </div>

        <div className="n-visibility">
          {/* for each image in img, draw <div className="slide-icon"></div>*/}
          {Object.keys(img).map((key: string) => {
            return <div className="slide-icon"></div>
          })}
        </div>
      </div>
    </SliderContainer>
  )
}

export default Slider

{
  /* <div className="navigation-manual">
  <label htmlFor={labelFor} className="manual-btn"></label>
</div> */
}
