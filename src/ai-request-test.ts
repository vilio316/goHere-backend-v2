import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
  vus: 1,
  duration: '25s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<3000'],
    checks: ['rate>0.99'],
  },
};

const queries = [
  'good shopping nearby',
  'hospitals within 10 km of me',
  'pharmacies in my area',
  'banks near me ',
  'restaurants with fish and chips',
  'secondary schools in my area',
  'cheap fish markets',
  'mtn offices in my city', 
  'where can i get a new esim'
];

export default function () {
  const query = queries[Math.floor(Math.random() * queries.length)];
  const url =
    'https://ai-gateway.pilot.gohere-app.xyz/v1/places/search';

  const response = http.post(url, JSON.stringify(
    {
  query,
  "latitude": 9.085363572082379,
  "longitude": 7.488086414187641
}
  ),{
    timeout: '60s',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${__ENV.AI_GATEWAY_KEY}`,
    },
    // Group all search terms under one metric name.
    tags: { name: 'POST /places/search' },
  });

  check(response, {
    'search returns HTTP 200': (r) => r.status === 200,
    // 'search actually contains vaild items': (r) =>
    //   r.json() && typeof r.json()[0].name === 'string',
  });

    sleep(1);
    }
