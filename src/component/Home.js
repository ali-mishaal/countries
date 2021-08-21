import React, { useState, useEffect,useRef } from 'react';
import Cpuntries from './Countries';
import Pagination from './Pagination';
import axios from 'axios';
 const Home = () => {
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState([]);
    const [capital, setCapital] = useState([]);
    const [flag, setFlag] = useState([]);
    const [population, setPopulation] = useState([]);
    const [region, setRegion] = useState([]);
    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const [file, setFile] = React.useState(null)

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            const res = await axios.get('https://restcountries.eu/rest/v2/all');
            setCountries(res.data);
            setLoading(false);
        };

        fetchCountries();
    }, []);

    // Get current posts
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    function  AddCountry(){
      let newCountry={
          "name":name,
          "capital":capital,
          "population":population,
          "region":region,
          "flag":file? URL.createObjectURL(file) : null,
          "latlng":[lat,lng]
      };

      setCountries([...countries, newCountry])
        setName('')
        setCapital('')
        setPopulation('')
        setRegion('')
        setLat('')
        setLng('')
        setFile('')
    };


    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Countries</h1>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">name</label>
                                <input value={name} onChange={(event)=>setName(event.target.value)} type="text" name="name" className="form-control" />

                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">capital</label>
                                <input value={capital} onChange={(event)=>setCapital(event.target.value)} type="text" name="capital" className="form-control"/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Region</label>
                                <input value={region} onChange={(event)=>setRegion(event.target.value)} type="text" name="region" className="form-control"/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">population</label>
                                <input value={population} onChange={(event)=>setPopulation(event.target.value)} type="text" name="population" className="form-control"/>

                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Lat</label>
                                <input value={lat} onChange={(event)=>setLat(event.target.value)} type="text" name="lat" className="form-control"/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">lng</label>
                                <input value={lng} onChange={(event)=>setLng(event.target.value)} type="text" name="lng" className="form-control"/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">flag</label>
                                <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

                            </div>
                        </div>
                    </div>
                </div>
                <button onClick = {AddCountry.bind()} className="btn btn-primary">add</button>
            </nav>
            <Cpuntries countries={currentCountries} loading={loading} />
            <Pagination
                countriesPerPage={countriesPerPage}
                totalCountries={countries.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Home;