# node-muvi

A Node.js module for acessing the [Muvi API](https://www.muvi.com/api-new.html)

## Introduction

The Muvi API is designed to help developers, re-sellers, SIs, as well as 3rd party App developers to make use of Muvi's video streaming engine and deliver an enhanced video experience to their customers and end users. With the Muvi API you can build stunning apps, websites as well as business applications that make use of Video as their delivery and communication medium to interact with the end users. By using the Muvi API, developers can make use of Muvi's Video Streaming Engine and will be able to –

- Get Embed codes for the video player to display under your apps
- Add/Manage Subscribers
- Manage user Authentications
- Send search request and get results

## Dependencies

- request
- request-promise

## Installation

```bash
  npm i node-muvi
```

## Usage

Inform the API base and API Token when creating a new object

```javascript
import Muvi from "node-muvi";

const muvi = new Muvi("https://myapi.muvi.com/rest", "155f746f4601f085715e7715dfc454rd");

muvi.getGenreList()
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
```

## Maintainer

[Jon Ribeiro][0]

## License

MIT

[0]: https://github.com/jonathas