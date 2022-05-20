import requests
token ="d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";
url = "https://gorest.co.in/public/v2/users?access-token={}".format(token)
response = requests.get(url)
result = response.json()
print(result)