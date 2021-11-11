import {useEffect,useState} from 'react';

const useTours = ()=>{
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] =useState(true);


    useEffect(() => {
        fetch('https://damp-dusk-34912.herokuapp.com/destinations')
       .then(res => res.json())
       .then(result => {
         setDestinations(result.destinations)
         setLoading(false);
       });
     }, [destinations,loading]);

return [ destinations, loading ];

}

export default useTours;