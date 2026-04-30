import { useState, useCallback, useRef } from 'react';

const CHARS = '!@#$%^&*<>{}[]|\\░▒▓█▄▀';

export function useGlitch(originalText: string) {
    const [text, setText] = useState(originalText);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const triggerGlitch = useCallback((duration = 400) => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setText(originalText
                .split('')
                .map((char) =>
                    Math.random() < 0.3
                        ? CHARS[Math.floor(Math.random() * CHARS.length)]
                        : char
                )
                .join('')
            );
        }, 50);

        setTimeout(() => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setText(originalText);
        }, duration);
    }, [originalText]);

    return { text, triggerGlitch };
}
