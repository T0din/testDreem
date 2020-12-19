import moment from 'moment';
import axios from 'axios';
import React from 'react';

const Person = ({person, setViewData, setOpenView}) => {
    const {id, name, type, dob} = person;
    return (
        <div
            style={{
                width: '350px',
                borderRadius: '20px',
                padding: '20px',
                paddingTop: '10px',
                boxShadow: '0 2px 6px 0 #333333',
                border: '1px solid grey',
                marginBottom: '10px',
                backgroundColor: 'white',
            }}
        >
            <div style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center'}}>
                <div style={{marginRight: '30px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p
                            style={{
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginBottom: '5px',
                            }}
                        >
                            Name
                        </p>
                        <div>{name}</div>
                    </div>
                </div>
                <div style={{marginRight: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p
                            style={{
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginBottom: '5px',
                            }}
                        >
                            type
                        </p>
                        <div>{type}</div>
                    </div>
                </div>
                <div style={{marginRight: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p
                            style={{
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                marginBottom: '5px',
                            }}
                        >
                            Date of birth
                        </p>
                        <div>{moment(dob).format('DD-MM-YYYY')}</div>
                    </div>
                </div>
                <div style={{alignSelf: 'center'}}>
                    <button
                        onClick={() => {
                            console.log('coucou');
                            setOpenView(true);
                            setViewData(person);
                        }}
                    >
                        View
                    </button>
                    <div style={{marginBottom: '20px'}} />
                    <button
                        onClick={() => {
                            axios.delete(`http://localhost:3000/persons/${id}`);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Person;
