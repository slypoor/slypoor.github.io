# Exercise Science Toolkit
This repository is for the EST.

## MAOD Screen 1
The input takes up to a maximum of 12 points of data. The first list (X), takes Workload in either Watts or Kph. The second list (Y), takes V0<sub>2</sub>max (L/min) values.

These values are then plotted onto a graph showing the correlation between the two data sets and linear regression.
The formula is displayed ontop of the graph.

![Screen 1](https://raw.githubusercontent.com/ransty/est/master/screen1.png?token=AU_0-Dxd51FUC86E8FSwvqNz0yVMZLktks5Z9rlUwA%3D%3D)

## MAOD Screen 2
This screen is where the MAOD is calculated. It takes in a time interval (seconds) for the user to select from. Once they have selected a time interval, the form is dynmically updated to conform to the required time interval (180 / timeinterval = input cells). If they select 5s intervals, the cells will update to only half of 180 (90s).

Once the user has selected their time interval, they then have to add an Estimated V0<sub>2</sub>max value. This value is usually in the range of 0~7. The next value to be input is the supramaximal workrate %, this is for calculating the athletes % potential above their Estimated V0<sub>2</sub>max rate.

The user then has to enter up to 18 cells (depends on time interval selection), with their V0<sub>2</sub> values. These are then plotted onto a bar graph corresponding to the time interval shown on the X axis.

The green area shows the atheletes MAOD while the bars show the consumed oxygen.

MAOD = oxygen consumed - oxygen required

The MAOD is then displayed at the top of the screen. On the right hand side is the percentile ranking for that particular athlete (standard deviation).

![Screen 2](https://raw.githubusercontent.com/ransty/est/master/screen2.png?token=AU_0-F572evaQjkG_Wl9qmJ9AoA-OUgQks5Z9rl0wA%3D%3D)
