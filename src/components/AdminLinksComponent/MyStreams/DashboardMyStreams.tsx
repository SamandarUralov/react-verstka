import React, {Component} from 'react';
import './index.scss'
import {Link} from "react-router-dom";
import {Col, Row} from "reactstrap";

class DashboardMyStreams extends Component {
    render() {
        const dashboardCreativesData = [
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
            {
                streamName: "Компьютерная помощь",
                ID: "4098",
                tool: "Конструктор форм",
                scenario: "Компания",
                region: "Mосква Ростов",
                phone: "+7899143335",
                links: "+https://test.ru",
                date: "30.08.2020",
                statistics: "30.08.2020",
                transitions: "Переходы",
                transitionsCount: "15 000",
                leads: "Лиды",
                leadsCount: "6 000",
                applications: "Заявки",
                applicationsCount: "4 000",
                earned: "200 000 ₽",
            },
        ];

        return (
            <div className="dashboardMyStreamsSection">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/creatives">Мои потоки</Link></li>
                    </ul>
                </div>
                <div className="dashboardMainTitleSection">
                    <div className="search-offers">
                        <div className="d-flex flex-wrap">
                            <div className="col-lg-9 col-xs-12">
                                <div className="d-flex align-items-center flex-wrap h-100">
                                    <select name="" id="">
                                        <option value="">Название потока</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Направление</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Регион</option>
                                    </select>
                                    <img src="/assets/img/refresh2.svg" style={{cursor: "pointer"}} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Row className="m-0">
                    <Col md={12}>
                        <div className="streamsTable">
                            <div className="streamsTableInfo my-3 d-flex justify-content-between align-items-center ">
                                <div className="streamsTableSub">
                                    <div className="title">
                                        Потоки
                                    </div>
                                    <div className="number ml-2">
                                        <div className="numberSub">24</div>
                                    </div>
                                    <div className="stream_archive">Архивные потоки</div>
                                </div>
                                <div className="">
                                    <button className="site-button">создать поток</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th/>
                                        <th>Название потока <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>ID <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Инструмент <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Сценарий <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Регион <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Телефон<img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Ссылка <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Дата <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Статистика <img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Заработано<img src="/assets/img/sort.svg" alt=""/></th>
                                        <th>Действия<img src="/assets/img/sort.svg" alt=""/></th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-responsive-Body">
                                    {dashboardCreativesData.map(items=>
                                        <tr>
                                            <td>
                                                <img src="/assets/img/desktop-image.svg" alt=""/>
                                            </td>
                                            <td>{items.streamName}</td>
                                            <td>{items.ID}</td>
                                            <td>{items.tool}</td>
                                            <td>{items.scenario}</td>
                                            <td>{items.region}</td>
                                            <td>{items.phone}</td>
                                            <td>{items.links}</td>
                                            <td>{items.date}</td>
                                            <td className="statistics">
                                                <div className="d-flex">
                                                    <div className="">
                                                        <p className="mb-0">{items.transitionsCount}</p>
                                                        <p className="mb-0">
                                                            <Link to="">{items.transitions}</Link>
                                                        </p>
                                                    </div>
                                                    <div className="mx-2">
                                                        <p className="mb-0">{items.leadsCount}</p>
                                                        <p className="mb-0">
                                                            <Link to="">{items.leads}</Link>
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0">{items.applicationsCount}</p>
                                                        <p className="mb-0">
                                                            <Link to="">{items.applications}</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="bold">
                                                {items.earned}
                                            </td>
                                            <td className="actions">
                                                <div className="d-flex">
                                                    <div className="">
                                                        <img src="/assets/img/cogs.svg" alt=""/>
                                                    </div>
                                                    <div className="mx-2">
                                                        <img src="/assets/img/papers.svg" alt=""/>
                                                    </div>
                                                    <div className="">
                                                        <img src="/assets/img/basket.svg" alt=""/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardMyStreams;