import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { tr } from "./tr";

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary, Locale };
