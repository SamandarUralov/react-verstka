import React, {Component} from 'react';

class DashboardCards extends Component {
    render() {
        const dashboardGridCardsData = [
            {
                img: <img src="/assets/img/hands-plumber1.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
            {
                img: <img src="/assets/img/hands-plumber2.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
            {
                img: <img src="/assets/img/hands-plumber3.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
            {
                img: <img src="/assets/img/hands-plumber4.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
            {
                img: <img src="/assets/img/hands-plumber5.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
            {
                img: <img src="/assets/img/hands-plumber6.png" className="gridCardItemsImg img-fluid" alt=""/>,
                title: "Новый оффер в разделе\n" +
                    "“Ремонт бытовой техники”",
                date: "01.09.2020",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            },
        ];
        return (
            <div>

                <div className="dashboardGridCards">
                    {dashboardGridCardsData.map(items =>
                        <div className="dashboardGridCardItems h-100">
                            <div className="m-0 gridCardItemsRow h-100">
                                <div className="gridCardItemsCol1 p-0">
                                    {items.img}
                                </div>

                                <div className="gridCardItemsCol2 p-0 h-100">
                                    <div className="gridCardItemsFlexInfos">
                                        <div className="">
                                            <p className="title mb-0">
                                                {items.title}
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="date mb-0">
                                                {items.date}
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="description mb-0">
                                                {items.description}
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <button className="site-button mt-2">Подробно</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default DashboardCards;