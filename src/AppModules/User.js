import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Personal from './Personal'
import Employement from './Employement'
import Review from './Review'
import { Tab,Section } from './FormElement';

class User extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <div>
                <Section>
                    <Tab isSelected={page === 1 ? true : false}>Personal</Tab>
                    <Tab isSelected={page === 2 ? true : false}>Employement</Tab>
                    <Tab isSelected={page === 3 ? true : false}>Review</Tab>
                </Section>
                {page === 1 && <Personal onSubmit={this.nextPage} />}
                {
                    page === 2 && (
                        <Employement
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    )
                }
                {
                    page === 3 && (
                        <Review
                            previousPage={this.previousPage}
                            onSubmit={onSubmit}
                        />
                    )
                }
            </div >
        )
    }
}

User.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default User