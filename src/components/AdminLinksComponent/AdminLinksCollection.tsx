import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class AdminLinksCollection extends Component {
  render() {
    // const {} = this.state.store

    const AdminLinks = ({ to, activeOnlyWhenExact, children }: any) => {
      return (
        <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => (
            <div className="">
              <Link to={to} className={match ? "active" : "adminLink"}>
                {children}
              </Link>
            </div>
          )}
        />
      );
    };
    return (
      <div className="appDashboardLeftSub">
        <div className="dashboardLeftBrand">
          <Link to="/dashboard">
            <div className="dashboardLeftBrandFlex">
              <div className="">
                <img src="/assets/img/logo.png" alt="" />
                <span className="ml-2">Mountain Lead</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="dashboardLeftBrandSubFlex">
          <div className="">
            <div className="dashboardLeftBrandSubFlex1">
              <div className="">
                <i className="icon icon-66dashboardLinkIcon"></i>
              </div>
              <div className="ml-2">
                <p className="dashboardLeftBrandSubTitle mb-0">Бюджет</p>
                <p className="dashboardLeftBrandSubText mb-0">240 000 ₽</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="dashboardLeftBrandSubFlex1 mt-2">
              <div className="">
                <i className="icon icon-hand"></i>
              </div>
              <div className="ml-2">
                <p className="dashboardLeftBrandSubTitle mb-0">Холд</p>
                <p className="dashboardLeftBrandSubText mb-0">16 500 ₽</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardLeftLinksCollection">
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-1dashboardLinkIcon" />
              </div>
              <div className="pt-1">Главная</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/offers">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-2dashboardLinkIcon" />
              </div>
              <div className="">Офферы</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/mystreams">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-3dashboardLinkIcon" />
              </div>
              <div className="">Мои потоки</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/creatives">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-4dashboardLinkIcon" />
              </div>
              <div className="">Креативы</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/mydomains">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-5dashboardLinkIcon" />
              </div>
              <div className="">Мои домены</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/finance">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-6dashboardLinkIcon" />
              </div>
              <div className="">Финансы</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/statistics">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-7dashboardLinkIcon" />
              </div>
              <div className="">Статистика</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/instruments">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-8dashboardLinkIcon" />
              </div>
              <div className="">Инструменты</div>
            </div>
          </AdminLinks>
          <AdminLinks activeOnlyWhenExact={true} to="/dashboard/newapplication">
            <div className="adminLinksFlex">
              <div className="">
                <i className="mr-2 icon icon-9dashboardLinkIcon" />
              </div>
              <div className="">Новая заявка</div>
            </div>
          </AdminLinks>

          <div className="dashboardLeftFooterFlexMain pl-3">
            <p className="title">Дополнительно</p>
            <div className="">
              <Link to="/help" className="dashboardLeftFooterLinks">
                <div className="dashboardLeftFooterFlex">
                  <div className="">
                    <i className="icon icon-help"></i>
                  </div>
                  <div className="ml-2">
                    <p className="dashboardLeftBrandSubTitle mb-0">Помощь</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="">
              <Link to="/api" className="dashboardLeftFooterLinks">
                <div className="dashboardLeftFooterFlex">
                  <div className="">
                    <i className="icon icon-api"></i>
                  </div>
                  <div className="ml-2">
                    <p className="dashboardLeftBrandSubTitle mb-0">API</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLinksCollection;
