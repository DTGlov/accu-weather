import { CloudIcon} from '@heroicons/react/outline';
//import Card from './Card';
import { useRef} from 'react';
import { useRouter } from "next/router";


function DashBoard() {
    const router = useRouter()
    const searchInputRef = useRef(null)
    const search = (e) => {
        e.preventDefault()
      const city = searchInputRef.current.value;
      //set localStorage
      localStorage.setItem ('city',city)
        if (!city) return;
        router.push(`/dash?city=${city}`)
    }
    return (
      <div className="max-w-lg mx-auto my-2 flex flex-col">
        <div className="flex items-center justify-center text-gray-700">
          <h2 className="text-5xl text-center">4cast</h2>
          <CloudIcon className="h-10" />
        </div>
        <div className="w-full text-center my-10">
          <h3 className="m-2">Enter a Location for weather Information</h3>
          <form onSubmit={search}>
                    <input
                        ref={searchInputRef}
                        defaultValue={router.query.city}
                        type="text" className="h-16 w-full text-center" />
          </form>
        </div>
            {/* <Card  cityDets={cityDets} weather={weather}/> */}
      </div>
    );
}

export default DashBoard
