import guess
import hang

def choose():
    print("****************")
    print("Select your Game")
    print("****************")

    print("(1) Hang, (2) Guess")

    selected = int(input("Select Game: "))

    if selected == 1:
        print("Hang Selected")
        hang.game_hang()
    elif selected == 2:
        print("Guess Selected")
        guess.game_guess()

if(__name__ == "__main__"):
    choose()