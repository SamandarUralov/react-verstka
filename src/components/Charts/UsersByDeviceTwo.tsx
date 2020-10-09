import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    colors,
    makeStyles,
    useTheme, Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    }
}));

const UsersByDeviceTwo = ({ className, ...rest }:any) => {
    const classes = useStyles();
    const theme = useTheme();
    const indigoColor = "#4099FF";
    const orangeColor = "#F7D154";
    const redColor = "#FF5370";
    const indigo = indigoColor;
    const orange = orangeColor;
    const red = redColor;
    const data = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: [
                    indigo,
                    orange,
                    red
                ],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white
            }
        ],
        labels: ['Desktop', 'Tablet', 'Mobile']
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.default,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    const devices = [
        {
            title: 'Компьютер',
            value: 63,
            icon: <i className="icon icon-desktop"/>,
            color: indigo
        },
        {
            title: 'Планшет',
            value: 15,
            icon: <i className="icon icon-tablet"/>,
            color: orange
        },
        {
            title: 'Телефон',
            value: 22,
            icon: <i className="icon icon-mobile"/>,
            color: red
        }
    ];

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader title="" />
            <div className="userByDeviceTwoCardHeader">
                <div className="w-100">
                    <p className="userByDeviceTwoCardHeaderText mb-0">
                        Пользователи по устройствам
                    </p>
                </div>
                <div className="w-10">
                    <Button
                        endIcon={<i className="icon icon-ic_cached_24px"/>}
                        className="userByDeviceTwoCardHeaderBtn"
                    >
                    </Button>
                </div>
            </div>
            <Divider />
            <CardContent className="userByDeviceTwoCard">
                <Box height={300} position="relative">
                    <Doughnut
                        data={data}
                        options={options}
                    />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    mt={2}
                >
                    {devices.map(({
                                      color,
                                      icon: Icon,
                                      title,
                                      value
                                  }) => (
                        <Box key={title} className="px-2 pt-2" textAlign="center">
                            {Icon}
                            <p className="userByDeviceTwoPercentTitle mb-0">{title}</p>
                            <p className="userByDeviceTwoPercent mb-0" style={{ color }}>{value}%</p>
                        </Box>
                    ))}
                </Box>
            </CardContent>

            <Divider />

            <div className="userByDeviceCardBottom">
                <div className="">
                    <Button
                        endIcon={<i className="icon icon-ic_arrow_right22"/>}
                        className="userByDeviceCardBottomBtn2"
                    >
                        Последние 7 дней
                    </Button>
                </div>
                <div className="">
                    <Button
                        endIcon={<i className="icon icon-ic_arrow_right2"/>}
                        className="userByDeviceCardBottomBtn"
                    >
                        Просмотреть все
                    </Button>
                </div>
            </div>
        </Card>
    );
};

UsersByDeviceTwo.propTypes = {
    className: PropTypes.string
};

export default UsersByDeviceTwo;
