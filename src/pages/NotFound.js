import { Link } from "react-router-dom"
import Button from "../components/Button"
import Container from "../components/Container"
import H1 from "../components/H1"

const NotFound = () => {
  return(
    <Container>
      <H1>Page not found</H1>
      <Link to={'/'} className="flex items-center justify-center md:m-20 my-20">
        <Button text="Go to Home" className="text-2xl"/>
      </Link>
    </Container>
  )
}

export default NotFound