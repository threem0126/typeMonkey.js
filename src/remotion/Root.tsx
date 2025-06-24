import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {TypeMonkeyVideo} from './TypeMonkeyVideo';

const list = [
  {type: 'text', value: 'Hello Remotion'},
  {type: 'text', value: 'typeMonkey字幕特效'}
];

const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="TypeMonkey"
      component={() => <TypeMonkeyVideo list={list} />}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1080}
    />
  </>
);

registerRoot(RemotionRoot);
