import { useEffect, useState } from 'react';

export const use_count_up = (target: number, is_visible: boolean, duration = 1500) => {
  const [count, set_count] = useState(0);

  useEffect(() => {
    if (!is_visible) return;

    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      set_count(Math.round(target * eased));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [is_visible, target, duration]);

  return count;
};
