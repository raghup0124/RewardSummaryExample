// reducer
export default function invoices(state = []) {
    return state; // nothing to do here, but we need rewardSummary node in redux store
}

// selectors
export function getRewardSummary(state, props) {
    const rewards = [];
    state.products.map((item) => {
        var findItem = rewards.find((x) => x.id === item.customer.id);
        if (!findItem){
            rewards.push({id: item.customer.id, name: item.customer.name});
            findItem = rewards.find((x) => x.id === item.customer.id);
        }
        var invoiceDate = new Date(item.invoice.date);
        if (findItem[invoiceDate.getMonth()]) {
            findItem[invoiceDate.getMonth()] += Math.round(((item.price - 50) * 1) + ((item.price - 100) * 1));
        } else {
            findItem[invoiceDate.getMonth()] = Math.round(((item.price - 50) * 1) + ((item.price - 100) * 1));
        }
        if (findItem['total']) {
            findItem['total'] += Math.round(((item.price - 50) * 1) + ((item.price - 100) * 1));
        } else {
            findItem['total'] = Math.round(((item.price - 50) * 1) + ((item.price - 100) * 1));
        }
        return item;
    });

    return rewards;
}
