class Media:
    def __init__(self, name, year):        
        self.__name = name.title()
        self.year = year
        self.__likes = 0

    @property
    def likes(self):
        return self.__likes

    def plus_like(self):
        self.__likes += 1

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):        
        self.__name = value.title()

    def __str__(self):
        return f'Title: {self.name}, Year: {self.year}, Likes: {self.likes}'

class Movie(Media):
    def __init__(self, name, year, runtime):       
        super().__init__(name, year)
        self.runtime = runtime

    def __str__(self):
        return f'Title: {self.name}, Year: {self.year}, Runtime: {self.runtime} min, Likes: {self.likes}'
  
class Serie(Media):
    def __init__(self, name, year, seasons):
        super().__init__(name, year)
        self.seasons = seasons       

    def __str__(self):
        return f'Title: {self.name}, Year: {self.year}, Seasons: {self.seasons}, Likes: {self.likes}'

avenger = Movie("avongers assemble", 2018, 160)
atlanta = Serie("atlanta", 2017, 3)

atlanta.plus_like()
atlanta.plus_like()
avenger.plus_like()
avenger.name = 'Avengers'

play_list = [avenger, atlanta]

for media in play_list:
    print(media)