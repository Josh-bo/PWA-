import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardo from './component/Cardo';


function App(){
  useEffect(() => {
    if('serviceWorker' in navigator){
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError =>{
          console.log('SW registration failed: ', registrationError);
        })
      })
    }
 }, []);
 return(
   <>
    <Cardo/>
   </>
 )
}

export default App
