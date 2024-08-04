/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Info() {
  return (
    <div>
      <UserData />
      <WeatherData/>
      <NewsData/>
      <NotePad/>
      <Timer/>
    </div>
  );
}

export default Info;


//Component-1
const UserData = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData")) || {};
  const movies = JSON.parse(localStorage.getItem("selectedMovie")) || [];
  //Handle null or Undefined Data: Added fallback values to avoid JSON.parse errors.

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <h1>User Data</h1>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.username}</p>
      <div>
        {movies.map((movie, idx) => (
          <p key={idx}>{movie}</p>
        ))}
      </div>
    </div>
  );
};

// Component-2
const WeatherData = () => {
  const [weather, setWeather] = useState([
    {"location":{"city":"Mumbai","woeid":2295411,"country":"India","lat":19.090281,"long":72.871368,"timezone_id":"Asia/Kolkata"},"current_observation":{"pubDate":1721640477,"wind":{"chill":91,"direction":"SW","speed":12},"atmosphere":{"humidity":89,"visibility":3.98,"pressure":1003.7},"astronomy":{"sunrise":"6:12 AM","sunset":"7:17 PM"},"condition":{"temperature":83,"text":"Cloudy","code":26}},"forecasts":[{"day":"Mon","date":1721664000,"high":83,"low":80,"text":"Scattered Showers","code":45},{"day":"Tue","date":1721750400,"high":84,"low":79,"text":"Thunderstorms","code":4},{"day":"Wed","date":1721836800,"high":84,"low":79,"text":"Thunderstorms","code":4},{"day":"Thu","date":1721923200,"high":83,"low":79,"text":"Thunderstorms","code":4},{"day":"Fri","date":1722009600,"high":85,"low":80,"text":"Showers","code":11},{"day":"Sat","date":1722096000,"high":87,"low":80,"text":"Showers","code":11},{"day":"Sun","date":1722182400,"high":90,"low":82,"text":"Thunderstorms","code":4},{"day":"Mon","date":1722268800,"high":89,"low":83,"text":"Thunderstorms","code":4},{"day":"Tue","date":1722355200,"high":90,"low":81,"text":"Thunderstorms","code":4},{"day":"Wed","date":1722441600,"high":85,"low":77,"text":"Thunderstorms","code":4},{"day":"Thu","date":1722528000,"high":86,"low":78,"text":"Rain","code":12}]}
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* useEffect(() => {
    async function fetchWeather() {
      const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=mumbai&format=json&u=f';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '2364d4f037mshc0e40b6030787ebp16dfbfjsn2d1cf5601336',
          'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []); */

  const today = new Date();
  const formattedToday = today.toLocaleDateString('en-GB');
  const formattedTime = today.toLocaleTimeString('en-GB');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    weather ? (
      <>
        <p>{formattedToday}</p>
        <p>{formattedTime}</p>
        <p>{weather.current_observation.wind.speed} mph</p>
        <p>{weather.current_observation.atmosphere.humidity} %</p>
        <p>{weather.current_observation.condition.temperature} °F</p>
        <p>{weather.current_observation.condition.text}</p>
      </>
    ) : null
  );
};


//Component-3:
const NewsData = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '1ba078c0ddmsh266e2300fbfa02ep1e4e65jsn8b0b7a992350',
          'x-rapidapi-host': 'google-news13.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setNews(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    news && news.items && news.items.length > 0 ? (
      <>
        <p>{news.items[0].title}</p>
        <p>{news.items[0].snippet}</p>
        <img src={news.items[0].images ? news.items[0].images.thumbnail : ''} alt="news-thumbnail" />
      </>
    ) : <p>No news available</p>
  );
};


//Component 4
const NotePad=()=>{
  const [note, setNote] = useState(localStorage.getItem("note") ?? "")

  return(
    <textarea value={note} onChange={(e)=>{
      localStorage.setItem("notes",e.target.value)
      setNote(e.target.value)
    }}></textarea>
  )
}

//Component-5:
const Timer=()=>{
  const [isPlaying, setPlaying] = useState(false)
  const [time,setTime]=useState(0)

  function increaseSecond(){
    setTime(time+1) //setTime((time)=>time+1)
  }
  function increaseMinute(){
    setTime(time+60)
  }
  function increaseHour(){
    setTime(time+3600)
  }
  function decreaseSecond(){
    if(time>0){
      setTime(time-1)
    }
    
  }
  function decreaseMinute(){
    if(time>=60){
      setTime(time-60)
      }
  }
  function decreaseHour(){
    if(time>=3600){
      setTime(time-3600)
    }
  }
  function formatTime(time){
    const hours = Math.floor(time/3600)
    const minutes = Math.floor((time%3600)/60)
    const seconds = time%60
  }
  return(
    <>
    <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={time}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => formatTime(remainingTime)}
  </CountdownCircleTimer>

  <button onClick={increaseSecond}>+1 Second</button>
  <button onClick={decreaseSecond}>-1 Second</button>
  <button onClick={increaseMinute}>+1 Minute</button>
  <button onClick={decreaseMinute}>-1 Minute</button>
  <button onClick={increaseHour}>+1 Hour</button>
  <button onClick={decreaseHour}>-1 Hour</button>
  <button disabled={isPlaying} onClick={()=>setPlaying(true)}>Start</button>
  {/* <button onClick={()=>setPlaying(!isPlaying)}>Start/Stop</button> */}
  </>
  )
}