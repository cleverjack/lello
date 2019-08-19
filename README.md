# lello

> music streaming server

<p aling="left">
  <img src="Screenshot_1.jpg" width="420">
</p>

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

---

MIT License

Copyright (c) 2018 Loouis Low

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
