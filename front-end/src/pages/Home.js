import React from "react";
import StreamList from "../components/StreamList";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamList: [
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/i14bruYV1ADMAreB05NQWanKMkI\"",
      "snippet": {
        "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
        "channelTitle": "Cafe Music BGM channel",
        "publishedAt": "2017-11-04T11:37:09.000Z",
        "title": "Relaxing Jazz & Bossa Nova Music Radio - 24/7 Chill Out Piano & Guitar Music Live Stream",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2ccaHpy5Ewo/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2ccaHpy5Ewo/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2ccaHpy5Ewo/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Please Subscribe Cafe Music BGM channel https://www.youtube.com/user/cafemusicbgmchannel BGM channel https://www.youtube.com/user/bgmchannelbgm ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "2ccaHpy5Ewo"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ANsLJRV2VX3oXLkzcn92ZVcVYtU\"",
      "snippet": {
        "channelId": "UCIR_LPmEQ9QHR0yB2lxgaxQ",
        "channelTitle": "SPACE & UNIVERSE (Official)",
        "publishedAt": "2017-04-04T21:29:04.000Z",
        "title": "NASA Live - Earth From Space (HDVR) ♥ ISS LIVE FEED #AstronomyDay2018 | Subscribe now!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Live (2018) NASA Earth from Space - \"International Astronomy Day\", ISS HD Video is presented. NASA Live stream of Earth seen from space powered by NASA ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "RtU_mdL2vBM"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/HXZuvSUvaWjh-OO6nKUUiJB_ySI\"",
      "snippet": {
        "channelId": "UCMV3aTOwUtG5vwfH9_rzb2w",
        "channelTitle": "Spark",
        "publishedAt": "2018-07-23T16:42:02.000Z",
        "title": "Secrets of The Universe Live Stream | Spark",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JuzPePkwKKg/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JuzPePkwKKg/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JuzPePkwKKg/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Epic black holes, nuclear furnaces at the core of giant stars and volcanic pressure cookers inside planets - all across the immense reaches of time and space, ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "JuzPePkwKKg"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/g-0qBpn359BxjAG1iRNHwU2UcFE\"",
      "snippet": {
        "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
        "channelTitle": "Cafe Music BGM channel",
        "publishedAt": "2017-11-14T05:48:07.000Z",
        "title": "Happy Summer Cafe Music Radio - Jazz, Bossa Nova, Latin & Soul Music For Study, Work - 24/7 Live",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hUjRuVhJ_4o/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hUjRuVhJ_4o/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hUjRuVhJ_4o/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Please Subscribe Cafe Music BGM channel https://www.youtube.com/user/cafemusicbgmchannel BGM channel https://www.youtube.com/user/bgmchannelbgm ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "hUjRuVhJ_4o"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/JQJjCCo_WbFV9m1Xw5IHtIjHZkY\"",
      "snippet": {
        "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
        "channelTitle": "Cafe Music BGM channel",
        "publishedAt": "2018-03-29T00:23:29.000Z",
        "title": "Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Vls4h1GAP-c/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Vls4h1GAP-c/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Vls4h1GAP-c/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Please Subscribe Cafe Music BGM channel https://www.youtube.com/user/cafemusicbgmchannel BGM channel https://www.youtube.com/user/bgmchannelbgm ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "Vls4h1GAP-c"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/RFLsKbLvT_HcRthRZeKEEjFLuPo\"",
      "snippet": {
        "channelId": "UCakgsb0w7QB0VHdnCc-OVEA",
        "channelTitle": "Space Videos",
        "publishedAt": "2017-06-02T15:11:42.000Z",
        "title": "Earth from space : Time Lapse Collection - Images from astronauts on the ISS",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qyEzsAy4qeU/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qyEzsAy4qeU/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qyEzsAy4qeU/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "More Great Time Lapse Videos In Our Playlist https://www.youtube.com/playlist?list=PLomb3VSQH7wjaS9aUacb7oADDt7Sjcsdg A series of time lapse videos ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "qyEzsAy4qeU"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/AkgYMoRJKJ-0QFds8U3p_zKUEl8\"",
      "snippet": {
        "channelId": "UCUPn5IEQugMf_JeNJOV9p2A",
        "channelTitle": "Train Driver's View",
        "publishedAt": "2017-12-16T22:23:11.000Z",
        "title": "LIVE Train 24/24  Train Driver's View: Cab Ride World Railway in WINTER! Best Great",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qghQ5eKGcyE/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qghQ5eKGcyE/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qghQ5eKGcyE/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "LIVE Train 24/24 Trains Driver's View: Cab Ride Railway in Winter! Best Great *SUBSCRIBE to our YouTube channel for more videos: https://goo.gl/4N4B9B ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "qghQ5eKGcyE"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/b60m9EpESu1T7CgGF_6WyYWJXqU\"",
      "snippet": {
        "channelId": "UCakgsb0w7QB0VHdnCc-OVEA",
        "channelTitle": "Space Videos",
        "publishedAt": "2016-11-22T16:51:08.000Z",
        "title": "NASA Live Stream - Earth From Space (Full Screen) | ISS LIVE FEED - Debunk Flat Earth",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ddFvjfvPnqk/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ddFvjfvPnqk/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ddFvjfvPnqk/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Earth From Space Live Stream Want to know what bit of Earth you're looking at or Where is the ISS? This stream has a live map ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "ddFvjfvPnqk"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ikpgKkmGnpWIA01ZnQhou4_O6KM\"",
      "snippet": {
        "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "channelTitle": "ChilledCow",
        "publishedAt": "2018-08-01T10:19:45.000Z",
        "title": "lofi hip hop radio - beats to relax/study to",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "Thank you for listening, I hope you will have a good time here :) Listen to the radio offline with my Spotify playlist → http://bit.ly/chilledcowradio ChilledCow ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "9ywjjWAkeL0"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/mQk47kRCDbGKpprbLFc1lqlCKtU\"",
      "snippet": {
        "channelId": "UCakgsb0w7QB0VHdnCc-OVEA",
        "channelTitle": "Space Videos",
        "publishedAt": "2018-04-25T08:03:05.000Z",
        "title": "Video Replay: Loops of Fire - Solar Flares and Incredible views from the surface of the Sun",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2yU5CMti5S8/default_live.jpg",
            "height": 90,
            "width": 120
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2yU5CMti5S8/hqdefault_live.jpg",
            "height": 360,
            "width": 480
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2yU5CMti5S8/mqdefault_live.jpg",
            "height": 180,
            "width": 320
          }
        },
        "description": "More Great Videos Of Our Sun In Our Playlist https://www.youtube.com/playlist?list=PLomb3VSQH7wgJBmz8PWwmPUaZP6FXXfbE ...",
        "liveBroadcastContent": "live"
      },
      "id": {
        "kind": "youtube#video",
        "videoId": "2yU5CMti5S8"
      }
    }
  ]
    };
  }

  componentDidMount() {
  	//do api call to live streams
    // this.setState({
    //   streamList: [
    //     {'name': 'test1', 'video_id': '1'},
    //     {'name': 'test2', 'video_id': '2'},
    //     {'name': 'test3', 'video_id': '3'},
    //     {'name': 'test4', 'video_id': '4'}
    //   ]
    // });
    this.loadLiveStreams();
  }

  loadLiveStreams() {
    const streamData = {"status": "SUCCESS", "streams": [{"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/HXZuvSUvaWjh-OO6nKUUiJB_ySI\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Spark", "channelId": "UCMV3aTOwUtG5vwfH9_rzb2w", "publishedAt": "2018-07-23T16:42:02.000Z", "description": "Epic black holes, nuclear furnaces at the core of giant stars and volcanic pressure cookers inside planets - all across the immense reaches of time and space, ...", "title": "Secrets of The Universe Live Stream | Spark", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/JuzPePkwKKg/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/JuzPePkwKKg/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/JuzPePkwKKg/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "JuzPePkwKKg"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/fcWy4F1HvUzOjbmuMgIMf7ZKCk0\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Alan Walker", "channelId": "UCJrOtniJ0-NWz37R30urifQ", "publishedAt": "2018-05-22T21:58:11.000Z", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while. / Alan #WorldOfWalker Chat rules: *No negativity towards anyone ...", "title": "World Of Walker (24/7 Live Radio)", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "C6brqAkArmA"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/RFLsKbLvT_HcRthRZeKEEjFLuPo\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Space Videos", "channelId": "UCakgsb0w7QB0VHdnCc-OVEA", "publishedAt": "2017-06-02T15:11:42.000Z", "description": "More Great Time Lapse Videos In Our Playlist https://www.youtube.com/playlist?list=PLomb3VSQH7wjaS9aUacb7oADDt7Sjcsdg A series of time lapse videos ...", "title": "Earth from space : Time Lapse Collection - Images from astronauts on the ISS", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/qyEzsAy4qeU/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/qyEzsAy4qeU/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/qyEzsAy4qeU/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "qyEzsAy4qeU"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ANsLJRV2VX3oXLkzcn92ZVcVYtU\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "SPACE & UNIVERSE (Official)", "channelId": "UCIR_LPmEQ9QHR0yB2lxgaxQ", "publishedAt": "2017-04-04T21:29:04.000Z", "description": "Live (2018) NASA Earth from Space - \"International Astronomy Day\", ISS HD Video is presented. NASA Live stream of Earth seen from space powered by NASA ...", "title": "NASA Live - Earth From Space (HDVR) \u2665 ISS LIVE FEED #AstronomyDay2018 | Subscribe now!", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/RtU_mdL2vBM/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/RtU_mdL2vBM/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/RtU_mdL2vBM/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "RtU_mdL2vBM"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/yDJD2Lxh-T-Nj5eVFUNCyblS45E\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Soothing Relaxation", "channelId": "UCjzHeG1KWoonmf9d5KBvSiw", "publishedAt": "2017-12-29T20:19:14.000Z", "description": "Beautiful relaxing music 24/7 featuring instrumental music by me, Peder B. Helland. This music can be used as sleep music, study music, meditation music and ...", "title": "Beautiful Relaxing Music 24/7: Study Music, Sleep Music, Meditation Music, Sleeping Music", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/NuIAYHVeFYs/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/NuIAYHVeFYs/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/NuIAYHVeFYs/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "NuIAYHVeFYs"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/b60m9EpESu1T7CgGF_6WyYWJXqU\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Space Videos", "channelId": "UCakgsb0w7QB0VHdnCc-OVEA", "publishedAt": "2016-11-22T16:51:08.000Z", "description": "Earth From Space Live Stream Want to know what bit of Earth you're looking at or Where is the ISS? This stream has a live map ...", "title": "NASA Live Stream - Earth From Space (Full Screen) | ISS LIVE FEED - Debunk Flat Earth", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/ddFvjfvPnqk/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/ddFvjfvPnqk/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/ddFvjfvPnqk/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "ddFvjfvPnqk"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3WkHlyhu4HGqZyzUdIiYwRCUy-A\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Soothing Relaxation", "channelId": "UCjzHeG1KWoonmf9d5KBvSiw", "publishedAt": "2017-12-17T10:12:42.000Z", "description": "Beautiful piano music 24/7 live stream featuring relaxing music by me, Peder B. Helland. Suitable as study music, sleep music, meditation music and ...", "title": "Beautiful Piano Music 24/7: Study Music, Relaxing Music, Sleep Music, Meditation Music", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/y7e-GC6oGhg/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/y7e-GC6oGhg/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/y7e-GC6oGhg/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "y7e-GC6oGhg"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/mQk47kRCDbGKpprbLFc1lqlCKtU\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Space Videos", "channelId": "UCakgsb0w7QB0VHdnCc-OVEA", "publishedAt": "2018-04-25T08:03:05.000Z", "description": "More Great Videos Of Our Sun In Our Playlist https://www.youtube.com/playlist?list=PLomb3VSQH7wgJBmz8PWwmPUaZP6FXXfbE ...", "title": "Video Replay: Loops of Fire - Solar Flares and Incredible views from the surface of the Sun", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/2yU5CMti5S8/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/2yU5CMti5S8/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/2yU5CMti5S8/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "2yU5CMti5S8"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/AkgYMoRJKJ-0QFds8U3p_zKUEl8\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Train Driver's View", "channelId": "UCUPn5IEQugMf_JeNJOV9p2A", "publishedAt": "2017-12-16T22:23:11.000Z", "description": "LIVE Train 24/24 Trains Driver's View: Cab Ride Railway in Winter! Best Great *SUBSCRIBE to our YouTube channel for more videos: https://goo.gl/4N4B9B ...", "title": "LIVE Train 24/24  Train Driver's View: Cab Ride World Railway in WINTER! Best Great", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/qghQ5eKGcyE/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/qghQ5eKGcyE/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/qghQ5eKGcyE/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "qghQ5eKGcyE"}}, {"kind": "youtube#searchResult", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/J4coQDMgx2D4K7hY94xozbVJq1o\"", "snippet": {"liveBroadcastContent": "live", "channelTitle": "Explore Oceans", "channelId": "UCSyg9cb3Iq-NtlbxqNB9wGw", "publishedAt": "2016-09-30T23:22:30.000Z", "description": "The headquarters of OrcaLab research station boast stunning views of Blackney Pass, a main thoroughfare for orcas in the fall and summer months. Watch live ...", "title": "OrcaLab Base powered by EXPLORE.org", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/sgprc281gTo/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/sgprc281gTo/default_live.jpg", "width": 120, "height": 90}, "high": {"url": "https://i.ytimg.com/vi/sgprc281gTo/hqdefault_live.jpg", "width": 480, "height": 360}}}, "id": {"kind": "youtube#video", "videoId": "sgprc281gTo"}}]};
  }

  render() {
    const { streamList } = this.state;
    return (
      <div>
        <StreamList streams={streamList} />
      </div>
    );
  }
}

export default HomePage;