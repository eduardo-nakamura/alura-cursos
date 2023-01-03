
class Account:    
    def __init__(self, number, name, balance, limit):
        self.__number = number
        self.__name = name
        self.__balance = balance
        self.__limit = limit
        self.__bank_id = "001"

    def print_balance(self):
        print("Current balance from {} is {}".format(self.__name, self.__balance))

    def deposit(self, value):
        self.__balance += value

    def __check_withdraw(self, value):
        value_available = self.__balance + self.__limit 
        return value <= value_available

    def withdraw(self, value):
        if(self.__check_withdraw(value)):
            self.__balance -= value
            print("Value {} withdrawed".format(value))
        else:
            print("Value {} is above limit".format(value))

    def transfer(self, value, valueTo):
        self.withdraw(value)
        valueTo.deposit(value)
    
    def get_balance(self):
        return self.__balance
    
    def get_name(self):
        return self.__name

    @property    
    def limit(self):
        return self.__limit

    @limit.setter
    def set_limit(self, value):
        self.__limit = value

    @staticmethod
    def bank_num():
        return "001"

    @staticmethod
    def banks_num():
        return {'Banco do Brasil': '001', 'Caixa': '104', 'Bradesco': '237'}

