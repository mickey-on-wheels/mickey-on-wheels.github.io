---
layout: post
related_posts: false
title: Paper Review - AutoVLA (WIP)
categories:
  - autonomous-driving
  - paper-review
description: >
  This is a work in progress paper review for AutoVLA, a vision-language-action model for autonomous driving.
hide_description: false
sitemap: false
image: false
---
# Paper Review - AutoVLA (WIP)
## Introduction

### From Modular-based Autonomous Driving to VLA-based Autonomous Driving
* Modular-based Autonomous Driving suffers from error accumulation and lack of joint optimization across modules, leading to suboptimal performance. &rarr; Need for End-to-End (E2E) Autonomous Driving.

* Conventional E2E approaches lack essential world knowledge for undertanding the environment and proper reasoning, as they primarily focus on imitating expert trajectories. Such problem becomes sever in long-tail or challenging scenarios.

* Vision-Language Models (VLMs), with extensive world knowledge and reasoning capabilities have shown strong potential in improving driving performance in diverse driving scenarios. 

* Vision-Language-Action (VLA) models extend the capabilities of VLMs to action generation for embodied agents. 

### Limitations of Existing VLA-based Autonomous Driving

* Physically infeasible or complex structure for action generation
  * Output textual action or waypoints directly using VLMs  
    &rarr; Physically infeasible actions  
    &rarr; Suffer from mode collapse[^mode-collapse]
  * Recent approaches introduce intermediate meta-actions or latent action tokens   
    Meta-actions and latent action tokens are processed by downstream planners or decoders to produce physically feasible actions.   
    &rarr; Intermediate representations break the E2E optimization pardigm  
    &rarr; Increased model complexity and training overhead



[^mode-collapse]: Mode collapse refers to a situation where a generative model produces limited diversity in its outputs, often generating the same or similar outputs repeatedly, which can be problematic in tasks like action generation for autonomous driving.
