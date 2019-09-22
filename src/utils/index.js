export function includesSubstring(target, substring){
  return normalizeUpper(target)
    .includes(normalizeUpper(substring || ''))
}

export function normalizeUpper(target) {
  return target.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase()
}

/**
 * @param {number} value 
 */
export function formatMonetary(value) {
  return value.toLocaleString('en-US', {
    currency: 'USD',
  })
}