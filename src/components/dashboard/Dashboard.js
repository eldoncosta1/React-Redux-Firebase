import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect  } from 'react-router-dom'

class Dashboard extends Component {    
    render() {
        const { projects, auth, notifications } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    return {
        projects: state.firestoreReducer.ordered.projects,
        auth: state.firebaseReducer.auth,
        notifications: state.firestoreReducer.ordered.notification
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notification', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)