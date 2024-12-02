# Repro

sorry a bit weird but tried to work my way backward from my private repo where i was getting the error


# Step


```
bun expo prebuild
bun android --device (i was running on a samsung galaxy S8)
```

once in the app
- tap `Open` / `Close` until it happens

For me it's happening every time but not always on the first try. Must be a race condition somewhere. I hope it can help, sorry again for the messy repro.

my best guess is `react-native-edge-to-edge` once added i got the bug a few tries and changes later after multiple hours of trying so probably the one messing with something.
