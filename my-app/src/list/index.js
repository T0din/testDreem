import React from 'react';
import Person from './person';
import axios from 'axios';
import moment from 'moment';

const List = () => {
    const [arrayOfPersons, setArrayOfPersons] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [sortInfo, setSortInfo] = React.useState(null);
    const [openView, setOpenView] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const [viewData, setViewData] = React.useState(null);
    const [formData, setFormData] = React.useState(null);

    const fetch = (page) => {
        const pageForAxios = page || 1;
        return axios
            .get(`http://localhost:3000/persons?_page=${pageForAxios}&_limit=20`)
            .then(function (response) {
                // handle success
                setArrayOfPersons(response.data);
            });
    };

    // const fetchSort = (sort) => {
    //     return axios
    //         .get(
    //             `http://localhost:3000/persons?_page=${pageNumber}&_limit=20&_sort=${sort.fieldName}&_order=${sort.order}`
    //         )
    //         .then(function (response) {
    //             // handle success
    //             setArrayOfPersons(response.data);
    //         });
    // };

    React.useEffect(() => {
        fetch();
    }, []);

    React.useEffect(() => {
        fetch(pageNumber);
    }, [pageNumber]);

    // React.useEffect(() => {
    //     fetchSort(sortInfo);
    // }, [fetchSort, sortInfo]);

    const handleChange = ({fieldname, value}) => {
        setFormData({...viewData, [fieldname]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/persons/${formData.id}`, formData);
        setFormData(null);
        setOpenView(false);
    };
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button
                    disabled={pageNumber === 1}
                    onClick={() => {
                        setPageNumber(pageNumber - 1);
                    }}
                    style={{height: '30px'}}
                >
                    {'<'}
                </button>
                <div style={{height: '30px'}}>{pageNumber}</div>
                <button
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                    }}
                    style={{height: '30px'}}
                >
                    {'>'}
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button
                    disabled={pageNumber === 1}
                    onClick={() => {
                        setPageNumber(pageNumber - 1);
                    }}
                    style={{height: '30px'}}
                >
                    {'<'}
                </button>
                <div style={{height: '30px'}}>{pageNumber}</div>
                <button
                    onClick={() => {
                        setPageNumber(pageNumber + 1);
                    }}
                    style={{height: '30px'}}
                >
                    {'>'}
                </button>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{width: '30%'}}>
                    {arrayOfPersons.map((person) => (
                        <Person
                            key={person.id || Math.random()}
                            person={person}
                            setViewData={setViewData}
                            setOpenView={setOpenView}
                        />
                    ))}
                </div>

                {openView && (
                    <div
                        style={{
                            width: '700px',
                            borderRadius: '20px',
                            padding: '20px',
                            paddingTop: '10px',
                            boxShadow: '0 2px 6px 0 #333333',
                            border: '1px solid grey',
                            marginBottom: '10px',
                            backgroundColor: 'white',
                            marginTop: '50px',
                            height: '400px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                justifyContent: 'flex-start',
                            }}
                        >
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
                                    <div>{viewData.name}</div>
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
                                    <div>{viewData.type}</div>
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
                                    <div>{moment(viewData.dob).format('DD-MM-YYYY')}</div>
                                </div>
                            </div>

                            <div style={{alignSelf: 'center'}}>
                                <button
                                    onClick={() => {
                                        setFormData(viewData);
                                        setOpenForm(true);
                                    }}
                                >
                                    Edit
                                </button>
                                <div style={{marginBottom: '20px'}} />
                                <button
                                    onClick={() => {
                                        setOpenView(false);
                                        setFormData(null);
                                    }}
                                >
                                    Close
                                </button>
                                <div style={{marginBottom: '20px'}} />
                                <button
                                    onClick={() => {
                                        axios.delete(
                                            `http://localhost:3000/persons/${viewData.id}`
                                        );
                                    }}
                                >
                                    Delete
                                </button>
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
                                    Description
                                </p>
                                <div>{viewData.description}</div>
                            </div>
                        </div>
                        {openForm && (
                            <div style={{marginTop: '20px'}}>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) =>
                                                handleChange({
                                                    fieldname: 'name',
                                                    value: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                    <label>
                                        Type:
                                        <input
                                            type="text"
                                            value={formData.type}
                                            onChange={(e) =>
                                                handleChange({
                                                    fieldname: 'type',
                                                    value: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                    <label>
                                        Date of Birth:
                                        <input
                                            type="text"
                                            value={formData.dob}
                                            onChange={(e) =>
                                                handleChange({
                                                    fieldname: 'dob',
                                                    value: moment(e.target.value).format(
                                                        'YYYY-MM-DD'
                                                    ),
                                                })
                                            }
                                        />
                                    </label>
                                    <label>
                                        Description:
                                        <input
                                            type="text"
                                            value={formData.description}
                                            onChange={(e) =>
                                                handleChange({
                                                    fieldname: 'description',
                                                    value: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default List;
