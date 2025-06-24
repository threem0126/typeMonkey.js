import React from 'react';
import {Composition} from 'remotion';
import {TypeMonkeyVideo} from './TypeMonkeyVideo';

export const RemotionRoot = () => (
  <>
    <Composition
      id="TypeMonkeyVideo"
      component={TypeMonkeyVideo}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
