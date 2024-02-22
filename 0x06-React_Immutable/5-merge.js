import { List, Map, merge } from 'immutable';

export function concatElements(page1, page2) {
  return List.of(...page1, ...page2);
}

export function mergeElements(page1, page2) {
  return merge(Map(page1), Map(page2));
}
