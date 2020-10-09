import React, {Component} from 'react';
import './index.scss'

class DashboardCardStatistics extends Component {
    render() {
        return (
            <div className="dashboardCardStatistics">
                <div className="w-100 d-flex justify-content-between flex-wrap">
                    <div className="red-block dash-block">
                        <span className="title">Трафик</span>
                        <img className="float-right" src="/assets/img/trafik.svg" alt=""/>
                        <br/>
                        <span className="number">15 697</span><br/><br/><br/>
                        <p className="mb-0"><img src="/assets/svg/ArrowDown.svg" alt=""/> 12% С прошлого месяца</p>
                    </div>
                    <div className="blue-block dash-block">
                        <span className="title">Лиды</span>
                        <img className="float-right" src="/assets/img/target.svg" alt=""/>
                        <br/>
                        <span className="number">8 1342</span><br/><br/><br/>
                        <p className="mb-0"><img src="/assets/svg/ArrowUp.svg" alt=""/> 12% С прошлого месяца</p>
                    </div>
                    <div className="green-block dash-block">
                        <span className="title">Заявки</span>
                        <img className="float-right" src="/assets/img/add-image.svg" alt=""/>
                        <br/>
                        <span className="number">2 477</span><br/><br/><br/>
                        <p className="mb-0"><img src="/assets/svg/ArrowUp.svg" alt=""/> 31% С прошлого месяца</p>
                    </div>
                    <div className="orange-block dash-block">
                        <span className="title">Общий доход</span>
                        <img className="float-right" src="/assets/img/money.svg" alt=""/>
                        <br/>
                        <span className="number">356 400 ₽</span><br/><br/><br/>
                        <p className="mb-0"><img src="/assets/svg/ArrowUp.svg" alt=""/> 20% С прошлого месяца</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardCardStatistics;