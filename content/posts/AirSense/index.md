---
title: "AirSense - personal air quality monitor"
date: "2020-04-03"
tags: [ "projects" ]
ShowToc: false
ShowBreadCrumbs: false
draft: false
cover:
  image: https://github.com/rphi/IoTSSC/blob/master/report/webapp-1.png?raw=true
---

Another joint university project, AirSense was a hardware and software solution built as part of my 
coursework for the [Internet of Things, Security and Cloud course](http://www.drps.ed.ac.uk/19-20/dpt/cxinfr11146.htm) 
at the University of Edinburgh.

AirSense is an IoT solution to allow individuals to track their own exposure to air pollution, and enable them 
to make informed changes to improve their personal health.

The system makes use of a Bluetooth Classic (2.1) sensor pack, that can be attached to a bag, which periodically reads 
air quality data using a variety of sensors. This data is pushed to a companion app running on the user’s phone, which 
calculates an air quality metric. This data is then uploaded to the AirSense cloud (operating on Google Firebase), to 
allow a global map of anonymised air quality data to be built.

The report is available in the project's repo, [here](https://github.com/rphi/IoTSSC/blob/master/report/IoTSSC-report.pdf).
