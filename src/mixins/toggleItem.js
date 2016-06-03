export default {
    getInitialState() {
        return {
            openedItem: null
        }
    },
    toggleOpen(id) {
        return ev => {
            if (ev && ev.preventDefault) ev.preventDefault()

            this.setState({
                openedItem: !this.checkIsOpenState(id) ? id : null
            })
        }
    },
    checkIsOpenState(id) {
        return id === this.state.openedItem
    }
}