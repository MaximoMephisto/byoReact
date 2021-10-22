import React, {useState} from "react";
import imgOne from './img/imgOne.png';
import imgTwo from './img/imgTwo.png';
import imgThree from './img/imgThree.png';
import imgFour from './img/imgFour.png';

export default function Header()
{
    return (
        <div>
            <header id="header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button 
                            class="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a 
                            class="navbar-brand p-3" 
                            href="#"
                            >
                            <svg 
                                width="38" 
                                height="40" 
                                viewBox="0 0 58 60" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path 
                                    fill-rule="evenodd" 
                                    clip-rule="evenodd" 
                                    d="M33.2787 17.4522C33.2787 19.1723 33.9573 20.7546 35.2392 22.0313C37.0421 23.8237 39.0166 24.0686 40.3599 23.9611C41.958 23.8307 43.5654 23.1038 44.6632 22.0147L44.9444 21.7346C45.7511 20.931 46.2457 20.4383 46.7275 19.9731L50.0375 23.1838L52.3616 20.8599L52.3931 20.8026L49.132 17.5532L51.4515 15.2408L49.0267 12.8259L46.7069 15.1406C46.7069 15.1406 39.9283 8.37288 39.0873 7.52677C38.6355 7.06986 38.3585 6.58897 38.3585 5.82527C38.3585 5.01591 38.7252 4.47583 39.0372 4.16748C39.4905 3.71445 40.1583 3.4328 40.7693 3.4328C41.7012 3.4328 42.2761 3.92452 42.4727 4.13305L42.5232 4.18334L42.5737 4.13537L43.9515 2.76775L44.9025 1.82066L44.9433 1.77308L44.8788 1.7015C44.2553 1.06624 42.8852 0 40.7611 0C39.1424 0 37.6434 0.642996 36.5444 1.80906C35.5146 2.89813 34.9273 4.35744 34.9273 5.81405C34.9273 8.23322 36.3098 9.72 37.2876 10.6253L35.2248 12.6359C34.0249 13.8294 33.2787 15.6776 33.2787 17.4522ZM37.6578 15.0644L39.7061 13.0228L44.2914 17.5462C44.0821 17.7609 43.194 18.6535 42.2163 19.6187C41.0354 20.7751 39.0795 21.0181 37.6578 19.6044C37.0374 18.9827 36.7099 18.212 36.7099 17.3698C36.7099 16.5214 37.0657 15.6571 37.6578 15.0644ZM52.602 31.8444C49.4681 28.7343 45.2986 27.0231 40.865 27.0231C36.4318 27.0231 32.2618 28.7343 29.1272 31.8444C25.9933 34.9576 24.2667 39.0915 24.2667 43.4897C24.2667 47.8886 25.9933 52.0199 29.1272 55.13C32.2618 58.242 36.4318 59.9535 40.865 59.9535C45.2986 59.9535 49.4681 58.242 52.602 55.13C55.7374 52.0199 57.4648 47.8886 57.4648 43.4897C57.4648 39.0915 55.7374 34.9576 52.602 31.8444ZM40.865 55.7176C37.5714 55.7176 34.4742 54.4442 32.1465 52.1346C29.8178 49.8254 28.5313 46.7532 28.5313 43.4897C28.5313 40.2196 29.8178 37.1501 32.1465 34.8409C34.4742 32.5271 37.5714 31.2556 40.865 31.2556C44.1585 31.2556 47.2546 32.5271 49.585 34.8409C51.9106 37.1501 53.1956 40.2196 53.1956 43.4897C53.1956 50.2315 47.6652 55.7176 40.865 55.7176ZM24.2935 19.7394C24.2935 26.7462 20.4301 33.1364 14.1989 36.4393C15.9789 37.5605 17.4773 39.1086 18.5141 40.9294C19.6098 42.8384 20.1898 45.015 20.1898 47.2234C20.1898 50.6333 18.8456 53.8423 16.4117 56.2585C13.9828 58.6705 10.7453 59.9999 7.3049 59.9999H0.996653L0.987305 0.814872H5.21955C10.3141 0.814872 15.1061 2.78216 18.712 6.36051C22.3172 9.93501 24.2935 14.6875 24.2935 19.7394ZM15.6911 9.35278C12.9097 6.59541 9.20914 5.07011 5.27953 5.05195V34.4291C9.20914 34.4109 12.9097 32.8853 15.6911 30.129C18.4912 27.3562 20.0242 23.6654 20.0242 19.7394C20.0242 15.8179 18.4912 12.1299 15.6911 9.35278ZM5.27953 55.7652H7.30022C12.0485 55.7652 15.9119 51.9334 15.9119 47.2234C15.9119 44.9412 15.0184 42.7978 13.3931 41.1805C11.765 39.5698 9.585 38.6843 7.28231 38.6843C7.28231 38.6843 5.62929 38.6751 5.27953 38.6751V55.7652Z" 
                                    fill="black"
                                />
                            </svg>
                        </a>
                        <div 
                            class="collapse navbar-collapse" 
                            id="navbarNav"
                            >
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        Features
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="">
                                        Disabled
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-inline">
                            <svg
                                width="30"
                                height="30"
                                className="iconOne"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg
                                width="30"
                                height="30"
                                className="iconTwo"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>
                <section id="options">
                    <div className="container">
                        <div className="row container-perso">
                            <div className="col-6 col-sm-2 my-5">
                                <div className="card card-active">
                                    <div className="col-12 col-sm-12">
                                        <img className="img-active" src={imgOne} alt="imgOne" />
                                    </div>
                                    <div className="col-12 col-sm-12 p-4 text-center">
                                        ALL HEADPHONES
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-2 my-5">
                                <div className="card">
                                    <div className="col-12 col-sm-12">
                                        <img className="img-inactive" src={imgTwo} alt="imgTwo" />
                                    </div>
                                    <div className="col-12 col-sm-12 p-4 text-center">
                                        OVER-EAR
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-2 my-5">
                                <div className="card">
                                    <div className="col-12 col-sm-12">
                                        <img className="img-inactive" src={imgThree} alt="imgThree" />
                                    </div>
                                    <div className="col-12 col-sm-12 p-4 text-center">
                                        EARPHONES
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-2 my-5">
                                <div className="card">
                                    <div className="col-12 col-sm-12">
                                        <img className="img-inactive" src={imgFour} alt="imgFour" />
                                    </div>
                                    <div className="col-12 col-sm-12 p-4 text-center">
                                        NOISE-CANCELLING
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}