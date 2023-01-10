import re
import random


url_array = [ "bytebank.com/cambio", "bytebank.com.br/cambio", "www.bytebank.com/cambio", "www.bytebank.com.br/cambio", "http://www.bytebank.com/cambio", "http://www.bytebank.com.br/cambio", "https://www.bytebank.com/cambio", "https://www.bytebank.com.br/cambio", "https://bytebank/cambio", "https://bytebank.naoexiste/cambio", "ht://bytebank.naoexiste/cambio" ]



url = url_array[random.randint(0, len(url_array))]
pattern_url = re.compile('(http(s)?://)?(www.)?bytebank.com(.br)?/cambio')
match = pattern_url.match(url)
if not match:
    raise ValueError(f"{url} not valid")
else:
    print(f'{url} IS VALID')


# Valid urls
# bytebank.com/cambio
# bytebank.com.br/cambio
# www.bytebank.com/cambio
# www.bytebank.com.br/cambio
# http://www.bytebank.com/cambio
# http://www.bytebank.com.br/cambio
# https://www.bytebank.com/cambio
# https://www.bytebank.com.br/cambio

# not valid urls
# https://bytebank/cambio
# https://bytebank.naoexiste/cambio
# ht://bytebank.naoexiste/cambio