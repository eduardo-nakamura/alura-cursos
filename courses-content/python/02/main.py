def create_account(number, name, balance, limit):
    account = {"number": number, "name": name, "balance": balance, "limit": limit}
    return account

def deposit(account, value):
    account["balance"] += value

def withdraw(account, value):
    account["balance"] -= value

def print_balance(account):
    print("Current balance is {}".format(account["balance"]))

acc = create_account(1, "name", 20.0, 100.0)
deposit(acc,15)
withdraw(acc,3)
print_balance(acc)