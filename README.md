# [shop.parliament.uk](https://shop.parliament.uk/)
The Shopify theme for the [Parliamentary shop](https://shop.parliament.uk/).

[![License][shield-license]][info-license]

## Requirements
The [shop.parliament.uk repository][shop.parliament.uk] requires the following:

* [NodeJS][nodejs] 10 or above
* [Shopify Slate][slate] 0.6.9 or above
* A [Shopify account][shopify]

## Setup
To install, fork the repository from GitHub and fill in the config.yml file with your Shopify details:

```bash
git clone https://github.com/{username}/shop.parliament.uk.git
cd shop.parliament.uk
git remote add upstream https://github.com/ukparliament/shop.parliament.uk.git
npm install
cp config-sample.yml config.yml
nano config.yml
```

## Usage
After setting up, run `./node_modules/.bin/slate start`. This will open your Shopify store with this theme applied.

## Self-signed certificates for local development
If you encounter a certificate error, you can setup a [self-signed certificate for local development][ssl].

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
[slate]:                  https://shopify.github.io/slate/docs/0.14.0/
[shopify]:                https://shopify.co.uk/
[ssl]:                    https://github.com/Shopify/slate/wiki/4.-Create-a-self-signed-SSL-certificate

[shop.parliament.uk]:     https://github.com/ukparliament/shop.parliament.uk
[pds]:                    https://www.parliament.uk/mps-lords-and-offices/offices/bicameral/parliamentary-digital-service/

[info-license]:           https://www.parliament.uk/site-information/copyright-parliament/open-parliament-licence/
[shield-license]:         https://img.shields.io/badge/license-Open%20Parliament%20Licence-blue.svg
