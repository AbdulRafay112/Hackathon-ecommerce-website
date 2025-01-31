import { createClient } from '@sanity/client';
const client = createClient({
    projectId: '5bxzz7oc', // Replace with your Sanity project ID
    dataset: 'production', // Replace with your dataset name
    useCdn: false,
    token:'skVPphhhqWFN09XxSyFnIH74AI55Ex8MY3U77FKKuMMb1BLb35EB66hs9VxbfWqhwOCRG0vPfgxmqwJRbjDtbA8u5Nd3rttg1UrmR6jMUG3hESGGppH9rLQjUafts4PyQsbVjKsOYWJ2WDPnPyJDGLCCTWyWCw6XzmS3X4IC7XAQmvjcyivx', 
    apiVersion: '2022-10-20', 
  });
  
  export default client;
  