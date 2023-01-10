from abc import ABCMeta, abstractmethod
import numpy as np

class Account(metaclass = ABCMeta):
    def __init__(self, code):
        self.code = code
        self._balance = 0

    def deposit(self, val):
        self._balance += val
    
    # Absdtract
    def monthly(self):
        pass

    def __str__(self):
        return "Code:{} Balance:{}".format(self.code, self._balance)

class CheckAccount(Account):
    def monthly(self):
        self._balance -= 2

class SavingAccount(Account):
    def monthly(self):
        self._balance *= 1.01
        self._balance -= 3

class InvestAccount(Account):
    pass

acc1 = CheckAccount(1)
acc1.deposit(1000)
acc2 = SavingAccount(2)
acc2.deposit(1000)
acc3 = InvestAccount(2)
acc3.deposit(1000)
accounts = [acc1, acc2]

for acc in accounts:
    acc.monthly()

teste = np.array([1, 3.5])
print(teste)