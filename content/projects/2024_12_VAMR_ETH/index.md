---
title: 'Monocular Vision Odometry Pipeline'
subtitle: "Vision Algorithms for Mobile Robotics by [Robotics & Perception Group, UZH](https://rpg.ifi.uzh.ch/teaching.html#VAMR)"
date: 2024-12-31
startDate:
endDate:
link: ""
authors: []
links:
    - text: report
      url: VAMR24_project_report.pdf
    - text: video
      url: https://youtu.be/6UTci4BojpU
    - text: code
      url: https://github.com/RobJMal/vamr_2024_project
draft: false
---
<!--summary-->
We implemented a Monocular Vision Odometry (VO) pipeline in Python. Components include landmark and camera pose initialization along with continuous pipeline for keypoint tracking and landmark triangulation using 2D ↔ 3D correspondences. To ensure stable and long-term operation, new keypoint ↔ landmark correspondences were continuously evaluated and added to the main pipeline once deemed to be of high-quality. Evaluated on KITTI, Malaga, and Parking Datasets

<!--more-->
