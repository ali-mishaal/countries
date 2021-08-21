
import React from 'react';

const AddCountry = ({ AddCoun }) => {

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">name</label>
                            <input type="text" name="name" className="form-control" />

                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">capital</label>
                            <input type="text" name="capital" className="form-control"/>

                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Region</label>
                            <input type="text" name="region" className="form-control"/>

                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">population</label>
                            <input type="text" name="population" className="form-control"/>

                        </div>
                    </div>
                </div>
            </div>
            <button onClick = {AddCoun(1)} className="btn btn-primary">add</button>
        </nav>
    );
};

export default AddCountry;

