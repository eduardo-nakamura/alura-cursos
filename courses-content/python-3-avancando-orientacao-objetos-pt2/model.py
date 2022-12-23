class Program:

    # The __init__  function is called every time an object is created from a class. 
    # The __init__ method lets the class initialize the object’s attributes and serves no other purpose.
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

    def __str__(self):
        return f'{self._name} - {self.year} - {self._likes}'

class Movie(Program):
    def __init__(self, name, year, duration):
        self.duration = duration
        # The super() builtin returns a proxy object (temporary object of the superclass) 
        # that allows us to access methods of the base class.
        super().__init__(name, year)

    # __str__ returns the string representation of the object
    def __str__(self):
        return f'Name: {self._name} - {self.year} - {self.duration} min - Likes: {self._likes}'

class Serie(Program):
    def __init__(self, name, year, seasons):        
        self.seasons = seasons        
        super().__init__(name, year)

    def __str__(self):
        seasons_qty = 'season'
        if self.seasons > 1: seasons_qty = 'seasons'        
        return f'Name: {self._name} - {self.year} - {self.seasons} {seasons_qty} - Likes: {self._likes}'

class Playlist:
    def __init__(self, name, programs):
        self.name = name
        self._programs = programs

    @property
    def listing(self):
        return self._programs

    @property
    def size(self):
        return len(self._programs)

avengers = Movie('Avengers - infinity wars', 2018, 160)
tncfu = Movie('The Night Comes for Us', 2018, 121)
john_wick = Movie('John Wick', 2014, 101 )
atlanta = Serie('atlanta', 2018, 3)
berserk = Serie('Berserk', 1997, 1)
stranger_things = Serie('Stranger Things', 2016, 4)

avengers.add_likes()
avengers.add_likes()
tncfu.add_likes()
tncfu.add_likes()
tncfu.add_likes()
john_wick.add_likes()
john_wick.add_likes()
atlanta.add_likes()
stranger_things.add_likes()
stranger_things.add_likes()


# list
movies_series = [ avengers, tncfu, john_wick, atlanta, berserk, stranger_things ]
weekend_pl = Playlist('Weekend', movies_series)

print(f'Playlist size: {len(weekend_pl.listing)}')

# iterate playlist and print
for program in weekend_pl.listing:
    print(f'{program}')
