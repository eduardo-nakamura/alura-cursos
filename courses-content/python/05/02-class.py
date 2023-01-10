class Account:
    def __init__(self, code):
        self.code = code
        self.balance = 0

    def deposit(self, val):
        self.balance += val
    
    def __str__(self):
        return "Code:{} Balance:{}".format(self.code, self.balance)



def deposit_all_accounts(accounts):
    for account in accounts:
        account.deposit(100)

# Tuple
eduardo = ("Eduardo", 39, 1983)
dani = ("Daniela", 31, 1987)
# eduardo.append(54) ERROR
users = [eduardo, dani]
users.append(("Paulo", 40, 1983))
print(users)

eduardo_acc = Account(15)
eduardo_acc.deposit(45)
dani_acc = Account(16)
dani_acc.deposit(1000)

accounts = (eduardo_acc, dani_acc)

for account in accounts:
    print(account)

accounts[0].deposit(35)

deposit_all_accounts(accounts)
for account in accounts:
    print(account)