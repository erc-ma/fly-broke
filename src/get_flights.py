from bs4 import BeautifulSoup
import requests

# BOS-LAX/2023-10-09/2023-10-16?sort=bestflight_a
url = "https://www.kayak.com/flights/"
origin = "BOS"
dest = "LAX"
arrive = "2023-10-09"
leave = "2023-10-16"
sort = "bestflight_a"

url += origin + "-" + dest + "/" + arrive + "/" + leave + "?" + "sort=" + sort
r = requests.get(url)
s = BeautifulSoup(r.text,"html.parser")
print(s.find("div", {"id": "IBit-list"}))

