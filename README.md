# random-person-generator

A command line tool to return a random, non-repeating person from an available pool.

#### About

The purpose of this tool is to randomly generate a name from a list of students. The name returned will not be repeated until all names in the pool have been called. Once all names have been called, the memory is reset and all names become available again. The memory persists between use.

#### Getting Started

Clone the repo and do an 'npm install -g'.
Names have been pre-loaded into the lib/random-generator.js. If you would like to use a different set of names, you will need to add the names that you would like to use into the nameArray. Next you will need to create a .env file into the root folder of this app. Save that file with the following in the first line:
'STORAGE_PATH=<route app's root directory on *your machine*>/assets/array.json'

#### How to Use

Open a new terminal window (or tab if you are already running terminal). Navigate to the directory where you cloned this repo. Type 'callrandomstudent' in the command line, and a random name from your list will be returned.

#### Credits

Created by Andrew Bloom. Using node, npm, 'dotenv' and 'fs-extra'.
