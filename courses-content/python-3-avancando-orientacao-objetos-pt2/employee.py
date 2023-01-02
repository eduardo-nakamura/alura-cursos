# Junior Employee = Alura Only
# Employee = Alura and Caelum
# Senior Employee = Alura and Caelum

class Employee:
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

class Junior(Alura):
    pass

class Full(Alura, Caelum):
    pass

class Senior(Alura, Caelum):
    pass

joseph = Junior()
joseph.search_unanswered_question()
# joseph.search_classes_month()
zeppeli = Full()
zeppeli.search_unanswered_question()
zeppeli.search_classes_month()
zeppeli.show_tasks()
# Order search in Class Full
# Full > Alura > Employee > Caelum > Employee