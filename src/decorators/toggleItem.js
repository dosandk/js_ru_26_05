import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {
    state = {
        openedItem: null
    };

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