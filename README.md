# lello

> music streaming server

### Main Features

- ffmpeg decoder (support all music file formats including FLAC, APE, ZIP, etc.).
- no limitation of bitrates, thanks to **ffmpeg decoding technologies**.
- browser-based library-like player, dark and flat minimalist user interface.
- built-in NoSQL (thanks to **nedb**) to store track's metadata, settings, and playlist. This vastly improved the overall performance, instead of scanning through the source each time at load.

### Abandon Features

- youtube downloader
- soundcloud streaming

### Setup

You need **Nodejs** at first.

```bash
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt install -y nodejs
```

### Run

```bash
$ npm start
```
