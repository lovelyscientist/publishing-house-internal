angular
    .module('app')
    .service('transactionsStore', function() {
	    this.transactions = [
	    	{date: "12/12/2012", amount: 20.48, type: "Food"},
	    	{date: "12/12/2012", amount: 64.48, type: "Clothes"},
	    	{date: "12/12/2012", amount: 14.48, type: "Medical"},
	    	{date: "12/12/2012", amount: 54.48, type: "Food"},
	    	{date: "12/12/2012", amount: 15.00, type: "Housing"},
	    	{date: "12/12/2012", amount: 14.48, type: "Food"},
	    	{date: "12/12/2012", amount: 21.48, type: "Clothes"},
	    	{date: "12/12/2012", amount: 12.50, type: "Food"},
	    	{date: "12/12/2012", amount: 14.48, type: "Food"},
	    	{date: "12/12/2012", amount: 21.30, type: "Housing"},
	    	{date: "12/12/2012", amount: 14.48, type: "Clothes"},
	    	{date: "12/12/2012", amount: 14.48, type: "Housing"},
	    	{date: "12/12/2012", amount: 12.98, type: "Clothes"},
	    	{date: "12/12/2012", amount: 14.98, type: "Unexpected"},
	    	{date: "12/12/2012", amount: 22.48, type: "Food"}
	    ];
});