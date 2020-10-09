import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import './index.scss'

class DashboardInstruments extends Component {
    render() {
        const instrumentsData = [
            {
                img: <img src="/assets/img/Seo.png" alt=""/>,
                title: "Конструктор форм",
                description: "Создайте и настройте под себя форму обратной связи с помощью инструмента\n" +
                    "                                        конструктор\n" +
                    "                                        форм. Разместите ее на своём WEB ресурсе и начните зарабатывать на лидах уже\n" +
                    "                                        сегодня. Это просто.",
                btn: "Создать поток",
            },
            {
                img: <img src="/assets/img/landing.png" alt=""/>,
                title: "Лендинги",
                description: "Мощный инструмент для лидогенерации. Библиотека уже готовых решений, для\n" +
                    "быстрого\n" +
                    "тестирования идей и новых направлений. Настройте посадочную страницу за 5 минут.",
                btn: "Создать лендинг",
            },
            {
                img: <img src="/assets/img/analytics.png" alt=""/>,
                title: "Сайт в системе",
                description: "Подключите свой собственный сайт \n" +
                    "к нашей партнерской сети для передачи лидов и сбора\n" +
                    "статистики.",
                btn: "Создать поток",
            },
            {
                img: <img src="/assets/img/customer.png" alt=""/>,
                title: "Ручная передача лидов",
                description: "Передавайте ваши лиды напрямую через интерфейс личного кабинета. Этот инструмент\n" +
                    " позволит передать всю необходимую информацию о лиде и посмотреть статистику по\n" +
                    " конверсии.",
                btn: "Создать ЛИД",
            },
        ];
        return (
            <div className="dashboardInstrumentsSection">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/instruments">Инструменты</Link></li>
                    </ul>
                </div>
                <div className="dashboardMainTitleSection">
                    <Row className="m-0">
                        <Col md={12}>
                            <p className="my-0 dashboardMainTitle">Инструменты</p>
                        </Col>
                    </Row>
                </div>
                <div className="row m-0">
                    <div className="col-lg-12">
                        <div className="streams instruments mt-3">
                            {instrumentsData.map(items=>
                                <div className="ins d-flex flex-column align-items-center justify-content-between">
                                    <div>
                                        {items.img}
                                        <h3>{items.title}</h3>
                                        <p>{items.description}</p>
                                    </div>
                                    <button className="site-button">
                                        {items.btn}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardInstruments;