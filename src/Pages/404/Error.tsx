import { StyledError } from './Error.styled'

const Error = () => {
  return (
    <StyledError>
      <div className="left404">
        <h1>404</h1>
        <h1>PAGE NOT FOUND</h1>
        <h2>You are not worthy...</h2>
        <p>
          Check that you typed the address correctly, go back to your previous
          page or try using our site search to find something specific.
        </p>
      </div>
      <div className="right404">
        <img src="images/404.jpg" alt="404" />
      </div>
    </StyledError>
  )
}

export default Error
