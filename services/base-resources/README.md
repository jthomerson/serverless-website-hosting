# Base Resources

This service sets up two types of resources:

## CloudFormation Custom Resources

These custom resources come from [@silvermine/cloudformation-custom-resources](cust-res)
and are used for deploying resources that don't exist in CloudFormation natively. The only
one used at this time is the OriginAccessIdentity, so the only permissions this service
grants the function is to create/update/delete origin access identities.

## Base Standard Resources Used by Other Stacks

We create the following resources that may be used by other stacks:

 * a **deployment bucket** so each stack doesn't deploy to its own randomly-named bucket


[cust-res]: https://github.com/silvermine/cloudformation-custom-resources
