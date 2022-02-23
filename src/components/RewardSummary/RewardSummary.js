import React from 'react';
import PropTypes from 'prop-types';

const RewardSummary = ({ rewardSummary }) => {
    return (
        <div>
            <h3>Monthly Rewards Summary</h3>
            <div className="App">
            <table>
                <tbody>
                    <tr>
                        <th rowspan="2">Customer Name</th>
                        <th colspan="3">Last Three Reward Points</th>
                        <th rowspan="2">Total Reward Points</th>
                    </tr>
                    <tr>
                        <th>Dec</th>
                        <th>Jan</th>
                        <th>Feb</th>
                    </tr>
                    {rewardSummary.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td>{record.name}</td>
                                <td>{record[11]}</td>
                                <td>{record[0]}</td>
                                <td>{record[1]}</td>
                                <td>{record.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    );
}

RewardSummary.propTypes = {
    rewardSummary: PropTypes.array,
}

export default RewardSummary;
