import { SliderContainer } from './Slider.styled'

// Create an interface for img
interface IImg {
  [key: string]: string
}

const Slider = (props: any) => {
  const { img } = props
  return (
    <SliderContainer>
      <div className="slides">
        {/* for each image in img, draw a radio button*/}
        {Object.keys(img).map((key: string) => {
          const img: IImg = props.img
          let count = 1
          let customId = `radio${count++}`
          return (
            <input
              type="radio"
              name="radio-btn"
              value={img[key]}
              id={customId}
            />
          )
        })}

        {Object.keys(img).map((key: string) => {
          const img: IImg = props.img
          return (
            <div className="slide">
              <img src={img[key]} alt={key} />
            </div>
          )
        })}

        <div className="navigation-auto">
          {Object.keys(img).map((key: string, index: number) => {
            const img: IImg = props.img
            let divClass = `auto-btn${index}`
            return <div className={divClass}></div>
          })}
        </div>

        <div className="navigation-manual">
          {Object.keys(img).map((key: string, index: number) => {
            const img: IImg = props.img
            let labelFor = `radio${index}` 
            return <label htmlFor={labelFor} className="manual-btn"></label>
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
