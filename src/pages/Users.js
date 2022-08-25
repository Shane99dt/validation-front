import { useEffect, useState } from "react"
import Card from "../components/Card"
import Container from "../components/Container"
import H1 from "../components/H1"

const Users = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const request = await fetch('http://localhost:5000/users')
    const response = await request.json()
    setUsers(response)
  }


  return(
    <Container>
      <H1>Users</H1>
      <section className="flex sm:flex-row flex-wrap flex-col sm:gap-0 gap-5 items-center">
        {users.map((user, id) => {
          return <Card key={`${user.slug}-${id}`} name={user.name} slug={user.slug} city={user.city} image={user.profile_picture} />
        })}
      </section>
    </Container>
  )
}

export default Users