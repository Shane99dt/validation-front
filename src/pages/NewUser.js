import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../components/Container"
import H1 from "../components/H1"
import Input from "../components/Input"
import Button from "../components/Button"
import Select from "../components/Select"


const NewUser = () => {
  const [ userName, setUserName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ city, setCity ] = useState('')
  const [ image, setImage ] = useState('')

  const navigate = useNavigate()

  const handleChangeUserName = e => {
    setUserName(e.target.value)
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleChangeCity = e => {
    setCity(e.target.value)
  }

  const handleChangeImage = e => {
    setImage(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      name: userName,
      email,
      password,
      city,
      profile_picture: image
    }

    const request = await fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newUser)
    })


    if(request.status === 201){
      navigate('/users')
    }else{
      alert('Bad request')
    }
  }


  return(
    <Container>
      <H1>New User</H1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <Input
            label="name"
            placeholder="Name"
            labelId = "userName"
            type="text"
            onChange={handleChangeUserName}
            />
          <Input
            label="password"
            placeholder="Password"
            labelId = "userPassword"
            type="password"
            onChange={handleChangePassword}
            />
          <Input
            label="email"
            placeholder="Email"
            labelId = "userEmail"
            type="email"
            onChange={handleChangeEmail}
            />
          <Input
            label="image"
            placeholder="Image"
            labelId = "userImage"
            type="text"
            onChange={handleChangeImage}
            />
          {/* <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChangeCity}>
                <option value="Paris">Paris</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Tokyo">Tokyo</option>
          </select> */}
          <Select
            label="City"
            labelId = "userCity"
            onSelectChange={handleChangeCity}
            />
        </div>
          
        <Button
          text="Add new user"
          type="submit"
          />
        {/* <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
          </div> */}
        {/* </div> */}
      </form>
    </Container>
  )
}

export default NewUser