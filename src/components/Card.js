import { Link } from "react-router-dom"
import Button from "./Button"

const Card = ({ image, name, city, slug }) => {
  return(
    <div className="sm:w-1/3 w-full max-w-sm bg-stone-50 rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-col items-center py-10">
            <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={image} alt={`${name}-image`}/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 capitalize">{name}</h5>
            <span className="text-sm text-gray-500 capitalize">{city}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link to={`/users/${slug}`} className="">
                <Button text={'view'} />
              </Link>
            </div>
        </div>
    </div>
  )
}


export default Card