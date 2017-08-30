# ADTPulseVideoCleanup
ADT Pulse Camera Video clean up script

## Getting Started

ADT Pulse can't delete all videos from their website and I have fairly small cloud storage. Using this simple javscript to clean up videos by itself.

### Usage
First, sign in to ADT Pulse protal website
Second, click the camera section and navigate to video playing page which has a delete button below.
Third, open browser console and paste in the code

```
startDelete(10) // which will delete total 10 videos
                // one video per sec, since the delete request is throttled in the other end
```
