import React from 'react';
import axios from 'axios';
import Detail from './detailSurat'
import {Link,useRouteMatch,Switch,Route} from 'react-router-dom';

const Quran =() => {
    let match = useRouteMatch();
    const [allSurat,setAllSurat] = React.useState([]);
    React.useEffect(() => {
        getSurat();
    }, []);
        const getSurat = async () => {
            let url = `https://al-quran-8d642.firebaseio.com/data.json?print=pretty`;
            try {
                let response = await axios.get(url);
                console.log(response.data);
                setAllSurat(response.data);
                
            } catch (error) {
                
            }

        }
        return(
            <React.Fragment>
               <Switch>
                   <Route path={`/detail/num`}>
                        <Detail/>
                   </Route>
                </Switch>
                    <Route path={`${match.url}`}>
                        <div className="container justify-center content-center row">
                            <div className="flex items-center font-bold container-fluid  p-5 mb-5 bg-primary  text-white">
                                <p>Quran</p>
                            </div>
                            <div className="container row">
                                {allSurat.map((surat) => (
                                    <div className="flex justify-between items-center my-2 px-5 rounded-lg" key={surat.num}>
                                        <div className="container-fluid  text-white bg-success">
                                            <p>{surat.nama}</p>
                                            <p>{surat.ayat}</p>
                                            <p>{surat.asma}</p>
                                            <p>{surat.arti}</p>
                                            <Link to={`${match.url + "/" + surat.num}`}>
                                                <p className="text-white">Read</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Route>
        </React.Fragment>
        )
    
}
export default Quran;
