import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Card, CardBody, Col, Collapse, Row, TabPane} from "reactstrap";
import './index.scss'


interface initialState {
    activeCollapse: any
}

class DashboardMyDomains extends Component {

    state: initialState;

    constructor(props: any) {
        super(props);
        this.state = {
            activeCollapse: undefined,
        };
    }

    render() {
        const dashboardCreativesData = [
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
            {
                domain: "Test.ru",
                dateAdd: "31.08.2020",
                flow: "Не связан",
            },
        ];


        const changeActiveCollapse = (index: any) => {
            this.setState({activeCollapse: this.state.activeCollapse === index ? -1 : index})
        };

        const domainFaqs = [
            {
                title: "Установка A-записи в DNS-настройках домена\n",
                description: "Чтобы домен ссылался на наш сервер нужно отредактировать A-запись в его DNS-настройках. Необходимо\n" +
                    "установить ip-адрес нашего сервера (95.217.137.78) в значение A-записей для домена и его поддомена\n" +
                    "\"www\". Например, так.\n" +
                    "Общую справку по настройкам DNS можно посмотреть тут.\n" +
                    "Изменения A-записи может занимать до двух дней, но, обычно, примерно через 2-4 часа изменения\n" +
                    "вступают в силу.\n" +
                    "Проверить значение A-записи можно тут.\n" +
                    "Если у вашего домена отсутствует A-запись, то мы не сможем прикрепить его к лендингу. Наличие\n" +
                    "A-записи - это показатель реальности существования домена.\n" +
                    "Важно: AAAA-запись необходимо удалить! Так как наш сервер на данном этапе не поддерживает IPv6.\n" +
                    "Если этого не сделать, то возникнут проблемы с получением SSL-сертификата.",
            },
            {
                title: "Подключение SSL-сертификата\n",
                description: "Чтобы домен ссылался на наш сервер нужно отредактировать A-запись в его DNS-настройках. Необходимо\n" +
                    "установить ip-адрес нашего сервера (95.217.137.78) в значение A-записей для домена и его поддомена\n" +
                    "\"www\". Например, так.\n" +
                    "Общую справку по настройкам DNS можно посмотреть тут.\n" +
                    "Изменения A-записи может занимать до двух дней, но, обычно, примерно через 2-4 часа изменения\n" +
                    "вступают в силу.\n" +
                    "Проверить значение A-записи можно тут.\n" +
                    "Если у вашего домена отсутствует A-запись, то мы не сможем прикрепить его к лендингу. Наличие\n" +
                    "A-записи - это показатель реальности существования домена.\n" +
                    "Важно: AAAA-запись необходимо удалить! Так как наш сервер на данном этапе не поддерживает IPv6.\n" +
                    "Если этого не сделать, то возникнут проблемы с получением SSL-сертификата.",
            },
            {
                title: "Часто задаваемый вопрос №3",
                description: "Чтобы домен ссылался на наш сервер нужно отредактировать A-запись в его DNS-настройках. Необходимо\n" +
                    "установить ip-адрес нашего сервера (95.217.137.78) в значение A-записей для домена и его поддомена\n" +
                    "\"www\". Например, так.\n" +
                    "Общую справку по настройкам DNS можно посмотреть тут.\n" +
                    "Изменения A-записи может занимать до двух дней, но, обычно, примерно через 2-4 часа изменения\n" +
                    "вступают в силу.\n" +
                    "Проверить значение A-записи можно тут.\n" +
                    "Если у вашего домена отсутствует A-запись, то мы не сможем прикрепить его к лендингу. Наличие\n" +
                    "A-записи - это показатель реальности существования домена.\n" +
                    "Важно: AAAA-запись необходимо удалить! Так как наш сервер на данном этапе не поддерживает IPv6.\n" +
                    "Если этого не сделать, то возникнут проблемы с получением SSL-сертификата.",
            },
        ];
        return (
            <div className="dashboardMyDomainsSection mb-5">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/mydomains"> Мои домены</Link></li>
                    </ul>
                </div>


                <Row className="m-0">
                    <Col md={12} lg={12} xl={8} className="dashboardMainFormSectionCol1">
                        <div className="streamsTableDomains">
                            <div className="streamsTableInfo my-3 d-flex justify-content-between align-items-center ">
                                <div className="streamsTableSub">
                                    <div className="title">
                                        Мои домены
                                    </div>
                                    <div className="number ml-2">
                                        <div className="numberSub">24</div>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="site-button">Добавить домен</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Домен</th>
                                        <th>Дата добавления</th>
                                        <th>Поток</th>
                                        <th>Статус</th>
                                        <th>Действия</th>
                                    </tr>
                                    </thead>
                                    <tbody className="table-responsive-Body">
                                    {dashboardCreativesData.map(items =>
                                        <tr>
                                            <td>{items.domain}</td>
                                            <td>{items.dateAdd}</td>
                                            <td>{items.flow}</td>
                                            <td>
                                                <div
                                                    className="d-flex justify-content-between align-items-center h-100 w-100 mb-1">
                                                    <div className="">
                                                        <span>
                                                            <img src="/assets/svg/statusX.svg" alt=""/>
                                                        </span>
                                                        <span className="ml-2">
                                                             A-запись неверная
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <img src="/assets/svg/statusReturn.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-between align-items-center h-100 w-100 mb-1">
                                                    <div className="">
                                                        <span>
                                                            <img src="/assets/svg/statusX.svg" alt=""/>
                                                        </span>
                                                        <span className="ml-2">
                                                             Домен не припаркован
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <img src="/assets/svg/statusReturn.svg" alt=""/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-between align-items-center h-100 w-100 mb-1">
                                                    <div className="">
                                                        <span>
                                                            <img src="/assets/svg/statusCheck.svg" alt=""/>
                                                        </span>
                                                        <span className="ml-2">
                                                             SSL-сертификат (https) не подключен
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <img src="/assets/svg/statusReturn.svg" alt=""/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="actions">
                                                <img src="/assets/img/basket.svg" alt=""/>
                                            </td>
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
                                        В личном кабинете вы можете подключить собственное доменное имя к любому потоку
                                        с лендингом. <br/><br/>
                                        Поддерживаются домены любого уровня на любом языке, например: site.com,
                                        promo.site.com, сайт.рф и т.п. <br/><br/>
                                        Вы можете приобрести домен у любого регистратора или реселлера.
                                    </p>
                                </div>
                            </CardBody>

                            <div className="faqCollapseMAIN">
                                {domainFaqs.map((items, index) => (
                                    <TabPane tabId={index}>
                                        <div
                                            className={`faqCollapse col-lg-12 col-12 px-0 ${this.state.activeCollapse === index ? 'active-line' : ''}`}>
                                            <div className="collapse-header"
                                                 onClick={() => changeActiveCollapse(index)}>
                                                <div
                                                    className={`faqCollapseFlex d-flex ${this.state.activeCollapse === index ? 'active-flex' : 'non-active-flex'}`}>
                                                    <div className="w-75">
                                                        <p className="titleFaq mb-0">
                                                            {items.title}
                                                        </p>
                                                    </div>
                                                    <div className="w-25 text-right ml-2">
                                                            <span style={{transform: "translate(0px,-1px)"}}>
                                                                {this.state.activeCollapse !== index ?
                                                                    <span className="plusMinus">+</span> : <span className="plusMinus">-</span>}
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Collapse isOpen={this.state.activeCollapse === index}>
                                                <Row>
                                                    <Col md={12}>
                                                        <p className="collapseTextFaq">{items.description}</p>
                                                    </Col>
                                                </Row>
                                            </Collapse>
                                        </div>
                                    </TabPane>
                                ))}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardMyDomains;