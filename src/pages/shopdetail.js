import "../css/shopdetail.css"


function SHOPPAGE() {

    return (
        <>
            <div id="shopPage" className="container-xxl">

                
            <div className="mb-5"> <a href="/" className="backbt">   HOME</a></div>

                <ul className="nav nav-pills mb-3 mobiletab d-md-none" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">IMAGE</button>
                    </li>

                </ul>


                <div className="tab-content" id="pills-tabContent">
                    <div className="inner">

                        <div className="row">

                            <div className="col-md-7 left-col tab-pane fade show active"  id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <div className="innercol">

                                    <div className="img">
                                        <img src="https://images.unsplash.com/photo-1595698251245-879f5cf220e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxzaG9wJTIwcmVzdGF1cmFudCUyMHNwYWdoZXR0aXxlbnwwfHx8fDE2NDYzNjc4Nzg&ixlib=rb-1.2.1&q=80&w=1080" />
                                    </div>

                                    <div className="text">

                                        <header className="mb-4">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <h3>DAI LOU MODERN CHINESE CUISINE</h3>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="ratting">4.1</span>
                                                </div>
                                            </div>
                                        </header>

                                        <div className="row mb-4">

                                            <div className="col-md-3">
                                                <p> <strong>Address :</strong> </p>
                                            </div>
                                            <div className="col-md-9">
                                                <span className="">55/5 Soi Phahon Yothin 2, Khwaeng Samsen Nai, Khet Phaya Thai, Krung Thep Maha Nakhon 10400, Thailand</span>
                                            </div>


                                        </div>
                                        <div className="row">

                                            <div className="col-md-3">
                                                <p> <strong>Opening Hour : </strong> </p>
                                            </div>
                                            <div className="col-md-9">
                                                <p>   Monday: 10:00 AM – 6:00 PM<br />
                                                    Tuesday: 10:00 AM – 6:00 PM<br />
                                                    Wednesday: 10:00 AM – 6:00 PM<br />
                                                    Thursday: 10:00 AM – 6:00 PM<br />
                                                    Friday: 10:00 AM – 6:00 PM<br />
                                                    Saturday: Closed<br />
                                                    Sunday: Closed</p>

                                            </div>


                                        </div>

                                    </div>

                                </div>


                            </div>


                            <div className="col-md-5 right-col tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="innercol">
                                    <h4>Images</h4>
                                    <div id="imagegallery">


                                        <img src="https://images.unsplash.com/photo-1617651524211-23485a7aaff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3BhZ2hldHRpfGVufDB8fHx8MTY0NjM2Nzg1OA&ixlib=rb-1.2.1&q=80&w=1080" />
                                        <img src="https://images.unsplash.com/photo-1486771586447-de892eecbd34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwc3BhZ2hldHRpfGVufDB8fHx8MTY0NjM2Nzg1OA&ixlib=rb-1.2.1&q=80&w=1080" />
                                        <img src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwc3BhZ2hldHRpfGVufDB8fHx8MTY0NjM2Nzg1OA&ixlib=rb-1.2.1&q=80&w=1080" />



                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </>

    )

}

export default SHOPPAGE