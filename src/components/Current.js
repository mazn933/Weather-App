import {RiCelsiusFill} from 'react-icons/ri';
import {RiFahrenheitFill} from 'react-icons/ri';

const Current = ({data,show}) => {
   
    return (
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
    )
}

export default Current
