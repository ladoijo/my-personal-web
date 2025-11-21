'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

export default function ImageSafe({ src, alt, ...props }: ImageProps) {
  const fallback = '/assets/images/hdygidev.webp';
  const [imgSrc, setImgSrc] = useState<ImageProps['src']>(src || fallback);

  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc(fallback)} />;
}
