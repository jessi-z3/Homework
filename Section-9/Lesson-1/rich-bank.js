const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id){
	let accountFound = Boolean
	// Added check for postive number
	if (!Number.isFinite(id) || id < 0){
			throw new Error("The account ID must be a postive finite number.");
	}

	for (const account of accounts){
		if (account.id == id){
			accountFound = true;
			return account;
		} 
	}

	// An account hasn't been found or we would have returned it and exited
	accountFound = false

	// Added check for not finding an account here
	if (!accountFound) {
		throw new Error("Account not found.")
	}
}

function createAccount (newAccountId, newAccountOwner){
	// Added check for positive number
	if (!Number.isFinite(newAccountId) || newAccountId < 0) {
		throw new Error("The account ID must be a finite number.");
	}

	// Added check for string and length
	if (typeof newAccountOwner === "string" ) {
		const trimmed = newAccountOwner.trim();
		if (trimmed.length === 0) {
			throw new Error("Account owner cannot be an empty string.");
		}
	} else {
		throw new Error("The account name must be a string.");
	}

	accounts.push({
		id: newAccountId,
		owner: newAccountOwner,
		// Resolved a TypeError here, where it was a Sting, causing concatenation
		balance: 0
	});
}

function depositMoney (accountId, amount) {
	const account = getAccountById(accountId);

	if (!account){
		throw new Error("Account not found");
	}

	// Added check for positive number
	if (!Number.isFinite(amount) || amount <= 0){
		throw new Error("Invalid value for deposit amount: The amount must be a positive finite number.");
	}

	account.balance += amount;
}

function withdrawMoney (accountId, amount){
	const account = getAccountById(accountId);
	if (!account){
		throw new Error("Account not found.");
	}

	// Added check for positive number
	if (!Number.isFinite(amount) || amount <= 0){
		throw new Error("Invalid value for withdrawal amount: The amount must be a positive finite number.");
	}

	// Added check for funds
	if (account.balance >= amount) {
		account.balance -= amount;
	} else {
		throw new Error("Insufficient funds.");
	}
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	// Added check for positive number
	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	// Added balance check 
	if (fromAccount.balance >= amount) {
		// The balance was not being deducted by the amount previously.
		fromAccount.balance -= amount;
		toAccount.balance += amount;
	} else {
		throw new Error("Insufficient funds.");
	}
}
