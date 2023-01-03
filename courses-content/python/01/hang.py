import random

def game_hang():

    print_title()    
    secret_word = set_secret_word("words.txt",1)
    letter_list = start_init_letters(secret_word)
    print(letter_list)
    
    hanged = False
    correct = False    
    err = 0      
    
    while(not hanged and not correct):
        
        guess = player_guess()

        if(guess in secret_word):
            correct_guess(guess, letter_list, secret_word)
            # index = 0
            # for letter in secret_word:
            #     if(guess == letter):                
            #         letter_list[index] = letter
            #     index += 1
        else:
            err += 1
            draw_hang(err)            
            
        hanged = err == 6
        correct = "_" not in letter_list
        print(letter_list)  
    
    if correct:
        print_success()
    else:
        print_error(secret_word)

def print_title():
    print("********************")
    print("Welcome to Hang Game")
    print("********************")

def set_secret_word(file_name = "file.txt", line_num = 0):
    fileTxt = open(file_name, "r")
    word_list = []
    
    for line in fileTxt:
        line = line.strip()
        word_list.append(line)

    fileTxt.close()

    secret_number = random.randrange(line_num,len(word_list))    
    secret_word = word_list[secret_number].upper()
    return secret_word

def start_init_letters(word):
    return ["_" for letter in word]

def player_guess():
    playerGuess = input("Which Letter?")
    playerGuess = playerGuess.strip().upper()
    return playerGuess

def correct_guess(guess, letter_list, secret_word):
    index = 0
    for letter in secret_word:
        if(guess == letter):                
            letter_list[index] = letter
        index += 1

def draw_hang(err):    
    print("{} tries left".format(6 - err)) 
    print("____  ")
    if(err == 1):        
        print("|  |  ")
        print("|     ")
        print("|     ")
        print("|     ")        

    if(err == 2):
        print("|  |  ")
        print("|  O  ")
        print("|     ")
        print("|     ")

    if(err == 3):
        print("|  |  ")
        print("|  O  ")
        print("|  |  ")
        print("|     ")

    if(err == 4):
        print("|  |  ")
        print("|  O  ")
        print("| /|  ")
        print("|     ")

    if(err == 5):
        print("|  |  ")
        print("|  O  ")
        print("| /|\ ")
        print("|     ")

    if(err == 6):
        print("|  |  ")
        print("|  O  ")
        print("| /|\ ")
        print("| /   ")

    if (err == 7):
        print("|  |  ")
        print("|  O  ")
        print("| /|\ ")
        print("| / \ ")

    print("|_____")
    print(" |   |")    

def print_success():
    print('You Win!')    
    print(" \O/ ")
    print("  |  ")
    print(" / \ ")
    print("_____")
    print("|   |")   

def print_error(secret_word):
    print('You Lose! The word is {}'.format(secret_word))
    print("  |  ")
    print("  O  ")
    print(" /|\ ")
    print(" / \ ")

# execute from file
if(__name__ == "__main__"):
    game_hang()    