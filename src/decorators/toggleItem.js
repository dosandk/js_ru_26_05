import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {
    constructor(props) {
        super()

        this.state = {
            openedItem: null
        };
    }

    toggleOpen = id => ev => {
        if (ev && ev.preventDefault) ev.preventDefault()

        this.setState({
            openedItem: !this.checkIsOpenState(id) ? id : null
        })
    }

    checkIsOpenState = (id) => id === this.state.openedItem

    render() {
        return <CustomComponent {...this.props}
            checkIsOpenState = { this.checkIsOpenState }
            toggleOpen = { this.toggleOpen } />
    }
}