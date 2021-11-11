import {useEffect,useState} from 'react';

const useAllBooking = ()=>{
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://damp-dusk-34912.herokuapp.com/bookDestination')
       .then(res => res.json())
       .then(result => {
        setBooking(result)
       });
     }, []);

return [ booking ];

}

export default useAllBooking;