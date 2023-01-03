import random

def game_guess():
    print("*************************")
    print("Welcome to Guessing Game")
    print("*************************")
    print(11/3)
    secret_number = random.randrange(1,101)
    number_guesses = 3
    points = 1000
    print("Select Level Difficulty")
    print("(1)-Easy, (2)-Medium, (3)-Hard")
    level = input("Select Level: ")

    if level == "1":
        number_guesses = 20
    elif level == "2":
        number_guesses = 10
    else:
        number_guesses = 5

    for turn in range(1, number_guesses + 1):
        print("Guess {} of {}".format(turn, number_guesses))
        guess_str = input("Type your number: ")
        guess = int(guess_str)
        if guess < 1 or guess > 100:
            print("Type a number between 1 and 100")
            continue

        win = guess == secret_number
        higher = guess > secret_number
        lower = guess < secret_number

        print("You guessed ", guess)
        if win:
            print("You win! Points {}".format(points))
            break
        else:
            if higher:
                print("Your guess is higher than the number")
            elif lower:
                print("Your guess is lower than the number")
            lost_points = abs(secret_number - guess)
            points = points - lost_points

    print("Game over")

# execute from file
if(__name__ == "__main__"):
    game_guess()