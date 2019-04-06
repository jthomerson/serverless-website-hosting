'use strict';

const vars = require('./vars.json');

module.exports = {

   // invoked by CloudFront (origin requests)
   handler: function(evt, context, cb) {
      var req = evt.Records[0].cf.request;

      // Redirect all requests for ${redirectFrom}.foo.com/(.*) to ${realSize}.foo.com/$1
      if (req.headers && req.headers.host && req.headers.host[0] && req.headers.host[0].value === vars.siteDomains.redirectFrom) {
         console.log('redirect to ' + vars.siteDomains.realSiteDomain);
         cb(null, {
            status: '301',
            statusDescription: 'Moved',
            headers: {
               location: [ {
                  key: 'Location',
                  value: 'https://' + vars.siteDomains.realSiteDomain + req.uri,
               } ],
            },
         });
      } else {
         cb(null, req);
      }
   },

};
