import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
// import config from '../theme-react/src/tailwind.base.config';

/** @type {import('tailwindcss').Config} */
const c = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // presets: [config],
};

export default c;
