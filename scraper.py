from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time

# Start a web browser session
driver = webdriver.Chrome()  # You need to have ChromeDriver installed
driver.get("https://pscs.habib.edu.pk")

# Log in (you need to replace these with actual credentials)
username = driver.find_element_by_name("mu07486")
password = driver.find_element_by_name("BLOODdiamond12")
username.send_keys("mu07486")
password.send_keys("BLOODdiamond12")
driver.find_element_by_id("submit").click()  # Assuming the ID of the login button is "submit"

# Wait for the page to load after logging in
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "win0divPTNUI_LAND_REC_GROUPLET$8")))

# Click the "Enrolment" button
enrolment_button = driver.find_element_by_id("win0divPTNUI_LAND_REC_GROUPLET$8")
enrolment_button.click()

# Now you should be on the enrolment page
# You can add further actions here if needed

# Don't forget to close the browser session when you're done
driver.quit()
