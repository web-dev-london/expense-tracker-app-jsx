import Chart from 'react-apexcharts';
import { PropTypes } from 'prop-types';


const options = {
    labels: ['Income', 'Expense'],
    colors: ['#213ebf', '#fd5e53'],
    chart: {
        width: '50px',
    },
    states: {
        hover: {
            filter: {
                type: 'none',
            },
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: {
        mode: null
    },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                }
            }
        }
    },
    fill: {
        color: ['#213ebf', '#fd5e53'],
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            backgroundColor: '#000'
        }
    }
}

const ChartView = ({ expense = 0, income = 0 }) => {
    return (
        <>
            <Chart options={options}
                series={[income, expense]}
                type='pie'
                width={'100%'}
                height={'100%'}
            />
        </>
    );
}

ChartView.propTypes = {
    expense: PropTypes.number,
    income: PropTypes.number,
}
export default ChartView;