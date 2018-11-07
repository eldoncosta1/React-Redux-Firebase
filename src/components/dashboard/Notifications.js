import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map(not => {
                            return (
                                <li key={not.id}>
                                    <span className="pink-text">{not.user} </span>
                                    <span>{not.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(not.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications