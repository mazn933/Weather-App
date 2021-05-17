import React, {useState,useEffect} from 'react';
import {VscLoading} from  'react-icons/vsc';
import {RiCelsiusFill} from 'react-icons/ri';
import {RiFahrenheitFill} from 'react-icons/ri';
import{BsSearch} from 'react-icons/bs'






const App = () => {


  const[query,setQuery]=useState('london');
  const[error,seterror]=useState(false);
  const[data,setData]=useState([]);
  const[show,setShow]=useState(true)

 


const fetchApi=async()=>{
   
     const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9f0e97b330744743bf6140228212404&q=${query}&days=5&aqi=no&alerts=no`);
     const weatherDt=await response.json();
     if(weatherDt.error){setQuery('london'); return(
      <div></div>
     )};
     setData(weatherDt);
     seterror(true);
     setQuery('')
  }

const apiKey='3f4eb15ee2282f3f96cb78628ee0ab96';

 useEffect(()=>{
   fetchApi()
 },[])

 
  const Searching=(e)=>{
    fetchApi()

  }

  const changeDate=(date)=>{
    let b=new Date(date).getDay();
    const weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[b]
  }

  const showingF=()=>{
    setShow(!show)

  }




  if(!error){
    return(
      <div className='loading'>
        <h2>< VscLoading/> Loading...</h2>
      </div>
    )
  }
  
  return (
    
    <div className='app'>
        <main>

          <div className='as'>
            <div className='search-box'>
               <input type="text" className='search-bar' placeholder='search...'
                    onChange={e=>setQuery(e.target.value)}
                    value={query}
                />
              <button onClick={Searching} ><BsSearch/></button>
            </div>
             <div className='celsius-ferhnite'>
                <button className={!show?'changing-color-button':'Fahrenheit'} onClick={showingF} type='button'><RiFahrenheitFill/></button>
             </div>
       
          </div>
    
          <div className='location-weather'>
            <div className='current-weather'>
              <h2 className='name-of-city'>{data.location.name}</h2>
              <div className='current-weather-details'>
                 <h2 className='today'>Today</h2>
                 <h1 className={!show?'f':'c'}>{Math.round(data.current.feelslike_c)} <span className='degree-c'><RiCelsiusFill/></span></h1>
                 <h1 className={show?'f':'c'}>{Math.round(data.current.feelslike_f)} <span className='degree-f'><RiFahrenheitFill/></span></h1>
                 <p className='current-weather-text'>{data.current.condition.text}</p>
                 <img src={data.current.condition.icon} alt="current-weather" className='icons'/>
              </div>
              
            </div>
          
              <div className='three-days-forcast'>
                  <p>Next three days forcast</p>
                <div className='days'>
                  <div className='first-day'>
                    <h2 className='today'>{changeDate(data.forecast.forecastday[0].date)}</h2>
                    <h2 className={!show?'f':''}>{Math.round(data.forecast.forecastday[0].day.avgtemp_c)}<span className='degree-c'><RiCelsiusFill/></span></h2>
                    <h2 className={show?'f':''}>{Math.round(data.forecast.forecastday[0].day.avgtemp_f)}<span className='degree-f'><RiFahrenheitFill/></span></h2>
                    <img src={data.forecast.forecastday[0].day.condition.icon} alt="foracast-icon" className='icons'/>
                    <h4 className='forecast-weather-text'>{data.forecast.forecastday[0].day.condition.text}</h4>
                  </div>
                  <div className='second-day'> 
                    <h2 className='today'>{changeDate(data.forecast.forecastday[1].date)}</h2>
                    <h2 className={!show?'f':''}>{Math.round(data.forecast.forecastday[1].day.avgtemp_c)} <span className='degree-c'><RiCelsiusFill/></span></h2>
                    <h2 className={show?'f':''}>{Math.round(data.forecast.forecastday[1].day.avgtemp_f)} <span className='degree-f'><RiFahrenheitFill/></span></h2>
                    <img src={data.forecast.forecastday[1].day.condition.icon} alt="foracast-icon" className='icons'/>
                    <h4 className='forecast-weather-text'>{data.forecast.forecastday[1].day.condition.text}</h4>
                  </div>
                   <div className='third-day'>
                      <h2 className='today'>{changeDate(data.forecast.forecastday[2].date)}</h2>
                      <h2 className={!show?'f':''}>{Math.round(data.forecast.forecastday[2].day.avgtemp_c)} <span className='degree-c'><RiCelsiusFill/></span></h2>
                      <h2 className={show?'f':''}>{Math.round(data.forecast.forecastday[2].day.avgtemp_f)} <span className='degree-f'><RiFahrenheitFill/></span></h2>
                      <img src={data.forecast.forecastday[2].day.condition.icon} alt="foracast-icon" className='icons'/>
                      <h4 className='forecast-weather-text'>{data.forecast.forecastday[2].day.condition.text}</h4>
                   </div>

                </div>
                 
              </div>
           </div>
       </main>
    </div>
  )
}



export default App

