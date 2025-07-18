import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../card.css'
import 'swiper/css';
import { ProjectsApiControllerApi } from "../../server-api/index"
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Divider, Header, Icon } from 'semantic-ui-react'

export class LandingProjects extends React.Component {
    constructor(props) {
        super(props);
        this.projects = []
    }


    createProject(project) {
        return <SwiperSlide key={project.id} className="card">
            <img src={project.image} alt="1 project" className="card-img" />
            <div className="card-title">{project.name}</div>
            <div className="card-stack">{project.techStack}</div>
            <div className="card-description">
                {project.description}
            </div>
            <a href={project.url} className="card-project-link">ИСХОДНЫЙ КОД</a>
        </SwiperSlide>;
    }

    callback = (error, data, response) => {
        if (data) {
            console.log(data);
            this.projects = data.map(
                project => this.createProject(project)
            )
        } else {
            console.log('API called UNsuccessfully.');
        }
    };


    componentDidMount() {
        new ProjectsApiControllerApi().getAll3(this.callback)
    }

    render() {
        return <div className="container container sixteen wide mobile sixteen wide tablet sixteen wide computer column">
            <Divider horizontal className="container-header">
                <Header inverted as='h1' className="flasty">
                    <Icon name='bar chart' />
                    Personal projects examples
                </Header>
            </Divider>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={60}
                navigation
                pagination={{ clickable: true }}
                slidesPerView='auto'
                effect="coverflow"
                centeredSlides={true}
                loop={false}
                slideToClickedSlide={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="container">
                {this.projects}
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