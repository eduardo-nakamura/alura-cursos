# Junior Employee = Alura Only
# Employee = Alura and Caelum
# Senior Employee = Alura and Caelum

class Employee:
    def __init__(self, name):
        self.name = name

    def reg_hours(self, hours):
        print('Hours registered')

    def show_tasks(self):
        print('Done many tasks...')

class Caelum(Employee):
    def show_tasks(self):
        print('Done many tasks, Caelumn')

    def search_classes_month(self, month = None):
        print(f'Showing Classes = {month}' if month else 'Showing Classes this month')

class Alura(Employee):
    # def show_tasks(self):
    #     print('Done many tasks, Allurer (?!)')

    def search_unanswered_question(self):
        print('Showing questions not answered on the Forum')

class Hipster:
    def __str__(self):
        return f'Hipster,  {self.name}'

class Junior(Alura):
    pass

class Full(Alura, Caelum, Hipster):
    pass

class Senior(Alura, Caelum):
    pass

joseph = Junior('Joseph')
joseph.search_unanswered_question()
# joseph.search_classes_month()
zeppeli = Full('Zepelli')
zeppeli.search_unanswered_question()
zeppeli.search_classes_month()
zeppeli.show_tasks()
# Order search in Class Full
# Full > Alura > Employee > Caelum > Employee

print(zeppeli)