import React, {useEffect, useRef} from 'react';
import TypeMoneky from '../src/js/typemoneky';
import './typeMonkey.css';

export const TypeMonkeyVideo = () => {
  const ref = useRef(null);

  useEffect(() => {
    const tm = new TypeMoneky({
      box: ref.current,
      list: [
        {type: 'text', value: 'Hello World'},
        {type: 'rotate', value: 'rb'},
        {type: 'text', value: 'Remotion'}
      ]
    });
    tm.init();
    tm.start();
  }, []);

  return (
    <div style={{width: '100%', height: '100%', background: '#000'}} ref={ref} />
  );
};
