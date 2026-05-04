import clipboard from 'clipboardy';

import { copied } from './copied.js';

type CopyToClipboardOptions = {
  value: string;
  noCopy: boolean;
};

export async function copyToClipboard({ value, noCopy }: CopyToClipboardOptions) {
  if (!noCopy) {
    try {
      await clipboard.write(value);
      copied();
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }
}
