import React, { useState } from "react";

export default function Main() {
    const products = [
        {
            "name": "BEOPLAY H950",
            "colors": "6 Colours",
            "options": {
                "optOne": "Adaptative ANC",
                "optTwo": "headphones"
            },
            "price": "From $800"
        },
        {
            "name": "BEOPLAY EQ",
            "colors": "3 Colours",
            "options": {
                "optOne": "Adaptative noise",
                "optTwo": "cancelling wireless",
                "opthree": "earphones"
            },
            "price": "From $399"
        },
        {
            "name": "BEOPLAY HX",
            "colors": "3 Colours",
            "options": {
                "optOne": "Comfortable ANC",
                "optTwo": "headphones"
            },
            "price": "From $499"
        }

    ];
    const nameOne = products[0]["name"];
    document.write(nameOne);
    return (
        <div>
            <main id="main">
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 mt-5">
                                <span>
                                    All headphones
                                </span>
                            </div>
                            <div className="col-12 col-sm-2 mt-5 text-end">
                                <p className="text-end">
                                    7 products
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 mt-4">
                                <p>
                                    Bring your favourite music with you wherever you go,
                                    with wireless headphones. Enhance relaxation, work
                                    or travel with headphones and earphones expertly
                                    designed to deliver a superior sound performance.
                                    Discover our range of headphones: Over-ear headphones
                                    offer an extra comfortable fit and iconic design.
                                    In-ear earphones are small and portable, a great choice
                                    for listening to music and taking calls on the go.
                                    Active noise cancelling headphones let you remove background
                                    noise, perfect for commuting or when you want to fully
                                    immerse yourself in music.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="products">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <img src="..." alt="..." />
                                    </div>
                                    <div className="row">
                                        <div className="col-6 col-sm-6">
                                            <div id="name"></div>
                                            <script>
                                            
                                            </script>
                                        </div>
                                        <div className="col-6 col-sm-6 text-end">
                                            COLORS
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        Options 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        Options
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        Price
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}