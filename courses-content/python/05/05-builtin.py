ages = [15, 87, 32, 65, 56, 32, 49, 37, 32] # type Range
users = [
    ("Guilherme", 39, 1981),
    ("Daniela", 33, 1987),
    ("Paulo", 41, 1979),
]
# range

# for i in range(len(ages)):
#     print(i, ages[i])

# Enumerate
# print(list(enumerate(ages)))  [(0, 15), (1, 87), (2, 32), (3, 65), (4, 56), (5, 32), (6, 49), (7, 37), (8, 32)]

for index, age in enumerate(ages):
    print(index, age)

for name, _, _ in users: # unpack
    print(name)