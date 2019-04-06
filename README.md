# Serverless Website Hosting

[![License](https://img.shields.io/github/license/serverless-training.com/serverless-website-hosting.svg)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## What?

An example of how to set up your own serverless website hosting on AWS (using S3 and
CloudFront).


## Why?

There are lots of really bad examples out there, and lots of questions about how to do
this.

TODO: insert more details about why those examples are bad, and what this features that
those don't.


## Usage

All of the commands you need to deploy this are shown below. At one step you need to edit
[services/vars.json](./services/vars.json). In it you'll see a bunch of domain names that
control how the stacks are built. Here's an explanation of what each value does:

 * **resourcePrefix**: This is just used as a prefix for resources created by these two
   services. Name it whatever you'd like, but it will be used in S3 bucket names, etc, so
   make sure it's basically alpha-numeric and not too long.
 * **hostedZoneDomainName**: We assume you already have a Route 53 hosted zone for your
   domain (e.g. serverless-training.com) that you'll be using for this site. Enter the
   name of the domain here.
 * **certificateValidationDomain**: This is used in the domain validation options for the
   certificate we create in the site stack. It should almost always be the same as the
   `hostedZoneDomainName`.
 * **siteDomains**: two values:
    * **realSiteDomain**: The full domain that you want the site itself hosted on. Should
      be a subdomain of your hosted zone domain name (e.g.
      `{something}.${hostedZoneDomainName}`).
    * **redirectFrom**: The full domain that you want to redirect all requests _from_,
      sending the requestor to the _real site domain_. Should be a subdomain of your
      hosted zone domain name (e.g. `{something}.${hostedZoneDomainName}`).

```
# Get the repo set up:
git clone https://github.com/jthomerson/serverless-website-hosting.git
cd serverless-website-hosting
npm install

# Configure your domain names:
vim services/vars.json

# Deploy the base-resources:
cd services/base-resources
npm install
../../node_modules/.bin/sls deploy

# Deploy the site itself:
cd ../site-primary
../../node_modules/.bin/sls deploy
```


## License

This software is released under the MIT license. See [the license file](LICENSE) for more
details.

