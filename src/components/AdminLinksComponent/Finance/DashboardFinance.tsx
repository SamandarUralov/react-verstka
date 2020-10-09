import React, {Component} from 'react';
import {Card, CardBody, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import './index.scss'

class DashboardFinance extends Component {
    render() {
        const dashboardFinanceData = [
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "16",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
            {
                way: "Компьютерная помощь",
                balance: "15 500 ₽",
                hold: "1 500 ₽",
                offers: "15",
                lids: "30 000",
                date: "04/28/2018",
            },
        ];

        return (
            <div className="dashboardFinanceSection mb-5">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/finance">Финансы</Link></li>
                    </ul>
                </div>


                <Row className="m-0">
                    <Col md={12} lg={12} xl={8} className="dashboardMainFormSectionCol1">
                        <div className="coloured-blocks d-flex justify-content-between flex-wrap">
                            <div className="red-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                            <div className="blue-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                            <div className="green-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                            <div className="orange-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                            <div className="darkBlue-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                            <div className="darkGreen-block dash-block">
                                <p className="d-flex align-items-center">
                                    <img className="float-left" src="/assets/img/red-img.png" alt=""/>
                                    <span className="title">Компьютерная помощь</span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/koshelok3.svg" alt=""/>
                                    Баланс: &nbsp; <span className="number"> 15 500 ₽ </span>
                                </p>
                                <p className="d-flex align-items-center text">
                                    <img src="/assets/img/hand-2.svg" alt=""/>
                                    Холд: &nbsp; <span className="number"> 1 500 ₽</span>
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <p className="finance-date-flex my-3 d-flex  align-items-center ">
									<span>
										<input className="finance-date" type="text"
                                               placeholder="23.08.2020 - 30.28.2020"/>
									</span> &nbsp;
                                <button className="site-button">Применить</button>
                            </p>
                        </div>
                        <div className="streamsTableDomains">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Направление</th>
                                        <th>Баланс</th>
                                        <th>Холд</th>
                                        <th>Офферы</th>
                                        <th>Лиды</th>
                                        <th>Дата</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-responsive-Body">
                                    {dashboardFinanceData.map(items =>
                                        <tr>
                                            <td>{items.way}</td>
                                            <td>{items.balance}</td>
                                            <td>{items.hold}</td>
                                            <td>{items.offers}</td>
                                            <td>{items.lids}</td>
                                            <td>{items.date}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={12} xl={4} className="dashboardMainFormSectionCol2 mt-4">
                        <Card className="formSectionCardInfo">
                            <CardBody>
                                <div className="infoTitleMain">
                                    <p className="infoTitle">
                                        <img className="mr-2" src="/assets/svg/inform.svg" alt=""/>
                                        Информация
                                    </p>
                                </div>
                                <div className="infoDescMain">
                                    <p className="infoDesc mb-0">
                                        В этом разделе вы можете посмотреть баланс и холд отдельно по каждому
                                        направлению и посмотреть статистику по финансам за разные временные промежутки.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardFinance;