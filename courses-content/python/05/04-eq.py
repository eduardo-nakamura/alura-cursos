class ContaSalario:
    def __init__(self, codigo):
        self._codigo = codigo
        self._saldo = 0

    # Method to compare two objects by value
    def __eq__(self, outro):
        if type(outro) != ContaSalario:
            return False
        
        return self._codigo == outro._codigo and self._saldo == outro._saldo

    def deposit(self, val):
        self._saldo += val

    def __str__(self) -> str:
        return "[>> Codigo {} Saldo {}<<]".format(self._codigo, self._saldo)
class ContaMultiploSalario(ContaSalario):
    pass

acc1 = ContaSalario(37)
acc2 = ContaSalario(37)
acc3 = ContaMultiploSalario(37)

print(acc1 == acc2) # True
print(acc1 in [acc2]) # True
print(acc2 in [acc1]) # True

acc1.deposit(10)
print(acc1 == acc2) # False

print(acc1 == acc3) # False