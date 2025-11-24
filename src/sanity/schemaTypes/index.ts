import { type SchemaTypeDefinition } from 'sanity'
import course from './course'
import testimonial from './testimonial';
import portfolio from './portfolio';
import blog from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [course, testimonial, portfolio, blog],
};
