import React from "react";
import ChatBox from "../components/ChatBox";
import StreamPlayer from "../components/StreamPlayer";
import StreamHeader from "../components/StreamHeader";
import StreamDetailsPanel from "../components/StreamDetailsPanel";

class WatchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      videoInfo: {
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
      chatMessages: [{"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/yo38hVCkQzofh19WG4CJ_8hLAz8\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCADRYfkLIGqTiO_3k83RY5g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "OLHA ALI A CADELA LAIKA Q OS SOVIETICOS MANDARAM PRO ESPA\u00c7O"}, "publishedAt": "2018-08-03T01:10:25.824Z", "hasDisplayContent": true, "displayMessage": "OLHA ALI A CADELA LAIKA Q OS SOVIETICOS MANDARAM PRO ESPA\u00c7O"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0xqcjlyM1p6OXdDRlFzeVpBb2RRcm9QaVESG0NOalgyODNZejl3Q0ZVdnlrUW9kU2pjRVZRNA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/mfJGKdJxQEP-Ut_mNbL_LQGJG8o\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCG4ZRisoTupvwbcOaySVYAw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "KURDISTAN"}, "publishedAt": "2018-08-03T01:10:40.064Z", "hasDisplayContent": true, "displayMessage": "KURDISTAN"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0pULTI4VFp6OXdDRmNaSW1Bb2RmTndQdlESG0NJZTFfcXpaejl3Q0ZaQlNtd29kUzZRSE1BMA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/PcOM5iqIKBh7RKfFk5GU6aVth0E\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UChiqshtHgi8sxdSQ3HQlOIw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "carallhoooo"}, "publishedAt": "2018-08-03T01:11:02.237Z", "hasDisplayContent": true, "displayMessage": "carallhoooo"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0thcnBjX1p6OXdDRmM4dVpBb2Q4Y0VIU3cSJ0NONlZsY2Zaejl3Q0ZReGtrQW9kUUlrSnVBMTUzMzI1ODY3OTQ5Mw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/gnPQls4NGWqay4Yhv618BCXwu-s\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCQbPFOEjm0q4Avoju-9KrXw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "very very beautiful"}, "publishedAt": "2018-08-03T01:11:33.103Z", "hasDisplayContent": true, "displayMessage": "very very beautiful"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0lTaGdkN1p6OXdDRlVOYW1Bb2Qta1lNd2cSG0NNdXRxN2pZejl3Q0ZSQ09rUW9kVTBFQUNBNA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fjQytqiMrWVg2QAK4Lan0YSLwdQ\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCADRYfkLIGqTiO_3k83RY5g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "N TO VENDO NENHUM GOD AI"}, "publishedAt": "2018-08-03T01:11:40.502Z", "hasDisplayContent": true, "displayMessage": "N TO VENDO NENHUM GOD AI"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0pMcHhPSFp6OXdDRllrY1pBb2RvVXdKOGcSG0NOalgyODNZejl3Q0ZVdnlrUW9kU2pjRVZRNg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/6rOki3K4QRVYcQr_kLmEeIfk8wI\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UClQr43hP18FSGXlifxua_6Q", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "agarag\u00e3"}, "publishedAt": "2018-08-03T01:12:03.139Z", "hasDisplayContent": true, "displayMessage": "agarag\u00e3"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0kzQXF1elp6OXdDRmRKaW1Bb2R3aVlISFESJ0NLT3VqZVhaejl3Q0ZSaDVrUW9kOWUwQTdRMTUzMzI1NTAwMjMyMQ"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/dvCzPuM_MJGfW2u6KnGuoced4x8\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCHCpGXASREfJRwkRrGd-Jgg", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "WOW"}, "publishedAt": "2018-08-03T01:12:21.614Z", "hasDisplayContent": true, "displayMessage": "WOW"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOgoaQ09lU2t2WFp6OXdDRlpBVGhBb2RXX2NDRkESHENQamhudkxaejl3Q0ZWN1RmZ29kbkpvSFJBLTA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ZpQXotfhTInoym3PoH8sgXjlgsQ\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCADRYfkLIGqTiO_3k83RY5g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "I'm not seeing any god here"}, "publishedAt": "2018-08-03T01:12:27.447Z", "hasDisplayContent": true, "displayMessage": "I'm not seeing any god here"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0xHUjl2Zlp6OXdDRlNNTGhBb2REbDBLY0ESG0NOalgyODNZejl3Q0ZVdnlrUW9kU2pjRVZRNw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/XibcikOwPsaTgF5oqALGlgVYZq4\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCXb6TTuis5DTWM9ju9f2qaQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "algum br ?"}, "publishedAt": "2018-08-03T01:13:30.166Z", "hasDisplayContent": true, "displayMessage": "algum br ?"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ09xWDZwWGF6OXdDRlVSeW1Bb2RvSFFFVGcSG0NMQ0duX2Jaejl3Q0ZVekprQW9kZmdNS01nMA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/pwfnNdUcNYMH0gflmJzlHFhsSjM\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCADRYfkLIGqTiO_3k83RY5g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "s voce"}, "publishedAt": "2018-08-03T01:13:38.329Z", "hasDisplayContent": true, "displayMessage": "s voce"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ08yMjNKbmF6OXdDRmMwTGhBb2RCM2tCVXcSG0NOalgyODNZejl3Q0ZVdnlrUW9kU2pjRVZROA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/kwhdnUkUX6-Yz0z9OpeYkwOWmcE\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCeS-5Si5RaM6w1pDpER8D1g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "why do we harm what have been around for years???"}, "publishedAt": "2018-08-03T01:14:19.411Z", "hasDisplayContent": true, "displayMessage": "why do we harm what have been around for years???"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0xuc3A2M2F6OXdDRmRBMVpBb2R3UWdGU0ESG0NKT2gyNnJaejl3Q0Zja2xzZ29kZDZJTi1BMg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/syepF4Wlj3lPaImleLSFz8W6Hhs\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCSvjQBDgYDB5TGVmCZObcwA", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "@ Simon Kj\u00e6rgaard Frequently asked questions: https://goo.gl/FcXkUu"}, "publishedAt": "2018-08-03T01:14:23.104Z", "hasDisplayContent": true, "displayMessage": "@ Simon Kj\u00e6rgaard Frequently asked questions: https://goo.gl/FcXkUu"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SHAoaQ0tXaWlhX2F6OXdDRlVjSVpBb2RxSVlQVEE"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/L5012xG6ueLMsMqxgWB75_voGGg\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCHYGrZurzEtUSzZ3vrMgiog", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "omg \ud83d\ude0d"}, "publishedAt": "2018-08-03T01:14:54.004Z", "hasDisplayContent": true, "displayMessage": "omg \ud83d\ude0d"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ091ZjU3M2F6OXdDRllVOFpBb2RicG9ERmcSJ0NJZjZ0Ymphejl3Q0ZZS2kzZ29kTktZTHd3MTUzMzI1ODg1MzkzNw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/y53aZ3jkxFHvTFDIPI63h4FjTsU\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCeS-5Si5RaM6w1pDpER8D1g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "one noghtbot"}, "publishedAt": "2018-08-03T01:15:16.159Z", "hasDisplayContent": true, "displayMessage": "one noghtbot"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ09qQ3I4amF6OXdDRmNaSW1Bb2REa29OR0ESG0NKT2gyNnJaejl3Q0Zja2xzZ29kZDZJTi1BMw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/b4zc3Y3rdmbkukpLZ5ADW7gljLw\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCKsjqyGCm74w1jMzVV6SNNA", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "palha\u00e7ada tarra plana nessa porra"}, "publishedAt": "2018-08-03T01:15:32.975Z", "hasDisplayContent": true, "displayMessage": "palha\u00e7ada tarra plana nessa porra"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ1AzdXNkRGF6OXdDRlVsam1Bb2RmY3dFYVESG0NNNlR2dTNaejl3Q0ZROVdrUW9kSnVJQVhnMA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Qq55NpLfr8Lpa5iRV6w-98fw8As\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCHYGrZurzEtUSzZ3vrMgiog", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "A dream \ud83d\ude41"}, "publishedAt": "2018-08-03T01:15:33.021Z", "hasDisplayContent": true, "displayMessage": "A dream \ud83d\ude41"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0luV3RORGF6OXdDRlZKZm1Bb2Q0OFlLYWcSJ0NJZjZ0Ymphejl3Q0ZZS2kzZ29kTktZTHd3MTUzMzI1ODg5MjkyNg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ka2g7YuMwgkMXKe4AASvdnVPniM\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCXb6TTuis5DTWM9ju9f2qaQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "ele ta no espa\u00e7o mesmo ou \u00e9 troll ?"}, "publishedAt": "2018-08-03T01:15:34.102Z", "hasDisplayContent": true, "displayMessage": "ele ta no espa\u00e7o mesmo ou \u00e9 troll ?"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0t6WDl0RGF6OXdDRllFeFpBb2RNTUlJSUESG0NMQ0duX2Jaejl3Q0ZVekprQW9kZmdNS01nMQ"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/iroqoF2lrDm4-wjOQNa4AfhI_78\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UC7tXlC7Ps10Jf7h6-2iTRLw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "freaking beautiful"}, "publishedAt": "2018-08-03T01:15:43.248Z", "hasDisplayContent": true, "displayMessage": "freaking beautiful"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0x6dXBOWGF6OXdDRllFTVpBb2RYUlFDR2cSJ0NPck4yYmZhejl3Q0ZZMTY0QW9kSUgwREdRMTUzMzI1ODk0MjkwNg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/LAR7-9Y6Jy5IoSf5cCUjwPzSKoA\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCKsjqyGCm74w1jMzVV6SNNA", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "feik"}, "publishedAt": "2018-08-03T01:16:01.669Z", "hasDisplayContent": true, "displayMessage": "feik"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0ktZWlkN2F6OXdDRllnWGhBb2Rob01CSEESG0NNNlR2dTNaejl3Q0ZROVdrUW9kSnVJQVhnMQ"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/o6b12iWLKcmHhmo05DkQoWesTFY\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCX27AiTfPD6eQnS5eaZoAGw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "Wundersch\u00f6nen"}, "publishedAt": "2018-08-03T01:16:06.786Z", "hasDisplayContent": true, "displayMessage": "Wundersch\u00f6nen"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0tQRndlRGF6OXdDRmRJN1pBb2R1VElPOXcSJ0NOZklrOG5hejl3Q0ZaT05WUW9kbGZVR3JnMTUzMzI1ODg3OTU5OA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/_v0umjxOG2ABMwZgsD_6wnqdiOE\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCKsjqyGCm74w1jMzVV6SNNA", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "estudio"}, "publishedAt": "2018-08-03T01:16:22.402Z", "hasDisplayContent": true, "displayMessage": "estudio"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0xuVS11ZmF6OXdDRllnSmhBb2RTRTRPUmcSG0NNNlR2dTNaejl3Q0ZROVdrUW9kSnVJQVhnMg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/M__J5b7xzWd3o5687XO_HUqzwtI\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCXb6TTuis5DTWM9ju9f2qaQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "\u00e9 troll ?"}, "publishedAt": "2018-08-03T01:16:37.330Z", "hasDisplayContent": true, "displayMessage": "\u00e9 troll ?"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0lUbGllX2F6OXdDRlVjSVpBb2RDX1VEbGcSG0NMQ0duX2Jaejl3Q0ZVekprQW9kZmdNS01nMg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/CB3GhuvYvTf-UxRiu-N6sIbH6XE\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCkc5YybjGjDnV-iJBOe9a4g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "ta no expaco mesmo"}, "publishedAt": "2018-08-03T01:16:40.992Z", "hasDisplayContent": true, "displayMessage": "ta no expaco mesmo"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0xpbTZmRGF6OXdDRlNzSGhBb2Q4YnNIQ0ESG0NKci16WlRhejl3Q0ZVYklrQW9kOVhvSEtRMA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/MYo5TKAI2MNScmvNM_MdLuQChYs\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCeS-5Si5RaM6w1pDpER8D1g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "where is yours... i talk alot"}, "publishedAt": "2018-08-03T01:16:45.801Z", "hasDisplayContent": true, "displayMessage": "where is yours... i talk alot"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ01MbGp2UGF6OXdDRlFwVm1Bb2Q0VDhFN2cSG0NKT2gyNnJaejl3Q0Zja2xzZ29kZDZJTi1BNQ"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ZWuey0tVUX5gaDiihCDBSGYbjFA\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCHYGrZurzEtUSzZ3vrMgiog", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "ist einer deutsch?"}, "publishedAt": "2018-08-03T01:16:56.105Z", "hasDisplayContent": true, "displayMessage": "ist einer deutsch?"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ05QYmdfamF6OXdDRlNNS2hBb2RNRE1LOHcSJ0NJZjZ0Ymphejl3Q0ZZS2kzZ29kTktZTHd3MTUzMzI1ODk3NjA0Nw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3V0R2x1xh_FsY5R-sxtV9KhqHSE\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCTtpyyKQYpbXqfurIbIUAZQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "o os movimentos do Globo terrestre"}, "publishedAt": "2018-08-03T01:16:59.175Z", "hasDisplayContent": true, "displayMessage": "o os movimentos do Globo terrestre"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0o2TnZfbmF6OXdDRlVZMVpBb2Qtd3NQYlESJ0NMSFZxOExhejl3Q0ZRMElaQW9kRlJjTjVBMTUzMzI1OTAxNzI4Mw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/4HvXKEoGwazqtOV9R5MjMMjetLA\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCBvJggqbl9B2yC_GKGaQvUQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "amazing"}, "publishedAt": "2018-08-03T01:17:45.766Z", "hasDisplayContent": true, "displayMessage": "amazing"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ01IajJvX2J6OXdDRlk5Sm1Bb2REbUFJM3cSJ0NNV21tZl9hejl3Q0ZZSVIxUW9kUVhzTFN3MTUzMzI1OTA2NDA2MQ"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/AJWjZodWJD1xc88BrMVhHxlndwk\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCAfE0wF4R8BQ3RYmVzZHXfQ", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "holograma"}, "publishedAt": "2018-08-03T01:17:48.629Z", "hasDisplayContent": true, "displayMessage": "holograma"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0pQSGlaSGJ6OXdDRlpBWVpBb2RDc3dPWVESJ0NNT3l4WXJiejl3Q0ZVVlZrUW9kYjVjSVhnMTUzMzI1OTA3ODAwMw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/PjarM1xfNKcfyoTGmAmIYjBCzCw\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCeS-5Si5RaM6w1pDpER8D1g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "what is your dream?"}, "publishedAt": "2018-08-03T01:17:49.133Z", "hasDisplayContent": true, "displayMessage": "what is your dream?"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0tTcHFKSGJ6OXdDRmRKb21Bb2Rxb01HRFESG0NKT2gyNnJaejl3Q0Zja2xzZ29kZDZJTi1BNg"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/_v5BCYerrc4IJsbGhH3VIJo3tic\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCWR1qW8q7fXb1ahM0ROCQ3A", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "feik e sua namorad"}, "publishedAt": "2018-08-03T01:17:52.337Z", "hasDisplayContent": true, "displayMessage": "feik e sua namorad"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ0xqdjY1TGJ6OXdDRlU0SmhBb2RsajRHV1ESJ0NKanMxWW5iejl3Q0ZkUlRrQW9kMjRJSlhBMTUzMzI1OTA3NzIzOA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Z2oOAxE42e85mtRty3ARoCGQLeg\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCkc5YybjGjDnV-iJBOe9a4g", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "a terra \u00e9 plana"}, "publishedAt": "2018-08-03T01:18:06.352Z", "hasDisplayContent": true, "displayMessage": "a terra \u00e9 plana"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ0t1aXc1bmJ6OXdDRlpBNVpBb2Q3NWNCMWcSG0NKci16WlRhejl3Q0ZVYklrQW9kOVhvSEtRMw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/gaIa9ftgMOzxHL4xl9xizssrk3c\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCQbPFOEjm0q4Avoju-9KrXw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "this is very beautiful ;-;"}, "publishedAt": "2018-08-03T01:18:08.390Z", "hasDisplayContent": true, "displayMessage": "this is very beautiful ;-;"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOQoaQ052UXY1cmJ6OXdDRllFcFpBb2QxSThKNWcSG0NNdXRxN2pZejl3Q0ZSQ09rUW9kVTBFQUNBNw"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/aiOQW7biAhdEIoNHe8HKg0bWoeg\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCSlGdIkns9YXpmAcEbR3O2Q", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "that is so cool"}, "publishedAt": "2018-08-03T01:18:25.342Z", "hasDisplayContent": true, "displayMessage": "that is so cool"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SRQoaQ09DbXlxTGJ6OXdDRlJKN21Bb2R4M3NHUVESJ0NQVzF6SnJiejl3Q0ZYVGk0d2NkOU5jT0dnMTUzMzI1OTEwNTIxOA"}, {"kind": "youtube#liveChatMessage", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ku5xS39mJKXg0VxG9MQj_J9Leio\"", "snippet": {"type": "textMessageEvent", "authorChannelId": "UCB3PTLZeBhUCyKL_1a-5zfw", "liveChatId": "Cg0KC1J0VV9tZEwydkJN", "textMessageDetails": {"messageText": "Flat"}, "publishedAt": "2018-08-03T01:18:26.408Z", "hasDisplayContent": true, "displayMessage": "Flat"}, "id": "LCC.Cg8KDQoLUnRVX21kTDJ2Qk0SOgoaQ05LdWk2UGJ6OXdDRlkxbG1Bb2RjVGtIQWcSHENQdmpsWl9iejl3Q0ZjRXhhQW9kLU5nRmd3LTA"}]
    };
  }

  componentDidMount() {
  	//on mount load api data
    const streamInfo = {"status": "SUCCESS", "streamInfo": {"kind": "youtube#video", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Ntt2xP9B-XCBa_hiaN6ADkyZ_tw\"", "snippet": {"localized": {"title": "World Of Walker (24/7 Live Radio)", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf"}, "categoryId": "10", "liveBroadcastContent": "live", "tags": ["Alan Walker", "Alan", "Walker", "LIVE", "Faded", "Bergen", "Alone", "House", "Techno", "Remix", "Concert", "Heading Home"], "channelTitle": "Alan Walker", "channelId": "UCJrOtniJ0-NWz37R30urifQ", "publishedAt": "2018-05-22T21:58:11.000Z", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf", "title": "World Of Walker (24/7 Live Radio)", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/default_live.jpg", "width": 120, "height": 90}, "maxres": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/maxresdefault_live.jpg", "width": 1280, "height": 720}, "high": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/hqdefault_live.jpg", "width": 480, "height": 360}, "standard": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/sddefault_live.jpg", "width": 640, "height": 480}}}, "liveStreamingDetails": {"actualStartTime": "2018-05-23T05:48:19.000Z", "activeLiveChatId": "EiEKGFVDSnJPdG5pSjAtTld6MzdSMzB1cmlmURIFL2xpdmU", "concurrentViewers": "366"}, "id": "C6brqAkArmA"}};
    this.loadMessages()
  }

  loadMessages() {
    // const url = 'https://rocky-eyrie-31084.herokuapp.com/api/message/Cg0KC1J0VV9tZEwydkJN/'
    // fetch(url , {
    //   method: "GET",
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials': 'true'
    //   }
    // })
    // .then((response) => {
    //   console.log(response.json());
    //   return response.json();
    // })
    // .then(function(payload) {
    //   console.log(payload)
    //   //handle response
    //   const messageList = payload.messages.map((message) => ({
    //       'username': message.snippet.authorChannelId,
    //       'text': message.snippet.displayMessage
    //     })
    //   );
    //   this.state.setState({
    //     'chatMessages': messageList
    //   });
    // });

  }

  sendMessage() {
    //
    console.log('asdfasdf');
  }

  render() {
    const videoId = this.props.match.params.videoId;
    const chatMessages = this.state.chatMessages;
    const videoInfo = this.state.videoInfo;
    return (
      <div>
        <StreamHeader name={videoInfo.snippet.title} videoId={videoId} />
        <div className="row">
          <div className="col-sm-8">
            <StreamPlayer videoId={videoId} />
            <StreamDetailsPanel details={videoInfo} />
          </div>
          <div className="col-sm-4">
            <ChatBox messages={chatMessages} />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchPage;