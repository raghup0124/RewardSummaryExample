import { connect } from 'react-redux';
import RewardSummary from '../components/RewardSummary';
import { getRewardSummary } from '../ducks/invoices';

const mapStateToProps = (state, props) => {
    return {
        rewardSummary: getRewardSummary(state, props)
    }
}

export default connect(mapStateToProps)(RewardSummary);