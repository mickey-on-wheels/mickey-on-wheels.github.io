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
image: /_post_images/2026-05-26-PaperReview-AutoVLA/overview.png
---
# Paper Review - AutoVLA (WIP)

1. this ordered seed list will be replaced by the toc
{:toc}

## Introduction

### From Modular-based Autonomous Driving to VLA-based Autonomous Driving
* Modular-based Autonomous Driving suffers from error accumulation and lack of joint optimization across modules, leading to suboptimal performance. &rarr; **Need for End-to-End (E2E) Autonomous Driving.**

* Conventional E2E approaches lack essential world knowledge for undertanding the environment and proper reasoning, as they primarily focus on imitating expert trajectories. Such problem becomes severe in **long-tail or challenging scenarios**.

* **Vision-Language Models (VLMs) with extensive world knowledge and reasoning capabilities** have shown strong potential in improving driving performance in diverse driving scenarios. 

* **Vision-Language-Action (VLA)** models extend the capabilities of VLMs to action generation for embodied agents. 

### Limitations of Existing VLA-based Autonomous Driving

* **Physically infeasible or complex structure for action generation**
  * Output textual action or waypoints directly using VLMs  
    &rarr; Physically infeasible actions  
    &rarr; Suffer from mode collapse[^mode-collapse]
  * Recent approaches introduce intermediate meta-actions or latent action tokens   
    Meta-actions and latent action tokens are processed by downstream planners or decoders to produce physically feasible actions.   
    &rarr; Intermediate representations break the E2E optimization pardigm  
    &rarr; Increased model complexity and training overhead

*  **Inflexible and inefficient reasoning across diverse scenarios**
  * Existing VLA models often rely on fixed reasoning strategy  
    &rarr; lack of ability to adaptively switch between simple straigtforward reasoning and chain-of-thought(CoT) reasoning based on the scenario complexity.  
    * DriveVLM has dual-process, but it has separate branches; VLM for slow reasoning and conventional E2E for fast reasoning. &rarr; complicated architecture, increased training overhead, and limited scalability.

[^mode-collapse]: Mode collapse refers to a situation where a generative model produces limited diversity in its outputs, often generating the same or similar outputs repeatedly, which can be problematic in tasks like action generation for autonomous driving.

### AutoVLA: Key Contributions
1. **Directly integrates physical action tokens into a pretrained VLM backbone**
    * Seamlessly integrates reasoning and action generation
    * Adaptive switch between direct action generation and CoT reasoning
2. **Two-stage training**
    1. Suprervised Fine-Tuning (SFT)
    2. Reinforcement Fine-Tuning (RFT) using Group Relative Policy Optimization (GRPO)
3. **Experimental validation on both open-loop and closed-loop setup**

## Related Work
* **E2E Autonomous Driving**
  * Transformer-based planning: UniAD, VAD
  * Generative model-based planning: GenAD, DiffusionDrive  
  * Integrating world knowledge into E2E systems remains challenging due to bottlenecks in semantic reasoning and limited adapatability to complex scenarios.

* **VLA and VLM for Autonomous Driving**
  * Critical challenge for VLA and VLM in E2E autonomous driving: **Gap between semantic reasoning and physical action**  
  1. Approach 1: Language-centric problem. Using VLMs for scenario understanding for caption generation or question answering.
  2. Approach 2: VLA or VLMs for producing high-level meta actions, which are used to guide traditional planners or E2E models.
  3. Approach 3: Direct prediction of action tokens or trajectories using VLA.
      * Simple trajectory decoders may produce impractical trajectories, and may suffer from mode collapse.
      * ORION utilizes generative planners, enhancing trajectory feasibility, but requires high computational resources.

* Reinforcement Fine-Tuning (RFT)
  * RFT has shown promise in enhancing the performance of LLMs, as demonstrated in DeepSeek-R1.
  * In autonomous driving, Gen-Drive and TrajHF employed RFT to align trajectory generation with safety constraints and human driving preferences.
  * AutoVLA utilize GRPO to optimize both reasoning and low-level planning.

## Methodology

### Framework
### Reasoning Data
### SFT
### RFT