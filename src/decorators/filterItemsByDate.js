import React, { Component } from 'react'
import moment from 'moment'
import { DateUtils } from "react-day-picker"

export default (CustomComponent) => class DecoratedComponent extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);

        this.setState(range);
    }

    selectDays = (day) => {
        const { from, to } = this.state;

        return DateUtils.isDayInRange(day, { from, to });
    }

    filter = (items) => {
        const self = this;

        return items.filter(function(item) {
            const timestamp = parseInt(item.timestamp, 10);
            const { from, to } = self.state;

            const fromTimestamp = moment(from).valueOf();
            const toTimestamp = moment(to).valueOf();

            if (from && to) {
                return timestamp >= fromTimestamp &&  timestamp <= toTimestamp;
            }
            else {
                return items;
            }
        });
    }

    render() {
        return <CustomComponent {...this.props}
            filter = { this.filter }
            selectDays = { this.selectDays }
            handleDayClick = { this.handleDayClick } />
    }
}