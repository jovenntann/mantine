'use client';

import Image from 'next/image';
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
        layout="fill"
        objectFit="cover"
      />
    </AspectRatio>
  );
}

export default Demo;