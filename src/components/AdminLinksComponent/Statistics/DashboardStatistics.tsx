import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Card, CardBody, Col, Row} from "reactstrap";
import './index.scss'

class DashboardStatistics extends Component {
    render() {
        return (
            <div className="dashboardStatisticsSection">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/statistics">Статистика</Link></li>
                    </ul>
                </div>
                <div className="dashboardMainTitleSection">
                    <div className="search-offers">
                        <div className="d-flex flex-wrap">
                            <div className="col-lg-9 col-xs-12">
                                <div className="d-flex align-items-center flex-wrap h-100">
                                    <select name="" id="">
                                        <option value="">Регион</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Направление</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Сценарии</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Инструменты</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">Выплаты</option>
                                    </select>
                                    <span>
                                        Холд 24 часа
                                    </span>
                                    <div className="switchToggle">
                                        <input type="checkbox" id="switch"/>
                                            <label htmlFor="switch">Toggle</label> &nbsp;
                                    </div>
                                    <img src="/assets/img/refresh2.svg" style={{cursor: "pointer"}} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Row className="m-0 dashboardStatisticsMain">
                    <Col md={12}>
                        <Card className="dashboardStatisticsMainCard">
                            <CardBody>
                                <p className="statisticsMainTitle mb-0">Нужны данные</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardStatistics;