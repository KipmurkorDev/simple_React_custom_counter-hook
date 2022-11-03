
import { useState, useEffect} from "react";


 const useCounter=(initialvalue) =>{
  const [counter, setCounter]=useState(initialvalue)
  


 

  useEffect(() => {
    const fuct = setInterval(() => {
      if(initialvalue<0)
      setCounter(prevedec=>prevedec-1);
    else{
      setCounter(preveCount=>preveCount+1);

    }
    }, 1000);
    return () => clearInterval(fuct);
  
    
      
  
  
   
  
  }, [counter])

 


 

  
 

  
    return { counter};
  }


export default useCounter