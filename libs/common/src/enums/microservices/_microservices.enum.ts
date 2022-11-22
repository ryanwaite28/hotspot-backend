export enum MicroserviceNames {
  USERS = 'USERS',
  AUTH = 'AUTH',
  NOTIFICATIONS = 'NOTIFICATIONS',
  MESSAGES = 'MESSAGES',
  POSTS = 'POSTS',
  COMMENTS = 'COMMENTS',
  REPLIES = 'REPLIES',
  CONVERSATIONS = 'CONVERSATIONS',
  NOTICES = 'NOTICES',
  CLIQUES = 'CLIQUES',
  STORIES = 'STORIES',
  SOCIALNETWORKS = 'SOCIALNETWORKS',
  COMMUNICATIONS = 'COMMUNICATIONS',
  ANALYTICS = 'ANALYTICS',
  ADVERTISEMENTS = 'ADVERTISEMENTS',
  SLIDES = 'SLIDES',
  LIVESTREAMS = 'LIVESTREAMS',
}

export const MicroserviceNamesList = Object.keys(MicroserviceNames) as MicroserviceNames[];


export const available_microservices_list = [
  MicroserviceNames.USERS,
  MicroserviceNames.AUTH,
  MicroserviceNames.NOTIFICATIONS,
];
export const available_microservices_set = new Set(available_microservices_list);