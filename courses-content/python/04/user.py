import re # regex

address = "Rua Nome, 123, apartamento 31, São Paulo, SP, 04075-100"
# xxxxx-xxx or xxxxxxxx

#pattern_cep = re.compile("[0-9]{5}[-]{0,1}[0-9]{3}")
pattern_cep = re.compile("\d{5}-?\d{3}")
search = pattern_cep.search(address)
if search:
    cep = search.group()

print(cep)