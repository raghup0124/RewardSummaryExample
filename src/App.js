import React from 'react';
import RewardSummary from './containers/RewardSummary';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React+Redux Rewards Summary Example</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <RewardSummary />
                </div>
            </div>
        </div>
    );
}

export default App;
