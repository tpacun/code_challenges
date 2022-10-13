import requests
import sys
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set environment and 
problemId = str(sys.argv[1])
language = str(sys.argv[2])
user = os.environ['USER_LOGIN']
password = os.environ['PASSWORD']

problemUrl = 'https://www.codewars.com/kata/' + problemId + 'train/' + language
responseProblem = requests.request("GET", problemUrl)

responseSolution = requests.request("GET", userUrl).json()

filepath = '~\codewars\{}\javascript\{}'.format(responseProblem.rank.name.replace(' ', '_'), responseProblem.slug)

mode = 'a' if os.path.exists(filepath) else 'w'

# Authenticate user

# access html return via https

# Check for solved in html


# Write file information with \n// inserted at every line break
# Write solution to file

# with open(filepath, mode) as f:
#     f.write('')