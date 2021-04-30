

function Card({ cityDets, weather }) {
  let timeSrc = weather[0].IsDayTime
  let weatherIcon = weather[0].WeatherIcon
  return (
    <div className="shadow-lg rounded mx-auto bg-white mb-18">
      <img src={timeSrc ? 'img/day.svg':'img/night.svg'} alt="empty image" />
      <div className="relative right-0 -top-10 flex justify-center">
        <img className="absolute bg-white h-20 object-contain w-20 rounded-full" src={`img/icons/${weatherIcon}.svg`}/>
      </div>
      {weather.map((item) => (
        <div key={cityDets.Key}>
          <div className="text-center m-10">
            <h1 className="mt-4 text-3xl text-gray-800">{cityDets.LocalizedName}</h1>
            <h2 className="mt-4 text-xl text-gray-800">{item.WeatherText}</h2>
          </div>
          <div className="text-center m-6">
            <span className="text-5xl">{item.Temperature.Metric.Value}</span>
            <span className="text-5xl">&deg;C</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card
