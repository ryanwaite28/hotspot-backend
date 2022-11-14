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

Below is a break-down of what each microservice will handle and be responsible for:



# Users Microservice
- creating user accounts
- querying user accounts
- updating user accounts
- deleting user accounts
- password resets
- email verifications
- phone verifications

# Auth Microservice
- verifying user logins
- checking jwt
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
- create posts
- posts with media
- post reactions
- sharing posts
- saving/favoriting posts

# Comments Microservice
- create comments
- comments with media
- comment reactions
- sharing comments
- saving/favoriting comments


# Replies Microservice
- create replies
- replies with media
- reply reactions
- sharing replies
- saving/favoriting replies

# Conversations Microservice
- create groupchats
- groupchat messages with media
- groupchat message reactions
- groupchat message reply

# Notices Microservice
- create notice (same thing as a tweet from twitter)
- quote notice
- share notice
- save notice
- reply notice
- react to notice
- notice media


# Cliques Microservice
- create cliques (same as facebook group)
- clique posts, comments, replies
- clique followers, members

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