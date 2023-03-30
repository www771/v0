import { useEffect, useState } from 'react';

export default () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const className = 'light';
    if (isLight) {
      window.document.body.classList.add(className);
    } else {
      window.document.body.classList.remove(className);
    }
  }, [isLight]);

  return [isLight, setIsLight];
};
