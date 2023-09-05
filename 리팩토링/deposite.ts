const database = [];
function depostie(to: string, amount: number) {
  let accountId = database.find(to);
  database.upateOne(accountId, { $inc: { balance: amount } });
}

function transfer(from: string, to: string, amount: number) {
  depostie(from, -amount);
  depostie(to, amount);
}

function transfer2(from: string, to: string, amount: number) {
  let fromAccountId = database.find(from);
  database.updateOne(fromAccountId, { $inc: { balance: -amount } });
  
  let toAccountId = database.find(to);
  database.updateOne(toAccountId, { $inc: { balance: amount } });
}
