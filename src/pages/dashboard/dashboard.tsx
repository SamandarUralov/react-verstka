import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import AdminRightSideHeader from "../../components/AdminLinksComponent/AdminRightSideHeader";
import AdminLinksCollection from "../../components/AdminLinksComponent/AdminLinksCollection";
import {Route, Switch} from "react-router-dom";
import DashboardMain from "../../components/AdminLinksComponent/Dashboard/DashboardMain";
import DashboardOffers from "../../components/AdminLinksComponent/Offers/DashboardOffers";
import DashboardCreatives from "../../components/AdminLinksComponent/Creatives/DashboardCreatives";
import DashboardMyDomains from "../../components/AdminLinksComponent/MyDomains/DashboardMyDomains";
import DashboardFinance from "../../components/AdminLinksComponent/Finance/DashboardFinance";
import DashboardStatistics from "../../components/AdminLinksComponent/Statistics/DashboardStatistics";
import DashboardInstruments from "../../components/AdminLinksComponent/Instruments/DashboardInstruments";
import DashboardNewApplication from "../../components/AdminLinksComponent/NewApplication/DashboardNewApplication";
import DashboardMyStreams from "../../components/AdminLinksComponent/MyStreams/DashboardMyStreams";


class Dashboard extends Component {
    render() {
        return (
            <div className="app-dashboard">
                {/*{*/}
                {/*    loading ? <Loading/> : ""*/}
                {/*}*/}
                <Row className="m-0">
                    <Col sm={12} md={12} lg={3} xl={2} className="appDashboardLeft px-0">
                        <AdminLinksCollection/>
                    </Col>
                    <Col sm={12} md={12} lg={9} xl={10} className="appDashboardRight px-0">
                        <div className="appDashboardRightSub">
                            <div className="">
                                <AdminRightSideHeader/>
                            </div>
                            <div className="appDashboardRightLinks">
                                <Switch>
                                    <Route exact path="/dashboard" render={(props) => <DashboardMain/>}/>
                                    <Route path="/dashboard/offers" render={(props) => <DashboardOffers/>}/>
                                    <Route path="/dashboard/mystreams" render={(props) => <DashboardMyStreams/>}/>
                                    <Route path="/dashboard/creatives" render={(props) => <DashboardCreatives/>}/>
                                    <Route path="/dashboard/mydomains" render={(props) => <DashboardMyDomains/>}/>
                                    <Route path="/dashboard/finance" render={(props) => <DashboardFinance/>}/>
                                    <Route path="/dashboard/statistics" render={(props) => <DashboardStatistics/>}/>
                                    <Route path="/dashboard/instruments" render={(props) => <DashboardInstruments/>}/>
                                    <Route path="/dashboard/newapplication" render={(props) => <DashboardNewApplication/>}/>
                                </Switch>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;