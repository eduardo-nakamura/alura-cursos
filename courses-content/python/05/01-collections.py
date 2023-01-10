# Lists
age = [39, 30, 27, 18]
age.append(54) # add 54 from list
age.remove(39) # remove 39 from list

# Print each item in list
for item in age:
    print(item)

print(age[1]) # 27

# Search numbe in list
print(30 in age) # True
print(45 in age) # False

# [30, 27, 18, 54]
if 27 in age:
    age.remove(27)
# [30, 18, 54]

age.insert(0, 11) # insert 11 at position 0
age.extend([19,27]) # insert 19 and 27 to the list

print([(item + 1) for item in age]) # [12, 31, 19, 55, 20, 28]
print([(item) for item in age if item > 21]) # [30, 54, 27]