import { useState, useEffect, useRef } from 'react';

export const use_typewriter = (
  words: string[],
  typing_speed = 100,
  deleting_speed = 50,
  pause_duration = 2000
) => {
  const [text, set_text] = useState('');
  const state_ref = useRef({ word_index: 0, is_deleting: false, text: '' });

  useEffect(() => {
    let timeout_id: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { word_index, is_deleting } = state_ref.current;
      const current_word = words[word_index % words.length];
      const current_text = state_ref.current.text;

      let new_text: string;
      if (is_deleting) {
        new_text = current_word.substring(0, current_text.length - 1);
      } else {
        new_text = current_word.substring(0, current_text.length + 1);
      }

      state_ref.current.text = new_text;
      set_text(new_text);

      let speed = is_deleting ? deleting_speed : typing_speed;

      if (!is_deleting && new_text === current_word) {
        speed = pause_duration;
        state_ref.current.is_deleting = true;
      } else if (is_deleting && new_text === '') {
        state_ref.current.is_deleting = false;
        state_ref.current.word_index = word_index + 1;
        speed = 400;
      }

      timeout_id = setTimeout(tick, speed);
    };

    timeout_id = setTimeout(tick, typing_speed);

    return () => clearTimeout(timeout_id);
  }, [words, typing_speed, deleting_speed, pause_duration]);

  return text;
};
