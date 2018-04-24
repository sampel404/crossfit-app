import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';


class Trainer extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image />
            <div className="container">
                <div className="separator double"></div>
                <Submenu />
                <div className="separator double"></div>
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-award-3 text-primary push-15-r"></i>
                            <span>OPEN wyniki</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <table className="table table-vcenter table-hover table-striped" width="100%">
                            <thead>
                            <tr>
                                <th className="sortable sorted sort-desc">RANK</th>
                                <th className="sortable sorted">NAME</th>
                                <th className="sortable sorted">POINT</th>
                                <th className="sortable sorted" data-workout="1">18.1</th>
                                <th className="sortable sorted" data-workout="2">18.2</th>
                                <th className="sortable sorted" data-workout="3">18.2a</th>
                                <th className="sortable sorted" data-workout="4">18.3</th>
                                <th className="sortable sorted" data-workout="5">18.4</th>
                                <th className="sortable sorted" data-workout="6">18.5</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="font-w500">1</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>
                            <tr>
                                <td className="font-w500">2</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><a href="link link-effect">MATHEW FRASER</a></td>
                                <td>97</td>
                                <td>4th (476 reps)</td>
                                <td>49th (4:02)</td>
                                <td>21st (380 lb)
                                    380 lb.</td>
                                <td>17th (916 reps)</td>
                                <td> 5th (6:39)</td>
                                <td>1st (198 reps)</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Trainer}