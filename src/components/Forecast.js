import React from 'react';
import {RiCelsiusFill} from 'react-icons/ri';
import {RiFahrenheitFill} from 'react-icons/ri';

const changeDate=(date)=>{
    let b=new Date(date).getDay();
    const weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[b]
  }

const Forecast = ({data,show}) => {
    return (
    
             <div className='three-days-forcast'>
                  <p>Next two days forcast</p>
                <div className='days'>

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
        
    )
}

export default Forecast
