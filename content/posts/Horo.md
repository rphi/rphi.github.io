---
title: "Horo - multi-platform scheduled task orchestration"
date: "2021-03-17"
tags: [ "projects" ]
ShowToc: false
ShowBreadCrumbs: false
draft: true
---

This is my latest project which is being developed to solve the problem of managing periodically executing tasks 
across disparate operating systems and with easily maintainable infrastructure in code.

It's still in its very early stages, but the rough plan is as follows:

 - The Calibre component will act as the main interface with the platform. This is a Django application which will
   read config files and generate a database of jobs. It will push these out on schedule via a RabbitMQ message 
   broker to the workers, or Complications.

 - The Complications (task runners) will watch the message queue and accept any jobs targetted to them, download any 
   required resources from the Calibre server API, execute the scheduled command, publish the output back to the 
   message broker and upload any products from the execution to the API.

 - The intention is to offer Complications for Python (Windows/Linux/Mac), Powershell (classic on Windows) and Bash 
   (Linux/Mac). These will (hopefully) all be available as Docker containers. I'm also looking into integrating with 
   AWS Lambda for serverless executions.
