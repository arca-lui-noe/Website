// src/lib/utils.js - Hasznos segédfüggvények
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS osztályok egyesítése és konfliktusok kezelése
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Késleltetés létrehozása Promise-szal
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * URL paraméterek lekérése
 */
export function getParams(url = window.location.href) {
  return Object.fromEntries(new URL(url).searchParams.entries());
}

/**
 * Objektum formázása formázott JSON stringgé
 */
export function formatJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

/**
 * Szöveg első betűjének nagybetűsítése
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Objektum mély klónozása
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}