import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Cardo from './component/Cardo';
import Formik from './component/Formik';
import Ref from './component/Ref';


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
    {/* <Cardo/> */}
    {/* <Formik/> */}
    <Ref/>
   </>
 )
}

export default App