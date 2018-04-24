import React from 'react';


class PlayersTable extends React.Component{
    render(){
        return <div>
            <thead>
            <tr>
                <th className="table table-vcenter">
                    <div className="title">RANK</div>
                    <div className="tooltip top fade">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner">Determined by total points. The athlete with the fewest points
                            wins.
                        </div>
                    </div>
                </th>
                <th className="name">NAME</th>
                <th className="total-points tooltip-wrapper">
                    <div className="title">POINTS</div>
                    <div className="tooltip top fade">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner">The sum of an athlete's workout rankings. Based on a
                            points-per-place ranking system.
                        </div>
                    </div>
                </th>
                <th data-workout="1">18.1</th>
                <th data-workout="2">18.2</th>
                <th data-workout="3">18.2a</th>
                <th data-workout="4">18.3</th>
                <th data-workout="5">18.4</th>
                <th data-workout="6">18.5</th>
            </tr>
            </thead>
        </div>;
    }
}

export {PlayersTable}