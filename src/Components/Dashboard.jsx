import React from 'react'
import { useState, useEffect } from "react";
import Footer from './Footer';
import Navbar from './Navbar'
import "./Style.css"
const Dashboard = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    console.log(datastore)
    const [data, setData] = useState([]);
    // const [show, setShow] = useState(false);

    useEffect(() => {
        fetch("https://movieapi121.herokuapp.com/userData")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <div>
            <Navbar />
            {
                datastore ? <div>
                    <div className='dashboard'>
                        <h2>User Details</h2>
                        {/* <h4 onClick={backtologin} >LogOut</h4> */}
                        <div className='tabledata'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((e, key) => {
                                            return <tr>
                                                <td>{key + 1}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                    : ""

            }
            <Footer />
        </div>
    )
}

export default Dashboard