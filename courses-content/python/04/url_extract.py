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
    

extract_url = ExtractURL("http://bytebank.com/cambio?moedaDestino=dolar&quantidade=100&moedaOrigem=real")
value_qty = extract_url.get_value_param("quantidade")
print(value_qty)