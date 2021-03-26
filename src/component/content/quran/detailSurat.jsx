import React from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios'

const Detail= () => {
    let num = useParams();
    console.log(useParams());
    const [oneSurat, setOneSurat] = React.useState([]);
    const [ayat, setAyat] = React.useState([]);
    React.useEffect(() => {
        getSurat(num);
    }, [num]);
    const getSurat = async (num) =>{
        let url = `https://al-quran-8d642.firebaseio.com/data.json${num}`;

        try {
            let response = await axios.get(url);
            console.log(url);
            setOneSurat(response.data);
            setAyat(response.data.ayat)
            console.log(response.data);

        } catch (error) {
            
        }
    };

    return (
       <div className="container-fluid ">
            {ayat.map((ayat) => (
               <p>{ayat.ayatText}</p>
            ))}
       </div>
    )

}

export default Detail;