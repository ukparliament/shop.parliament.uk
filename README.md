# [shop.parliament.uk](https://shop.parliament.uk/)
The Shopify theme for the [Parliamentary shop](https://shop.parliament.uk/).

[![License][shield-license]][info-license]

> **NOTE:** This repository is actively maintained and major changes may occur at any time. It is not production ready.

## Requirements
The [shop.parliament.uk repository][shop.parliament.uk] requires the following:

* [NodeJS][nodejs] 6.0.0 or above
* [Shopify Slate][slate] 0.6.9 or above
* A [Shopify account][shopify]

## Setup
To install, clone from GitHub and fill in the config.yml file with your Shopify details:

```bash
git clone https://github.com/ukparliament/shop.parliament.uk.git
cd shop.parliament.uk
npm install
cp config-sample.yml config.yml
nano config.yml
```

## Usage
After setting up, run `slate start`. This will open your Shopify store with this theme applied.

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create a new Pull Request

## License
[shop.parliament.uk][shop.parliament.uk] is licensed under the [Open Parliament Licence][info-license].

[nodejs]:                 http://nodejs.org/
[slate]:                  https://shopify.github.io/slate/
[shopify]:                https://shopify.co.uk/

[shop.parliament.uk]:     https://github.com/ukparliament/shop.parliament.uk
[pds]:                    https://www.parliament.uk/mps-lords-and-offices/offices/bicameral/parliamentary-digital-service/

[info-license]:           http://www.parliament.uk/site-information/copyright/open-parliament-licence/
[shield-license]:         https://img.shields.io/badge/license-Open%20Parliament%20Licence-blue.svg
