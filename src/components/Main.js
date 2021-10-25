import React, { useState } from "react";
import beoOne from "./img/beoOne.jpg";
import beoTwo from "./img/beoTwo.jpg";
import beoThree from "./img/beoThree.jpg";
import eqOne from "./img/eqOne.jpg";
import eqTwo from "./img/eqTwo.jpg";
import eqThree from "./img/eqThree.jpg";
import hxOne from "./img/hxOne.jpg";
import hxTwo from "./img/hxTwo.jpg";
import hxThree from "./img/hxThree.jpg";
import compare from "./img/compare.svg";
import anc from "./img/anc.jpg";


export default function Main() {
    /*const products = [
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
    
    console.log(products[0]["name"]);
    */
    
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
                                    6 products
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
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div id="carouselOne" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselOne" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselOne" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselOne"
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={beoOne} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={beoTwo} 
                                                    class="d-block w-100"
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={beoThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button" 
                                                data-bs-target="#carouselOne" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button
                                                class="carousel-control-next"
                                                type="button" 
                                                data-bs-target="#carouselOne" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY H95
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            6 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Adaptative ANC headphones 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div 
                                            id="carouselTwo" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselTwo" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselTwo" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselTwo" 
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={eqOne} 
                                                    class="d-block w-100"
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={eqTwo} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95"
                                                 />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={eqThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button" 
                                                data-bs-target="#carouselTwo" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button 
                                                class="carousel-control-next" 
                                                type="button" 
                                                data-bs-target="#carouselTwo" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY EQ
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            3 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Adaptative ANC headphones <br />
                                        Earphones
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div 
                                            id="carouselThree" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={hxOne} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={hxTwo} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={hxThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button"
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button 
                                                class="carousel-control-next" 
                                                type="button" 
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY HX
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            3 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Adaptative ANC headphones 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div 
                                            id="carouselThree" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={beoOne} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={beoTwo} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={beoThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button"
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button 
                                                class="carousel-control-next" 
                                                type="button" 
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY PORTAL
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            3 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Wireless gaming headphones 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div 
                                            id="carouselThree" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={hxOne} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={hxTwo} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={hxThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button"
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button 
                                                class="carousel-control-next" 
                                                type="button" 
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY E8 SPORT
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            6 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Adaptative ANC headphones 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 mt-5">
                                <div className="card p-1 h-100">
                                    <div className="col-12 col-sm-12 w-100">
                                        <div 
                                            id="carouselThree" 
                                            class="carousel slide" 
                                            data-bs-ride="carousel"
                                            >
                                            <div class="carousel-indicators">
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="0" 
                                                    class="active" 
                                                    aria-current="true" 
                                                    aria-label="Slide 1"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="1" 
                                                    aria-label="Slide 2"
                                                    >
                                                </button>
                                                <button 
                                                    type="button" 
                                                    data-bs-target="#carouselThree" 
                                                    data-bs-slide-to="2" 
                                                    aria-label="Slide 3"
                                                    >
                                                </button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                <img 
                                                    src={eqOne} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={eqTwo} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                                <div class="carousel-item">
                                                <img 
                                                    src={eqThree} 
                                                    class="d-block w-100" 
                                                    alt="BEOPLAY H95" 
                                                />
                                                </div>
                                            </div>
                                            <button 
                                                class="carousel-control-prev" 
                                                type="button"
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="prev"
                                                >
                                                <span 
                                                    class="carousel-control-prev-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Previous
                                                </span>
                                            </button>
                                            <button 
                                                class="carousel-control-next" 
                                                type="button" 
                                                data-bs-target="#carouselThree" 
                                                data-bs-slide="next"
                                                >
                                                <span 
                                                    class="carousel-control-next-icon" 
                                                    aria-hidden="true"
                                                    >
                                                </span>
                                                <span class="visually-hidden">
                                                    Next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 fw-bold">
                                            BEOPLAY E8 3RD GEN
                                        </div>
                                        <div className="col-12 col-sm-6 text-sm-end">
                                            6 Colours
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted">
                                        Adaptative ANC headphones 
                                    </div> 
                                    <div className="col-12 col-sm-12">
                                        From $800
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="others">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-4 mt-5">
                                <div className="card h-100">
                                    <div className="col-12 col-sm-12 mt-5 pt-5 text-center">
                                        <img 
                                            src={compare} 
                                            alt="compare"
                                            width="80"
                                            height="80" 
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12 fw-bold mt-3 text-center">
                                        WHICH HEADPHONES ARE RIGHT FOR YOU?
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted mt-3 text-center">
                                        Compare our headphones and get help finding your perfect match
                                    </div>
                                    <div className="col-12 col-sm-12 mt-3 mb-5 pb-5 text-center">
                                        <button className="btn btn-perso">
                                            COMPARE  
                                            <svg
                                                width="24"
                                                height="24"
                                                className="svg-flecha"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 mt-5">
                                <div className="card h-100">
                                    <div className="col-12 col-sm-12 mt-5 pt-5 text-center text-muted fw-bold">
                                        A SHORT MANUAL
                                    </div>
                                    <div className="col-12 col-sm-12 fw-bold mt-3 text-center">
                                        What is Active Noise Cancellation?
                                    </div>
                                    <div className="col-12 col-sm-12 ms-5 my-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path 
                                            d="M2 11H22V13H2V11Z" 
                                            fill="currentColor" 
                                        />
                                    </svg>
                                    </div>
                                    <div className="col-12 col-sm-12 text-muted mt-3 text-center">
                                        Article ♠ 5 mins read
                                    </div>
                                    <div className="col-12 col-sm-12 mt-3 mb-5 pb-5 text-center">
                                        <button className="btn btn-perso-two">
                                            LEARN MORE   
                                            <svg
                                                width="24"
                                                height="24"
                                                className="svg-flecha"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 mt-5">
                                <div className="card h-100">
                                    <img 
                                        src={anc} 
                                        alt="ANC" 
                                        height="430"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 mt-5 text-center">
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    className="svg-contact"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="col-12 col-sm-12 mt-3 text-center fw-bold fs-5">
                                JOIN US
                            </div>
                            <div className="col-12 col-sm-12 mt-3 text-center text-muted fs-6">
                                Sign up to be a part of our global community, offering you a 
                                world of exclusive benefits.
                            </div>
                            <div className="col-12 col-sm-12 mt-3 text-center">
                                <button className="btn btn-perso">
                                    SIGN UP NOW
                                    <svg
                                        width="24"
                                        height="24"
                                        className="svg-flecha"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}