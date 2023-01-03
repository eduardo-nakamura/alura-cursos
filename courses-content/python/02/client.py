class Client:
    def __init__(self, name):
        self.__name = name

    @property
    def name(self):
        print("property name")
        return self.__name.title()
    
    @name.setter
    def name(self, name):
        print("property setter name")
        self.__name = name

