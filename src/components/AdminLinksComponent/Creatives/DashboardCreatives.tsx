import React, {Component} from 'react';
import './index.scss'
import {Link} from "react-router-dom";
import Gallery from "./Gallery";

class DashboardCreatives extends Component {

    render() {

        const creativeGridData = [
            {},
        ];


        return (
            <div className="dashboardCreativesSection">
                <div className="d-flex w-100 flex-wrap">
                    <ul className="breadcrumbs d-flex w-100">
                        <li><Link to="/dashboard">Главная</Link></li>
                        <li><Link to="/dashboard/creatives">Креативы</Link></li>
                    </ul>
                </div>

                <div className="dashboardCreativesMain mt-3">
                    <div className="creativeMainHeaderFlex">
                        <div className="creativeMainHeaderFlexSUB">
                            <form>
                                <div className="creativeMainHeaderFlex2">
                                    <div className="item">
                                        <p className="title mb-0">Выбор креатива</p>
                                    </div>
                                    <div className="item">
                                        <select name="" id="">
                                            <option value="">Оффер</option>
                                        </select>
                                    </div>
                                    <div className="item">
                                        <select name="" id="">
                                            <option value="">Тип</option>
                                        </select>
                                    </div>
                                    <div className="item">
                                        <select name="" id="">
                                            <option value="">Размер</option>
                                        </select>
                                    </div>
                                    <div className="item">
                                        <select name="" id="">
                                            <option value="">Соц. сети</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="">
                            <button className="site-button">создать креатив</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Gallery/>
                    </div>
                </div>

            </div>
        );
    }
}

export default DashboardCreatives;