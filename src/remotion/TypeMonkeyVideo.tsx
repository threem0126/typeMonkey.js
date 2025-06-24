import React, {useEffect, useRef} from 'react';
import TypeMoneky from '../js/typemoneky';

export const TypeMonkeyVideo: React.FC<{list: any[]}> = ({list}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tm = new TypeMoneky({
      box: ref.current,
      list,
      background: 'transparent',
      beforeCreate(next: () => void) {
        next();
      },
      afterEnd() {}
    });
    tm.init();
    tm.start();
    return () => {
      tm.clear();
    };
  }, [list]);

  return <div ref={ref} style={{width: '100%', height: '100%'}} />;
};
