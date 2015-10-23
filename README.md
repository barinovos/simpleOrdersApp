# Author
Created by Barinov O.S. @2015
email: barinovos@mail.ru

## About

Created due to current tasks:
1) show all orders from a particular company
2) show all orders to a particular address
3) delete a particular order given an OrderId
4) display how often each item has been ordered, in descending order

Here you can find simple 'view' with angular material design
and gulp builder options (at least .scss built by it),
also created simple REST API using node.js (4.*) and express (4.0)
All dummy data kept in 'data/sample.csv' file

# Installation

Run first 'npm install'
then 'bower install'
then you can open it in IDEA or simply run 'node ./bin/www'
Open any modern browser with 'localhost:3000' - enjoy Angular Material Design!

# Comments

Sorry about 'csv' - I just decided, that this is the best way to parse text file
with objects data using good old modules.
Also sorry for 'Lodash' in data manipulation methods - this is my way.
My purpose is to build lightweight code, using existed tools, I would spent
a lot of time for automation processes, creating nice project architecture,
rather then recreating existing algorithms from scratch.
Lodash has great performance and safety, I see no reasons to not use it in such cases.


# License
MIT
