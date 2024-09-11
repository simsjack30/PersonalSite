import { writable } from 'svelte/store';

export const activeTile = writable({ colIndex: null, rowIndex: null });
