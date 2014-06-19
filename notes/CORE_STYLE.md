# core-style notes

## Standalone Styles

The template aspect of `core-style` is awesome as hell. It'd be snazzy if there were an attribute or variant of `core-style` that [evaluates its self inline](https://github.com/nevir/paper-theme-experiment/blob/master/demo.html#L40-41).


## Namespaces

I wonder if `core-style` should adopt a notion of namespaces. Primarily, elements vs other things, to aid in style targeting (and avoiding conflict). Or maybe convention is enough.


## {{list.thing.cssText}}

Does this behave properly when there are multiple entries at `list.thing`? (e.g. list values can be [strings **or** arrays of strings](https://github.com/Polymer/core-style/blob/master/core-style.html#L187-193))


## Filter ideas:

* A color utility for choosing between light/dark [depending on contrast w/ another (background) color](https://github.com/nevir/paper-theme-experiment/blob/master/elements/core-header-panel.html#L7-8).

* All the usual hue/darkness/brightness/etc filters you see in the other stylesheet processing libraries.

* I wonder if some of the other JS stylesheet processing libraries have their filters set up in library form. Maybe it's worth just depending on someone else?
