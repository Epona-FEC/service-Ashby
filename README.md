# Etsy Product Page Mockup - Item Details service

> This is a service that will provide a mockup of the item details for an etsy item page. It populates with fake data covering tha majority of options that can be seen on etsy items. Many pieces of an item's details are optional, so much of the content here is conditionally rendered. In some cases there may be null value to note than an item does not possess that property, but that piece of data itself would otherwise usually be a string. Other items are boolean in nataure and simply indicate whether or not to dispaly something visibly.

## Related Projects

  Reviews service is here:
  - https://github.com/Eponaaaa/service-Epona-melvin
  More From service is here:
  - https://github.com/Eponaaaa/service-FEC-mary
  Photo Gallery service is here:
  - https://github.com/Eponaaaa/fec-service-michael
  Currently viewed service:
  - https://github.com/Eponaaaa/service-Ashby
  Proxy to display all four services:
  - https://github.com/Eponaaaa/proxy-Ashby

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Clone or fork and clone this repo.

> From command line, npm install.

> Make sure mysql is running.

> This repo currently logs into mysql as user "root" with no password. This would need to be manually adjusted in the createDbAndTables and model files for different configuration.

> From command line, npm run buildData.

There is an occasional bug that causes the run to fail. If this happens, try again. Most attempts have no issue, but did once see three fails in a row.

> The server is currently hardcoded to use localhost port 3002.
All of the services and the proxy have hardcoded port numbers. Using these as-is is the best way to run everything together currently.

> npm run jest will run unit tests on React components. Current tests validate that components can be created and children relationships with other major components.


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- other dependancies are listed in package.json

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run buildData
```

