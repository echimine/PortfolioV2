// /server/api/projets.ts
import projets from '~/data/projets.json';

export default defineEventHandler(() => {
  return projets;
});
