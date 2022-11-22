### HotSpot - Social Media

## Back-End


This github is a mono-repo of backend/server-side microservices and api gateways working together as a whole application for a new social media app called **HotSpot**.

This YouTube video was used as a guide for getting started: https://www.youtube.com/watch?v=yuVVKB0EaOQ&t=149s

The overall structure has been created.

The microservices and api-gateways are all written in NestJS, a servier-side web development framework
written in TypeScript running on Node.JS. The list of technologies being used:

- TypeScript
- NestJS
- RabbitMQ
- Docker
- PostgreSQL


## Features/Responsibilities By Service

Below is a break-down of all the microservices in this social media backend and what each microservice will handle and be responsible for:



# Users Microservice
- creating user accounts (done)
- querying user accounts (done)
- updating user accounts
- deleting user accounts
- password resets
- email verifications
- phone verifications

# Users Reported Microservice
- reported user accounts

# Users Suspended Microservice
- reported user accounts

# Auth Microservice
- verifying user logins (done)
- creating jwt
- decoding jwt
- refreshing jwt


# Single-Sign-On
- OAuth 2.0 API
- register 3rd party apps for sharing user data
- create scopes for what user data to share

# Notifications Microservice
- create user notifications
- send email
- send push notifications
- send test sms


# Messages Microservice
- direct messaging
- messages with media

# Posts Microservice
- CRUD posts
- posts with media
- sharing posts

# Post Reactions Microservice
- CRUD post reactions

# Posts Collections
- saving posts



# Comments Microservice
- CRUD comments
- comments with media

# Comment Reactions Microservice
- CRUD comment reactions

# Comments Collections
- saving comments



# Conversations Microservice
- CRUD groupchats

# Conversation Members Microservice
- CRUD groupchat members

# Conversation Messages Microservice
- CRUD groupchat messages

# Notices Microservice
- create notice (same thing as a tweet from twitter)
- quote notice
- share notice
- save notice
- reply notice
- react to notice
- notice media


# Cliques Microservice
- CRuD cliques (same as facebook group)

# Clique Members Microservice
- CRuD clique members

# Clique Contents Microservice
- clique posts, comments, live

# Stories Microservice
- creating stories (like snapchat)
- comment on stories

# Networks Microservice
- manage followers
- manage connections/friends

# Outreach Microservice
- sending communications via email, text, push notifications

# Anayltics Microservice
- track user activities
- 

# Advertisements Microservice
- pay for sponsored/featured content
  
# Slides Microservice
- create videos like tiktok
- create filters/effects for videos
- add comments to videos
- stitch, reply, duet videos