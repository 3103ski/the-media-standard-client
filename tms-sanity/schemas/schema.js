// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import general from './generalInformaion';
import blockContent from './blockContent';
import imageAsset from './imageAsset';
import project from './project';
import tag from './tag';
import workPage from './workPage';
import client from './client';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'websitedata',
	types: schemaTypes.concat([blockContent, client, project, imageAsset, tag, workPage, general]),
});
