
export function getTransactions() {
    return fetch('./transactions.json')
      .then(response =>response.json());
}

export function calculateRewards(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}

export function rewardPerMonth(transactions) {

    let obj = {};
    for(let i=0; i < transactions.length; i++) {
        let points = this.calculateRewards(transactions[i].bill);
        let month = new Date(transactions[i].date).getMonth() +1;
        if(!obj[transactions[i].customer]){
            obj[transactions[i].customer] = {total: 0};
        }

        if(!obj[transactions[i].customer][month]) {
            obj[transactions[i].customer][month] = 0;
        }
        
        obj[transactions[i].customer][month] += points;
        obj[transactions[i].customer].total += points; 
    }
    return obj;
}