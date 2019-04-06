# Site Stack

This service sets up the site and all of its necessary resources, including:

 * A CloudFront Origin Access Identity (using [custom resources][cust-res] created by the
   [base-resources service](../base-resources/README.md).
 * An S3 bucket for hosting the site
 * An SSL certificate for both the site domain and the domain that redirects to the site.
 * Two CloudFront distributions. See the extensive notes in
   [serverless.yml](./serverless.yml) on why there are two. It's really just a convenience
   / micro-optimization and not strictly necessary. YMMV
 * Two Lambda@Edge functions. Again, see the extensive notes in
   [serverless.yml](./serverless.yml) on what these do. At a high-level, here's their
   purpose:
    * Support `index.html` requests at any level of the site (CloudFront only supports
      this at the root, so if you want `foo.com/some/folder/` to resolve to
      `/some/folder/index.html` in your S3 bucket, you need this.
    * Redirect from one domain to the other.


[cust-res]: https://github.com/silvermine/cloudformation-custom-resources
