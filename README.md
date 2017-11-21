# lello

> music streaming server

### Main Features

- ffmpeg decoder (support all music file formats including FLAC, APE, ZIP, etc.).
- no limitation of bitrates, thanks to **ffmpeg decoding technologies**.
- browser-based library-like player, dark and flat minimalist user interface.
- built-in NoSQL (thanks to **nedb**) to store track's metadata, settings, and playlist. This vastly improved the overall performance, instead of scanning through the source each time at load.

### Run

You need **Nodejs**. The `lello.sh` script will install the prerequisites for you, if you don't have any.

```bash
$ git clone https://github.com/loouislow81/lello.git
$ ./lello.sh --run
```
