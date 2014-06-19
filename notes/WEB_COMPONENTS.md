# Some Web Components Notes

## Element Construction in JS

Building elements in JS is awkward as hell, primarily because there [doesn't appear to be a simple way](https://github.com/nevir/paper-theme-experiment/blob/master/paper-theme.html#L178-196) to pass attributes to the element prior to it booting up (and hitting `ready`).

No clue what the right solution is, though. Maybe some way of passing attributes to `document.createElement`?


## Custom Element Registration Event

I was really surprised that there doesn't seem to be an [event that fires during event registration](https://github.com/nevir/paper-theme-experiment/blob/master/custom-elements-registration-event-shim.js). Is there some reason for that? Is it worthy of bugging Dimitri about it?
