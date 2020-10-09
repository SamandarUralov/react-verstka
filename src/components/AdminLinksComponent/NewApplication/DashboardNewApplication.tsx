import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Card, CardBody, Col, Row} from "reactstrap";
import './index.scss'

class DashboardNewApplication extends Component {
    render() {
        return (
            <section className="dashboardNewApplicationSection mb-5">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/newapplication"> Стандартная заявка</Link></li>
                    </ul>
                </div>
                <div className="dashboardMainTitleSection">
                    <Row className="m-0">
                        <Col md={12}>
                            <p className="my-0 dashboardMainTitle">Стандартная заявка</p>
                        </Col>
                    </Row>
                </div>
                <div className="dashboardMainFormSection mt-3">
                    <Row className="m-0">
                        <Col md={12} lg={12} xl={8} className="dashboardMainFormSectionCol1">
                            <Card className="dashboardMainFormSectionCard">
                                <form>
                                    <div className="form-group">
                                        <div className="formGroup1">
                                            <Row>
                                                <Col md={12} lg={11} xl={11}>
                                                    <Row>
                                                        <Col md={6} className="mb-3">
                                                            <select name="" id="" className="w-100">
                                                                <option value="">Направление</option>
                                                            </select>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <select name="" id="" className="w-100">
                                                                <option value="">Оффер</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="formGroup2">
                                            <p className="formGroup2Title mb-0">Контактные данные клиента</p>
                                            <p className="formGroup2Text mb-0">
                                                Внимательно проверьте контактные данные клиента, чтобы оператор передал
                                                заявку в работу.
                                            </p>
                                            <Row>
                                                <Col md={12} lg={11} xl={11}>
                                                    <Row className="mt-4">
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Фамилия"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Имя"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Отчество"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Телефон"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <select name="" id="" className="w-100">
                                                                <option value="">Страна</option>
                                                            </select>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <select name="" id="" className="w-100">
                                                                <option value="">Город</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="formGroup2">
                                            <p className="formGroup2Title mb-0">Адрес</p>
                                            <Row>
                                                <Col md={12} lg={11} xl={11}>
                                                    <Row className="mt-4">
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Улица"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Дом"/>
                                                        </Col>
                                                        <Col md={4} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Кв / Офис"/>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="formGroup2">
                                            <p className="formGroup2Title mb-0">Время</p>
                                            <p className="formGroup2Text mb-0">
                                                Учитывайте дорожную обстановку. Рекомендуем ставить выезд в течение двух
                                                часов.
                                            </p>
                                            <Row>
                                                <Col md={12} lg={11} xl={11}>
                                                    <Row className="mt-4">
                                                        <Col md={12} className="mb-3 waitingMain">
                                                            <p className='waiting'>
                                                                <span>Клиент ждет</span>
                                                                <span><input type="date"/>&nbsp;</span>
                                                                <span>c</span>
                                                                <span>
                                                                    <input type="text" width='75px'
                                                                           placeholder='15'/>&nbsp;
                                                                </span>
                                                                <span>до</span>
                                                                <span>
                                                                    <input type="text" width='75px' placeholder='15'/>
                                                                </span>
                                                            </p>
                                                            <div
                                                                className='switchToggleMain d-flex aling-items-center warning-text align-items-center flex-wrap'>
                                                                <div className="switchToggle">
                                                                    <input type="checkbox" id="switch"/>
                                                                    <label htmlFor="switch">Toggle</label> &nbsp;
                                                                </div>
                                                                &nbsp;  Срочно  &nbsp; <span className="text-danger"> Ставьте только когда это действительно обосновано!</span>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="formGroup2">
                                            <p className="formGroup2Title mb-0">Детали заявки</p>
                                            <p className="formGroup2Text mb-0">
                                                Если вы знаете проблему клиента, опишите её. Оператор задаст меньше
                                                вопросов и быстрее назначит мастера на заявку.
                                            </p>
                                            <Row>
                                                <Col md={12} lg={11} xl={11}>
                                                    <Row className="mt-4">
                                                        <Col md={12} className="mb-3">
                                                            <textarea className="form-control"
                                                                      id="exampleFormControlTextarea1" name=""
                                                                      placeholder="Комментарий / Проблема"/>
                                                        </Col>
                                                        <Col md={5} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby=""
                                                                   placeholder="Дополнительный телефон"/>
                                                        </Col>
                                                        <Col md={7} className="mb-3">
                                                            <input type="text" className="form-control" id=""
                                                                   aria-describedby="" placeholder="Источник"/>
                                                        </Col>
                                                    </Row>
                                                    <button className="site-button">Отправить</button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </Col>
                        <Col md={12} lg={12} xl={4} className="dashboardMainFormSectionCol2">
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
                                            Для передачи заявки в ручном формате от лица компании, заполните все
                                            необходимые поля и нажмите кнопку отправить. При необходимости вы можете
                                            указать источник для дальнейшей аналитики.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default DashboardNewApplication;