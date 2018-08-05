import React from "react";
import ChatBox from "../components/ChatBox";
import StreamPlayer from "../components/StreamPlayer";
import StreamHeader from "../components/StreamHeader";
import StreamDetailsPanel from "../components/StreamDetailsPanel";
import Utils from "../Utils"
import "./Watch.css"

class WatchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamInfo: {
  "liveStreamingDetails": {
    "concurrentViewers": "5290",
    "actualStartTime": "2018-08-01T10:19:52.000Z",
    "activeLiveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
  },
  "kind": "youtube#video",
  "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/P4HE6TYoRKGMM3NE-HElSOf5Riw\"",
  "id": "9ywjjWAkeL0",
  "snippet": {
    "localized": {
      "title": "lofi hip hop radio - beats to relax/study to",
      "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the radio offline with my Spotify playlist \n→ http://bit.ly/chilledcowradio\n\n👕 ChilledCow shop\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n-30/07/2018 New beats added\n\n🎶 Full playlist/support beatmakers (30/07/2018)\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n💡 Any idea or recommendation to improve the radio? \n→ contact@thechilledcow.com\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow"
    },
    "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
    "thumbnails": {
      "default": {
        "height": 90,
        "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/default_live.jpg",
        "width": 120
      },
      "medium": {
        "height": 180,
        "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/mqdefault_live.jpg",
        "width": 320
      },
      "high": {
        "height": 360,
        "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/hqdefault_live.jpg",
        "width": 480
      },
      "maxres": {
        "height": 720,
        "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/maxresdefault_live.jpg",
        "width": 1280
      },
      "standard": {
        "height": 480,
        "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/sddefault_live.jpg",
        "width": 640
      }
    },
    "categoryId": "10",
    "channelTitle": "ChilledCow",
    "publishedAt": "2018-08-01T10:19:45.000Z",
    "title": "lofi hip hop radio - beats to relax/study to",
    "liveBroadcastContent": "live",
    "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the radio offline with my Spotify playlist \n→ http://bit.ly/chilledcowradio\n\n👕 ChilledCow shop\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n-30/07/2018 New beats added\n\n🎶 Full playlist/support beatmakers (30/07/2018)\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n💡 Any idea or recommendation to improve the radio? \n→ contact@thechilledcow.com\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow",
    "tags": [
      "lo-fi",
      "lo fi",
      "lofi",
      "lofi hiphop",
      "lo-fi hiphop",
      "lo fi hiphop",
      "hiphop",
      "hip hop",
      "lofi hip hop",
      "lo-fi hip hop",
      "lo fi hip hop",
      "lofi radio",
      "lo-fi radio",
      "lo fi radio",
      "lofi hip hop radio",
      "lo-fi hip hop radio",
      "lo fi hip hop radio",
      "chilledcow",
      "chilled cow",
      "chilledcow radio",
      "chilled cow radio",
      "chilledcow station",
      "lofi radio chilledcow",
      "chillhop",
      "study music",
      "lofi hip hop radio - beats to relax/study to",
      "beats to relax",
      "music to study",
      "radio",
      "relaxing music",
      "mood music"
    ]
  }
},
      chatMessages: [
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTmIxMG9UTjFOd0NGWWdkWkFvZE9PMEJjdxIcQ0t5X3Y2REwxTndDRlhEVTR3Y2RndllNUXctNQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCOOUvGi9y7fRhk1P17yDaLw",
      "isChatOwner": false,
      "displayName": "MyChemicalBeauty",
      "profileImageUrl": "https://yt3.ggpht.com/-qsUCCH8djBc/AAAAAAAAAAI/AAAAAAAAAAA/_9DWGuggOkk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCOOUvGi9y7fRhk1P17yDaLw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@punk lol I remember you were mean to me at first. But I dodged you 😉👍🏻lol"
      },
      "authorChannelId": "UCOOUvGi9y7fRhk1P17yDaLw",
      "hasDisplayContent": true,
      "displayMessage": "@punk lol I remember you were mean to me at first. But I dodged you 😉👍🏻lol",
      "publishedAt": "2018-08-04T23:58:03.164Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/1qCmwO5Feik_Zsg_l5lfnueLsJI\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTl9MbW9iTjFOd0NGY2QwbUFvZGNLZ0RZURIcQ0lHbndLUEwxTndDRlJFWTRRb2R1MzhIVGctMg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC3cADkFN1yI5mUZ_TSn1A6g",
      "isChatOwner": false,
      "displayName": "Rounid",
      "profileImageUrl": "https://yt3.ggpht.com/-YvNs5iwUpds/AAAAAAAAAAI/AAAAAAAAAAA/cIiFUy3MBDk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC3cADkFN1yI5mUZ_TSn1A6g",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Punk Hindus can disagree with whatever they want they can believe in the after life if they wish and there is nothing or nobody in this world who will prevent them from doing so"
      },
      "authorChannelId": "UC3cADkFN1yI5mUZ_TSn1A6g",
      "hasDisplayContent": true,
      "displayMessage": "@Punk Hindus can disagree with whatever they want they can believe in the after life if they wish and there is nothing or nobody in this world who will prevent them from doing so",
      "publishedAt": "2018-08-04T23:58:06.435Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/J5RbYQBoHnyE7M4EvlP8QT0u6zA\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDS1B0OFliTjFOd0NGVWdCWkFvZFdVVUoxdxInQ09mdXBkTE0xTndDRlVhdHhBb2RuMkFORGcxNTMzNDI3MDkzOTQ3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCu0qxe9F2pqyHX-35O1rphw",
      "isChatOwner": false,
      "displayName": "The Hair Is A Lie",
      "profileImageUrl": "https://yt3.ggpht.com/-cXkL5A400mg/AAAAAAAAAAI/AAAAAAAAAAA/03OOKGI7rc0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Faggot"
      },
      "authorChannelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "hasDisplayContent": true,
      "displayMessage": "Faggot",
      "publishedAt": "2018-08-04T23:58:07.865Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/R6eD2f2XXva-A4GtNsPcpnetM34\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTTdDNUlmTjFOd0NGVVJ5bUFvZGtmc0Y3URIbQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVE3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "dreams are nightmares sometimes if you think about it"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "dreams are nightmares sometimes if you think about it",
      "publishedAt": "2018-08-04T23:58:09.744Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/TVUZToONWpEwjkM2Tdm6BXJQLKw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSm5zbm9yTjFOd0NGWVFzWkFvZGcxb0tzURInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MDk0MDk1",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "C'est dommage en effet tout ça a cause de la barrière de la langue"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "C'est dommage en effet tout ça a cause de la barrière de la langue",
      "publishedAt": "2018-08-04T23:58:14.894Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ekxVSw0KHcpChHr1AwN-zt80c-U\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDS25UdjVETjFOd0NGY0lLWkFvZHctSVAxURIcQ0xISHFzakUxTndDRmRiZ3dRb2RpaUFJYWcxMQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC_hjyDRylW76K37rd5sYcDg",
      "isChatOwner": false,
      "displayName": "Alison Soifer",
      "profileImageUrl": "https://yt3.ggpht.com/-WoD07qqrtl0/AAAAAAAAAAI/AAAAAAAAAAA/H1SZYoqLB1s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC_hjyDRylW76K37rd5sYcDg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "This music is lit"
      },
      "authorChannelId": "UC_hjyDRylW76K37rd5sYcDg",
      "hasDisplayContent": true,
      "displayMessage": "This music is lit",
      "publishedAt": "2018-08-04T23:58:28.014Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/RzG6hOhHztAUz-RMjftqF-eC0Ks\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDS0dHcEpQTjFOd0NGVXNOaEFvZElFa0VNdxIbQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVE4",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "beat the beat up"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "beat the beat up",
      "publishedAt": "2018-08-04T23:58:33.853Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/V5coQLfmc_ZtvQAxRomUhWc92g8\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTnlZczVUTjFOd0NGYzBRaEFvZHNhOEpkQRIcQ0lUbTRPRzcxTndDRlUyZEZRb2RwX3dLNlE1OQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatOwner": false,
      "displayName": "Punk",
      "profileImageUrl": "https://yt3.ggpht.com/-GuN1nK8n3sM/AAAAAAAAAAI/AAAAAAAAAAA/yX7w_xII8bc/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Dragone Studio That's normal for someone with a high iq to feel superior, you just have to remember that you aren't lol"
      },
      "authorChannelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "hasDisplayContent": true,
      "displayMessage": "@Dragone Studio That's normal for someone with a high iq to feel superior, you just have to remember that you aren't lol",
      "publishedAt": "2018-08-04T23:58:36.199Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/DsnwowhJfR-fwwlBIocuwkKuN3Q\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSWpsbUpmTjFOd0NGY2doaEFvZFhNMEJTURInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MTIxMjU3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "rem à ouai c'est pour ça"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "rem à ouai c'est pour ça",
      "publishedAt": "2018-08-04T23:58:42.057Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/78-TEnu6nYdqYLtBrTInorXC6w8\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSkM5czVuTjFOd0NGWUpfbUFvZEc5SUlUdxInQ1BMdnd0cTkxTndDRllRSDRRb2RfZEFDc2cxNTMzNDI3MTI4NjUz",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCpFzmPg-h-aasLtRhKojwtw",
      "isChatOwner": false,
      "displayName": "rem amami",
      "profileImageUrl": "https://yt3.ggpht.com/-U_NEgSlEmSw/AAAAAAAAAAI/AAAAAAAAAAA/4TmIdevuhyU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "yum mie après se manga reste à jamais dans la mémoire tellement il est marquant"
      },
      "authorChannelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "hasDisplayContent": true,
      "displayMessage": "yum mie après se manga reste à jamais dans la mémoire tellement il est marquant",
      "publishedAt": "2018-08-04T23:58:46.689Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/l8GFAMM1HzjXrm4py3Qnzfkugfo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDUFM1czVyTjFOd0NGY0lLWkFvZG8yc1BZQRInQ0pmNi01Zk4xTndDRlNmUndRb2RQc2dMREExNTMzNDI3MTQ1NDQ1",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCkx6IwqIU2lLvsPygBZ8_Gw",
      "isChatOwner": false,
      "displayName": "Coisa zueira",
      "profileImageUrl": "https://yt3.ggpht.com/-1IxhutF-Gqs/AAAAAAAAAAI/AAAAAAAAAAA/L564_6OozFw/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCkx6IwqIU2lLvsPygBZ8_Gw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "goulart?"
      },
      "authorChannelId": "UCkx6IwqIU2lLvsPygBZ8_Gw",
      "hasDisplayContent": true,
      "displayMessage": "goulart?",
      "publishedAt": "2018-08-04T23:58:48.786Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/2uA_zO9FVnWjx2SoBc18UMo_S30\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTW1MbXA3TjFOd0NGWUVwWkFvZHg3TU9XURIbQ0pEY3hxZk0xTndDRlFKcE1Bb2RKSUFBbmcw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCTsp6ooSTEfjfaeW9oT6IaA",
      "isChatOwner": false,
      "displayName": "Sceptius",
      "profileImageUrl": "https://yt3.ggpht.com/-sovb5ZPQGUo/AAAAAAAAAAI/AAAAAAAAAAA/rvpRDR0qCSs/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCTsp6ooSTEfjfaeW9oT6IaA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Freud is outdated."
      },
      "authorChannelId": "UCTsp6ooSTEfjfaeW9oT6IaA",
      "hasDisplayContent": true,
      "displayMessage": "Freud is outdated.",
      "publishedAt": "2018-08-04T23:58:56.759Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/BH87AfnTorNm71r3lGCp6yJT4io\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDTC1SMGFETjFOd0NGZEFuWkFvZE92Y0wyURIdQ0pUYXlvakYxTndDRlpnQVpBb2Q5ZTBFdWctMTc",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatOwner": false,
      "displayName": "Alex Fredenburg",
      "profileImageUrl": "https://yt3.ggpht.com/-ODeb3Mg-Zg0/AAAAAAAAAAI/AAAAAAAAAAA/shbFHgNz160/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Dragone Studio Oh man, mom told ya your were special huh?? Well the sooner you realize no one is special the better and more confidence you'll have in your own beliefs and how you carry yourself"
      },
      "authorChannelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "hasDisplayContent": true,
      "displayMessage": "@Dragone Studio Oh man, mom told ya your were special huh?? Well the sooner you realize no one is special the better and more confidence you'll have in your own beliefs and how you carry yourself",
      "publishedAt": "2018-08-04T23:59:01.855Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/0_btQZvVv1Yd4sB76VRRRHn9F8g\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDTVM3MEtYTjFOd0NGWWdkWkFvZHNfd01uURIdQ09fUjRLbkcxTndDRllZUzRRb2Q5eUlJNnctMjY",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UClFikMq1_G3HKWfAePQ2WCQ",
      "isChatOwner": false,
      "displayName": "Dragone Studio",
      "profileImageUrl": "https://yt3.ggpht.com/-ywvG-y9Db2s/AAAAAAAAAAI/AAAAAAAAAAA/cdRqHVuEtS4/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UClFikMq1_G3HKWfAePQ2WCQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Alex fredenburg superiority and inferiority thing that make me detached and like not close enough to people"
      },
      "authorChannelId": "UClFikMq1_G3HKWfAePQ2WCQ",
      "hasDisplayContent": true,
      "displayMessage": "Alex fredenburg superiority and inferiority thing that make me detached and like not close enough to people",
      "publishedAt": "2018-08-04T23:59:12.330Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/6uvUT-rkSS4JyS8SQKDByJrg-aM\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDSmZJNjZiTjFOd0NGUXN5WkFvZFFCd01MURIdQ0pUYXlvakYxTndDRlpnQVpBb2Q5ZTBFdWctMTg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatOwner": false,
      "displayName": "Alex Fredenburg",
      "profileImageUrl": "https://yt3.ggpht.com/-ODeb3Mg-Zg0/AAAAAAAAAAI/AAAAAAAAAAA/shbFHgNz160/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "You*"
      },
      "authorChannelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "hasDisplayContent": true,
      "displayMessage": "You*",
      "publishedAt": "2018-08-04T23:59:14.871Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/SrXygyvcrRIRbEyjVV6Tg25lgB4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTC1RdUtqTjFOd0NGWWNuWkFvZElKUVBZURInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MTU3NDI2",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "rem tu me donnes trop envie de le lire, il a l'air génial"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "rem tu me donnes trop envie de le lire, il a l'air génial",
      "publishedAt": "2018-08-04T23:59:18.222Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/U7eVIwFBluJVedLVZQlEQ6KgCqU\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSnY0X3FqTjFOd0NGWkFyWkFvZENRRU0yQRIcQ052bG12UEwxTndDRlFWNEZRb2RwUjhMenctNw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatOwner": false,
      "displayName": "Maribelus",
      "profileImageUrl": "https://yt3.ggpht.com/-ZVZqMB0btMw/AAAAAAAAAAI/AAAAAAAAAAA/wXdS3WjRBvQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Marquis of Sade"
      },
      "authorChannelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "hasDisplayContent": true,
      "displayMessage": "Marquis of Sade",
      "publishedAt": "2018-08-04T23:59:19.383Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/4gAWbFyGTW5tkHUpe-ve88oT_S4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSjZJaWFuTjFOd0NGWVpCbUFvZGZPY0ptdxInQ0p1RHZxYk4xTndDRlFiOGZnb2RzM0VHcVExNTMzNDI3MTY1MDYx",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCu0qxe9F2pqyHX-35O1rphw",
      "isChatOwner": false,
      "displayName": "The Hair Is A Lie",
      "profileImageUrl": "https://yt3.ggpht.com/-cXkL5A400mg/AAAAAAAAAAI/AAAAAAAAAAA/03OOKGI7rc0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "NIHGER"
      },
      "authorChannelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "hasDisplayContent": true,
      "displayMessage": "NIHGER",
      "publishedAt": "2018-08-04T23:59:19.548Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/IQeFdsPsSHQsDv8A2mem33GNncs\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTDZ6azYzTjFOd0NGVUl0WkFvZEhwNERWQRInQ0p1RHZxYk4xTndDRlFiOGZnb2RzM0VHcVExNTMzNDI3MTczNjE3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCu0qxe9F2pqyHX-35O1rphw",
      "isChatOwner": false,
      "displayName": "The Hair Is A Lie",
      "profileImageUrl": "https://yt3.ggpht.com/-cXkL5A400mg/AAAAAAAAAAI/AAAAAAAAAAA/03OOKGI7rc0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "FUCK YOU HUYS"
      },
      "authorChannelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "hasDisplayContent": true,
      "displayMessage": "FUCK YOU HUYS",
      "publishedAt": "2018-08-04T23:59:28.106Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/IO_DwK4W2sdtmej6nnyeeNFHTz8\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTFh4MmE3TjFOd0NGVVVwWkFvZEp4Y0lsURIcQ05yU3BMdksxTndDRmRacU1Bb2Q5NVlOUkEtNg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC65Zk8giOSm-vtijjsN_ezg",
      "isChatOwner": false,
      "displayName": "Katlyn Hightower",
      "profileImageUrl": "https://yt3.ggpht.com/-aHpxbwTgRV0/AAAAAAAAAAI/AAAAAAAAAAA/SVBPkK5AZwA/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC65Zk8giOSm-vtijjsN_ezg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "I’m bored asf"
      },
      "authorChannelId": "UC65Zk8giOSm-vtijjsN_ezg",
      "hasDisplayContent": true,
      "displayMessage": "I’m bored asf",
      "publishedAt": "2018-08-04T23:59:31.358Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3VhopkrypLDIkl1y0zl9vhRzbzE\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDUE92bXJETjFOd0NGVklBaEFvZGRJc0lPQRIcQ05UdnE3akoxTndDRlpySTFRb2RHTjhGV2cyMg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdaRp4yjulDVTl-oGp1e8zA",
      "isChatOwner": false,
      "displayName": "Alexandre Duru",
      "profileImageUrl": "https://yt3.ggpht.com/-MrroekngFKM/AAAAAAAAAAI/AAAAAAAAAAA/iOKrjhigaO0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdaRp4yjulDVTl-oGp1e8zA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@ʏᴜᴍ。ᴍɪᴇ。 T'as lu dragon ball?"
      },
      "authorChannelId": "UCdaRp4yjulDVTl-oGp1e8zA",
      "hasDisplayContent": true,
      "displayMessage": "@ʏᴜᴍ。ᴍɪᴇ。 T'as lu dragon ball?",
      "publishedAt": "2018-08-04T23:59:34.512Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/VQuDEl1ZH02Z_xa9IKUX4-AMCZo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDUEdBOUxQTjFOd0NGWTQ5WkFvZFdRNExGZxIcQ0xyeWpwX0UxTndDRlJRSFpRb2RZUWNQT1E0Mg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC-_3VdI-f6s4HLpc2NsWntQ",
      "isChatOwner": false,
      "displayName": "raymon skifly",
      "profileImageUrl": "https://yt3.ggpht.com/-sXsLPOpthLQ/AAAAAAAAAAI/AAAAAAAAAAA/cjTAQjU9jAk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC-_3VdI-f6s4HLpc2NsWntQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Help me complete my goal. With what they can give :) Thank you very much! paypal.me/pools/c/86Jg8ZtqyV"
      },
      "authorChannelId": "UC-_3VdI-f6s4HLpc2NsWntQ",
      "hasDisplayContent": true,
      "displayMessage": "Help me complete my goal. With what they can give :) Thank you very much! paypal.me/pools/c/86Jg8ZtqyV",
      "publishedAt": "2018-08-04T23:59:42.272Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/2qnb_c8YGD-kRU2zjR2E_Y_3tsE\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTlA0OTdUTjFOd0NGY2w5bUFvZERka0xSZxIbQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVE5",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "fr"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "fr",
      "publishedAt": "2018-08-04T23:59:44.434Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/NUqsQM1zVFW3Xu4j5GwAUJXgjVk\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDT0RnazdYTjFOd0NGY01WaEFvZFRnZ0VBURIbQ1A3Z3NJek4xTndDRmRpZFZRb2RfMklIdEEw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCoVMPGMVRiv-Mejrj88gCBw",
      "isChatOwner": false,
      "displayName": "SpiritAV",
      "profileImageUrl": "https://yt3.ggpht.com/-h55Kr4mJ2Bc/AAAAAAAAAAI/AAAAAAAAAAA/W6-xLS1NyQI/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCoVMPGMVRiv-Mejrj88gCBw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "lol the hair is a lie I tried to wipe the hair off my screen"
      },
      "authorChannelId": "UCoVMPGMVRiv-Mejrj88gCBw",
      "hasDisplayContent": true,
      "displayMessage": "lol the hair is a lie I tried to wipe the hair off my screen",
      "publishedAt": "2018-08-04T23:59:44.889Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Y80tyY2QzTRBd11z128yZ8C2SVs\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSmF2czdYTjFOd0NGY2t6WkFvZHYtRUxnZxIcQ052bG12UEwxTndDRlFWNEZRb2RwUjhMenctOA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatOwner": false,
      "displayName": "Maribelus",
      "profileImageUrl": "https://yt3.ggpht.com/-ZVZqMB0btMw/AAAAAAAAAAI/AAAAAAAAAAA/wXdS3WjRBvQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "i am drunk"
      },
      "authorChannelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "hasDisplayContent": true,
      "displayMessage": "i am drunk",
      "publishedAt": "2018-08-04T23:59:45.407Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/LZtkAgY5g3oKvGINcVecSoMvW_I\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSy1UMHJYTjFOd0NGWUV4WkFvZDdtMEszZxInQ0p1RHZxYk4xTndDRlFiOGZnb2RzM0VHcVExNTMzNDI3MTkxNDQz",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCu0qxe9F2pqyHX-35O1rphw",
      "isChatOwner": false,
      "displayName": "The Hair Is A Lie",
      "profileImageUrl": "https://yt3.ggpht.com/-cXkL5A400mg/AAAAAAAAAAI/AAAAAAAAAAA/03OOKGI7rc0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "FUCK U"
      },
      "authorChannelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "hasDisplayContent": true,
      "displayMessage": "FUCK U",
      "publishedAt": "2018-08-04T23:59:45.912Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fOj7OjXizC8BCpbw4XzLWF21vOA\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSkxDa3JuTjFOd0NGY3h0bUFvZHRRRUlkdxIcQ0lHbndLUEwxTndDRlJFWTRRb2R1MzhIVGctMw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC3cADkFN1yI5mUZ_TSn1A6g",
      "isChatOwner": false,
      "displayName": "Rounid",
      "profileImageUrl": "https://yt3.ggpht.com/-YvNs5iwUpds/AAAAAAAAAAI/AAAAAAAAAAA/cIiFUy3MBDk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC3cADkFN1yI5mUZ_TSn1A6g",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Nightmares are bad dreams but it depends on what you count as bad or scary it’s what makes you, you keem Vapez"
      },
      "authorChannelId": "UC3cADkFN1yI5mUZ_TSn1A6g",
      "hasDisplayContent": true,
      "displayMessage": "Nightmares are bad dreams but it depends on what you count as bad or scary it’s what makes you, you keem Vapez",
      "publishedAt": "2018-08-04T23:59:53.258Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/QgbdK9zclzijBBkTVyZOCzEr6SI\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTU9nckxuTjFOd0NGYWtBaEFvZEtDd0RPQRInQ0lHYXU3TE4xTndDRlFxTFZRb2Rtd2NIUncxNTMzNDIzNDkzMzI3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCRuaKi0fi7J7NMRB-KtWlKQ",
      "isChatOwner": false,
      "displayName": "gileon pardo",
      "profileImageUrl": "https://yt3.ggpht.com/-HAWV3Hdd73M/AAAAAAAAAAI/AAAAAAAAAAA/qo2Vr5-r3oY/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCRuaKi0fi7J7NMRB-KtWlKQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "D E E P"
      },
      "authorChannelId": "UCRuaKi0fi7J7NMRB-KtWlKQ",
      "hasDisplayContent": true,
      "displayMessage": "D E E P",
      "publishedAt": "2018-08-04T23:59:53.679Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Y1SGuRFTE981Sw5uO99qTRs5_iQ\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDUEdIN3JuTjFOd0NGY2QwbUFvZFpCRU1HURIcQ0lUbTRPRzcxTndDRlUyZEZRb2RwX3dLNlE2MA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatOwner": false,
      "displayName": "Punk",
      "profileImageUrl": "https://yt3.ggpht.com/-GuN1nK8n3sM/AAAAAAAAAAI/AAAAAAAAAAA/yX7w_xII8bc/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@MyChemicalBeauty Really? I can't even remember what I said lol, I was probably only messing with you"
      },
      "authorChannelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "hasDisplayContent": true,
      "displayMessage": "@MyChemicalBeauty Really? I can't even remember what I said lol, I was probably only messing with you",
      "publishedAt": "2018-08-04T23:59:54.758Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/5AP9uxNYpBxevuFnM5xsrWffwLw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDSTNaa0x2TjFOd0NGWUVWWkFvZER2NEptZxIdQ09fUjRLbkcxTndDRllZUzRRb2Q5eUlJNnctMjc",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UClFikMq1_G3HKWfAePQ2WCQ",
      "isChatOwner": false,
      "displayName": "Dragone Studio",
      "profileImageUrl": "https://yt3.ggpht.com/-ywvG-y9Db2s/AAAAAAAAAAI/AAAAAAAAAAA/cdRqHVuEtS4/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UClFikMq1_G3HKWfAePQ2WCQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Punk don’t read those"
      },
      "authorChannelId": "UClFikMq1_G3HKWfAePQ2WCQ",
      "hasDisplayContent": true,
      "displayMessage": "Punk don’t read those",
      "publishedAt": "2018-08-04T23:59:57.422Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/KrYsQUvJI4NyzTD0VT6e7LwEFbo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDT1MwemJ2TjFOd0NGUkVWWkFvZFZaME5CURIcQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVExMA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "who can rap"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "who can rap",
      "publishedAt": "2018-08-04T23:59:58.417Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/tMCYjkyC_z_dzEUPv83yQP20oy4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTE8xZzc3TjFOd0NGUXRibUFvZF9KTU8tdxIbQ0lPb3VMUE0xTndDRlFKQ3Nnb2Q1VVFQMXcy",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCnMxosYiAxmi4a3ovont6vQ",
      "isChatOwner": false,
      "displayName": "}l{ 0 P l/l l{",
      "profileImageUrl": "https://yt3.ggpht.com/-aD0ZLwm-jOM/AAAAAAAAAAI/AAAAAAAAAAA/8qqjHgPZwiI/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCnMxosYiAxmi4a3ovont6vQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Were is my DeathMetall!!!!!111!!"
      },
      "authorChannelId": "UCnMxosYiAxmi4a3ovont6vQ",
      "hasDisplayContent": true,
      "displayMessage": "Were is my DeathMetall!!!!!111!!",
      "publishedAt": "2018-08-05T00:00:03.496Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/M57cWUyhBV-5R0Zh3IEEFFGWoFk\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTXpUdHI3TjFOd0NGWUZlbUFvZDAyOEtZZxInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MjAzNTI2",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Alexandre non ça m'attire pas spécialement à première vu"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "Alexandre non ça m'attire pas spécialement à première vu",
      "publishedAt": "2018-08-05T00:00:04.336Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fw6AuiUCM3bL960RMiZBtzXoSWo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDT0cxd01ITjFOd0NGWWxQbUFvZE9LMEYyZxIcQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVExMQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "i know"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "i know",
      "publishedAt": "2018-08-05T00:00:10.787Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/pvNF6nJkq1Y8UTQaV1OwEC-xtHc\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDUHVoM3NITjFOd0NGVUl0WkFvZGdlb0hKdxInQ0x6cGc3WE4xTndDRlVjTlpBb2RmWGtEV0ExNTMzNDI3MjEwMTQx",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC5igCB44E3BtJn7253_W5Jw",
      "isChatOwner": false,
      "displayName": "Belen Borja",
      "profileImageUrl": "https://yt3.ggpht.com/-mwW7wLcyjxA/AAAAAAAAAAI/AAAAAAAAAAA/JGM3P6D-S7s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC5igCB44E3BtJn7253_W5Jw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "what! 💕"
      },
      "authorChannelId": "UC5igCB44E3BtJn7253_W5Jw",
      "hasDisplayContent": true,
      "displayMessage": "what! 💕",
      "publishedAt": "2018-08-05T00:00:11.276Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/YuWraQ14Jm23KljTeYvqQ7v2Tyo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTFhRNnNITjFOd0NGZElCWkFvZExoTU5vZxInQ1BMdnd0cTkxTndDRllRSDRRb2RfZEFDc2cxNTMzNDI3MjEzNDE3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCpFzmPg-h-aasLtRhKojwtw",
      "isChatOwner": false,
      "displayName": "rem amami",
      "profileImageUrl": "https://yt3.ggpht.com/-U_NEgSlEmSw/AAAAAAAAAAI/AAAAAAAAAAA/4TmIdevuhyU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "yum mie franchement de tout les mangas que je t'ai conseillé il faut que lise death note est parasite il sont parfait"
      },
      "authorChannelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "hasDisplayContent": true,
      "displayMessage": "yum mie franchement de tout les mangas que je t'ai conseillé il faut que lise death note est parasite il sont parfait",
      "publishedAt": "2018-08-05T00:00:11.479Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/BZ_7FFO0TxrbGUULN3djlHYY-R4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDSUdxak1QTjFOd0NGUXc4WkFvZHRTWU5YZxIbQ1BURGdhdkoxTndDRlFJT1pBb2RScllMcVE2",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCTtd-gECABreQ6eOLLsjOeA",
      "isChatOwner": false,
      "displayName": "tabitha kelly",
      "profileImageUrl": "https://yt3.ggpht.com/-sgyQ8uPQknw/AAAAAAAAAAI/AAAAAAAAAAA/AcUuLL3d_-s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "me b"
      },
      "authorChannelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "hasDisplayContent": true,
      "displayMessage": "me b",
      "publishedAt": "2018-08-05T00:00:14.128Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7l1OLwp1BgKjeoFA8YwfmEi9GFg\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTXVIZ3NUTjFOd0NGVUl0WkFvZFFWY0JJdxIbQ08zazRjRE4xTndDRlZCdE1Bb2R6UFVJWkEw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJXqQQVzQfC-jI_lJ-kHZrA",
      "isChatOwner": false,
      "displayName": "a smol bean",
      "profileImageUrl": "https://yt3.ggpht.com/-fJqi8_RHPqE/AAAAAAAAAAI/AAAAAAAAAAA/zQhf-l3mQnQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJXqQQVzQfC-jI_lJ-kHZrA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "hi everyone"
      },
      "authorChannelId": "UCJXqQQVzQfC-jI_lJ-kHZrA",
      "hasDisplayContent": true,
      "displayMessage": "hi everyone",
      "publishedAt": "2018-08-05T00:00:16.057Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/i-hvqrvzyUeDtqg96RPkrAKK9MM\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTVNpbHNUTjFOd0NGWUV4WkFvZHpIb09PQRIbQ0pTenhyVEsxTndDRlExajRBb2RCbnNLMVEw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC5GJU073TfUlb8xctqF6IrA",
      "isChatOwner": false,
      "displayName": "matakasper",
      "profileImageUrl": "https://yt3.ggpht.com/-cs2NFl4ilFU/AAAAAAAAAAI/AAAAAAAAAAA/2rnPiA0aueo/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC5GJU073TfUlb8xctqF6IrA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Vi er på bæret wæææ"
      },
      "authorChannelId": "UC5GJU073TfUlb8xctqF6IrA",
      "hasDisplayContent": true,
      "displayMessage": "Vi er på bæret wæææ",
      "publishedAt": "2018-08-05T00:00:16.388Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7y-gwXtI6EDpf1wEIBk1jt_CyuM\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDT2JjaHNuTjFOd0NGY3NvWkFvZFRXY0xCURIcQ052bG12UEwxTndDRlFWNEZRb2RwUjhMenctOQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatOwner": false,
      "displayName": "Maribelus",
      "profileImageUrl": "https://yt3.ggpht.com/-ZVZqMB0btMw/AAAAAAAAAAI/AAAAAAAAAAA/wXdS3WjRBvQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Vapez you are very cute😈"
      },
      "authorChannelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "hasDisplayContent": true,
      "displayMessage": "Vapez you are very cute😈",
      "publishedAt": "2018-08-05T00:00:26.619Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/qhnAhflwYxbkZM8wL2f9CHr0Ato\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTzZ6b012TjFOd0NGUWtIaEFvZHFuY0swZxIbQ0lPb3VMUE0xTndDRlFKQ3Nnb2Q1VVFQMXcz",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCnMxosYiAxmi4a3ovont6vQ",
      "isChatOwner": false,
      "displayName": "}l{ 0 P l/l l{",
      "profileImageUrl": "https://yt3.ggpht.com/-aD0ZLwm-jOM/AAAAAAAAAAI/AAAAAAAAAAA/8qqjHgPZwiI/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCnMxosYiAxmi4a3ovont6vQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "hi bro"
      },
      "authorChannelId": "UCnMxosYiAxmi4a3ovont6vQ",
      "hasDisplayContent": true,
      "displayMessage": "hi bro",
      "publishedAt": "2018-08-05T00:00:31.234Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/rYJ8wDPS-eaXYxVxSVsrf_h_tek\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDUF9taWN6TjFOd0NGWXA3bUFvZHdld09IURIcQ0lYOHdxZk4xTndDRlFWUU1Bb2R5cjBDSnctMA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@keem Vapez me"
      },
      "authorChannelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "hasDisplayContent": true,
      "displayMessage": "@keem Vapez me",
      "publishedAt": "2018-08-05T00:00:32.961Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/xeK1VzoH3walGMTjq5vQq12Lqjo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTWUwdzgzTjFOd0NGWVlJWkFvZHVUb0tydxIcQ0pxSW9NUE4xTndDRlpqYXdRb2RJbHdJbEEtMA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCGXm9RzoEpWaqTKey96TBMA",
      "isChatOwner": false,
      "displayName": "Scribbles Jackson",
      "profileImageUrl": "https://yt3.ggpht.com/-Tm4WnLxbVz4/AAAAAAAAAAI/AAAAAAAAAAA/r2Ql75eqIR8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCGXm9RzoEpWaqTKey96TBMA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Hello world"
      },
      "authorChannelId": "UCGXm9RzoEpWaqTKey96TBMA",
      "hasDisplayContent": true,
      "displayMessage": "Hello world",
      "publishedAt": "2018-08-05T00:00:36.002Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/4I0klPXeC61SbA1opS7ekZ41dAA\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTnY5d2M3TjFOd0NGWUZIbUFvZEQxRUhGURIbQ09LZzdxVEoxTndDRlJiZHdRb2RSc3NIdGcx",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCOAYedhiLz-a8PVo_LpaDdQ",
      "isChatOwner": false,
      "displayName": "Pheefee",
      "profileImageUrl": "https://yt3.ggpht.com/-6MtLAi71sMg/AAAAAAAAAAI/AAAAAAAAAAA/FPAbRvJE3qY/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCOAYedhiLz-a8PVo_LpaDdQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "welcome 💜"
      },
      "authorChannelId": "UCOAYedhiLz-a8PVo_LpaDdQ",
      "hasDisplayContent": true,
      "displayMessage": "welcome 💜",
      "publishedAt": "2018-08-05T00:00:38.076Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/2MFqa9TrjSTW7_MT9BD8yEKneKw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDTHJHc05QTjFOd0NGVklFaEFvZFFkb0ZFURIdQ052bG12UEwxTndDRlFWNEZRb2RwUjhMenctMTA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatOwner": false,
      "displayName": "Maribelus",
      "profileImageUrl": "https://yt3.ggpht.com/-ZVZqMB0btMw/AAAAAAAAAAI/AAAAAAAAAAA/wXdS3WjRBvQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "🤡"
      },
      "authorChannelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "hasDisplayContent": true,
      "displayMessage": "🤡",
      "publishedAt": "2018-08-05T00:00:48.276Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/au62CJFXSrfgoSPM8PCPRNBtCDo\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDTk9SOGRQTjFOd0NGUTFzbUFvZFEwTUNQZxIdQ0pUYXlvakYxTndDRlpnQVpBb2Q5ZTBFdWctMTk",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatOwner": false,
      "displayName": "Alex Fredenburg",
      "profileImageUrl": "https://yt3.ggpht.com/-ODeb3Mg-Zg0/AAAAAAAAAAI/AAAAAAAAAAA/shbFHgNz160/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Dragone Studio That's what I mean. No such thing. It's how YOU carry YOURSELF, not how those act around you. If you feel inferior understand that's okay and normal. Do something that you're proud of"
      },
      "authorChannelId": "UCRFAju-yLBG6Yb7J4bJBjOA",
      "hasDisplayContent": true,
      "displayMessage": "@Dragone Studio That's what I mean. No such thing. It's how YOU carry YOURSELF, not how those act around you. If you feel inferior understand that's okay and normal. Do something that you're proud of",
      "publishedAt": "2018-08-05T00:00:49.334Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/G5nyyqB7AYchq2MEEIDtcjNI8vA\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDUGZpN05YTjFOd0NGYkZ3bUFvZGNka0JrZxIbQ1BURGdhdkoxTndDRlFJT1pBb2RScllMcVE3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCTtd-gECABreQ6eOLLsjOeA",
      "isChatOwner": false,
      "displayName": "tabitha kelly",
      "profileImageUrl": "https://yt3.ggpht.com/-sgyQ8uPQknw/AAAAAAAAAAI/AAAAAAAAAAA/AcUuLL3d_-s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "i got my phone taken away and im doing eveything to keep them from looking through it jsjsksj"
      },
      "authorChannelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "hasDisplayContent": true,
      "displayMessage": "i got my phone taken away and im doing eveything to keep them from looking through it jsjsksj",
      "publishedAt": "2018-08-05T00:00:53.457Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/SWjQL4I9SgncPdeErXZhiAaG8Io\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTWFDbjlmTjFOd0NGVk5JbUFvZEp1RUVHURIcQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVExMg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "we can't make the wworld better but we can change lives to come"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "we can't make the wworld better but we can change lives to come",
      "publishedAt": "2018-08-05T00:00:56.377Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/woi1TPYZqt8GB5snhIhe8dCN0B4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTkNvX05yTjFOd0NGYzA0WkFvZHZJSUYwdxInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MjYzMzk3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "rem ouai faut que je commence death note pendant que je suis encore en vacances alors"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "rem ouai faut que je commence death note pendant que je suis encore en vacances alors",
      "publishedAt": "2018-08-05T00:01:04.197Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/XGP_VyCrPhrlT1MfaQv5tuT5SU0\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSjItc2VETjFOd0NGYzRLaEFvZFRvRURHdxIcQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVExMw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "this earth is evil"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "this earth is evil",
      "publishedAt": "2018-08-05T00:01:15.554Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/uu2Pk0zpUqik1WR7EclLjC9pLFc\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTTNfMU9ETjFOd0NGZEVQWkFvZHVfd0dnZxIcQ0lYOHdxZk4xTndDRlFWUU1Bb2R5cjBDSnctMQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Straight up yes"
      },
      "authorChannelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "hasDisplayContent": true,
      "displayMessage": "Straight up yes",
      "publishedAt": "2018-08-05T00:01:16.136Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7Ey6dOx--mx7NcpX_aXDOw2KhTw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTXZzZ09MTjFOd0NGVXN1WkFvZFE0VU5yZxIcQ051WXJ0dk4xTndDRlZWck1Bb2Q0akFKVUEtMA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCLdN-X0c3auZ4Zta3ynV5dg",
      "isChatOwner": false,
      "displayName": "Kevin Hayes",
      "profileImageUrl": "https://yt3.ggpht.com/-ItetmsZsUmo/AAAAAAAAAAI/AAAAAAAAAAA/-MItNKba7uc/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCLdN-X0c3auZ4Zta3ynV5dg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "My kind of beats fasho"
      },
      "authorChannelId": "UCLdN-X0c3auZ4Zta3ynV5dg",
      "hasDisplayContent": true,
      "displayMessage": "My kind of beats fasho",
      "publishedAt": "2018-08-05T00:01:18.952Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/xEiO2zznvJIiGB4XIC3iHak3C6I\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSlRoeU9MTjFOd0NGY3h0bUFvZDkyOE1SURIcQ0wtWDFhVEkxTndDRlVQbGtBb2QtaWdHNUExMw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCAa3_uZm9udTw2Cobeo5qnQ",
      "isChatOwner": false,
      "displayName": "Chet Baker",
      "profileImageUrl": "https://yt3.ggpht.com/-3GRwxCT7WLY/AAAAAAAAAAI/AAAAAAAAAAA/dzimg9lW1Ls/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCAa3_uZm9udTw2Cobeo5qnQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "who wants to have a normal conversation?"
      },
      "authorChannelId": "UCAa3_uZm9udTw2Cobeo5qnQ",
      "hasDisplayContent": true,
      "displayMessage": "who wants to have a normal conversation?",
      "publishedAt": "2018-08-05T00:01:20.130Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/jF5UADmXUb1qESdfpZCGG9ZpBfY\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTHp6N09YTjFOd0NGY3NVaEFvZGp6UUZsQRIbQ1BURGdhdkoxTndDRlFJT1pBb2RScllMcVE4",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCTtd-gECABreQ6eOLLsjOeA",
      "isChatOwner": false,
      "displayName": "tabitha kelly",
      "profileImageUrl": "https://yt3.ggpht.com/-sgyQ8uPQknw/AAAAAAAAAAI/AAAAAAAAAAA/AcUuLL3d_-s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "never"
      },
      "authorChannelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "hasDisplayContent": true,
      "displayMessage": "never",
      "publishedAt": "2018-08-05T00:01:27.013Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/yvh9Msi1ZJTPf5Z3iFcB2Mpe0Ag\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDTXFrMC1mTjFOd0NGY2QwbUFvZHdld1BkdxIbQ08zazRjRE4xTndDRlZCdE1Bb2R6UFVJWkEx",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJXqQQVzQfC-jI_lJ-kHZrA",
      "isChatOwner": false,
      "displayName": "a smol bean",
      "profileImageUrl": "https://yt3.ggpht.com/-fJqi8_RHPqE/AAAAAAAAAAI/AAAAAAAAAAA/zQhf-l3mQnQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJXqQQVzQfC-jI_lJ-kHZrA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "helloo @Kawaii Girl"
      },
      "authorChannelId": "UCJXqQQVzQfC-jI_lJ-kHZrA",
      "hasDisplayContent": true,
      "displayMessage": "helloo @Kawaii Girl",
      "publishedAt": "2018-08-05T00:01:30.788Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7kO4ZcMVap7mqDlflwmX7GljObE\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSmJtdU9qTjFOd0NGUlJybUFvZHU2TUpJURIcQ0lYOHdxZk4xTndDRlFWUU1Bb2R5cjBDSnctMg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "No"
      },
      "authorChannelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "hasDisplayContent": true,
      "displayMessage": "No",
      "publishedAt": "2018-08-05T00:01:32.451Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/__m3DleDZnWEH5GCusoFNEl2Fjc\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTEg0di1qTjFOd0NGWUVwWkFvZGxLa0dFZxIcQ0t5X3Y2REwxTndDRlhEVTR3Y2RndllNUXctNg",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCOOUvGi9y7fRhk1P17yDaLw",
      "isChatOwner": false,
      "displayName": "MyChemicalBeauty",
      "profileImageUrl": "https://yt3.ggpht.com/-qsUCCH8djBc/AAAAAAAAAAI/AAAAAAAAAAA/_9DWGuggOkk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCOOUvGi9y7fRhk1P17yDaLw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@punk I don’t remember either lol."
      },
      "authorChannelId": "UCOOUvGi9y7fRhk1P17yDaLw",
      "hasDisplayContent": true,
      "displayMessage": "@punk I don’t remember either lol.",
      "publishedAt": "2018-08-05T00:01:32.568Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Js0rauYX1l9Rde-WDdahc9BjLJk\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDUDZMbk96TjFOd0NGVWNJWkFvZC0yTUNPURInQ0pmNi01Zk4xTndDRlNmUndRb2RQc2dMREExNTMzNDI3MzE3MTE5",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCkx6IwqIU2lLvsPygBZ8_Gw",
      "isChatOwner": false,
      "displayName": "Coisa zueira",
      "profileImageUrl": "https://yt3.ggpht.com/-1IxhutF-Gqs/AAAAAAAAAAI/AAAAAAAAAAA/L564_6OozFw/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCkx6IwqIU2lLvsPygBZ8_Gw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "i wanna"
      },
      "authorChannelId": "UCkx6IwqIU2lLvsPygBZ8_Gw",
      "hasDisplayContent": true,
      "displayMessage": "i wanna",
      "publishedAt": "2018-08-05T00:01:40.369Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/lfNMNVJhiUQqh6G7jFWTxnCkNn4\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDS2o2My0zTjFOd0NGVXhPbUFvZDdMUUhjURIbQ1BURGdhdkoxTndDRlFJT1pBb2RScllMcVE5",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCTtd-gECABreQ6eOLLsjOeA",
      "isChatOwner": false,
      "displayName": "tabitha kelly",
      "profileImageUrl": "https://yt3.ggpht.com/-sgyQ8uPQknw/AAAAAAAAAAI/AAAAAAAAAAA/AcUuLL3d_-s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "kill me ty"
      },
      "authorChannelId": "UCTtd-gECABreQ6eOLLsjOeA",
      "hasDisplayContent": true,
      "displayMessage": "kill me ty",
      "publishedAt": "2018-08-05T00:01:43.578Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Q5u2qAcAwf5gaMffSpbjBeQpPMY\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTG5LeGU3TjFOd0NGWU1MWkFvZDl2MEY1URInQ1BMdnd0cTkxTndDRllRSDRRb2RfZEFDc2cxNTMzNDI3MzA3MjIw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCpFzmPg-h-aasLtRhKojwtw",
      "isChatOwner": false,
      "displayName": "rem amami",
      "profileImageUrl": "https://yt3.ggpht.com/-U_NEgSlEmSw/AAAAAAAAAAI/AAAAAAAAAAA/4TmIdevuhyU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "ymu mie et surtout parasite"
      },
      "authorChannelId": "UCpFzmPg-h-aasLtRhKojwtw",
      "hasDisplayContent": true,
      "displayMessage": "ymu mie et surtout parasite",
      "publishedAt": "2018-08-05T00:01:45.243Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/_FRilE1TG9uFfDztk3Ni5XgGRGw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDT1BPMGZITjFOd0NGVmdSWkFvZHRPb0l0URIcQ05fYmxwZk0xTndDRlVScGd3b2RFdnNKNVExNA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatOwner": false,
      "displayName": "Keem Vapez",
      "profileImageUrl": "https://yt3.ggpht.com/-bxNQHaivCrc/AAAAAAAAAAI/AAAAAAAAAAA/J9JY2goC0a8/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "bye"
      },
      "authorChannelId": "UCdLqiaJTchRwpSFGuhCY1ZQ",
      "hasDisplayContent": true,
      "displayMessage": "bye",
      "publishedAt": "2018-08-05T00:01:51.732Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/oQCZF7tkgwqwM35gCsqzjdQ5g30\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI7ChpDTHJFMVBITjFOd0NGWVpjbUFvZE5Bd0JtZxIdQ052bG12UEwxTndDRlFWNEZRb2RwUjhMenctMTE",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatOwner": false,
      "displayName": "Maribelus",
      "profileImageUrl": "https://yt3.ggpht.com/-ZVZqMB0btMw/AAAAAAAAAAI/AAAAAAAAAAA/wXdS3WjRBvQ/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "World is mine"
      },
      "authorChannelId": "UCJDaMo-9Ify39lmOVqz1hyw",
      "hasDisplayContent": true,
      "displayMessage": "World is mine",
      "publishedAt": "2018-08-05T00:01:51.780Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/WgVkpT0Ulkts_jYS0k_VAVcll4o\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSXpaal9MTjFOd0NGY29aWkFvZG9xTUdmURInQ05HNHFPM04xTndDRlFLYm5Bb2R2N2dQcXcxNTMzNDI3MzEzOTMz",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC8XxRS9gDMqYhePK1OVSv_Q",
      "isChatOwner": false,
      "displayName": "Lewis Wester",
      "profileImageUrl": "https://yt3.ggpht.com/-k4A1AzJBGHo/AAAAAAAAAAI/AAAAAAAAAAA/8PkA6hmcBp0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC8XxRS9gDMqYhePK1OVSv_Q",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "sup peoples"
      },
      "authorChannelId": "UC8XxRS9gDMqYhePK1OVSv_Q",
      "hasDisplayContent": true,
      "displayMessage": "sup peoples",
      "publishedAt": "2018-08-05T00:01:52.749Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/WUl7u7HSNUB3FPjPy99mbCgeFg0\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTFRuOF9MTjFOd0NGY29EWkFvZGdEVU5BQRIcQ0lYOHdxZk4xTndDRlFWUU1Bb2R5cjBDSnctMw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "PARA DE ZUAR AÍ POU"
      },
      "authorChannelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "hasDisplayContent": true,
      "displayMessage": "PARA DE ZUAR AÍ POU",
      "publishedAt": "2018-08-05T00:01:54.389Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/5V3LNHEAyGD8C7PZagpMc31g4VI\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI5ChpDSXpScnZQTjFOd0NGWWNiWkFvZFlwME5XURIbQ0tDcXQ3X04xTndDRlFYQm5Bb2RrTndDd2cw",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC_hjyDRylW76K37rd5sYcDg",
      "isChatOwner": false,
      "displayName": "Alison Soifer",
      "profileImageUrl": "https://yt3.ggpht.com/-WoD07qqrtl0/AAAAAAAAAAI/AAAAAAAAAAA/H1SZYoqLB1s/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC_hjyDRylW76K37rd5sYcDg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Chet Baker I will with you! How are you? How was your day?"
      },
      "authorChannelId": "UC_hjyDRylW76K37rd5sYcDg",
      "hasDisplayContent": true,
      "displayMessage": "@Chet Baker I will with you! How are you? How was your day?",
      "publishedAt": "2018-08-05T00:01:55.353Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/rap4M78_4buTzqeXyloug6mEETw\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSVh0d2ZUTjFOd0NGVU5ZbUFvZE9HOE5tQRInQ0xQNHlzRE4xTndDRlVscm1Bb2RxY2NHWlExNTMzNDI3MzE3NTg0",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCrn__6Gqg8Y1iupKiLm3iCQ",
      "isChatOwner": false,
      "displayName": "Kawaii Girl",
      "profileImageUrl": "https://yt3.ggpht.com/-s8kXm69uiXE/AAAAAAAAAAI/AAAAAAAAAAA/vJxp13yCssk/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCrn__6Gqg8Y1iupKiLm3iCQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "hi smol bean"
      },
      "authorChannelId": "UCrn__6Gqg8Y1iupKiLm3iCQ",
      "hasDisplayContent": true,
      "displayMessage": "hi smol bean",
      "publishedAt": "2018-08-05T00:01:57.765Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fFnWSIaercg-uRNQL4RgcUs69ag\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSmZYa3ZiTjFOd0NGVUUwWkFvZGhhQUxQQRIcQ0lUbTRPRzcxTndDRlUyZEZRb2RwX3dLNlE2MQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatOwner": false,
      "displayName": "Punk",
      "profileImageUrl": "https://yt3.ggpht.com/-GuN1nK8n3sM/AAAAAAAAAAI/AAAAAAAAAAA/yX7w_xII8bc/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "@Dragone Studio Everything you said is normal"
      },
      "authorChannelId": "UCwLRpVzU3Y0GWTqBo9Q7b-A",
      "hasDisplayContent": true,
      "displayMessage": "@Dragone Studio Everything you said is normal",
      "publishedAt": "2018-08-05T00:02:01.187Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/stmlpRHwA3Xa7uLplhU129raKh0\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSUNXNXZqTjFOd0NGUWdzWkFvZEVZWUhjdxInQ0tyeTBfVE4xTndDRlFtbXhBb2RaYk1Jb0ExNTMzNDI3MzMyNDE0",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCu0qxe9F2pqyHX-35O1rphw",
      "isChatOwner": false,
      "displayName": "The Hair Is A Lie",
      "profileImageUrl": "https://yt3.ggpht.com/-cXkL5A400mg/AAAAAAAAAAI/AAAAAAAAAAA/03OOKGI7rc0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "SHUT THE FUKC UP"
      },
      "authorChannelId": "UCu0qxe9F2pqyHX-35O1rphw",
      "hasDisplayContent": true,
      "displayMessage": "SHUT THE FUKC UP",
      "publishedAt": "2018-08-05T00:02:06.749Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/sugeJLkGElZ-gw_gqtvx6K35qPY\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDSlg3dmZyTjFOd0NGUkJIbUFvZHRlZ090URInQ1B6d3ZfVE4xTndDRllZaXNnb2R0UWtFNkExNTMzNDI3MzI5OTI2",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCWPzWpjG0su9w9UoHNHc7tg",
      "isChatOwner": false,
      "displayName": "CebuliX",
      "profileImageUrl": "https://yt3.ggpht.com/-tEp9ymDvucU/AAAAAAAAAAI/AAAAAAAAAAA/TkgA3IyNV94/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCWPzWpjG0su9w9UoHNHc7tg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "despacito"
      },
      "authorChannelId": "UCWPzWpjG0su9w9UoHNHc7tg",
      "hasDisplayContent": true,
      "displayMessage": "despacito",
      "publishedAt": "2018-08-05T00:02:10.284Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/RPo0tojIqTOBCZwtmUPnspTLnxM\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTTZxNV92TjFOd0NGZEJCbUFvZHk5UUNoURInQ05HNHFPM04xTndDRlFLYm5Bb2R2N2dQcXcxNTMzNDI3MzM0MjM3",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC8XxRS9gDMqYhePK1OVSv_Q",
      "isChatOwner": false,
      "displayName": "Lewis Wester",
      "profileImageUrl": "https://yt3.ggpht.com/-k4A1AzJBGHo/AAAAAAAAAAI/AAAAAAAAAAA/8PkA6hmcBp0/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC8XxRS9gDMqYhePK1OVSv_Q",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "yeah it raining"
      },
      "authorChannelId": "UC8XxRS9gDMqYhePK1OVSv_Q",
      "hasDisplayContent": true,
      "displayMessage": "yeah it raining",
      "publishedAt": "2018-08-05T00:02:13.059Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/qzmgjCIPnddlS13-6eqfHunww3k\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRJFChpDTERlenYzTjFOd0NGVWNJWkFvZFJURUd3ZxInQ0xUN3FlM0UxTndDRlpFYzRRb2Q4ODRQM0ExNTMzNDI3MzM2MDQ1",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatOwner": false,
      "displayName": "ʏᴜᴍ。ᴍɪᴇ。",
      "profileImageUrl": "https://yt3.ggpht.com/-O6znHkG9A4s/AAAAAAAAAAI/AAAAAAAAAAA/3t9RgpInFJM/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "il parle de quoi si tu le résume en 1 phrase ?"
      },
      "authorChannelId": "UC0tyi4qbsDKumE_h4_KQuwg",
      "hasDisplayContent": true,
      "displayMessage": "il parle de quoi si tu le résume en 1 phrase ?",
      "publishedAt": "2018-08-05T00:02:16.851Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/MxuSsLg0EISDsHaW6ipBv9D8zmM\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDSmZxX3ZfTjFOd0NGUXhkbUFvZG5aQUg3QRIcQ0wtWDFhVEkxTndDRlVQbGtBb2QtaWdHNUExNA",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCAa3_uZm9udTw2Cobeo5qnQ",
      "isChatOwner": false,
      "displayName": "Chet Baker",
      "profileImageUrl": "https://yt3.ggpht.com/-3GRwxCT7WLY/AAAAAAAAAAI/AAAAAAAAAAA/dzimg9lW1Ls/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCAa3_uZm9udTw2Cobeo5qnQ",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Alison all good haha how bout yours?"
      },
      "authorChannelId": "UCAa3_uZm9udTw2Cobeo5qnQ",
      "hasDisplayContent": true,
      "displayMessage": "Alison all good haha how bout yours?",
      "publishedAt": "2018-08-05T00:02:21.833Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/WrT042TyW9dfpXNyLOind6sLyhI\"",
    "kind": "youtube#liveChatMessage"
  },
  {
    "id": "LCC.CiMSIQoYVUNTSjRna1ZDNk5ydklJOHVtenRmME93EgUvbGl2ZRI6ChpDTnVYd29ITzFOd0NGWUVNWkFvZFRTc0I2dxIcQ0lYOHdxZk4xTndDRlFWUU1Bb2R5cjBDSnctNQ",
    "authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    },
    "snippet": {
      "textMessageDetails": {
        "messageText": "Bro faz sol"
      },
      "authorChannelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "hasDisplayContent": true,
      "displayMessage": "Bro faz sol",
      "publishedAt": "2018-08-05T00:02:25.034Z",
      "type": "textMessageEvent",
      "liveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
    },
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/osHeGtIEgkBn1H4KABbJzXF6_vY\"",
    "kind": "youtube#liveChatMessage"
  }
]};
}

  componentDidMount() {
  	//on mount load api data
    //const streamInfo = {"status": "SUCCESS", "streamInfo": {"kind": "youtube#video", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Ntt2xP9B-XCBa_hiaN6ADkyZ_tw\"", "snippet": {"localized": {"title": "World Of Walker (24/7 Live Radio)", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf"}, "categoryId": "10", "liveBroadcastContent": "live", "tags": ["Alan Walker", "Alan", "Walker", "LIVE", "Faded", "Bergen", "Alone", "House", "Techno", "Remix", "Concert", "Heading Home"], "channelTitle": "Alan Walker", "channelId": "UCJrOtniJ0-NWz37R30urifQ", "publishedAt": "2018-05-22T21:58:11.000Z", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf", "title": "World Of Walker (24/7 Live Radio)", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/default_live.jpg", "width": 120, "height": 90}, "maxres": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/maxresdefault_live.jpg", "width": 1280, "height": 720}, "high": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/hqdefault_live.jpg", "width": 480, "height": 360}, "standard": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/sddefault_live.jpg", "width": 640, "height": 480}}}, "liveStreamingDetails": {"actualStartTime": "2018-05-23T05:48:19.000Z", "activeLiveChatId": "EiEKGFVDSnJPdG5pSjAtTld6MzdSMzB1cmlmURIFL2xpdmU", "concurrentViewers": "366"}, "id": "C6brqAkArmA"}};
    this.loadStreamInfo()
  }

  loadStreamInfo() {
    const url = Utils.getBaseURL() 
    + '/api/streams/' 
    + this.props.match.params.videoId
    + '?token='
    + this.props.token;
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData);
        this.setState({
          streamInfo: jsonData.streamInfo
        });
        loadMessages(liveChatId);
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
  }

  loadMessages(liveChatId) {

    const url = Utils.getBaseURL() 
    + '/api/messages?token'
    + this.props.token;
    + '?liveChatId='
    + liveChatId;
    
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData)
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
  }

  sendMessage() {
    // send message to live chat
  }

  render() {
    const videoId = this.props.match.params.videoId;
    const chatMessages = this.state.chatMessages;
    const streamInfo = this.state.streamInfo;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <StreamHeader title={streamInfo.snippet.title} link={`/stats/${videoId}`} navName="Stats"/>
          <div className="Watch-stream-container row">
            <div className="col-sm-6">
              <StreamPlayer videoId={videoId} />
            </div>
            <div className="col-sm-6">
              <ChatBox messages={chatMessages} />
            </div>
          </div>
          <StreamDetailsPanel details={streamInfo} />
        </div>
      </div>
    );
  }
}

export default WatchPage;