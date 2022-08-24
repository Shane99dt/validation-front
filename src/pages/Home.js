import { Link } from "react-router-dom"
import Button from "../components/Button"
import Container from "../components/Container"
import H1 from "../components/H1"

const Home = () => {
  return(
    <Container>
      <H1>Home</H1>
      <Link to={'/users'} className="flex items-center justify-center md:m-20 my-20">
        <Button text="Show users" className="text-2xl"/>
      </Link>
    </Container>
  )
}

export default Home