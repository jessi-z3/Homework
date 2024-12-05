// try operationSucess { +13 days vacay } catch { +1 day vacay }
// finally { +3 days vacay }

function mysteryOperation (){
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

let totalMissions = 20;
var vacationDays = 0;
for (let i = 0; i < totalMissions; i++){
	try {
		mysteryOperation();
		vacationDays += 13;
	} catch (error){
		vacationDays += 1;
	} finally {
		vacationDays += 3;
	}
}

console.log(vacationDays);