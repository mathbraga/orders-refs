import * as path from 'path';

// get id from filename (assuming always 'P<id> or N<id>' pattern)
export default function getIdFromFile(filename: string): string {
  const fileNameWithoutExtension = path.parse(filename).name;

  return fileNameWithoutExtension.slice(1);
}
