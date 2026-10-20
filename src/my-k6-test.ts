import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1500'],
    checks: ['rate>0.99'],
  },
};

const queries = [
  'medix',
  'hospital Lagos',
  'pharmacy Abuja',
  'bank Ibadan',
  'restaurant Ikeja',
  'school Abuja',
  'market Kano',
  'hotel Lagos',
];

export default function () {
  const query = queries[Math.floor(Math.random() * queries.length)];
  const url =
    'https://nominatim-api.pilot.gohere-app.xyz/search' +
    `?q=${encodeURIComponent(query)}`;

  const response = http.get(url, {
    timeout: '15s',
    // Group all search terms under one metric name.
    tags: { name: 'GET /search' },
  });

  check(response, {
    'search returns HTTP 200': (r) => r.status === 200,
    'search actually contains vaild items': (r) =>
      typeof r.json()[0].name === 'string',
  });

  sleep(1);
}
