url = "http://bytebank.com/cambio?moedaDestino=dolar&quantidade=100&moedaOrigem=real"
# &quantidade=100
index_question = url.find('?') # get index from ?

base_url = url[0:index_question] # get string text before ?
url_query = url[index_question + 1:] # get string text after ?


search_param = 'quantidade'
index_param = url_query.find(search_param)
index_value = index_param + len(search_param) + 1
index_at = url_query.find('&', index_value)
if index_at == -1:
    val = url_query[index_value:]
else:
    val = url_query[index_value:index_at]
print(f'{val}\n')

# https://cursos.alura.com.br/course/string-python-extraindo-informacoes-url/task/91881