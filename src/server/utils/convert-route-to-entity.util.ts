const mapping: Record<string, string> = {
  'crypto-exchanges': 'crypto_exchange',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
