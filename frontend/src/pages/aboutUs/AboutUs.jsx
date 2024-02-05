

import React,{useEffect} from 'react'

const AboutUs = () => {

  const callAboutPage = async () => {

    try {
      const res = await fetch('/about', {
        
      } )
      
    } catch (error) {
      console.log("error from AboutUs...")
      console.log(error)
    }

  }

  useEffect(() => {
  
    return () => {
     callAboutPage();
    }
  }, [])
  


  return (<>
  
  
  <div>AboutUs</div>
  
  </>
  )
}

export default AboutUs