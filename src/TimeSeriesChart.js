import React from "react";

//import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';
import "./TimeSeriesChart.css";
import _ from "lodash";

import MetricsGraphics from "react-metrics-graphics";

export default class TimeSeriesChart extends React.Component {

    determineColor(data) {
        if (data) {
            const firstElement = data[0].value;
            const lastElement = data[data.length - 1].value;
            return ((firstElement > lastElement) ? ("#00e676") : ("#ff5252"));
        }
    }
    //
    // componentDidMount() {
    //     console.log("componentDidMount TimeSeriesChart", this.props.data);
    //     MG.data_graphic({
    //         linked: true,
    //         full_width: true,
    //         height: 200,
    //         left: 10,
    //         top: 30,
    //         bottom: 10,
    //         data: this.props.data,
    //         x_axis: false,
    //         y_axis: false,
    //         colors: this.determineColor(this.props.data),
    //         x_accessor: "date",
    //         y_accessor: "value",
    //         target: this.target
    //     });
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !_.isEqual(this.props.data, nextProps.data);
    }

    render() {
        const timeSeriesData = this.props.data;
        const timeSeriesColor = this.determineColor(timeSeriesData);
        if (this.props.data) {
            console.log(JSON.stringify(this.props.data));
            return (
                <div className="col s12 m6 l4">
                    <div className="card-panel black white-text thin">
                        <h6 className="left">{this.props.chartName}</h6>
                        <h6 className="right green-text text-darken-1">{this.props.data ? this.props.data[0].value : undefined}</h6>
                        <MetricsGraphics
                            linked={true}
                            full_width={true}
                            height={150}
                            left={10}
                            top={30}
                            bottom={10}
                            data={timeSeriesData ? timeSeriesData : undefined}
                            x_axis={false}
                            y_axis={false}
                            colors={timeSeriesColor ? timeSeriesColor : undefined}
                            x_accessor="date"
                            y_accessor="value"
                            axes_not_compact={false}
                        />
                    </div>
                </div>
            )
        }
        return (<div></div>)
        // console.log("render TimeSeriesChart", this.props.data);
        // return <div ref={(ref) => this.target = ref} />;

    }
}