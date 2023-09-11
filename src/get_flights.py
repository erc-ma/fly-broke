from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import time


PATH = '/chromedriver.exe'


# options = webdriver.ChromeOptions()

# options.add_argument('user-agent=Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36')
# options.add_argument('accept-encoding=gzip, deflate, br')
# options.add_argument('accept=text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7')
# options.add_argument('referer=https://www.expedia.com/')
# options.add_argument('upgrade-insecure-requests=1')



l=list()
o={}

target_url = "https://www.expedia.com/Cansaulim-Hotels-Heritage-Village-Resort-Spa-Goa.h2185154.Hotel-Information?=one-key-onboarding-dialog&chkin=2023-05-13&chkout=2023-05-14&destType=MARKET&destination=Goa%2C%20India%20%28GOI-Dabolim%29&latLong=15.383019%2C73.838253&regionId=6028089"

driver=webdriver.Chrome(
    # PATH
                        # ,options=options
                        )

driver.get(target_url)

# driver.maximize_window()
time.sleep(5)

resp = driver.page_source
driver.close()

soup=BeautifulSoup(resp,'html.parser')

allOffers = soup.find("div",{"data-stid":"section-room-list"})

Offers = allOffers.find_all("div",{"class":"uitk-layout-grid-item"})

try:
    o["hotel"]=soup.find("h1").text
except:
    o["hotel"]=None
l.append(o)
o={}
for Offer in Offers:
    price_arr=Offer.find_all("div",{"data-test-id":"price-summary-message-line"})
    try:
        o["room-type"]=Offer.find("div",{"class":"uitk-spacing-padding-blockstart-three"}).find("div",{"class":"uitk-spacing-padding-small-blockend-half"}).text
    except:
        o["room-type"]=None




    try:
        o["price_before_tax"]=price_arr[0].find("span").text
    except:
        o["price_before_tax"]=None


    try:
        o["price_after_tax"]=price_arr[1].text.replace(" total","")
    except:
        o["price_after_tax"]=None

    l.append(o)

    o={}

print(l)






# # BOS-LAX/2023-10-09/2023-10-16?sort=bestflight_a
# url = "https://www.kayak.com/flights/"
# origin = "BOS"
# dest = "LAX"
# arrive = "2023-10-09"
# leave = "2023-10-16"
# sort = "bestflight_a"

# url += origin + "-" + dest + "/" + arrive + "/" + leave + "?" + "sort=" + sort
# r = requests.get(url)
# s = BeautifulSoup(r.text,"html.parser")
# print(s)

