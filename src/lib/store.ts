import { writable } from 'svelte/store';
import type { Player } from '../types/player';

export const playerStore = writable<Player[] | []>([]);

export const socketStore = writable<WebSocket | null>(null);
