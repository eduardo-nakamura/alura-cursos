import re

class ExtractURL:
    def __init__(self, url):
        self.url = self.clean_url(url)
        self.validate_url()

    def clean_url(self, url):
        if type(url) == str:
            return url.strip()
        else:
            return ""

    def validate_url(self):
        if not self.url:
            raise ValueError("URL is Empty")

        pattern_url = re.compile('(http(s)?://)?(www.)?bytebank.com(.br)?/cambio')
        match = pattern_url.match(self.url)
        if not match:
            raise ValueError(f"{self.url} not valid") 

    def get_base_url(self):
        index_question = self.url.find('?') # get index from ?
        base_url = self.url[0:index_question] # get string text before ?
        return base_url        

    def get_param_url(self):
        index_question = self.url.find('?')
        url_query = self.url[index_question + 1:] # get string text after ?
        return url_query

    def get_value_param(self, name_param):
        index_param = self.get_param_url().find(name_param)
        index_value = index_param + len(name_param) + 1
        index_at = self.get_param_url().find('&', index_value)
        if index_at == -1:
            val = self.get_param_url()[index_value:]
        else:
            val = self.get_param_url()[index_value:index_at]
        return val    

    def convert_value(self, moeda_origem,moeda_destino, qty):
        if moeda_origem == "dolar" and moeda_destino == "real":
            val = f"{qty} {moeda_origem} = {float(qty) * VALOR_DOLAR} {moeda_destino}"
        elif moeda_origem == "real"  and moeda_destino == "dolar":
            val = f"{qty} {moeda_origem} = {float(qty) * VALOR_REAL} {moeda_destino}"
        else:
            val = f"Conversão de {moeda_origem} para {moeda_destino} indisponível"
        
        return val


    #
    def __str__(self):
        return "URL: " + self.url + "\n" + "Parameters: " + self.get_param_url() + "\n" + "URL Base:" + self.get_base_url()

    # Length of url
    def __len__(self):
        return len(self.url)

    # Compare url instead of id
    def __eq__(self, other):
        return self.url == other.url


# VALOR_DOLAR = 5.50
# url = "http://bytebank.com/cambio?moedaDestino=dolar&quantidade=100&moedaOrigem=real"
# extract_url = ExtractURL(url)
# extract_url_2 = ExtractURL(url)
# print("Length of URL is ", len(extract_url))
# print(extract_url == extract_url_2)
# value_qty = extract_url.get_value_param("quantidade")
# print(value_qty)
url = "bytebank.com/cambio?quantidade=100&moedaOrigem=dolar&moedaDestino=yen"
# url = "bytebank.com/cambio?quantidade=5.5&moedaOrigem=real&moedaDestino=dolar"
extract_url = ExtractURL(url)

VALOR_DOLAR = 5.50  # 1 dólar = 5.50 reais
VALOR_REAL = 0.18  # 1 real = 0.18 Dolares
moeda_origem = extract_url.get_value_param("moedaOrigem")
moeda_destino = extract_url.get_value_param("moedaDestino")
quantidade = extract_url.get_value_param("quantidade")
print(extract_url.convert_value(moeda_origem,moeda_destino,quantidade))

