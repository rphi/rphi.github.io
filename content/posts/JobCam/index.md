---
title: "JobCam - hackathon machine vision project"
date: "2018-10-21"
tags: [ "projects" ]
ShowToc: false
ShowBreadCrumbs: false
draft: false
cover:
  image: https://github.com/rphi/hackupc18/raw/master/logo.png
---

JobCam was developed as a "fun" new way to find jobs in your area. It allows you to target your phone at an object, 
and then through the infojobs API we can find a closely matching job, that will be overlayed. The app processed 
data in real time allowing the user to move the phone around the room to find interesting jobs that they had not 
considered.

(yes, the use case is somewhat contrived - if I remember rightly there was a prize for "most innovative use of the 
InfoJobs API...)

The app has two parts, the Object Detection Server, written in C++, which contains an instance of the YOLOv3 
neural network, and exposes an HTTP endpoint offering classification of JPG files, and the Android application 
itself.

I worked on this alongside my teammates @bnelo12, @kubasz and @qaisjp.

The project source (beware, this was developed on minimal sleep!) is on its [GitHub repo](https://github.com/rphi/hackupc18/)
