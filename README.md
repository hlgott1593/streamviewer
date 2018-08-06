# StreamViewer

StreamViewer uses the Youtube Live API to list and watch active streams from YouTube, receive and send chat messages and view statistical information on a streaming video.

## Information

StreamViewer was built using Django, ReactJS and Postgres with the intent of running on Heroku.

### Assumptions

The "viewer" is the currently logged in user. The "streamer" represents any of the live streams retrieved from the api. The "mega-fan" is the live chat comments from youtube users. Users must authenticate to use the apps features. To be able to watch a stream the user must access a valid link or select a stream on the homepage. Stats can be accessed with a valid link or clicking the Stats button on the watch page.
