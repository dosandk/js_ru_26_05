import React, { PropTypes, Component } from 'react'
import DayPicker from "react-day-picker"

import "react-day-picker/lib/style.css"

export default (props) => {
    return (
        <DayPicker
            numberOfMonths = { 2 }
            selectedDays = { props.selectDays }
            onDayClick={ props.handleDayClick }
        />
    )
}