import Card from "../components/Card";
import DashBoard from "../components/DashBoard";

const API_KEY = process.env.API_KEY;

function dash({ cityDets, weather }) {
   
    return (
      <div className="max-w-lg mx-auto my-2 flex flex-col">
        <DashBoard />
        <Card cityDets={cityDets} weather={weather} />
      </div>
    );
}

export default dash

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${context.query.city}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
  // let dataKey = data.map((item)=>item.Key)
  let locationData = data[0];
  const newData = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationData?.Key}?apikey=${API_KEY}`
  ).then((response) => response.json());

  return {
    props: {
      cityDets: locationData,
      weather: newData,
    },
  };
}