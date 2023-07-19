import { createBucketClient } from '@cosmicjs/sdk';


// Authenticate
export const bucket = createBucketClient({
  bucketSlug: process.env.VUE_APP_COSMICJS_BUCKET_SLUG,
  readKey: process.env.VUE_APP_COSMICJS_BUCKET_READ_KEY,
  writeKey: process.env.VUE_APP_COSMICJS_BUCKET_WRITE_KEY,
});