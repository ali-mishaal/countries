import React from 'react';

const Countries = ({ countries, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <table className="table">
            <thead>
            <tr>
                <th scope="col">Country name</th>
                <th scope="col">Capital </th>
                <th scope="col">Country flag</th>
                <th scope="col">Region</th>
                <th scope="col">Population</th>
                <th scope="col">Country Position using -latlng- </th>
            </tr>
            </thead>
            <tbody>
            {countries.map((country,index) => (
                <tr key={index}>
                    <td scope="row">{country.name}</td>
                    <td>{country.capital}</td>
                    <td><img width="70" src={country.flag}/></td>
                    <td>{country.region}</td>
                    <td>{country.population}</td>
                    <td>{country.latlng[0]} , {country.latlng[1]}</td>
                </tr>
            ))}
            </tbody>
        </table>

    );
};

export default Countries;