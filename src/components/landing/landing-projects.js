import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../card.css'
import 'swiper/css';

export class LandingProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container container sixteen wide mobile sixteen wide tablet sixteen wide computer column">
            <h1 className="flasty">Personal projects examples</h1>
            <Swiper spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}  className="container">
                <SwiperSlide className="card">
                    <img src="\images\perlin-Interface.png" alt="1 project" className="card-img" />
                    <div className="card-title">Procedural-Generaion</div>
                    <div className="card-stack">C#, WPF</div>
                    <div className="card-description">
                        Repository contains an implementation of Perlin Noise generation.
                    </div>
                    <a href="https://github.com/RedRad1sh/Procedural-Generaion" className="card-project-link">ТЫК</a>
                </SwiperSlide>
                <SwiperSlide className="card">
                    <img src="" alt="1 project" className="card-img" />
                    <div className="card-title">Chat</div>
                    <div className="card-stack">React, Java/Spring, Redis</div>
                    <div className="card-description">
                        Simple chat implementation. Has authorization, general chat and direct messages
                        Backend - Spring/Jpa/Webflux.
                        Frontent - React + MaterialUI
                    </div>
                    <a href="#" className="card-project-link">ТЫК</a>
                </SwiperSlide>
                <SwiperSlide className="card">
                    <img src="/images/chat-project.png" alt="1 project" className="card-img" />
                    <div className="card-title">Chat on Reactive Stack</div>
                    <div className="card-stack">React, Spring/Jpa/Webflux, Redis</div>
                    <div className="card-description">
                        Simple chat implementation. Has authorization, general chat and direct messages
                    </div>
                    <a href="https://github.com/RedRad1sh/react-front-redis-chat/tree/master" className="card-project-link">ТЫК</a>
                </SwiperSlide>
                <SwiperSlide className="card">
                    <img src="/images/chat-project.png" alt="1 project" className="card-img" />
                    <div className="card-title">Chat on Reactive Stack</div>
                    <div className="card-stack">React, Spring/Jpa/Webflux, Redis</div>
                    <div className="card-description">
                        Simple chat implementation. Has authorization, general chat and direct messages
                    </div>
                    <a href="https://github.com/RedRad1sh/react-front-redis-chat/tree/master" className="card-project-link">ТЫК</a>
                </SwiperSlide>
                <SwiperSlide className="card">
                    <img src="/images/chat-project.png" alt="1 project" className="card-img" />
                    <div className="card-title">Chat on Reactive Stack</div>
                    <div className="card-stack">React, Spring/Jpa/Webflux, Redis</div>
                    <div className="card-description">
                        Simple chat implementation. Has authorization, general chat and direct messages
                    </div>
                    <a href="https://github.com/RedRad1sh/react-front-redis-chat/tree/master" className="card-project-link">ТЫК</a>
                </SwiperSlide>
            </Swiper>
        </div>
    }
}