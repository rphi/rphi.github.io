---
title: "Cores - lab inventory and scheduling"
date: "2019-03-05"
tags: [ "projects" ]
ShowToc: false
ShowBreadCrumbs: false
draft: true
---

This project was written as part of my internship with OneIlluminate, to replace and improve on a legacy in-house tool 
and has the following features:

 - Inventory of all "lab" machines
 - Management of "bookings" and "reservations" for systems, including with group based restrictions
 - Detailed reporting on utilisation
 - Full REST-ful API access to data in the system
 - Automatic synchronisation of system details to the database:
   - Hardware configuration
   - Installed PCIe cards (and serial numbers)
   - Software versions
 - MOTD updates on systems to detail current status
 - Warnings for devices that hadn't been included in the inventory, and for address/location changes
 - Hardware loan tracking

The project was written using Django and Python, and deployed using Docker. The sync agents were a combination of 
Python scripts and Bash. The system was capable of continuous synchronisation with the old system to facilitate a 
seamless cutover without loss of data or disruption to users.

An early version of a subset of the source and documentation (MkDocs source) is available on my GitHub: 
[Cores](https://github.com/rphi/cores)
