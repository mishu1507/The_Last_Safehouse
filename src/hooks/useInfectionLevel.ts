import { useEffect, useState } from 'react';

// Interpolates between two hex colors based on progress t (0 to 1)
function interpolateHex(hex1: string, hex2: string, t: number) {
    const r1 = parseInt(hex1.substring(1, 3), 16);
    const g1 = parseInt(hex1.substring(3, 5), 16);
    const b1 = parseInt(hex1.substring(5, 7), 16);

    const r2 = parseInt(hex2.substring(1, 3), 16);
    const g2 = parseInt(hex2.substring(3, 5), 16);
    const b2 = parseInt(hex2.substring(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * t).toString(16).padStart(2, '0');
    const g = Math.round(g1 + (g2 - g1) * t).toString(16).padStart(2, '0');
    const b = Math.round(b1 + (b2 - b1) * t).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

function getBackgroundColor(infection: number) {
    if (infection < 25) {
        return interpolateHex('#F9F7F4', '#FFF0F0', infection / 25);
    } else if (infection < 50) {
        return interpolateHex('#FFF0F0', '#FFB8B8', (infection - 25) / 25);
    } else if (infection < 75) {
        return interpolateHex('#FFB8B8', '#2D0000', (infection - 50) / 25);
    } else {
        return interpolateHex('#2D0000', '#0A0000', (infection - 75) / 25);
    }
}

function getTextColor(infection: number) {
    if (infection < 40) {
        return '#111111';
    } else if (infection < 70) {
        return interpolateHex('#111111', '#8B0000', (infection - 40) / 30);
    } else {
        return interpolateHex('#8B0000', '#F9F7F4', (infection - 70) / 30);
    }
}

export function useInfectionLevel() {
    const [infection, setInfection] = useState(0);

    useEffect(() => {
        let frameId: number;

        const updateInfection = () => {
            const scrollY = window.scrollY;
            const maxScrollY = document.body.scrollHeight - window.innerHeight;
            
            let currentInfection = 0;
            if (maxScrollY > 0) {
                currentInfection = Math.max(0, Math.min(100, (scrollY / maxScrollY) * 100));
            }
            
            setInfection(currentInfection);

            // Update CSS variables
            document.documentElement.style.setProperty('--infection', currentInfection.toString());
            document.documentElement.style.setProperty('--bg', getBackgroundColor(currentInfection));
            document.documentElement.style.setProperty('--crack-opacity', (currentInfection / 100).toString());
            document.documentElement.style.setProperty('--vignette', (currentInfection / 100 * 0.9).toString());
            document.documentElement.style.setProperty('--text-color', getTextColor(currentInfection));

            frameId = requestAnimationFrame(updateInfection);
        };

        frameId = requestAnimationFrame(updateInfection);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);

    return infection;
}
