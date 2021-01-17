import * as React from "react";
import TimeSeriesChart from "./TimeSeriesChart";
const axios = require('axios').default;

export default class Indicators extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            GDP: undefined,
            M2V: undefined,
            CPIAUCSL: undefined,
            PAYEMS: undefined,
            ICSA: undefined,
            INDPRO: undefined,
            SP500: undefined
        };
    }

    getFredData(seriesID, startDate) {
        axios.get(`https://www.quandl.com/api/v3/datasets/FRED/${seriesID}/data.json?api_key=X9v_wz-AZTwfJGZzTL5B&start_date=2018-03-01`)
            .then(res => {
                const formattedData = this.formatData(res.data.dataset_data.data);
                this.setState({[seriesID]: formattedData});
            });
    }

    componentDidMount() {
        this.getFredData("GDP");
        this.getFredData("M2V");
        this.getFredData("CPIAUCSL");
        this.getFredData("PAYEMS");
        this.getFredData("ICSA");
        this.getFredData("INDPRO");
        this.getFredData("SP500");
    }

    formatData(rawData) {
        let data = [];
        rawData.forEach(function (element) {
            let newObject = {
                'date': new Date(element[0]),
                'value': element[1]
            };
            data.push(newObject);
        });
        return data;
    }

    render() {
        return(
            <div>
                <div className="row">
                    <TimeSeriesChart data={this.state.GDP} chartName={"GDP"}/>
                    <TimeSeriesChart data={this.state.M2V} chartName={"M2V"}/>
                    <TimeSeriesChart data={this.state.SP500} chartName={"SP500"}/>
                </div>
                <div className="row">
                    <TimeSeriesChart data={this.state.PAYEMS} chartName={"Employment"}/>
                    <TimeSeriesChart data={this.state.ICSA} chartName={"ICSA"}/>
                    <TimeSeriesChart data={this.state.INDPRO} chartName={"INDPRO"}/>
                </div>
            </div>

        );
    }
}