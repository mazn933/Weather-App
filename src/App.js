import React, {useState,useEffect} from 'react';
import {VscLoading} from  'react-icons/vsc';
import {RiFahrenheitFill} from 'react-icons/ri';
import{BsSearch} from 'react-icons/bs';
import Forcast from './components/Forecast';
import Current from './components/Current';


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
     console.log(weatherDt)
     seterror(true);
     setQuery('')
  }


 useEffect(()=>{
   fetchApi()
 },[])

 
  const Searching=(e)=>{
    fetchApi()

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

            <Current  data={data} show={show}/>
    
             <Forcast data={data} show={show}/>

           </div>
       </main>
    </div>
  )
}



export default App

