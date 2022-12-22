class Program:
    def __init__(self, name, year):
        self._name = name.title()
        self.year = year
        self._likes = 0

    @property
    def likes(self):
        return self._likes

    def add_likes(self):
        self._likes += 1

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

class Movie(Program):
    def __init__(self, name, year, duration):
        self.duration = duration
        super().__init__(name, year)

    def return_register_diff(self):
        pass

class Serie(Program):
    def __init__(self, name, year, seasons):        
        self.seasons = seasons        
        super().__init__(name, year)
        

  

avengers = Movie('Avengers - infinity wars', 2018, 160)
avengers.add_likes()


atlanta = Serie('atlanta', 2018, 3)
atlanta.add_likes()
atlanta.add_likes()

print(f'Name: {avengers.name} - {avengers.duration} min - Likes: {avengers.likes}')
print(f'Name: {atlanta.name} - {atlanta.seasons} seasons - Likes: {atlanta.likes}')