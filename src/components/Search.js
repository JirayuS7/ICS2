import React from "react";
import Shopsearch from '../example_data.json'
import ReactPaginate from 'react-paginate';
import "../css/items.css"
import  Calenda from "../images/Vectoricon-calenda-1.svg"
import { useState } from 'react';

function SearhBar() {





    const [searhTerm, setSearchTerm] = useState('')

    const [users, setUsers] = useState(Shopsearch.slice(0, 30));


    const [pageNumber, setPageNumber] = useState(0)
    const usersPerpage = 9
    const pageesVisited = pageNumber * usersPerpage;




    const displayUsers = users
        .slice(pageesVisited, pageesVisited + usersPerpage)
        .filter((record) => {
            if (searhTerm == "") {
                return record
            }



            else if (record.name.toLocaleLowerCase().includes(searhTerm.toLocaleLowerCase())) {

                return record

            }


        })
        .map((record, key) => {


            const gallary = record.images.map((e, i) => {

                return (

                    <div> <a href="/shopdetail"><img id={i + 1} src={e} /></a>
                    </div>
                )

            })




            //
            return (
                <div className="col-12  col-md-6  col-lg-4 items card" key={record.id}>

                    <div>

                        <div className="row header">

                            <div className="col-3 img-profile">
                                <div ><a href="/shopdetail"> <img src={record.profile_image_url} /></a></div>

                            </div>


                            <div className="col-9">
                                <h3> <a href="/shopdetail">{record.name}</a> </h3>

                                <div className="card-detail justify-content-between">
                                    <div className='timedate'>
                                        <span className="opentime">
                                            <img src={Calenda}/>
                                            

                                            10:00 AM
                                        

  </span>
                                        - <span className="closetime">8:00 PM{/*record.time_close*/} </span> </div>
                                    <div id="rating">  <strong> {record.rating}</strong></div>
                                </div>
                            </div>




                        </div>

                        <div className="image-main">

                            {gallary}


                        </div>
                    </div>
                </div>

            )
        })


    const pageCount = Math.ceil(users.length / usersPerpage)
    const changePage = ({ selected }) => {

        setPageNumber(selected);

    }


    return (




        <div id="searching" className="row justify-content-end">

            <div className="col-md-2">
                <select id="searchselect"  className="form-select form-control " aria-label="Default select example">
                    <option selected> Select Category</option>
                    <option value="1">Restaurant</option>
                    <option value="2">Bakery</option>
                    <option value="3">Cafe</option>
                </select>

            </div>

            <div className="col-md-3">
                <input id="search_input" onChange={event => {

                    setSearchTerm(event.target.value)
                }} className="form-control " type="text" placeholder="Search name..." aria-label=".form-control-sm example"></input>
            </div>
            <div className="row"> {displayUsers}</div>

            <ReactPaginate
                previousAriaLabel={'Back'}
                nextLabel={<span></span>}
                previousLabel={<span></span>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagebttns"}
                nextLinkClassName={"nextlink"}
                previousClassName={"prebutton"}
                nextClassName={"nextbutton"}
                disabledClassName={"disble_bt"}
                activeClassName={"btactive"}
            />


        </div>

    );



}

export default SearhBar  