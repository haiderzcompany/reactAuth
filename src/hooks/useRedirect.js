import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const useRedirect = (to) => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate(to);
    });
  
}

export default useRedirect;